import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { SlideDeckProps } from './SlideDeck.types'

export function useSlideNavigation({
  pages,
  pageId,
  onPageChange,
}: Pick<SlideDeckProps, 'pages' | 'pageId' | 'onPageChange'>) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [observedId, setObservedId] = useState(pages[0]?.id)
  const [progress, setProgress] = useState(0)
  const activeRef = useRef(pages[0]?.id)
  const requestedRef = useRef<string | undefined>(undefined)
  const callbackRef = useRef(onPageChange)
  useEffect(() => {
    callbackRef.current = onPageChange
  }, [onPageChange])
  const ids = pages.map((page) => page.id)
  const idsKey = JSON.stringify(ids)
  const index = Math.max(
    0,
    pages.findIndex((page) => page.id === observedId),
  )

  const goToIndex = useCallback((nextIndex: number) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const target = viewport.children[nextIndex]
    if (!(target instanceof HTMLElement)) return
    requestedRef.current = target.dataset.slideId
    // Scroll only this viewport; scrollIntoView could move a surrounding portal/iframe too.
    const top =
      target.getBoundingClientRect().top -
      viewport.getBoundingClientRect().top +
      viewport.scrollTop
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    viewport.scrollTo({ top, behavior: reduced ? 'instant' : 'smooth' })
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const elements = Array.from(viewport.children).filter(
      (element): element is HTMLElement => element instanceof HTMLElement,
    )
    let lastWidth = viewport.clientWidth
    let lastHeight = viewport.clientHeight
    let pageOffset = 0
    const update = () => {
      if (
        lastWidth !== viewport.clientWidth ||
        lastHeight !== viewport.clientHeight
      ) {
        // Cancel an in-flight smooth scroll at its new geometry, keeping the current page.
        const anchor = elements.find(
          (element) =>
            element.dataset.slideId ===
            (requestedRef.current ?? activeRef.current),
        )
        if (anchor) {
          const rect = anchor.getBoundingClientRect()
          const top =
            rect.top - viewport.getBoundingClientRect().top + viewport.scrollTop
          const offset = Math.min(
            pageOffset,
            Math.max(0, rect.height - viewport.clientHeight),
          )
          viewport.scrollTo({ top: top + offset, behavior: 'instant' })
        }
        lastWidth = viewport.clientWidth
        lastHeight = viewport.clientHeight
      }
      const scrollableHeight = viewport.scrollHeight - viewport.clientHeight
      setProgress(
        scrollableHeight > 0
          ? Math.max(
              0,
              Math.min(100, (viewport.scrollTop / scrollableHeight) * 100),
            )
          : 0,
      )
      const line = viewport.getBoundingClientRect().top + 1
      const current =
        elements.find((element) => {
          const rect = element.getBoundingClientRect()
          return rect.top <= line && rect.bottom > line
        }) ?? elements[0]
      const id = current?.dataset.slideId
      if (id === requestedRef.current) requestedRef.current = undefined
      pageOffset = current
        ? Math.max(
            0,
            viewport.getBoundingClientRect().top -
              current.getBoundingClientRect().top,
          )
        : 0
      if (id !== activeRef.current) {
        activeRef.current = id
        setObservedId(id)
        if (id !== undefined) callbackRef.current?.(id)
      }
    }
    viewport.addEventListener('scroll', update, { passive: true })
    const cancelRequested = () => {
      requestedRef.current = undefined
    }
    viewport.addEventListener('wheel', cancelRequested, { passive: true })
    viewport.addEventListener('touchstart', cancelRequested, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(viewport)
    elements.forEach((element) => {
      observer.observe(element)
    })
    update()
    return () => {
      viewport.removeEventListener('scroll', update)
      viewport.removeEventListener('wheel', cancelRequested)
      viewport.removeEventListener('touchstart', cancelRequested)
      observer.disconnect()
    }
  }, [idsKey])

  useEffect(() => {
    if (pageId === undefined || pageId === activeRef.current) return
    const viewport = viewportRef.current
    if (!viewport) return
    const target = Array.from(viewport.children).findIndex(
      (element) =>
        element instanceof HTMLElement && element.dataset.slideId === pageId,
    )
    if (target >= 0) goToIndex(target)
  }, [pageId, idsKey, goToIndex])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      event.target !== event.currentTarget ||
      event.defaultPrevented ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
    )
      return
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      goToIndex(event.key === 'Home' ? 0 : pages.length - 1)
      return
    }
    if (event.key !== 'PageDown' && event.key !== 'PageUp') return
    const viewport = viewportRef.current
    const page = viewport?.children[index]
    if (!viewport || !(page instanceof HTMLElement)) return
    const view = viewport.getBoundingClientRect()
    const rect = page.getBoundingClientRect()
    // Native page scrolling must expose all of an oversized slide before changing pages.
    if (event.key === 'PageDown' && rect.bottom > view.bottom + 2) return
    if (event.key === 'PageUp' && rect.top < view.top - 2) return
    event.preventDefault()
    goToIndex(
      Math.min(
        pages.length - 1,
        Math.max(0, index + (event.key === 'PageDown' ? 1 : -1)),
      ),
    )
  }

  return { viewportRef, index, progress, goToIndex, onKeyDown }
}
