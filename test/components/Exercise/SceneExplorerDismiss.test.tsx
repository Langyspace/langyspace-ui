import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'

const props = {
  imageUrl: '/scene.webp',
  imageAlt: 'Getting ready',
  hotspots: [
    {
      id: 'makeup',
      label: 'put on makeup',
      xPercent: 58,
      yPercent: 52,
      prompt: null,
    },
  ],
  visitedIds: [],
  onSelect: vi.fn(),
}

it('offers an explicit close action without triggering selection or playback', () => {
  const dismiss = vi.fn(),
    play = vi.fn(),
    select = vi.fn()
  const view = render(
    <SceneExplorer
      {...props}
      onSelect={select}
      selectedId="makeup"
      onDismiss={dismiss}
      onPlayHotspot={play}
    />,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Close: put on makeup' }))
  expect(dismiss).toHaveBeenCalledOnce()
  expect(screen.getByRole('button', { name: /^put on makeup$/ })).toHaveFocus()
  expect(select).not.toHaveBeenCalled()
  expect(play).not.toHaveBeenCalled()
  view.rerender(
    <SceneExplorer {...props} selectedId={undefined} onDismiss={dismiss} />,
  )
  expect(screen.queryByRole('region', { name: 'put on makeup' })).toBeNull()
})

it('clears an uncontrolled selection on dismiss', () => {
  render(<SceneExplorer {...props} onDismiss={vi.fn()} />)
  fireEvent.click(screen.getByRole('button', { name: 'put on makeup' }))
  fireEvent.click(screen.getByRole('button', { name: 'Close: put on makeup' }))
  expect(screen.queryByRole('region', { name: 'put on makeup' })).toBeNull()
})

it('preserves existing callouts when no dismiss action is supplied', () => {
  render(<SceneExplorer {...props} selectedId="makeup" />)
  expect(screen.getByRole('region', { name: 'put on makeup' })).toBeVisible()
  expect(screen.queryByRole('button', { name: /Close:/ })).toBeNull()
})
