import { useState } from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'

it('keeps a learned word visible after closing its example and exploring another object', async () => {
  const play = vi.fn()
  function Fixture() {
    const [selected, select] = useState<string>()
    const [visited, visit] = useState<string[]>([])
    return (
      <SceneExplorer
        presentation="vocabulary"
        imageUrl="/objects.png"
        imageAlt="Objects at an airport"
        hotspots={[
          {
            id: 'passport',
            label: 'a passport',
            xPercent: 20,
            yPercent: 40,
            prompt: '',
            example: 'Here is my passport',
          },
          {
            id: 'bag',
            label: 'a suitcase',
            xPercent: 70,
            yPercent: 40,
            prompt: '',
            example: 'This is my suitcase',
          },
        ]}
        selectedId={selected}
        visitedIds={visited}
        onSelect={(id) => {
          select(id)
          visit((ids) => [...ids, id])
        }}
        onDismiss={() => select(undefined)}
        onPlayHotspot={play}
      />
    )
  }
  const user = userEvent.setup()
  render(<Fixture />)
  const passport = screen.getByRole('button', {
    name: 'a passport',
  })
  expect(within(passport).queryByText('a passport')).toBeNull()
  await user.click(passport)
  expect(within(passport).getByText('a passport')).toBeVisible()
  expect(play).toHaveBeenCalledWith('passport')
  await user.click(screen.getByRole('button', { name: 'Close: a passport' }))
  expect(screen.queryByRole('region')).toBeNull()
  expect(within(passport).getByText('a passport')).toBeVisible()
  await user.click(screen.getByRole('button', { name: 'a suitcase' }))
  expect(within(passport).getByText('a passport')).toBeVisible()
  expect(screen.getByRole('region', { name: 'a suitcase' })).toBeVisible()
})
