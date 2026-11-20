import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { SlideDeckProps, SlideMovementTarget } from './SlideDeck.types'
import {
  isSlideMovementPending,
  SLIDE_EDITABLE_SELECTOR,
  useSlideGestures,
} from './useSlideGestures'

export function useSlideNavigation({
  pages,
  pageId,
  onPageChange,
  navigationMode = 'pages',
}: Pick<
  SlideDeckProps,
  'pages' | 'pageId' | 'onPageChange' | 'navigationMode'
>) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [observedId, setObservedId] = useState(pages[0]?.id)
  const [progress, setProgress] = useState(0)
  const activeRef = useRef(pages[0]?.id)
  const movementTargetRef = useRef<SlideMovementTarget | undefined>(undefined)
  const movementRevisionRef = useRef(0)
  const requestedRef = useRef<string | undefined>(undefined)
  const reportedIdsRef = useRef<string[]>([])
  const firstRequestRef = useRef(true)
  const callbackRef = useRef(onPageChange)
  useEffect(() => {
    callbackRef.current = onPageChange
  }, [onPageChange])
  const ids = pages.map((page) => page.id)
  const idsKey = JSON.stringify(ids)
  const previousRequestRef = useRef({ pageId, idsKey: '' })
  const index = Math.max(
    0,
    pages.findIndex((page) => page.id === observedId),
  )

  const goToIndex = useCallback(
    (nextIndex: number, behavior?: ScrollBehavior, alignEnd = false) => {
      const viewport = viewportRef.current
      if (!viewport) return
      const target = viewport.children[nextIndex]
      if (!(target instanceof HTMLElement)) return
      movementRevisionRef.current++
      requestedRef.current = target.dataset.slideId
      // Scroll only this viewport; scrollIntoView could move a surrounding portal/iframe too.
      const top = alignEnd
        ? Math.max(0, viewport.scrollHeight - viewport.clientHeight)
        : target.getBoundingClientRect().top -
          viewport.getBoundingClientRect().top +
          viewport.scrollTop
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      movementTargetRef.current = target.dataset.slideId
        ? { pageId: target.dataset.slideId, alignEnd }
        : undefined
      viewport.scrollTo({
        top,
        behavior: behavior ?? (reduced ? 'instant' : 'smooth'),
      })
    },
    [],
  )

  const step = useCallback(
    (direction: 1 | -1) => {
      const viewport = viewportRef.current
      if (!viewport) return
      const current = Math.max(
        0,
        Array.from(viewport.children).findIndex(
          (page) =>
            page instanceof HTMLElement &&
            page.dataset.slideId ===
              (movementTargetRef.current?.pageId ?? activeRef.current),
        ),
      )
      const next = Math.min(
        viewport.children.length - 1,
        Math.max(0, current + direction),
      )
      if (next !== current) goToIndex(next)
    },
    [goToIndex],
  )

  useSlideGestures({
    viewportRef,
    activeIdRef: activeRef,
    movementTargetRef,
    movementRevisionRef,
    navigationMode,
    idsKey,
    onStep: step,
  })

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const elements = Array.from(viewport.children).filter(
      (element): element is HTMLElement => element instanceof HTMLElement,
    )
    let lastWidth = viewport.clientWidth
    let lastHeight = viewport.clientHeight
    let pageOffset = 0
    const readPageGeometry = () =>
      elements
        .map((element) => `${element.offsetTop}:${element.offsetHeight}`)
        .join('|')
    let lastPageGeometry = readPageGeometry()
    const update = (restoreAnchor = false) => {
      if (
        lastWidth !== viewport.clientWidth ||
        lastHeight !== viewport.clientHeight ||
        (restoreAnchor && navigationMode === 'pages')
      ) {
        const movement = movementTargetRef.current
        movementRevisionRef.current++
        movementTargetRef.current = undefined
        // Reveals/fonts can resize a page without resizing the viewport. Keep
        // the same logical page and clamp only its existing content offset.
        const anchor = elements.find(
          (element) =>
            element.dataset.slideId ===
            (movement?.pageId ?? requestedRef.current ?? activeRef.current),
        )
        if (anchor) {
          const rect = anchor.getBoundingClientRect()
          const top =
            rect.top - viewport.getBoundingClientRect().top + viewport.scrollTop
          const offset = movement
            ? 0
            : Math.min(
                pageOffset,
                Math.max(0, rect.height - viewport.clientHeight),
              )
          const destination = movement?.alignEnd
            ? Math.max(0, viewport.scrollHeight - viewport.clientHeight)
            : top + offset
          if (movement || Math.abs(viewport.scrollTop - destination) > 2)
            viewport.scrollTo({ top: destination, behavior: 'instant' })
        }
        lastWidth = viewport.clientWidth
        lastHeight = viewport.clientHeight
      }
      const scrollableHeight = viewport.scrollHeight - viewport.clientHeight
      isSlideMovementPending(viewport, movementTargetRef)
      setProgress(
        scrollableHeight > 0
          ? Math.max(
              0,
              Math.min(100, (viewport.scrollTop / scrollableHeight) * 100),
            )
          : 0,
      )
      const view = viewport.getBoundingClientRect()
      // Match the reference's60% entry threshold without making oversized pages unreachable.
      const current =
        elements.find((element) => {
          const rect = element.getBoundingClientRect()
          const visible = Math.max(
            0,
            Math.min(rect.bottom, view.bottom) - Math.max(rect.top, view.top),
          )
          return visible / Math.min(rect.height, view.height) >= 0.6
        }) ??
        elements.find((e) => e.dataset.slideId === activeRef.current) ??
        elements[0]
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
        if (
          id !== undefined &&
          callbackRef.current &&
          (!movementTargetRef.current ||
            id === movementTargetRef.current.pageId)
        ) {
          if (previousRequestRef.current.pageId !== undefined)
            reportedIdsRef.current = [...reportedIdsRef.current, id].slice(-32)
          callbackRef.current(id)
        }
      }
    }
    const onScroll = () => update()
    viewport.addEventListener('scroll', onScroll, { passive: true })
    const cancelRequested = () => {
      requestedRef.current = undefined
    }
    viewport.addEventListener('wheel', cancelRequested, { passive: true })
    viewport.addEventListener('touchstart', cancelRequested, { passive: true })
    const observer = new ResizeObserver(() => {
      const geometry = readPageGeometry()
      const changed = geometry !== lastPageGeometry
      lastPageGeometry = geometry
      update(changed)
    })
    observer.observe(viewport)
    elements.forEach((element) => {
      observer.observe(element)
    })
    update()
    return () => {
      viewport.removeEventListener('scroll', onScroll)
      viewport.removeEventListener('wheel', cancelRequested)
      viewport.removeEventListener('touchstart', cancelRequested)
      observer.disconnect()
    }
  }, [idsKey, navigationMode])

  useEffect(() => {
    const initial = firstRequestRef.current
    const previous = previousRequestRef.current
    if (!initial && previous.pageId === pageId && previous.idsKey === idsKey)
      return
    firstRequestRef.current = false
    previousRequestRef.current = { pageId, idsKey }
    if (previous.idsKey !== idsKey || pageId === undefined)
      reportedIdsRef.current = []
    if (pageId === undefined) return
    // Controlled consumers may commit an earlier callback after a later page
    // has already been observed. Acknowledge pending reports without scrolling.
    const echo = reportedIdsRef.current.indexOf(pageId)
    if (echo >= 0) {
      reportedIdsRef.current.splice(0, echo + 1)
      return
    }
    if (
      pageId === observedId ||
      pageId === activeRef.current ||
      pageId === movementTargetRef.current?.pageId
    )
      return
    reportedIdsRef.current = []
    const viewport = viewportRef.current
    if (!viewport) return
    const target = Array.from(viewport.children).findIndex(
      (element) =>
        element instanceof HTMLElement && element.dataset.slideId === pageId,
    )
    // Initial deep links must not animate through intermediate snap stops and
    // report those pages back to a controlled consumer before reaching the target.
    if (target >= 0) goToIndex(target, initial ? 'instant' : undefined)
  }, [pageId, idsKey, observedId, goToIndex])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      event.defaultPrevented ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
    )
      return
    if (
      event.target instanceof Element &&
      event.target.closest(SLIDE_EDITABLE_SELECTOR)
    )
      return
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      goToIndex(
        event.key === 'Home' ? 0 : pages.length - 1,
        undefined,
        event.key === 'End',
      )
      return
    }
    if (navigationMode === 'continuous') {
      const viewport = viewportRef.current
      if (
        viewport &&
        ['PageDown', 'PageUp', 'ArrowDown', 'ArrowUp'].includes(event.key) &&
        event.target instanceof Node &&
        !viewport.contains(event.target)
      ) {
        event.preventDefault()
        const direction = event.key.endsWith('Down') ? 1 : -1
        const distance = event.key.startsWith('Page')
          ? viewport.clientHeight
          : 40
        viewport.scrollTo({
          top: viewport.scrollTop + direction * distance,
          behavior: 'instant',
        })
      }
      return
    }
    const forward = ['PageDown', 'ArrowDown', 'ArrowRight'].includes(event.key)
    const backward = ['PageUp', 'ArrowUp', 'ArrowLeft'].includes(event.key)
    if (!forward && !backward) return
    const viewport = viewportRef.current
    const page = viewport?.children[index]
    if (!viewport || !(page instanceof HTMLElement)) return
    const view = viewport.getBoundingClientRect()
    const rect = page.getBoundingClientRect()
    // Native page scrolling must expose all of an oversized slide before changing pages.
    if (
      ((event.key === 'PageDown' || event.key === 'ArrowDown') &&
        rect.bottom > view.bottom + 2) ||
      ((event.key === 'PageUp' || event.key === 'ArrowUp') &&
        rect.top < view.top - 2)
    ) {
      // Expose the remaining content before a native step can snap past it.
      event.preventDefault()
      const distance = event.key.startsWith('Page') ? viewport.clientHeight : 40
      const pageTop = viewport.scrollTop + rect.top - view.top
      const pageBottom = pageTop + rect.height - viewport.clientHeight
      movementRevisionRef.current++
      movementTargetRef.current = undefined
      viewport.scrollTo({
        top: forward
          ? Math.min(viewport.scrollTop + distance, pageBottom)
          : Math.max(viewport.scrollTop - distance, pageTop),
        behavior: 'instant',
      })
      return
    }
    event.preventDefault()
    step(forward ? 1 : -1)
  }

  return { viewportRef, index, progress, goToIndex, onKeyDown }
}
