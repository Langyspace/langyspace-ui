import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { format } from 'prettier'

// The canonical editorial source remains codigo/a2-01/lesson-data.json.
// Usage: node docs/epics/a201-official-revision/sync-official.mjs <canonical-json>
if (!process.argv[2])
  throw new Error('Pass the canonical lesson-data.json path')
const source = JSON.parse(await readFile(resolve(process.argv[2]), 'utf8'))
const keys = [
  'opening',
  'vocabulary1',
  'vocabulary2',
  'affirmative',
  'questions',
  'dialogue',
  'comprehension1',
  'gaps',
  'comprehension2',
  'personal',
  'listening',
  'roleplay',
  'homework',
]
if (source.pages?.length !== keys.length)
  throw new Error('Expected the 13 official sections')
const target = fileURLToPath(
  new URL('../../../stories/materials/A201/', import.meta.url),
)
const content = Object.fromEntries(
  source.pages.map((page, i) => [keys[i], page.visibleEnglish]),
)
content.sections = source.pages.map((page, i) => ({
  id: 's' + (i + 1),
  stage: page.stage,
  title: page.title,
  minutes: page.minutes,
}))
await writeFile(
  resolve(target, 'A201.official.json'),
  await format(JSON.stringify(source), { parser: 'json' }),
)
await writeFile(
  resolve(target, 'A201.content.json'),
  await format(JSON.stringify(content), { parser: 'json' }),
)
