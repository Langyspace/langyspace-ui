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
  'a2-01',
  'b1-01',
  'b2-01',
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
function vocabulary(key, id, items, page = {}) {
  if (page.vocabularyRole === 'reference') {
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
function reviewed(key, data) {
  const groups = new Map()
  for (const page of data.pages) {
    if (page.kind === 'vocabulary') vocabulary(key, page.id, page.items, page)
    if (['scene', 'scene-vocabulary'].includes(page.kind))
      vocabulary(key, page.id, page.hotspots, page)
    if (page.kind === 'dialogue') {
      const group = page.dialogueGroup ?? page.id
      groups.set(group, [...(groups.get(group) ?? []), ...page.lines])
      if (page.questions?.length)
        report.comprehension.push({
          key,
          id: page.id,
          count: page.questions.length,
        })
    }
    if (page.questionPurpose === 'conversation')
      conversation(key, page.id, page.items)
    if (['questions', 'prompts'].includes(page.kind))
      assert(
        page.questionPurpose,
        `${key}.${page.id}: classify question purpose`,
      )
    if (page.kind === 'listening')
      report.comprehension.push({ key, id: page.id, count: page.items.length })
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
    for (const [id, activity] of Object.entries(data.activities)) {
      assert(
        activity.questionPurpose,
        `${key}.${id}: classify activity purpose`,
      )
      if (activity.questionPurpose === 'conversation')
        conversation(key, id, activity.questions)
      else
        report[
          activity.questionPurpose === 'response'
            ? 'responses'
            : 'comprehension'
        ].push({ key, id, count: activity.questions.length })
    }
  } else if (
    ['a1-01', 'a1-02', 'a1-03', 'a1-04', 'a1-05', 'a1-06', 'c1-01'].includes(
      key,
    )
  ) {
    const folder = key.replace('-', '').toUpperCase()
    reviewed(key, read(`${folder}/${folder}.review.json`))
  }
}
// Native renderers use their own reviewed data, not the unused Course copies.
for (const [key, folder] of [
  ['a2-01', 'A201'],
  ['b1-01', 'B101'],
  ['b2-01', 'B201'],
  ['tema-frontend', 'Frontend'],
]) {
  const data = read(`${folder}/${folder}.content.json`)
  vocabulary(key, 'vocabulary', data.vocabulary)
  minimum(data.dialogue, 6, `${key}.dialogue`)
  report.conversations.push({
    key,
    id: 'dialogue',
    recordedTurns: data.dialogue.length,
  })
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
  conversation(key, 'introduction', data.introduction.prompts)
}
const influencer = read('InfluencerRoutine/InfluencerRoutine.content.json')
for (const block of influencer.blocks) {
  vocabulary('extra-influencer-routine', block.key, block.vocab)
  minimum(block.dialogue, 6, `influencer.${block.key} model`)
  conversation('extra-influencer-routine', block.key, block.personal.prompts)
}
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
// Exact ID/text/file/hash checks prevent restored words from losing their prepared audio.
const a101 = read('A101/A101.review.json')
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
assert.equal(report.materials.length, 65)
console.log(JSON.stringify(report, null, 2))
