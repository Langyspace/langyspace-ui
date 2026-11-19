import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createBrowserStorage } from '../../helpers/browserStorage'
import { TrialB2Lesson } from '../../../stories/materials/TrialB2/TrialB2Lesson'

let browserStorage: ReturnType<typeof createBrowserStorage>
beforeEach(() => {
  browserStorage = createBrowserStorage()
  vi.stubGlobal('localStorage', browserStorage.storage)
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
afterEach(() => {
  vi.unstubAllGlobals()
  browserStorage.dispose()
})

function layout() {
  const viewport = screen.getByRole('region', {
    name: 'B2 Trial · Work and life',
  })
  const pages = Array.from(viewport.children) as HTMLElement[]
  const heights = [900, 900, 1125, 900, 900, 900, 900, 900]
  let top = 0
  Object.defineProperty(viewport, 'clientHeight', {
    configurable: true,
    value: 900,
  })
  Object.defineProperty(viewport, 'scrollHeight', {
    configurable: true,
    value: 7425,
  })
  let position = 0
  Object.defineProperty(viewport, 'scrollTop', {
    configurable: true,
    get: () => position,
  })
  vi.spyOn(viewport, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 1440, 900),
  )
  pages.forEach((page, i) => {
    const start = top
    top += heights[i]!
    vi.spyOn(page, 'getBoundingClientRect').mockImplementation(
      () => new DOMRect(0, start - position, 1440, heights[i]),
    )
  })
  const scrollTo = vi.fn((options?: ScrollToOptions | number, y?: number) => {
    position =
      typeof options === 'number' ? (y ?? position) : (options?.top ?? position)
  })
  viewport.scrollTo = scrollTo
  const scroll = (next: number) => {
    position = next
    fireEvent.scroll(viewport)
  }
  fireEvent.scroll(viewport)
  scrollTo.mockClear()
  return { viewport, pages, scrollTo, scroll }
}

describe('TrialB2 navigation integration', () => {
  it('keeps eight shared pages and exposes a tall dialogue tail before advancing from viewport or header', () => {
    render(<TrialB2Lesson />)
    const { viewport, pages, scrollTo, scroll } = layout()
    expect(pages.map((p) => p.dataset.slideId)).toEqual([
      's1',
      's2',
      's3',
      's41',
      's42',
      's43',
      's5',
      's6',
    ])
    for (const target of [
      viewport,
      screen.getByRole('button', { name: 'Notes' }),
    ]) {
      scroll(1800)
      target.focus()
      fireEvent.keyDown(target, { key: 'PageDown' })
      expect(scrollTo).toHaveBeenLastCalledWith({
        top: 2025,
        behavior: 'instant',
      })
      fireEvent.scroll(viewport)
      expect(pages[2]).toHaveAttribute('data-current', 'true')
      fireEvent.keyDown(target, { key: 'PageUp' })
      expect(scrollTo).toHaveBeenLastCalledWith({
        top: 1800,
        behavior: 'instant',
      })
      fireEvent.keyDown(target, { key: 'PageDown' })
      fireEvent.scroll(viewport)
      fireEvent.keyDown(target, { key: 'PageDown' })
      expect(scrollTo).toHaveBeenLastCalledWith({
        top: 2925,
        behavior: 'instant',
      })
    }
  })

  it('preserves the notes storage key, editable keyboard behavior and focus restoration', () => {
    render(<TrialB2Lesson />)
    const { scrollTo } = layout()
    const trigger = screen.getByRole('button', { name: 'Notes' })
    fireEvent.click(trigger)
    const notes = screen.getByRole('textbox', { name: 'Notes' })
    fireEvent.change(notes, { target: { value: 'A sentence of my own.' } })
    fireEvent.keyDown(notes, { key: 'PageDown' })
    expect(scrollTo).not.toHaveBeenCalled()
    expect(
      window.localStorage.getItem('langy-notes:Langy Trial B2 Work and life'),
    ).toBe('A sentence of my own.')
    fireEvent.keyDown(notes, { key: 'Escape' })
    expect(trigger).toHaveFocus()
  })
})
