import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { dirname, resolve } from 'node:path'
const arg = (name) =>
  process.argv
    .find((v) => v.startsWith('--' + name + '='))
    ?.slice(name.length + 3)
assert(
  arg('receipt') && arg('activities'),
  'Real readback receipt and current activity payload are required',
)
const read = async (p) => JSON.parse(await readFile(p, 'utf8')),
  hash = (x) => createHash('sha256').update(x).digest('hex')
const receipt = await read(arg('receipt')),
  activities = await read(arg('activities'))
assert.equal(receipt.schemaVersion, 1)
assert.equal(receipt.project, 'langyspace-564b5')
assert.equal(receipt.activitiesSha256, hash(JSON.stringify(activities)))
assert.equal(receipt.ids.length, 124)
assert.equal(new Set(receipt.ids).size, 124)
const ui = resolve(import.meta.dirname, '..'),
  keys = new Set()
for (const id of receipt.ids) {
  const activity = activities.find((a) => a.id === id)
  assert(activity)
  const saved = await read(
    resolve(dirname(arg('receipt')), 'activity-' + id + '.json'),
  )
  assert.equal(saved.project, receipt.project)
  assert.equal(saved.status, 'verified')
  assert.equal(saved.id, id)
  assert(saved.updateTime && saved.verifiedAt)
  assert.equal(saved.inputSha256, hash(JSON.stringify(activity)))
  const key = id
    .replace(/^course-practice-/, '')
    .replace(/-(flashcards|quiz|shadowing)$/, '')
  assert(
    /^(?:(?:a1|a2|b1|b2|c1)-\d{2}|extra-influencer-routine|tema-frontend)$/.test(
      key,
    ),
  )
  keys.add(key)
}
assert.equal(keys.size, 62)
for (const key of keys) {
  const file = resolve(
      ui,
      'stories/materials/Practice/lessons/' + key + '.json',
    ),
    data = await read(file)
  assert(
    receipt.ids.includes(data.first.id) &&
      receipt.ids.includes(data.shadowing.id),
  )
  data.publishedEnvironments = [
    ...new Set([...data.publishedEnvironments, 'production']),
  ]
  await writeFile(file, JSON.stringify(data, null, 2) + '\n')
}
console.log(
  JSON.stringify({
    environment: 'production',
    lessons: keys.size,
    activityReadbacks: receipt.ids.length,
  }),
)
