import { useEffect } from 'react'
import type { RefObject } from 'react'
import type {
  SlideGestureOptions,
  SlideMovementTarget,
  SlideTouchGesture,
} from './SlideDeck.types'

export const SLIDE_EDITABLE_SELECTOR =
  'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="combobox"],[role="listbox"],[role="menu"],[role="slider"],[role="tablist"],[role="radiogroup"],[role="grid"],[role="tree"],[role="spinbutton"]'

// Text fields without overflow have no wheel action of their own. Let the deck
// handle those wheels, while preserving scrolling editors and value controls.
const WHEEL_NATIVE_SELECTOR =
  'select,input[type="number"],input[type="range"],[role="combobox"],[role="listbox"],[role="menu"],[role="slider"],[role="spinbutton"]'

const POINTER_NATIVE_SELECTOR =
  'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="combobox"],[role="listbox"],[role="menu"],[role="slider"],[role="spinbutton"]'

// Same-burst browser gaps measured 44–83ms; isolated detents were at least 200ms apart.
const WHEEL_GESTURE_IDLE_MS = 160
// Repeated pushes may share a wheel transaction. Require a sustained recovery
// relative to the preceding push; small rebounds in its momentum tail stay spent.
const WHEEL_REARM_RISE_PACKETS = 2
const WHEEL_REARM_MIN_PEAK_PX = 12
const WHEEL_REARM_MIN_RISE_PX = 12
// Preserve 2–4px tap jitter. Real scroll starts delivered their last cancelable
// move as early as 4.63px; waiting for 5/16px handed control to native snap.
const TOUCH_TAP_TOLERANCE_PX = 4
// Capturing a pan is separate from committing a page. Native control clicks
// survived 12px displacement; require the observed 16px swipe intent to leave.
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

function hasNestedScroller(target: EventTarget | null, viewport: HTMLElement) {
  let element = target instanceof Element ? target : null
  while (element && element !== viewport) {
    const style = getComputedStyle(element)
    if (
      ['auto', 'scroll'].includes(style.overflowY) &&
      element.scrollHeight > element.clientHeight + 2
    )
      return true
    element = element.parentElement
  }
  return false
}

export function useSlideGestures({
  viewportRef,
  activeIdRef,
  movementTargetRef,
  movementRevisionRef,
  navigationMode,
  onStep,
  idsKey,
}: SlideGestureOptions) {
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport || navigationMode === 'continuous') return
    let wheelTime = -Infinity
    let wheelVertical = false
    let wheelConsumed = false
    let wheelAdvanced = false
    let wheelPeak = 0
    let wheelPrevious = 0
    let wheelTrough = Infinity
    let wheelDecayPackets = 0
    let wheelRisePackets = 0
    let wheelDecaying = false
    let wheelDirection: 1 | -1 | undefined
    let touch: SlideTouchGesture | undefined

    const nativeTarget = (
      target: EventTarget | null,
      selector = POINTER_NATIVE_SELECTOR,
    ) =>
      (target instanceof Element && Boolean(target.closest(selector))) ||
      hasNestedScroller(target, viewport)
    const moving = () => isSlideMovementPending(viewport, movementTargetRef)
    const scrollContent = (delta: number) => {
      if (!delta) return false
      const page = Array.from(viewport.children).find(
        (element) =>
          element instanceof HTMLElement &&
          element.dataset.slideId === activeIdRef.current,
      )
      if (!(page instanceof HTMLElement)) return false
      const view = viewport.getBoundingClientRect()
      const rect = page.getBoundingClientRect()
      const start = viewport.scrollTop + rect.top - view.top
      const end = Math.max(start, start + rect.height - view.height)
      if (
        (delta > 0 && viewport.scrollTop >= end - 2) ||
        (delta < 0 && viewport.scrollTop <= start + 2)
      )
        return false
      viewport.scrollTo({
        top: Math.max(start, Math.min(end, viewport.scrollTop + delta)),
        behavior: 'instant',
      })
      return true
    }
    const resetWheelImpulse = (magnitude = 0) => {
      wheelConsumed = false
      wheelAdvanced = false
      wheelPeak = magnitude
      wheelPrevious = magnitude
      wheelTrough = Infinity
      wheelDecayPackets = 0
      wheelRisePackets = 0
      wheelDecaying = false
    }
    const observeWheelImpulse = (magnitude: number) => {
      wheelPeak = Math.max(wheelPeak, magnitude)
      if (!wheelDecaying) {
        if (magnitude < wheelPrevious - 0.5 && magnitude <= wheelPeak * 0.7)
          wheelDecayPackets++
        else if (magnitude >= wheelPrevious) wheelDecayPackets = 0
        if (wheelDecayPackets >= 2) {
          wheelDecaying = true
          wheelTrough = magnitude
        }
      } else {
        wheelTrough = Math.min(wheelTrough, magnitude)
        // A real renewed push may rise then briefly plateau. Compare its recovery
        // with the local valley, not the largest packet of an earlier strong push.
        wheelRisePackets =
          magnitude > wheelTrough + 0.5 && magnitude >= wheelPrevious - 0.5
            ? wheelRisePackets + 1
            : 0
        // This is intent inference, not a browser-provided momentum phase.
        // Cancelability is not a gesture boundary; observe every owned packet.
        if (
          wheelRisePackets >= WHEEL_REARM_RISE_PACKETS &&
          magnitude >= WHEEL_REARM_MIN_PEAK_PX &&
          magnitude - wheelTrough >= WHEEL_REARM_MIN_RISE_PX &&
          magnitude >= wheelTrough * 2
        )
          resetWheelImpulse(magnitude)
      }
      wheelPrevious = magnitude
    }
    const applyWheel = (delta: number) => {
      if (scrollContent(delta)) {
        wheelConsumed = true
        return
      }
      // The impulse that finished a tall page cannot also leave that page.
      if (!wheelConsumed) {
        wheelAdvanced = true
        onStep(delta > 0 ? 1 : -1)
      }
    }
    const onWheel = (event: WheelEvent) => {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      )
        return
      if (event.deltaX === 0 && event.deltaY === 0) return
      // Keep native editors/value controls native even after the deck has
      // already seen another vertical packet in the same transaction.
      if (nativeTarget(event.target, WHEEL_NATIVE_SELECTOR)) return
      if (event.timeStamp - wheelTime > WHEEL_GESTURE_IDLE_MS) {
        wheelVertical = false
        wheelDirection = undefined
        resetWheelImpulse()
      }
      wheelTime = event.timeStamp
      if (!wheelVertical) {
        // A lateral/native lead-in must not veto the whole trackpad gesture.
        // Commit only when its first vertical packet arrives, however small.
        if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return
        wheelVertical = true
      }
      if (event.deltaY === 0) return
      // Pages mode must pair this hook with overflow-y:hidden and no CSS snap.
      // Some browsers cancel only the first packet. Keep consuming the rest
      // through scrollContent instead of handing them to native page scrolling.
      if (event.cancelable) event.preventDefault()
      const direction = event.deltaY > 0 ? 1 : -1
      if (wheelDirection && direction !== wheelDirection) {
        // A reversal is fresh intent, including during a smooth page transition.
        resetWheelImpulse()
        if (moving()) {
          viewport.scrollTo({ top: viewport.scrollTop, behavior: 'instant' })
          movementTargetRef.current = undefined
        }
      }
      wheelDirection = direction
      const style = getComputedStyle(viewport)
      const unit =
        event.deltaMode === 2
          ? viewport.clientHeight
          : event.deltaMode === 1
            ? parseFloat(style.lineHeight) || parseFloat(style.fontSize) || 16
            : 1
      const delta = event.deltaY * unit
      observeWheelImpulse(Math.abs(delta))
      if (wheelAdvanced) return
      if (moving()) {
        // A fresh live push may supersede an animation immediately. step uses
        // its logical destination, so no input is queued for scroll-end.
        if (!wheelConsumed) {
          wheelAdvanced = true
          onStep(direction)
        }
        return
      }
      // Navigation only happens on a live wheel packet, never on scroll-end/timers.
      applyWheel(delta)
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
              moving: moving(),
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
      let delta = touch.lastY - point.clientY
      touch.lastY = point.clientY
      if (!touch.axis) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) <= TOUCH_TAP_TOLERANCE_PX)
          return
        touch.axis = Math.abs(dx) >= Math.abs(dy) ? 'horizontal' : 'vertical'
        delta = dy
      }
      touch.direction =
        Math.abs(dy) >= TOUCH_SWIPE_INTENT_PX ? (dy > 0 ? 1 : -1) : undefined
      if (touch.axis !== 'vertical' || !dy || !event.cancelable) return
      event.preventDefault()
      if (!touch.moving && scrollContent(delta)) touch.consumedContent = true
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
    viewport.addEventListener('wheel', onWheel, { passive: false })
    viewport.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.addEventListener('touchmove', onTouchMove, { passive: false })
    viewport.addEventListener('touchend', onTouchEnd)
    viewport.addEventListener('touchcancel', onTouchCancel)
    return () => {
      viewport.removeEventListener('wheel', onWheel)
      viewport.removeEventListener('touchstart', onTouchStart)
      viewport.removeEventListener('touchmove', onTouchMove)
      viewport.removeEventListener('touchend', onTouchEnd)
      viewport.removeEventListener('touchcancel', onTouchCancel)
    }
  }, [
    activeIdRef,
    idsKey,
    movementTargetRef,
    movementRevisionRef,
    navigationMode,
    onStep,
    viewportRef,
  ])
}
