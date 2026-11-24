import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { styled } from 'styled-components'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'

const Editor = styled.textarea`
  overflow-y: auto;
`
const Nested = styled.div`
  overflow-y: auto;
  max-height: 100px;
`
beforeEach(() => {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe() {}
      disconnect() {}
    },
  )
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: true })),
  )
})
afterEach(() => vi.unstubAllGlobals())

function fixture({
  tall = false,
  lastTall = false,
  continuous = false,
  reduced = true,
} = {}) {
  vi.mocked(window.matchMedia).mockReturnValue({
    matches: reduced,
  } as MediaQueryList)
  const { rerender } = render(
    <SlideDeck
      label="Aula"
      navigationMode={continuous ? 'continuous' : 'pages'}
      actions={<button>Notes</button>}
      pages={[
        {
          id: 'one',
          label: 'First',
          content: (
            <>
              <Editor aria-label="Answer" />
              <input aria-label="Name" />
              <input type="number" aria-label="Quantity" />
              <Nested data-testid="nested">Long nested reading</Nested>
              <div role="radiogroup" aria-label="Options">
                <button role="radio" aria-checked={false}>
                  Option
                </button>
              </div>
            </>
          ),
        },
        { id: 'two', label: 'Second', content: <p>Second page</p> },
        { id: 'three', label: 'Third', content: <p>Third page</p> },
      ]}
    />,
  )
  const viewport = screen.getByRole('region', { name: 'Aula' })
  const heights = [tall ? 620 : 500, 500, lastTall ? 620 : 500]
  let position = 0,
    clock = 0
  Object.defineProperty(viewport, 'scrollTop', {
    configurable: true,
    get: () => position,
  })
  Object.defineProperty(viewport, 'clientHeight', {
    configurable: true,
    value: 500,
  })
  Object.defineProperty(viewport, 'scrollHeight', {
    configurable: true,
    get: () => heights.reduce((a, b) => a + b),
  })
  vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 800, 500),
  )
  Array.from(viewport.children).forEach((child, i) => {
    vi.spyOn(child, 'getBoundingClientRect').mockImplementation(
      () =>
        new DOMRect(
          0,
          heights.slice(0, i).reduce((a, b) => a + b, 0) - position,
          800,
          heights[i],
        ),
    )
  })
  const scrollTo = vi.fn((options?: ScrollToOptions | number, y?: number) => {
    position =
      typeof options === 'number' ? (y ?? position) : (options?.top ?? position)
  })
  viewport.scrollTo = scrollTo
  fireEvent.scroll(viewport)
  scrollTo.mockClear()
  const wheel = (
    deltaY: number,
    {
      gap = 35,
      target = viewport,
      ...options
    }: WheelEventInit & { gap?: number; target?: HTMLElement } = {},
  ) => {
    clock += gap
    const event = new window.WheelEvent('wheel', {
      bubbles: true,
      cancelable: true,
      deltaY,
      ...options,
    })
    Object.defineProperty(event, 'timeStamp', { value: clock })
    fireEvent(target, event)
    fireEvent.scroll(viewport)
    return event
  }
  const touch = (
    type: string,
    points: { identifier: number; clientX: number; clientY: number }[],
    target = viewport,
  ) => {
    const event = new window.Event(type, { bubbles: true, cancelable: true })
    Object.defineProperty(event, 'touches', { value: points })
    fireEvent(target, event)
    fireEvent.scroll(viewport)
    return event
  }
  return {
    viewport,
    scrollTo,
    wheel,
    touch,
    rerender,
    growFirstPage: (distance: number) => {
      heights[0] = (heights[0] ?? 0) + distance
    },
    scroll: (top: number) => {
      position = top
      fireEvent.scroll(viewport)
    },
  }
}
const point = (y: number, x = 100) => ({
  identifier: 1,
  clientX: x,
  clientY: y,
})

describe('SlideDeck local page gestures', () => {
  it('advances once per wheel burst and allows another separated detent or reverse gesture', () => {
    const { wheel, scrollTo } = fixture()
    wheel(120)
    for (let n = 0; n < 4; n++) wheel(120)
    expect(scrollTo).toHaveBeenCalledTimes(1)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 500,
      behavior: 'instant',
    })
    wheel(120, { gap: 200 })
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 1000,
      behavior: 'instant',
    })
    wheel(-120, { gap: 200 })
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 500,
      behavior: 'instant',
    })
  })

  it('accepts a weaker renewed push without waiting for the previous tail to become idle', () => {
    const { wheel, scrollTo } = fixture()
    for (const delta of [240, 160, 80, 24, 6]) wheel(delta)
    expect(scrollTo).toHaveBeenCalledOnce()
    for (const delta of [10, 22, 22]) wheel(delta)
    expect(scrollTo).toHaveBeenCalledTimes(2)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 1000,
      behavior: 'instant',
    })
  })

  it('recognizes a renewed rise followed by a plateau, including noncancelable packets', () => {
    const { wheel, scrollTo } = fixture()
    for (const delta of [80, 50, 20, 5]) wheel(delta)
    wheel(20, { cancelable: false })
    expect(scrollTo).toHaveBeenCalledOnce()
    wheel(20, { cancelable: false })
    expect(scrollTo).toHaveBeenCalledTimes(2)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 1000,
      behavior: 'instant',
    })
  })

  it('does not confuse small momentum rebounds or a long decaying tail with another push', () => {
    const { wheel, scrollTo } = fixture()
    for (const delta of [160, 100, 60, 25, 8, 11, 15, 14, 9, 7, 10, 16, 13, 6])
      wheel(delta)
    for (let delta = 5; delta > 0.2; delta *= 0.92) wheel(delta)
    expect(scrollTo).toHaveBeenCalledOnce()
  })

  it('lets a live renewed push supersede a smooth destination without a deferred page turn', () => {
    const { wheel, scrollTo, scroll } = fixture({ reduced: false })
    scrollTo.mockImplementation(() => {})
    for (const delta of [120, 70, 30, 5]) wheel(delta)
    expect(scrollTo).toHaveBeenCalledOnce()
    for (const delta of [10, 24, 24]) wheel(delta)
    expect(scrollTo).toHaveBeenCalledTimes(2)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 1000, behavior: 'smooth' })
    scroll(1000)
    expect(scrollTo).toHaveBeenCalledTimes(2)
  })

  it('responds to a quick reversal without advancing another page from the same forward burst', () => {
    const { wheel, scrollTo } = fixture()
    wheel(120)
    wheel(80)
    expect(scrollTo).toHaveBeenCalledOnce()
    wheel(-120)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'instant' })
    expect(scrollTo).toHaveBeenCalledTimes(2)
  })

  it('starts a separated fresh burst immediately during smooth navigation', () => {
    const { wheel, scrollTo, scroll } = fixture({ reduced: false })
    scrollTo.mockImplementation(() => {})
    wheel(120)
    wheel(120, { gap: 200 })
    expect(scrollTo).toHaveBeenCalledTimes(2)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 1000, behavior: 'smooth' })
    scroll(1000)
    wheel(60)
    wheel(30)
    expect(scrollTo).toHaveBeenCalledTimes(2)
  })

  it('does not defer an isolated new detent until scroll-end', () => {
    const { wheel, scrollTo, scroll } = fixture({ reduced: false })
    scrollTo.mockImplementation(() => {})
    wheel(120)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 500, behavior: 'smooth' })
    wheel(120, { gap: 200 })
    expect(scrollTo).toHaveBeenCalledTimes(2)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 1000, behavior: 'smooth' })
    scroll(1000)
    expect(scrollTo).toHaveBeenCalledTimes(2)
  })

  it.each(['Home', 'Back'])(
    'does not replay a prior wheel after a later %s navigation request',
    async (navigation) => {
      const { wheel, scrollTo, scroll, viewport } = fixture({ reduced: false })
      scrollTo.mockImplementation(() => {})
      wheel(120)
      scroll(350)
      wheel(120, { gap: 200 })
      expect(scrollTo).toHaveBeenCalledTimes(2)
      if (navigation === 'Home') fireEvent.keyDown(viewport, { key: 'Home' })
      else fireEvent.click(screen.getByRole('button', { name: 'Voltar' }))
      const top = 0 // Header Back follows the currently observed page, unlike live wheel stepping
      expect(scrollTo).toHaveBeenLastCalledWith({ top, behavior: 'smooth' })
      scroll(top)
      await new Promise((resolve) => setTimeout(resolve, 10))
      expect(scrollTo).toHaveBeenCalledTimes(3)
      expect(scrollTo).toHaveBeenLastCalledWith({ top, behavior: 'smooth' })
    },
  )

  it.each(['Name', 'Answer'])(
    'keeps page gestures available over a non-scrolling text field: %s',
    (name) => {
      const { wheel, scrollTo } = fixture()
      const input = screen.getByRole('textbox', { name })
      input.focus()
      expect(wheel(120, { target: input }).defaultPrevented).toBe(true)
      expect(scrollTo).toHaveBeenLastCalledWith({
        top: 500,
        behavior: 'instant',
      })
      expect(input).toHaveFocus()
    },
  )

  it('leaves wheel scrolling inside an overflowing text editor native', () => {
    const { wheel, scrollTo } = fixture()
    const input = screen.getByRole('textbox', { name: 'Answer' })
    Object.defineProperty(input, 'scrollHeight', {
      configurable: true,
      value: 400,
    })
    Object.defineProperty(input, 'clientHeight', {
      configurable: true,
      value: 80,
    })
    expect(wheel(120, { target: input }).defaultPrevented).toBe(false)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('clamps even a large wheel delta to a tall page tail and leaves only on the next gesture', () => {
    const { wheel, scrollTo, viewport } = fixture({ tall: true })
    wheel(900)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 120,
      behavior: 'instant',
    })
    expect(viewport.children[0]).toHaveAttribute('data-current', 'true')
    wheel(120)
    expect(scrollTo).toHaveBeenCalledTimes(1)
    wheel(120, { gap: 200 })
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 620,
      behavior: 'instant',
    })
  })

  it('does not steal nested scrolling, wheel value controls, horizontal bursts or pinch wheels', () => {
    const { wheel, scrollTo } = fixture()
    const nested = screen.getByTestId('nested')
    Object.defineProperty(nested, 'scrollHeight', {
      configurable: true,
      value: 1000,
    })
    Object.defineProperty(nested, 'clientHeight', {
      configurable: true,
      value: 100,
    })
    expect(wheel(120, { target: nested }).defaultPrevented).toBe(false)
    expect(
      wheel(120, { target: screen.getByRole('spinbutton'), gap: 200 })
        .defaultPrevented,
    ).toBe(false)
    expect(wheel(30, { deltaX: 120, gap: 200 }).defaultPrevented).toBe(false)
    expect(wheel(120, { ctrlKey: true, gap: 200 }).defaultPrevented).toBe(false)
    expect(scrollTo).not.toHaveBeenCalled()
    // A later vertical packet can establish intent after the lateral lead-in.
    expect(wheel(120).defaultPrevented).toBe(true)
    expect(scrollTo).toHaveBeenCalledOnce()
  })

  it('keeps continuous mode native and hides page controls', () => {
    const { wheel, touch, scrollTo, scroll, viewport } = fixture({
      continuous: true,
    })
    expect(wheel(120).defaultPrevented).toBe(false)
    touch('touchstart', [point(300)])
    expect(touch('touchmove', [point(100)]).defaultPrevented).toBe(false)
    touch('touchend', [])
    scroll(500)
    expect(
      screen.queryByRole('button', { name: 'Voltar' }),
    ).not.toBeInTheDocument()
    expect(fireEvent.keyDown(viewport, { key: 'PageDown' })).toBe(true)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('turns one vertical swipe into one page step and keeps horizontal, pinch and canceled gestures native', () => {
    const { touch, scrollTo } = fixture()
    touch('touchstart', [point(300)])
    touch('touchmove', [point(200)])
    touch('touchmove', [point(100)])
    expect(scrollTo).not.toHaveBeenCalled()
    touch('touchend', [])
    expect(scrollTo).toHaveBeenCalledTimes(1)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 500,
      behavior: 'instant',
    })
    touch('touchstart', [point(300)])
    expect(touch('touchmove', [point(280, 250)]).defaultPrevented).toBe(false)
    touch('touchend', [])
    touch('touchstart', [point(300), { ...point(300, 200), identifier: 2 }])
    expect(
      touch('touchmove', [point(200), { ...point(200, 250), identifier: 2 }])
        .defaultPrevented,
    ).toBe(false)
    touch('touchend', [])
    touch('touchstart', [point(300)])
    touch('touchmove', [point(100)])
    touch('touchcancel', [])
    expect(scrollTo).toHaveBeenCalledTimes(1)
  })

  it('uses a swipe to expose tall content before a separate swipe can advance', () => {
    const { touch, scrollTo, viewport } = fixture({ tall: true })
    touch('touchstart', [point(400)])
    touch('touchmove', [point(100)])
    touch('touchmove', [point(50)])
    touch('touchend', [])
    expect(scrollTo).toHaveBeenCalledTimes(1)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 120,
      behavior: 'instant',
    })
    expect(viewport.children[0]).toHaveAttribute('data-current', 'true')
    touch('touchstart', [point(400)])
    touch('touchmove', [point(100)])
    touch('touchend', [])
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 620,
      behavior: 'instant',
    })
  })

  it.each([
    { mode: 1, delta: 3, expected: 72 },
    { mode: 2, delta: 1, expected: 120 },
  ])(
    'normalizes native wheel deltaMode $mode within tall content',
    ({ mode, delta, expected }) => {
      const { wheel, scrollTo } = fixture({ tall: true })
      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        lineHeight: '24px',
        fontSize: '16px',
      } as CSSStyleDeclaration)
      wheel(delta, { deltaMode: mode })
      expect(scrollTo).toHaveBeenLastCalledWith({
        top: expected,
        behavior: 'instant',
      })
      vi.restoreAllMocks()
    },
  )

  it('ignores the same impulse during animation but accepts a new one immediately', () => {
    const { wheel, scrollTo, scroll } = fixture({ reduced: false })
    scrollTo.mockImplementation(() => {})
    wheel(120)
    wheel(120)
    expect(scrollTo).toHaveBeenCalledOnce()
    wheel(120, { gap: 200 })
    expect(scrollTo).toHaveBeenCalledTimes(2)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 1000, behavior: 'smooth' })
    scroll(1000)
    wheel(120, { gap: 200 })
    expect(scrollTo).toHaveBeenCalledTimes(2)
  })

  it('unlocks navigation at the live page anchor after earlier content grows', () => {
    const { wheel, scrollTo, scroll, growFirstPage } = fixture({
      reduced: false,
    })
    scrollTo.mockImplementation(() => {})
    wheel(120)
    expect(scrollTo).toHaveBeenCalledOnce()
    growFirstPage(100)
    scroll(600)
    wheel(120, { gap: 200 })
    expect(scrollTo).toHaveBeenCalledTimes(2)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 1100,
      behavior: 'smooth',
    })
  })

  it('keeps pointer page gestures available over non-scrolling choice buttons', () => {
    const { wheel, scrollTo } = fixture()
    expect(
      wheel(120, { target: screen.getByRole('radio') }).defaultPrevented,
    ).toBe(true)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 500,
      behavior: 'instant',
    })
  })

  it('leaves taps and canceled vertical round trips on their original page', () => {
    const { touch, scrollTo } = fixture()
    touch('touchstart', [point(300)])
    touch('touchend', [])
    touch('touchstart', [point(300)])
    touch('touchmove', [point(200)])
    touch('touchmove', [point(300)])
    touch('touchend', [])
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it.each([2, 4])(
    'preserves a tap with %ipx of vertical jitter, including on a control',
    (jitter) => {
      const { touch, scrollTo, viewport } = fixture()
      const button = screen.getByRole('radio')
      const click = vi.fn()
      button.addEventListener('click', click)
      for (const target of [viewport, button]) {
        touch('touchstart', [point(300)], target)
        expect(
          touch('touchmove', [point(300 - jitter)], target).defaultPrevented,
        ).toBe(false)
        expect(touch('touchend', [], target).defaultPrevented).toBe(false)
      }
      fireEvent.click(button)
      expect(click).toHaveBeenCalledOnce()
      expect(scrollTo).not.toHaveBeenCalled()
    },
  )

  it('waits past initial vertical jitter before recognizing a horizontal gesture', () => {
    const { touch, scrollTo } = fixture()
    touch('touchstart', [point(300)])
    expect(touch('touchmove', [point(296)]).defaultPrevented).toBe(false)
    expect(touch('touchmove', [point(295, 180)]).defaultPrevented).toBe(false)
    touch('touchend', [])
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('recognizes a vertical swipe after tap-sized jitter on a control', () => {
    const { touch, scrollTo } = fixture()
    const button = screen.getByRole('radio')
    touch('touchstart', [point(300)], button)
    expect(touch('touchmove', [point(296)], button).defaultPrevented).toBe(
      false,
    )
    expect(touch('touchmove', [point(200)], button).defaultPrevented).toBe(true)
    touch('touchend', [], button)
    expect(scrollTo).toHaveBeenCalledOnce()
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 500,
      behavior: 'instant',
    })
  })

  it('handles the first cancelable scroll move just beyond the measured tap tolerance', () => {
    const { touch, scrollTo } = fixture()
    touch('touchstart', [point(300)])
    expect(touch('touchmove', [point(296)]).defaultPrevented).toBe(false)
    expect(touch('touchmove', [point(295.4)]).defaultPrevented).toBe(true)
    touch('touchmove', [point(180)])
    touch('touchend', [])
    expect(scrollTo).toHaveBeenCalledOnce()
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 500,
      behavior: 'instant',
    })
  })

  it.each([6, 8, 12])(
    'does not commit a page for a %ipx control touch even if a move is delivered',
    (distance) => {
      const { touch, scrollTo } = fixture()
      const button = screen.getByRole('radio')
      touch('touchstart', [point(300)], button)
      touch('touchmove', [point(300 - distance)], button)
      touch('touchend', [], button)
      expect(scrollTo).not.toHaveBeenCalled()
    },
  )

  it('leaves touch scrolling inside a nested reading pane native', () => {
    const { touch, scrollTo } = fixture()
    const nested = screen.getByTestId('nested')
    Object.defineProperty(nested, 'scrollHeight', {
      configurable: true,
      value: 1000,
    })
    Object.defineProperty(nested, 'clientHeight', {
      configurable: true,
      value: 100,
    })
    touch('touchstart', [point(300)], nested)
    expect(touch('touchmove', [point(100)], nested).defaultPrevented).toBe(
      false,
    )
    touch('touchend', [], nested)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('does not let zero-delta phase events swallow the next vertical gesture', () => {
    const { wheel, scrollTo } = fixture()
    expect(wheel(0).defaultPrevented).toBe(false)
    wheel(120)
    expect(scrollTo).toHaveBeenCalledOnce()
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 500,
      behavior: 'instant',
    })
  })

  it('does not rewind an oversized final page at its end', () => {
    const { wheel, viewport, scrollTo, scroll } = fixture({ lastTall: true })
    scroll(1120)
    wheel(120)
    expect(scrollTo).not.toHaveBeenCalled()
    expect(fireEvent.keyDown(viewport, { key: 'PageDown' })).toBe(false)
    expect(scrollTo).not.toHaveBeenCalled()
  })
})
