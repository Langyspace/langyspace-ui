import { useState } from 'react'
export function useLessonPage(
  initialPageId: string | undefined,
  materialKey: string,
  ids: readonly string[],
) {
  const key = 'langy-page:' + materialKey
  const [id, setId] = useState(() => {
    if (initialPageId !== undefined)
      return ids.includes(initialPageId) ? initialPageId : (ids[0] ?? '')
    try {
      const saved = window.localStorage.getItem(key)
      if (saved && ids.includes(saved)) return saved
    } catch {
      /* Reading remains available without browser storage. */
    }
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
