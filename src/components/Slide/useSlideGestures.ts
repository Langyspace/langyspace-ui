import { useEffect } from 'react'
import type { SlideGestureOptions, SlideTouchGesture } from './SlideDeck.types'

export const SLIDE_EDITABLE_SELECTOR =
  'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="combobox"],[role="listbox"],[role="menu"],[role="slider"],[role="tablist"],[role="radiogroup"],[role="grid"],[role="tree"],[role="spinbutton"]'

const POINTER_NATIVE_SELECTOR =
  'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="combobox"],[role="listbox"],[role="menu"],[role="slider"],[role="spinbutton"]'

// Same-burst browser gaps measured 44–83ms; isolated detents were at least 200ms apart.
const WHEEL_GESTURE_IDLE_MS = 160
// Native mobile Chromium still clicks at 12px, but treats 16px as a gesture.
// Keep that tap tolerance before choosing an axis or suppressing a control click.
const TOUCH_INTENT_PX = 16

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
  navigationMode,
  onStep,
  idsKey,
}: SlideGestureOptions) {
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport || navigationMode === 'continuous') return
    let wheelTime = -Infinity
    let wheelAxis: 'vertical' | 'horizontal' | 'native' | undefined
    let wheelConsumed = false
    let wheelAdvanced = false
    let touch: SlideTouchGesture | undefined

    const nativeTarget = (target: EventTarget | null) =>
      (target instanceof Element &&
        Boolean(target.closest(POINTER_NATIVE_SELECTOR))) ||
      hasNestedScroller(target, viewport)
    const moving = () => {
      const target = movementTargetRef.current
      if (target === undefined) return false
      if (Math.abs(viewport.scrollTop - target) <= 2) {
        movementTargetRef.current = undefined
        return false
      }
      return true
    }
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
      if (event.timeStamp - wheelTime > WHEEL_GESTURE_IDLE_MS) {
        wheelAxis = undefined
        wheelConsumed = false
        wheelAdvanced = false
      }
      wheelTime = event.timeStamp
      if (!wheelAxis)
        wheelAxis = nativeTarget(event.target)
          ? 'native'
          : Math.abs(event.deltaX) >= Math.abs(event.deltaY)
            ? 'horizontal'
            : 'vertical'
      if (wheelAxis !== 'vertical' || event.deltaY === 0 || !event.cancelable)
        return
      event.preventDefault()
      const direction = event.deltaY > 0 ? 1 : -1
      if (wheelAdvanced || moving()) {
        wheelAdvanced = true
        return
      }
      const style = getComputedStyle(viewport)
      const unit =
        event.deltaMode === 2
          ? viewport.clientHeight
          : event.deltaMode === 1
            ? parseFloat(style.lineHeight) || parseFloat(style.fontSize) || 16
            : 1
      if (scrollContent(event.deltaY * unit)) {
        wheelConsumed = true
        return
      }
      // Finishing a tall page consumes this gesture; the next gesture can leave it.
      if (!wheelConsumed) {
        wheelAdvanced = true
        onStep(direction)
      }
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
        if (Math.max(Math.abs(dx), Math.abs(dy)) < TOUCH_INTENT_PX) return
        touch.axis = Math.abs(dx) >= Math.abs(dy) ? 'horizontal' : 'vertical'
        delta = dy
      }
      touch.direction =
        Math.abs(dy) >= TOUCH_INTENT_PX ? (dy > 0 ? 1 : -1) : undefined
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
    navigationMode,
    onStep,
    viewportRef,
  ])
}
