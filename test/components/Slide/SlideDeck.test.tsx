import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import type { SlideDeckPage } from '../../../src/components/Slide/SlideDeck.types'

const disconnect = vi.fn()
beforeEach(() => {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = vi.fn()
      disconnect = disconnect
    },
  )
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: false })),
  )
})
afterEach(() => {
  vi.unstubAllGlobals()
  vi.clearAllMocks()
})

const pages: readonly SlideDeckPage[] = [
  {
    id: 'one',
    label: 'Primeira',
    content: (
      <label>
        Resposta <input aria-label="Resposta" />
      </label>
    ),
  },
  { id: 'two', label: 'Segunda', content: <p>Outro exercício</p> },
  { id: 'three', label: 'Terceira', content: <p>Último exercício</p> },
]

function geometry() {
  const viewport = screen.getByRole('region', { name: 'Aula' })
  let scrollTop = 0
  let height = 500
  Object.defineProperty(viewport, 'scrollHeight', {
    configurable: true,
    get: () => height * 3,
  })
  Object.defineProperty(viewport, 'clientHeight', {
    configurable: true,
    get: () => height,
  })
  Object.defineProperty(viewport, 'scrollTop', {
    configurable: true,
    get: () => scrollTop,
  })
  vi.spyOn(viewport, 'getBoundingClientRect').mockImplementation(
    () => new DOMRect(0, 0, 800, height),
  )
  Array.from(viewport.children).forEach((child, index) => {
    vi.spyOn(child, 'getBoundingClientRect').mockImplementation(
      () => new DOMRect(0, index * height - scrollTop, 800, height),
    )
  })
  const scrollTo = vi.fn((options?: ScrollToOptions | number, y?: number) => {
    scrollTop =
      typeof options === 'number'
        ? (y ?? scrollTop)
        : (options?.top ?? scrollTop)
  })
  viewport.scrollTo = scrollTo
  // Establish the mock viewport's initial layout before simulating a user scroll.
  fireEvent.scroll(viewport)
  scrollTo.mockClear()
  return {
    viewport,
    scrollTo,
    resize(nextHeight: number) {
      height = nextHeight
      fireEvent.scroll(viewport)
    },
    scroll(top: number) {
      scrollTop = top
      fireEvent.scroll(viewport)
    },
  }
}

describe('SlideDeck', () => {
  it('retains a new navigation target when a pending resize arrives before scrolling settles', () => {
    render(<SlideDeck label="Aula" pages={pages} />)
    const { viewport, scroll, resize, scrollTo } = geometry()
    scroll(1000)
    fireEvent.keyDown(viewport, { key: 'Home' })
    resize(600)
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'instant' })
    expect(screen.getByRole('region', { name: 'Primeira' })).toHaveAttribute(
      'data-current',
      'true',
    )
  })
  it('keeps the current page anchored when the viewport is resized', () => {
    render(<SlideDeck label="Aula" pages={pages} />)
    const { scroll, resize, scrollTo } = geometry()
    scroll(1000)
    resize(600)
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 1200,
      behavior: 'instant',
    })
    expect(screen.getByRole('region', { name: 'Terceira' })).toHaveAttribute(
      'data-current',
      'true',
    )
  })
  it('reports native scrolling and keeps previously entered exercise state mounted', () => {
    const onPageChange = vi.fn()
    render(<SlideDeck label="Aula" pages={pages} onPageChange={onPageChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Minha resposta' } })
    const { scroll } = geometry()
    scroll(500)
    expect(onPageChange).toHaveBeenLastCalledWith('two')
    expect(screen.getByRole('progressbar')).toHaveAttribute('value', '50')
    scroll(0)
    expect(screen.getByRole('textbox')).toHaveValue('Minha resposta')
    expect(
      screen.queryByRole('button', { name: /Voltar/ }),
    ).not.toBeInTheDocument()
  })

  it('scopes keyboard navigation to its focused scroll region and respects reduced motion', () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
    } as MediaQueryList)
    render(<SlideDeck label="Aula" pages={pages} />)
    const { viewport, scrollTo } = geometry()
    fireEvent.keyDown(viewport, { key: 'PageDown' })
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 500, behavior: 'instant' })
    fireEvent.keyDown(viewport, { key: 'End' })
    expect(scrollTo).toHaveBeenLastCalledWith({
      top: 1000,
      behavior: 'instant',
    })
    fireEvent.keyDown(viewport, { key: 'Home' })
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'instant' })
    scrollTo.mockClear()
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'End' })
    fireEvent.keyDown(viewport, { key: 'PageDown', ctrlKey: true })
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('allows native scrolling within a long slide before advancing', () => {
    render(<SlideDeck label="Aula" pages={pages} />)
    const { viewport, scrollTo } = geometry()
    vi.spyOn(viewport.children[0]!, 'getBoundingClientRect').mockReturnValue(
      new DOMRect(0, 0, 800, 1100),
    )
    expect(fireEvent.keyDown(viewport, { key: 'PageDown' })).toBe(true)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('navigates previous, preserving keyboard focus when the first-page button disappears', () => {
    render(<SlideDeck label="Aula" pages={pages} />)
    const { scroll, scrollTo, viewport } = geometry()
    scroll(500)
    fireEvent.click(screen.getByRole('button', { name: /Voltar/ }))
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'smooth' })
    expect(viewport).toHaveFocus()
  })

  it('accepts page requests, ignores unknown ids and uses the latest callback', () => {
    const original = vi.fn()
    const latest = vi.fn()
    const { rerender } = render(
      <SlideDeck label="Aula" pages={pages} onPageChange={original} />,
    )
    const { scrollTo, scroll } = geometry()
    rerender(
      <SlideDeck
        label="Aula"
        pages={pages}
        pageId="three"
        onPageChange={latest}
      />,
    )
    expect(scrollTo).toHaveBeenLastCalledWith({ top: 1000, behavior: 'smooth' })
    scroll(1000)
    expect(latest).toHaveBeenLastCalledWith('three')
    expect(original).not.toHaveBeenCalled()
    scrollTo.mockClear()
    rerender(<SlideDeck label="Aula" pages={pages} pageId="missing" />)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('supports empty/single-page collections and cleans up its observer', () => {
    const { rerender, unmount } = render(<SlideDeck label="Aula" pages={[]} />)
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    rerender(<SlideDeck label="Aula" pages={[pages[0]!]} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('max', '100')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    unmount()
    expect(disconnect).toHaveBeenCalled()
  })

  it('renders on the server without reading window or installing global listeners', () => {
    const html = renderToString(<SlideDeck label="Aula" pages={pages} />)
    expect(html).toContain('lsui-sc-slide-deck')
    expect(html).toContain('Outro exercício')
  })
})
