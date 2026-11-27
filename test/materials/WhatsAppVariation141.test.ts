import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { createHash } from 'node:crypto'
import { expect, it } from 'vitest'
import type { PreparedCourseData } from '../../stories/materials/Course/Course.types'
const root = resolve(import.meta.dirname, '../..')
const read = (path: string) =>
  JSON.parse(readFileSync(resolve(root, path), 'utf8'))
const plan = read('docs/epics/whatsapp-variation141/variation-plan141.json')
const request = read('docs/epics/whatsapp-variation141/request.frozen141.json')
const registry = read('docs/characters/character-media.json')
const loaders = import.meta.glob<{ default: PreparedCourseData }>(
  '../../stories/materials/Course/lessons/*.module.ts',
)

it('retains complete source messages when dividing them and keeps each voice tied to its real portrait', () => {
  for (const entry of plan.changes) {
    const jobs = request.items.filter(
      (item: { lesson: string }) => item.lesson === entry.lesson,
    )
    if (!jobs.length) continue
    expect(jobs.map((item: { text: string }) => item.text).join(' ')).toBe(
      entry.sourceAudioText,
    )
    const person = registry.characters.find(
      (item: { id: string }) => item.id === entry.characterId,
    )
    expect(person?.name).toBe(entry.name)
    for (const job of jobs) {
      expect(job.voiceId).toBe(person.voice.voiceId)
      const folder = entry.lesson.startsWith('Dev') ? entry.lesson : 'Course'
      const provenance = read(
        `stories/materials/${folder}/whatsapp-audio-provenance141.json`,
      ).items.find((item: { id: string }) => item.id === job.id)
      const file = resolve(root, 'stories/materials', folder, job.file)
      expect(provenance.text).toBe(job.text)
      expect(provenance.requestId).toBeTruthy()
      expect(provenance.durationSeconds).toBeGreaterThan(1)
      expect(
        createHash('sha256').update(readFileSync(file)).digest('hex'),
      ).toBe(provenance.sha256)
    }
    expect(entry.questionCount).toBeGreaterThanOrEqual(3)
  }
  const priya = registry.characters.find(
    (item: { id: string }) => item.id === 'priya-nair',
  )
  expect(priya.voice.voiceId).toBe('2zRM7PkgwBPiau2jvVXc')
  expect(priya.accentCode).toBe('en-IN')
  const ruby = registry.characters.find(
    (item: { id: string }) => item.id === 'ruby-bennett',
  )
  expect(ruby.voice.voiceId).toBe('56bWURjYFHyYyVf490Dp')
})

it('resolves the actual runtime recordings and images for changed course listening pages', async () => {
  for (const entry of plan.changes.filter(
    (item: { lesson: string }) => !item.lesson.startsWith('Dev'),
  )) {
    const { default: prepared } =
      await loaders[
        `../../stories/materials/Course/lessons/${entry.lesson}.module.ts`
      ]!()
    const page = prepared.data.pages.find((item) => item.id === entry.pageId)
    expect(page?.kind).toBe('listening')
    if (page?.kind !== 'listening')
      throw new Error(`Missing listening ${entry.lesson}`)
    const tracks = [
      { audioId: page.audioId, audioText: page.audioText ?? page.message },
      ...(page.additionalAudios ?? []).map((part) => ({
        audioId: part.audioId,
        audioText: part.audioText ?? part.message,
      })),
    ]
    for (const part of tracks) {
      expect(
        prepared.recordings.find(
          (recording) =>
            recording.id === part.audioId && recording.text === part.audioText,
        )?.src,
      ).toBeTruthy()
    }
    if (page.image) expect(prepared.images[page.image.src]).toBeTruthy()
    if (page.videoPageId) {
      const video = prepared.data.pages.find(
        (item) => item.id === page.videoPageId,
      )
      expect(video?.kind).toBe('video')
      if (video?.kind === 'video') {
        expect(video.video.endSeconds).toBeGreaterThan(video.video.startSeconds)
        expect(video.items.length).toBeGreaterThanOrEqual(4)
      }
    }
  }
})

it('preserves exact existing portrait bytes and any recovered original prompt', () => {
  for (const person of registry.characters) {
    expect(
      createHash('sha256')
        .update(readFileSync(resolve(root, person.portrait.file)))
        .digest('hex'),
    ).toBe(person.portrait.sha256)
    if (person.portrait.promptFile) {
      expect(existsSync(resolve(root, person.portrait.promptFile))).toBe(true)
      expect(
        createHash('sha256')
          .update(readFileSync(resolve(root, person.portrait.promptFile)))
          .digest('hex'),
      ).toBe(person.portrait.promptSha256)
    }
  }
})
