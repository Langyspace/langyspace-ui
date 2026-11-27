import { useState } from 'react'
import { withFreeConversationPageIds } from './freeConversationEnding'
export function useLessonPage(
  initialPageId: string | undefined,
  materialKey: string,
  authoredIds: readonly string[],
) {
  const ids = withFreeConversationPageIds(authoredIds)
  const key = 'langy-page:' + materialKey
  const [id, setId] = useState(() => {
    if (initialPageId !== undefined)
      return ids.includes(initialPageId) ? initialPageId : (ids[0] ?? '')
    // A local review can link directly to a page without changing saved progress.
    if (import.meta.env.DEV && typeof window !== 'undefined') {
      const preview = new URLSearchParams(window.location.search).get('page')
      if (preview && ids.includes(preview)) return preview
    }
    // A new material session starts at the beginning; saved progress stays intact.
    return ids[0] ?? ''
  })
  const change = (next: string) => {
    if (!ids.includes(next)) return
    setId(next)
    try {
      window.localStorage.setItem(key, next)
    } catch {
      /* Keep in-memory navigation when storage is blocked. */
    }
  }
  return [id, change] as const
}
