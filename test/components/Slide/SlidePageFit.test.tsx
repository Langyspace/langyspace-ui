import { act, render } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { SlidePageFit } from '../../../src/components/Slide/SlidePageFit'

afterEach(() => vi.unstubAllGlobals())
it('fits overflowing content and remeasures reveals and window changes without a scroll surface', () => {
  let resized = () => {}
  vi.stubGlobal(
    'ResizeObserver',
    class {
      constructor(callback: () => void) {
        resized = callback
      }
      observe() {}
      disconnect() {}
    },
  )
  const { container } = render(
    <section>
      <SlidePageFit>
        <p>Complete exercise</p>
      </SlidePageFit>
    </section>,
  )
  const content = container.querySelector('[data-slide-fit]') as HTMLElement
  let height = 500,
    natural = 1000
  Object.defineProperty(content.parentElement, 'clientHeight', {
    get: () => height,
  })
  Object.defineProperty(content, 'scrollHeight', { get: () => natural })
  act(() => resized())
  expect(getComputedStyle(content).transform).toBe('scale(0.5)')
  natural = 1250
  act(() => resized())
  expect(getComputedStyle(content).transform).toBe('scale(0.4)')
  height = 1500
  act(() => resized())
  expect(getComputedStyle(content).transform).toBe('scale(1)')
})
