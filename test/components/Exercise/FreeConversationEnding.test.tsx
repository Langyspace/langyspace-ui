import { act, renderHook } from '@testing-library/react'
import { expect, it } from 'vitest'
import {
  withFreeConversationEnding,
  withFreeConversationPageIds,
} from '../../../stories/materials/shared/freeConversationEnding'
import { useLessonPage } from '../../../stories/materials/shared/useLessonPage'
import catalog from '../../../stories/materials/Standalone/catalog.json'

it.each(catalog.map((entry) => entry.key))(
  'keeps one penultimate free conversation and the original closing for %s',
  (key) => {
    const finalId = key.startsWith('trial-') ? 'next-steps' : 'homework'
    const closing = {
      id: finalId,
      label: 'Original closing',
      content: <p>Original tasks</p>,
    }
    const original = [
      { id: 'opening', label: 'Opening', content: null },
      { id: 'practice', label: 'Practice', content: null },
      closing,
    ]
    const pages = withFreeConversationEnding(original)
    const ids = withFreeConversationPageIds(original.map((page) => page.id))
    expect(pages.map((page) => page.id)).toEqual(ids)
    expect(ids.slice(-2)).toEqual(['free-conversation', finalId])
    expect(pages.at(-1)).toBe(closing)
    expect(pages[0]).toBe(original[0])
    expect(withFreeConversationEnding(pages).map((page) => page.id)).toEqual(
      ids,
    )
    expect(withFreeConversationPageIds(ids)).toEqual(ids)
  },
)

it('moves an existing free conversation to the penultimate position instead of duplicating it', () => {
  expect(
    withFreeConversationPageIds([
      'opening',
      'free-conversation',
      'practice',
      'homework',
    ]),
  ).toEqual(['opening', 'practice', 'free-conversation', 'homework'])
  expect(withFreeConversationEnding([])).toEqual([])
})

it('accepts the inserted page for initial navigation, return to practice and navigation to homework', () => {
  const ids = ['opening', 'practice', 'homework']
  const { result } = renderHook(() =>
    useLessonPage('free-conversation', 'test-lesson', ids),
  )
  expect(result.current[0]).toBe('free-conversation')
  act(() => result.current[1]('homework'))
  expect(result.current[0]).toBe('homework')
  act(() => result.current[1]('practice'))
  act(() => result.current[1]('free-conversation'))
  expect(result.current[0]).toBe('free-conversation')
  act(() => result.current[1]('invalid-page'))
  expect(result.current[0]).toBe('free-conversation')
})

it('preserves an explicitly provided theme-specific free conversation and remains idempotent', () => {
  const provided = {
    id: 'free-conversation',
    label: 'Travel speaking',
    content: <p>Talk about changes of plan</p>,
  }
  const closing = { id: 'next-steps', label: 'Next steps', content: null }
  const pages = withFreeConversationEnding([
    provided,
    { id: 'practice', label: 'Practice', content: null },
    closing,
  ])
  expect(pages.at(-2)).toBe(provided)
  expect(withFreeConversationEnding(pages).at(-2)).toBe(provided)
  expect(pages.at(-1)).toBe(closing)
})
