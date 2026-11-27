import { act, renderHook } from '@testing-library/react'
import { expect, it } from 'vitest'
import catalog from '../../../stories/materials/Standalone/catalog.json'
import {
  withLessonOpeningPages,
  withLessonOpeningPageIds,
  hasLessonOpeningReview,
} from '../../../stories/materials/shared/lessonOpeningPolicy'
import {
  withFreeConversationEnding,
  withFreeConversationPageIds,
} from '../../../stories/materials/shared/freeConversationEnding'
import { useLessonPage } from '../../../stories/materials/shared/useLessonPage'

it.each(catalog.map((entry) => entry.key))(
  'keeps the cover policy, authored activity and ending consistent for %s',
  (key) => {
    const warmup = {
      id: 's1',
      label: 'Original activity',
      content: <p>Original activity content</p>,
    }
    const ending = {
      id: 'homework',
      label: 'Original ending',
      content: <p>Original ending content</p>,
    }
    const authored = [warmup, ending]
    const opened = withLessonOpeningPages(key, authored)
    const ids = withLessonOpeningPageIds(
      key,
      authored.map((page) => page.id),
    )
    expect(opened.map((page) => page.id)).toEqual(ids)
    expect(opened[hasLessonOpeningReview(key) ? 0 : 1]).toBe(warmup)
    expect(ids.filter((id) => id === 'cover')).toHaveLength(
      hasLessonOpeningReview(key) ? 0 : 1,
    )
    expect(withLessonOpeningPages(key, opened).map((page) => page.id)).toEqual(
      ids,
    )
    expect(withLessonOpeningPageIds(key, ids)).toEqual(ids)
    const ended = withFreeConversationEnding(opened)
    expect(ended.map((page) => page.id)).toEqual(
      withFreeConversationPageIds(ids),
    )
    expect(ended.at(-1)).toBe(ending)
    expect(ended.at(-2)?.id).toBe('free-conversation')
  },
)

it('starts a cover-only lesson on its cover and still accepts the original activity and free conversation IDs', () => {
  const ids = withLessonOpeningPageIds('trial-a1-a2', [
    's1',
    's2',
    'next-steps',
  ])
  const { result } = renderHook(() =>
    useLessonPage(undefined, 'opening69-test', ids),
  )
  expect(result.current[0]).toBe('cover')
  act(() => result.current[1]('s1'))
  expect(result.current[0]).toBe('s1')
  act(() => result.current[1]('free-conversation'))
  expect(result.current[0]).toBe('free-conversation')
  act(() => result.current[1]('next-steps'))
  expect(result.current[0]).toBe('next-steps')
})
