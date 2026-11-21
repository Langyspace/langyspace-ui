import type { SlideDeckPage } from '../../../src/components/Slide/SlideDeck.types'
import {
  FreeConversationPage,
  freeConversationPageId,
  freeConversationTitle,
} from './FreeConversationPage'

/** One shared policy for rendered pages and navigation IDs; original final page stays last. */
export function withFreeConversationPageIds(ids: readonly string[]): string[] {
  const original = ids.filter((id) => id !== freeConversationPageId)
  if (!original.length) return []
  return [...original.slice(0, -1), freeConversationPageId, original.at(-1)!]
}
export function withFreeConversationEnding(
  pages: readonly SlideDeckPage[],
): readonly SlideDeckPage[] {
  const provided = pages.find((page) => page.id === freeConversationPageId)
  const original = pages.filter((page) => page.id !== freeConversationPageId)
  if (!original.length) return []
  return [
    ...original.slice(0, -1),
    provided ?? {
      id: freeConversationPageId,
      label: freeConversationTitle,
      content: <FreeConversationPage />,
    },
    original.at(-1)!,
  ]
}
