import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile, readdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const directory = dirname(fileURLToPath(import.meta.url))
const root = resolve(directory, '../../..')
const read = async (path) =>
  JSON.parse(await readFile(resolve(root, path), 'utf8'))
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex')
const source = await read(
  'stories/materials/DevInterviews131/DevInterviews131.content.json',
)
const practice = await read(
  'stories/materials/DevInterviews131/DevInterviews131.practice.json',
)
const video = await read(
  'stories/materials/DevInterviews131/DevInterviews131.video.json',
)
const plan = await read(
  'docs/epics/material-review131/dev-interviews/page-plan.json',
)
const frozenBytes = await readFile(
  resolve(
    root,
    'docs/epics/material-review131/dev-interviews/frozen-audio.json',
  ),
)
assert.equal(
  hash(frozenBytes),
  'be81cb378b948704414f1dd8416c5baa1527bcbed75f9aaec67de1754e647ff5',
  'Frozen request changed',
)
const frozen = JSON.parse(frozenBytes)
const request = await read(
  'docs/epics/material-review131/dev-interviews/homework-request.json',
)
assert.equal(plan.length, 14)
assert.equal(
  plan.reduce((minutes, page) => minutes + page.minutes, 0),
  50,
)
assert.equal(source.vocabulary.length, 6)
assert.equal(source.dialogue.length, 6)
assert.equal(practice.dialogueQuestions.length, 3)
for (const group of ['experience', 'clarify', 'transfer'])
  assert.equal(practice[group].length, 3)
for (const group of ['hiringCall', 'technicalCall'])
  assert.equal(source[group].length, 6)
assert(source.hiringCall.every((item) => item.speaker === 'Kim'))
assert(source.technicalCall.every((item) => item.speaker === 'Priya'))
assert.equal(source.notes.length, 2)
assert(
  source.notes.every(
    (item) => item.speaker === 'Kim' && !/^hi\b/i.test(item.text),
  ),
)
assert(practice.noteQuestions.every((group) => group.length === 3))
assert.equal(source.homeworkVocabulary.length, 20)
assert.equal(
  new Set(source.homeworkVocabulary.map((item) => item.word)).size,
  20,
)
assert.equal(source.shadowing.length, 6)
assert.deepEqual(
  source.shadowing.map((item) => item.speaker),
  ['Kim', 'Kim', 'Kim', 'Kim', 'Priya', 'Ruby'],
)
assert.deepEqual(source.homework.ownerTags, [
  'dev-track131',
  'extra-dev-interviews',
])
assert.deepEqual(
  request.activities.map((activity) => activity.id),
  ['dev-interviews-flashcards', 'dev-interviews-shadowing'],
)
assert.deepEqual(request.publishedEnvironments, [])
const expected = [
  ...source.homeworkVocabulary.flatMap((item) => [
    { id: item.audioId, text: item.word, speaker: 'Ana' },
    { id: item.backAudioId, text: item.example, speaker: 'Ana' },
  ]),
  ...source.dialogue,
  ...source.hiringCall,
  ...source.technicalCall,
  ...source.notes,
  ...source.shadowing,
]
assert.equal(expected.length, 66)
assert.equal(new Set(expected.map((item) => item.id)).size, 66)
for (const item of expected) {
  const recording = frozen.items.find((entry) => entry.id === item.id)
  assert(recording, item.id)
  assert.equal(recording.displayText, item.text, item.id)
  assert.equal(recording.speaker, item.speaker, item.id)
}
assert.equal(video.video.videoId, 'NRiaznQevTA')
assert.equal(video.video.startSeconds, 36)
assert.equal(video.video.endSeconds, 93)
assert.equal(video.items.length, 4)
const lesson = await readFile(
  resolve(directory, 'DevInterviews131Lesson.tsx'),
  'utf8',
)
const ast = ts.createSourceFile(
  'lesson.tsx',
  lesson,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TSX,
)
const pageIds = []
const scan = (node) => {
  if (
    ts.isVariableDeclaration(node) &&
    node.name.getText(ast) === 'pages' &&
    node.initializer &&
    ts.isArrayLiteralExpression(node.initializer)
  ) {
    for (const element of node.initializer.elements) {
      assert(ts.isObjectLiteralExpression(element))
      const id = element.properties.find(
        (property) =>
          ts.isPropertyAssignment(property) &&
          property.name.getText(ast) === 'id',
      )
      assert(id && ts.isStringLiteral(id.initializer))
      pageIds.push(id.initializer.text)
    }
  }
  ts.forEachChild(node, scan)
}
scan(ast)
assert.deepEqual(
  pageIds,
  plan.map((page) => page.id),
)
assert.deepEqual(pageIds.slice(-3), ['video', 'free-conversation', 'homework'])
assert(
  lesson.includes('<FreeConversationPage') &&
    lesson.includes('<LessonHomeworkGallery'),
)
const modulePath = resolve(
  root,
  'stories/materials/Practice/lessons/extra-dev-interviews.module.ts',
)
const moduleText = await readFile(modulePath, 'utf8')
assert.match(moduleText, /publishedEnvironments:\s*\['staging'\]/)
assert.match(
  moduleText,
  /\/flashcards-transparent\/course-practice\/dev-interviews131\/[a-f0-9]{64}\/image\.webp/,
)
assert(
  moduleText.includes('imageRegion') &&
    moduleText.includes('source.homeworkVocabulary.map'),
)
const files = (await readdir(directory)).filter((name) => /\.tsx?$/.test(name))
for (const file of [
  ...files.map((name) => resolve(directory, name)),
  modulePath,
]) {
  const text = await readFile(file, 'utf8')
  const result = ts.transpileModule(text, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
    },
  })
  assert.equal(result.diagnostics?.length ?? 0, 0, file)
  assert(!/speechSynthesis|SpeechSynthesisUtterance/.test(text), file)
}
console.log(
  JSON.stringify(
    {
      pages: pageIds.length,
      minutes: 50,
      frozenAudioIds: expected.length,
      vocabulary: 6,
      homeworkCards: 20,
      shadowing: 6,
      videoSeconds: 57,
      sourceComposition: 'passed',
      limits:
        'No typecheck, audio playback, browser geometry, publication or environment availability claimed',
    },
    null,
    2,
  ),
)
