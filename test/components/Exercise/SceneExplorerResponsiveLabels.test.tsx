import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'

let frameWidth = 280
const resizeCallbacks = new Set<() => void>()
const targets = [
  ['headphones', 8, 33],
  ['a soccer ball', 38.3, 74.5],
  ['a book', 76, 43.5],
  ['a dog', 56, 72],
  ['a bike', 86, 68],
  ['a picnic', 30.5, 42],
  ['a bench', 89, 32],
  ['sneakers', 25, 83],
] as const
const hotspots = targets.map(([label, xPercent, yPercent]) => ({
  id: label,
  label,
  xPercent,
  yPercent,
  prompt: 'A practice question',
  answer: 'A practice answer',
}))
const props = {
  presentation: 'labels' as const,
  imageUrl: '/park.png',
  imageAlt: 'Park with eight objects',
  hotspots,
  visitedIds: [],
}
beforeEach(() => {
  frameWidth = 280
  resizeCallbacks.clear()
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
    () => new DOMRect(0, 0, frameWidth, (frameWidth * 2) / 3),
  )
  vi.stubGlobal(
    'ResizeObserver',
    class {
      private callback: () => void
      constructor(callback: () => void) {
        this.callback = callback
        resizeCallbacks.add(callback)
      }
      observe() {}
      disconnect() {
        resizeCallbacks.delete(this.callback)
      }
    },
  )
})
afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})
function resize(width: number) {
  frameWidth = width
  act(() => {
    for (const callback of Array.from(resizeCallbacks)) callback()
  })
}

describe('Scene responsive labeled vocabulary', () => {
  it('uses narrow dots with one vocabulary callout and explicit replay when uncontrolled', async () => {
    const user = userEvent.setup(),
      select = vi.fn(),
      play = vi.fn()
    render(
      <SceneExplorer
        {...props}
        onSelect={select}
        onPlayHotspot={play}
        onAnswerToggle={vi.fn()}
        answerVisible
      />,
    )
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    const book = screen.getByRole('button', { name: 'a book' })
    expect(book).not.toHaveTextContent('a book')
    expect(getComputedStyle(book).width).toBe('44px')
    expect(getComputedStyle(book).height).toBe('44px')
    await user.click(book)
    expect(select).toHaveBeenLastCalledWith('a book')
    expect(play).not.toHaveBeenCalled()
    const callout = screen.getByRole('region', { name: 'a book' })
    expect(callout).toHaveTextContent(/^a book$/)
    expect(screen.queryByText('A practice question')).not.toBeInTheDocument()
    expect(screen.queryByText('A practice answer')).not.toBeInTheDocument()
    await user.click(
      within(callout).getByRole('button', { name: 'Ouvir: a book' }),
    )
    expect(play).toHaveBeenCalledExactlyOnceWith('a book')
    await user.click(screen.getByRole('button', { name: 'a dog' }))
    expect(screen.getAllByRole('region')).toHaveLength(1)
    expect(screen.getByRole('region', { name: 'a dog' })).toBeVisible()
    expect(play).toHaveBeenCalledOnce()
    await user.click(screen.getByRole('button', { name: 'a dog' }))
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('lets controlled undefined and toggle-off override older local selection', async () => {
    const user = userEvent.setup(),
      select = vi.fn(),
      play = vi.fn()
    const { rerender } = render(
      <SceneExplorer {...props} onSelect={select} onPlayHotspot={play} />,
    )
    await user.click(screen.getByRole('button', { name: 'a book' }))
    expect(screen.getByRole('region', { name: 'a book' })).toBeVisible()
    rerender(
      <SceneExplorer
        {...props}
        selectedId={undefined}
        onSelect={select}
        onPlayHotspot={play}
      />,
    )
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'a dog' }))
    expect(select).toHaveBeenLastCalledWith('a dog')
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    rerender(
      <SceneExplorer
        {...props}
        selectedId="a dog"
        onSelect={select}
        onPlayHotspot={play}
      />,
    )
    expect(screen.getByRole('region', { name: 'a dog' })).toBeVisible()
    rerender(
      <SceneExplorer
        {...props}
        selectedId={undefined}
        onSelect={select}
        onPlayHotspot={play}
      />,
    )
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    expect(play).not.toHaveBeenCalled()
  })

  it('keeps wide one-click audio and the same focused button through narrow/wide resize', async () => {
    frameWidth = 800
    const user = userEvent.setup(),
      select = vi.fn(),
      play = vi.fn()
    render(<SceneExplorer {...props} onSelect={select} onPlayHotspot={play} />)
    const button = screen.getByRole('button', { name: 'Ouvir: a book' })
    expect(button).toHaveTextContent('a book')
    await user.click(button)
    expect(play).toHaveBeenCalledExactlyOnceWith('a book')
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    resize(280)
    const dot = screen.getByRole('button', { name: 'a book' })
    expect(dot).toBe(button)
    expect(dot).toHaveFocus()
    expect(dot).not.toHaveTextContent('a book')
    expect(screen.getByRole('region', { name: 'a book' })).toBeVisible()
    expect(play).toHaveBeenCalledOnce()
    resize(800)
    expect(screen.getByRole('button', { name: 'Ouvir: a book' })).toBe(button)
    expect(button).toHaveFocus()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    expect(play).toHaveBeenCalledOnce()
  })

  it('keeps narrow controls honest when playback is unavailable', async () => {
    const user = userEvent.setup(),
      select = vi.fn()
    render(<SceneExplorer {...props} onSelect={select} />)
    await user.click(screen.getByRole('button', { name: 'a bench' }))
    const callout = screen.getByRole('region', { name: 'a bench' })
    expect(callout).toHaveTextContent(/^a bench$/)
    expect(within(callout).queryByRole('button')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /^Ouvir/ }),
    ).not.toBeInTheDocument()
  })
})
