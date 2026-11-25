import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'
import ts from 'typescript'

const root = 'stories/materials'
const read = (name) => JSON.parse(readFileSync(path.join(root, name), 'utf8'))
const catalog = read('Standalone/catalog.json')
const dedicated = new Set([
  'a1-01',
  'a1-02',
  'a1-03',
  'a1-04',
  'a1-05',
  'a1-06',
  'c1-01',
])
const report = {
  materials: [],
  vocabulary: [],
  references: [],
  conversations: [],
  comprehension: [],
  responses: [],
  nativeAdapters: [],
  visualChecks: [],
}
const minimum = (items, count, label) => {
  assert(
    items?.length >= count,
    `${label}: ${items?.length ?? 0}, expected at least ${count}`,
  )
  const ids = items.map(
    (item) =>
      item.id ?? item.word ?? item.text ?? item.en ?? item.q ?? item.prompt,
  )
  assert.equal(
    new Set(ids).size,
    ids.length,
    `${label}: duplicate authored items`,
  )
}
const approvedReferences = new Map([
  ['a1-04/s31', 3],
  ['a1-06/s41', 3],
  ['a1-06/s4', 4],
])
function vocabulary(key, id, items, page = {}) {
  if (page.vocabularyRole === 'reference') {
    assert.equal(
      items.length,
      approvedReferences.get(`${key}/${id}`),
      `${key}.${id}: reference requires an explicit reviewed policy entry`,
    )
    assert(
      page.referenceReason?.trim(),
      `${key}.${id}: a reference needs its pedagogical reason`,
    )
    assert.equal(page.eyebrow, 'Reference')
    report.references.push({
      key,
      id,
      count: items.length,
      reason: page.referenceReason,
    })
  } else {
    minimum(items, 6, `${key}.${id} vocabulary`)
    const labels = items
      .map((item) => item.word ?? item.label ?? item.en ?? item.text)
      .filter((x) => typeof x === 'string')
      .map((x) => x.trim().toLocaleLowerCase('en'))
    assert.equal(
      new Set(labels).size,
      labels.length,
      `${key}.${id}: repeated vocabulary label`,
    )
    report.vocabulary.push({ key, id, count: items.length })
  }
}
function conversation(key, id, items) {
  minimum(items, 3, `${key}.${id} personal exchanges`)
  for (const item of items)
    assert(
      item.cue && item.hint,
      `${key}.${id}: missing optional speaking support`,
    )
  report.conversations.push({
    key,
    id,
    exchanges: items.length,
    turns: 2 * items.length,
  })
}
function questionBlock(key, id, items, purpose = 'comprehension') {
  minimum(items, 3, `${key}.${id} questions`)
  assert.equal(
    new Set(items.map((item) => (item.prompt ?? item.q).trim())).size,
    items.length,
    `${key}.${id}: repeated question`,
  )
  for (const item of items) {
    assert(item.hint?.trim(), `${key}.${id}: missing optional language hint`)
    assert.notEqual(
      item.answer,
      'One possible response',
      `${key}.${id}: fabricated answer`,
    )
  }
  report[purpose === 'response' ? 'responses' : 'comprehension'].push({
    key,
    id,
    count: items.length,
  })
}
function reviewed(key, data) {
  const groups = new Map()
  for (const page of data.pages) {
    if (page.kind === 'vocabulary') vocabulary(key, page.id, page.items, page)
    if (['scene', 'scene-vocabulary'].includes(page.kind))
      vocabulary(key, page.id, page.hotspots, page)
    if (page.kind === 'dialogue') {
      const group = page.dialogueGroup ?? page.id
      groups.set(group, [...(groups.get(group) ?? []), ...page.lines])
      if (page.questions?.length) questionBlock(key, page.id, page.questions)
    }
    if (page.questionPurpose === 'conversation')
      conversation(key, page.id, page.items)
    if (['questions', 'prompts'].includes(page.kind)) {
      assert(
        page.questionPurpose,
        `${key}.${page.id}: classify question purpose`,
      )
      if (page.questionPurpose !== 'conversation')
        questionBlock(key, page.id, page.items, page.questionPurpose)
      assert(
        page.questionPurpose === 'conversation' ||
          page.items.every((item) => item.answer?.trim()),
        `${key}.${page.id}: an open live exchange uses participant bubbles, not a standalone comprehension list`,
      )
    }
    if (page.kind === 'image-choice') {
      assert(
        page.choiceGroup && page.image?.src && page.image?.alt,
        `${key}.${page.id}: visual check needs an image and sequence`,
      )
      assert(
        page.options.length >= 2 &&
          new Set(page.options).size === page.options.length,
        `${key}.${page.id}: distinct choices required`,
      )
      assert(
        Number.isInteger(page.correctIndex) &&
          page.correctIndex >= 0 &&
          page.correctIndex < page.options.length,
        `${key}.${page.id}: invalid correct choice`,
      )
      report.visualChecks.push({ key, id: page.id, group: page.choiceGroup })
    }
    if (page.kind === 'listening') questionBlock(key, page.id, page.items)
  }
  for (const [id, lines] of groups) {
    minimum(lines, 6, `${key}.${id} complete recorded model`)
    assert(
      new Set(lines.map((line) => line.speaker)).size >= 2,
      `${key}.${id}: requires two speakers`,
    )
    report.conversations.push({ key, id, recordedTurns: lines.length })
  }
}
for (const entry of catalog) {
  const key = entry.key
  assert(!report.materials.includes(key), `Duplicate catalog key ${key}`)
  report.materials.push(key)
  if (/^(a1|a2|b1|b2|c1)-\d\d$/.test(key) && !dedicated.has(key)) {
    const data = read(`Course/lessons/${key}.json`)
    reviewed(key, data)
    const introduction = data.pages.find((page) => page.id === 's2')
    if (introduction?.kind === 'activity') {
      const words = data.activities.s2?.vocabulary
      assert(
        words,
        `${key}.s2: declare vocabulary in the introductory activity`,
      )
      vocabulary(
        key,
        's2',
        Object.entries(words).map(([id, value]) => ({ ...value, word: id })),
      )
    }
    const personalPage = data.pages.find((page) => page.id === 's_personal')
    const personalPurpose =
      personalPage?.kind === 'activity'
        ? data.activities.s_personal?.questionPurpose
        : personalPage?.questionPurpose
    assert.equal(
      personalPurpose,
      'conversation',
      `${key}: personal practice cannot waive the conversation minimum`,
    )
    for (const [id, activity] of Object.entries(data.activities)) {
      assert(
        activity.questionPurpose,
        `${key}.${id}: classify activity purpose`,
      )
      if (activity.questionPurpose === 'conversation')
        conversation(key, id, activity.questions)
      else if (activity.questions.length)
        questionBlock(key, id, activity.questions, activity.questionPurpose)
    }
  } else if (
    ['a1-01', 'a1-02', 'a1-03', 'a1-04', 'a1-05', 'a1-06', 'c1-01'].includes(
      key,
    )
  ) {
    const folder = key.replace('-', '').toUpperCase()
    const data = read(`${folder}/${folder}.review.json`)
    reviewed(key, data)
    const ids = {
      'a1-01': ['s15'],
      'a1-02': ['s12'],
      'a1-03': ['s5', 's101'],
      'a1-04': ['s82'],
      'a1-05': ['s5'],
      'a1-06': ['s91'],
      'c1-01': ['s8'],
    }[key]
    for (const id of ids)
      assert.equal(
        data.pages.find((page) => page.id === id)?.questionPurpose,
        'conversation',
        `${key}.${id}: personal practice cannot waive the conversation minimum`,
      )
  }
}
// A201/B101/B201 now delegate to CourseLesson; audit the active Course JSON above.
// Frontend still owns a native renderer.
for (const [key, folder] of [['tema-frontend', 'Frontend']]) {
  const data = read(`${folder}/${folder}.content.json`)
  vocabulary(key, 'vocabulary', data.vocabulary)
  minimum(data.dialogue, 6, `${key}.dialogue`)
  report.conversations.push({
    key,
    id: 'dialogue',
    recordedTurns: data.dialogue.length,
  })
  for (const part of [0, 1])
    questionBlock(
      key,
      `dialogue.${part}`,
      data.dialogueQuestions.filter((q) => q.part === part),
    )
}
const trial = read('TrialA1/TrialA1.content.json')
vocabulary('trial-a1-a2', 'park', trial.p2.items)
minimum(trial.p1.cards, 3, 'trial-a1-a2 introduction')
minimum(trial.p3.lines, 6, 'trial-a1-a2 model')
for (const [key, folder] of [
  ['trial-b1', 'TrialB1'],
  ['trial-b2', 'TrialB2'],
]) {
  const data = read(`${folder}/${folder}.content.json`)
  vocabulary(key, 'vocabulary', data.scene?.hotspots ?? data.vocabulary.items)
  minimum(data.dialogue.lines, 6, `${key} model`)
  questionBlock(key, 'dialogue', data.dialogue.questions)
  conversation(key, 'introduction', data.introduction.prompts)
}
const influencer = read('InfluencerRoutine/InfluencerRoutine.content.json')
for (const block of influencer.blocks) {
  vocabulary('extra-influencer-routine', block.key, block.vocab)
  minimum(block.dialogue, 6, `influencer.${block.key} model`)
  questionBlock('extra-influencer-routine', block.key, block.questions)
  conversation('extra-influencer-routine', block.key, block.personal.prompts)
}
questionBlock(
  'extra-influencer-routine',
  'listening',
  influencer.listening.questions,
)
// Literal custom trackers must also supply a full three-pair conversation.
for (const file of [
  'A101/MeetSomeoneActivity.tsx',
  'A104/AvailabilityActivity.tsx',
  'A105/MarketCase.tsx',
  'C101/FeedbackActivity.tsx',
]) {
  const source = ts.createSourceFile(
    file,
    readFileSync(path.join(root, file), 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )
  let found = 0
  function visit(node) {
    if (
      ts.isJsxSelfClosingElement(node) &&
      node.tagName.getText(source) === 'MaterialQuestions'
    ) {
      const attr = node.attributes.properties.find(
        (x) => ts.isJsxAttribute(x) && x.name.getText(source) === 'items',
      )
      const items = attr?.initializer?.expression
      assert(
        items && ts.isArrayLiteralExpression(items),
        `${file}: audit literal tracker items`,
      )
      assert(
        items.elements.length >= 3,
        `${file}: full tracker needs three pairs`,
      )
      report.nativeAdapters.push({ file, exchanges: items.elements.length })
      found++
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  assert.equal(found, 1, `${file}: expected the active tracker`)
}
// Check the active native symbol references and live role-play turn arrays at their source.
function authoredArray(file, name) {
  const source = ts.createSourceFile(
    file,
    readFileSync(path.join(root, file), 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )
  let result
  function visit(node) {
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === name) {
      let value = node.initializer
      if (ts.isAsExpression(value)) value = value.expression
      if (
        ts.isCallExpression(value) &&
        ts.isPropertyAccessExpression(value.expression) &&
        value.expression.name.text === 'map'
      )
        value = value.expression.expression
      assert(
        ts.isArrayLiteralExpression(value),
        `${file}.${name}: expected authored array`,
      )
      result = value.elements.flatMap((item) =>
        ts.isSpreadElement(item) && ts.isStringLiteral(item.expression)
          ? [...item.expression.text]
          : [item],
      )
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  assert(result, `${file}.${name}: missing native content`)
  return result
}
for (const [file, name, count] of [
  ['A102/A102.data.ts', 'numbers', 10],
  ['A102/A102.data.ts', 'letters', 26],
  ['B101/B101.conversation.tsx', 'firstTurns', 6],
  ['B101/B101.conversation.tsx', 'swappedTurns', 6],
  ['Frontend/Frontend.data.ts', 'firstTurns', 6],
  ['Frontend/Frontend.data.ts', 'swappedTurns', 6],
]) {
  const items = authoredArray(file, name)
  assert(items.length >= count, `${file}.${name}: incomplete native set`)
  report.nativeAdapters.push({ file, id: name, count: items.length })
}
// Two recordings share one visible QuestionList and one progressive footer.
for (const part of authoredArray(
  'TrialA1/TrialA1Listening.data.ts',
  'listeningParts',
)) {
  const questions = part.properties.find(
    (property) => property.name?.getText() === 'questions',
  )?.initializer
  assert(questions && ts.isArrayLiteralExpression(questions))
  assert(
    questions.elements.length >= 3,
    'trial-a1-a2: each audio needs three authored questions',
  )
  report.comprehension.push({
    key: 'trial-a1-a2',
    id: 'listening-part',
    count: questions.elements.length,
  })
}
// Exact ID/text/file/hash checks prevent restored words from losing their prepared audio.
const a101 = read('A101/A101.review.json')
assert.equal(
  a101.pages.filter((page) => page.kind === 'image-choice').length,
  6,
  'a1-01: preserve the six restored visual checks',
)
assert(
  a101.pages.some(
    (page) => page.kind === 'dialogue' && page.lines.some((line) => line.parts),
  ),
  'a1-01: preserve the restored gap practice',
)
const restored = read('A101/audio-provenance94.json').items
for (const page of a101.pages.filter((x) => x.kind === 'vocabulary'))
  for (const item of page.items) {
    assert(
      existsSync(path.join(root, 'A101/assets', `${item.imageUrl}.webp`)) ||
        existsSync(path.join(root, 'A101/assets', `${item.imageUrl}.svg`)),
      `Missing image ${item.imageUrl}`,
    )
    if (item.audioId?.startsWith('FS94.')) {
      const clip = restored.find(
        (x) => x.id === item.audioId && x.text === item.audioText,
      )
      assert(clip, `Missing exact recording ${item.audioId}`)
      assert(
        existsSync(path.join(root, 'A101', clip.file)),
        `Missing file ${clip.file}`,
      )
      assert.equal(
        createHash('sha256')
          .update(readFileSync(path.join(root, 'A101', clip.file)))
          .digest('hex'),
        clip.sha256,
        `Changed audio ${clip.id}`,
      )
    }
  }
assert.equal(report.materials.length, 66)
console.log(JSON.stringify(report, null, 2))
