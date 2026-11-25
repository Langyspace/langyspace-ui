import { useEffect } from 'react'
import type { RefObject } from 'react'
import { createSlideWheelIntent } from '../../internal/slideWheelIntent'
import type {
  SlideGestureOptions,
  SlideMovementTarget,
  SlideTouchGesture,
} from './SlideDeck.types'

export const SLIDE_EDITABLE_SELECTOR =
  'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="combobox"],[role="listbox"],[role="menu"],[role="slider"],[role="tablist"],[role="radiogroup"],[role="grid"],[role="tree"],[role="spinbutton"]'

const TOUCH_TAP_TOLERANCE_PX = 4
const TOUCH_SWIPE_INTENT_PX = 16

/** Check the live anchor: fonts, portraits and Hint expansion can move its pixels. */
export function isSlideMovementPending(
  viewport: HTMLElement,
  targetRef: RefObject<SlideMovementTarget | undefined>,
) {
  const target = targetRef.current
  if (!target) return false
  const page = Array.from(viewport.children).find(
    (element) =>
      element instanceof HTMLElement &&
      element.dataset.slideId === target.pageId,
  )
  const remaining = target.alignEnd
    ? viewport.scrollHeight - viewport.clientHeight - viewport.scrollTop
    : page
      ? page.getBoundingClientRect().top - viewport.getBoundingClientRect().top
      : 0
  if (Math.abs(remaining) > 2) return true
  targetRef.current = undefined
  return false
}

export function useSlideGestures({
  viewportRef,
  navigationMode,
  onStep,
  idsKey,
}: SlideGestureOptions) {
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport || navigationMode === 'continuous') return
    const owner = viewport.closest<HTMLElement>('[data-slide-deck]') ?? viewport
    const wheelIntent = createSlideWheelIntent()
    let touch: SlideTouchGesture | undefined
    const nativeTarget = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(target.closest(SLIDE_EDITABLE_SELECTOR))
    const onWheel = (event: WheelEvent) => {
      // The deck owns its viewport and header; a separate overlay/editor keeps
      // its native behavior. No document-wide or competing nested listener.
      if (
        event.target instanceof Element &&
        !viewport.contains(event.target) &&
        !event.target.closest('[data-slide-navigation]') &&
        event.target !== owner
      )
        return
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.shiftKey
      )
        return
      if (!event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY))
        return
      if (event.cancelable) event.preventDefault()
      const direction = wheelIntent(event)
      if (direction) onStep(direction)
    }
    const onTouchStart = (event: TouchEvent) => {
      const point = event.touches[0]
      touch =
        !event.defaultPrevented && event.touches.length === 1 && point
          ? {
              id: point.identifier,
              x: point.clientX,
              y: point.clientY,
              lastY: point.clientY,
              consumedContent: false,
              native: nativeTarget(event.target),
              moving: false,
            }
          : undefined
    }
    const onTouchMove = (event: TouchEvent) => {
      if (!touch || event.touches.length !== 1) {
        touch = undefined
        return
      }
      const point = Array.from(event.touches).find(
        (p) => p.identifier === touch?.id,
      )
      if (!point || event.defaultPrevented || touch.native) return
      const dx = point.clientX - touch.x
      const dy = touch.y - point.clientY
      touch.lastY = point.clientY
      if (!touch.axis) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) <= TOUCH_TAP_TOLERANCE_PX)
          return
        touch.axis = Math.abs(dx) >= Math.abs(dy) ? 'horizontal' : 'vertical'
      }
      touch.direction =
        Math.abs(dy) >= TOUCH_SWIPE_INTENT_PX ? (dy > 0 ? 1 : -1) : undefined
      if (touch.axis !== 'vertical' || !dy || !event.cancelable) return
      event.preventDefault()
    }
    const onTouchEnd = (event: TouchEvent) => {
      const gesture = touch
      touch = undefined
      if (
        gesture?.axis === 'vertical' &&
        gesture.direction &&
        !gesture.native &&
        !gesture.moving &&
        !gesture.consumedContent &&
        !event.defaultPrevented
      )
        onStep(gesture.direction)
    }
    const onTouchCancel = () => {
      touch = undefined
    }
    owner.addEventListener('wheel', onWheel, {
      passive: false,
      capture: true,
    })
    viewport.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.addEventListener('touchmove', onTouchMove, { passive: false })
    viewport.addEventListener('touchend', onTouchEnd)
    viewport.addEventListener('touchcancel', onTouchCancel)
    return () => {
      owner.removeEventListener('wheel', onWheel, true)
      viewport.removeEventListener('touchstart', onTouchStart)
      viewport.removeEventListener('touchmove', onTouchMove)
      viewport.removeEventListener('touchend', onTouchEnd)
      viewport.removeEventListener('touchcancel', onTouchCancel)
    }
  }, [idsKey, navigationMode, onStep, viewportRef])
}
