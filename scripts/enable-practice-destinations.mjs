import { readFile, writeFile } from 'node:fs/promises'
const arg = (name) =>
  process.argv.find((v) => v.startsWith(`--${name}=`))?.slice(name.length + 3)
if (!arg('receipt'))
  throw new Error('A real activity readback receipt is required')
const receipt = JSON.parse(await readFile(arg('receipt'), 'utf8'))
const origins = {
  'langyspace-staging': 'staging',
  'langyspace-564b5': 'production',
}
const origin = origins[receipt.project]
if (!origin || !Array.isArray(receipt.ids) || !receipt.ids.length)
  throw new Error('Invalid publication receipt')
const ids = new Set(receipt.ids)
let count = 0
for (const key of new Set(
  receipt.ids.map((id) =>
    id
      .replace(/^course-practice-/, '')
      .replace(/-(flashcards|quiz|shadowing)$/, ''),
  ),
)) {
  if (!/^(a1|a2|b1|b2|c1)-\d{2}$/.test(key))
    throw new Error('Unknown lesson key')
  const file = new URL(
    `../stories/materials/Practice/lessons/${key}.json`,
    import.meta.url,
  )
  const data = JSON.parse(await readFile(file, 'utf8'))
  if (!ids.has(data.first.id) || !ids.has(data.shadowing.id))
    throw new Error('Both activities must be verified: ' + key)
  data.publishedEnvironments = [
    ...new Set([...data.publishedEnvironments, origin]),
  ]
  await writeFile(file, JSON.stringify(data, null, 2) + '\n')
  count++
}
console.log(JSON.stringify({ origin, lessons: count }))
