import { useState } from 'react'
import type { SlideDeckProps } from '../../src/components/Slide/SlideDeck.types'

// Render real lesson pages on first visit and keep them mounted when leaving,
// so the lesson's deactivation effect must stop a playing recording.
export function SlideDeck({
  pages,
  pageId,
  onPageChange,
  label,
}: SlideDeckProps) {
  const [visited, setVisited] = useState<string[]>([])
  return (
    <div aria-label={label}>
      {pages.map((page) => (
        <section
          key={page.id}
          data-slide-id={page.id}
          hidden={page.id !== pageId}
        >
          {page.id === pageId || visited.includes(page.id)
            ? page.content
            : null}
        </section>
      ))}
      {pages.map((page) => (
        <button
          key={page.id}
          onClick={() => {
            if (pageId) setVisited((ids) => [...ids, pageId])
            onPageChange?.(page.id)
          }}
        >
          Open {page.id}
        </button>
      ))}
    </div>
  )
}
