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

describe('SlideDeck immediate page gestures', () => {
  it('accepts the first tiny wheel packet, keeps momentum on that page and accepts a weak next gesture', () => {
    const { wheel, scrollTo } = fixture()
    wheel(0.1)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 500, behavior: 'instant' })
    for (const delta of [100, 40, 10, 1]) wheel(delta)
    expect(scrollTo).toHaveBeenCalledOnce()
    wheel(0.1, { gap: 121 })
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 1000,
      behavior: 'instant',
    })
    wheel(-0.1)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 500, behavior: 'instant' })
  })
  it.each(['ArrowDown', 'ArrowRight'])(
    '%s skips content scrolling and advances immediately',
    (key) => {
      const { viewport, scrollTo } = fixture({ tall: true })
      fireEvent.keyDown(viewport, { key })
      expect(scrollTo).toHaveBeenLastCalledWith({
        top: 620,
        behavior: 'instant',
      })
    },
  )
  it.each(['ArrowUp', 'ArrowLeft'])(
    '%s goes directly to the previous page',
    (key) => {
      const { viewport, wheel, scrollTo } = fixture({ tall: true })
      wheel(1)
      fireEvent.keyDown(viewport, { key })
      expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'instant' })
    },
  )
  it('allows consecutive key presses while a transition is in progress', () => {
    const { viewport, scrollTo } = fixture({ reduced: false })
    fireEvent.keyDown(viewport, { key: 'ArrowDown' })
    fireEvent.keyDown(viewport, { key: 'ArrowRight' })
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 1000, behavior: 'smooth' })
  })
  it('owns wheel events over nested reading areas instead of scrolling their contents', () => {
    const { wheel, scrollTo } = fixture({ tall: true })
    expect(
      wheel(0.1, { target: screen.getByTestId('nested') }).defaultPrevented,
    ).toBe(true)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 620, behavior: 'instant' })
  })
  it('preserves text editing and browser zoom', () => {
    const { wheel, scrollTo } = fixture()
    fireEvent.keyDown(screen.getByRole('textbox', { name: 'Answer' }), {
      key: 'ArrowDown',
    })
    expect(wheel(1, { ctrlKey: true }).defaultPrevented).toBe(false)
    expect(scrollTo).not.toHaveBeenCalled()
  })
  it('leaves continuous mode native', () => {
    const { wheel, scrollTo } = fixture({ continuous: true })
    expect(wheel(1).defaultPrevented).toBe(false)
    expect(scrollTo).not.toHaveBeenCalled()
  })
  it('advances once on a vertical touch swipe', () => {
    const { touch, scrollTo } = fixture()
    touch('touchstart', [point(300)])
    touch('touchmove', [point(100)])
    touch('touchend', [])
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 500, behavior: 'instant' })
  })
})
