import { useState } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { beforeEach, expect, it, vi } from 'vitest'
import { ComicRolePlay } from '../../../src/components/Exercise/ComicRolePlay'
import { TrialA1Comic } from '../../../stories/materials/TrialA1/TrialA1Comic'
import { comicPanels } from '../../../stories/materials/TrialA1/TrialA1Comic.data'
import { order } from '../../../stories/materials/TrialA1/TrialA1.data'

const context = vi.hoisted(() => ({
  learner: undefined as { firstName: string; avatarUrl: string } | undefined,
}))
vi.mock('../../../stories/materials/shared/MaterialLearnerContext', () => ({
  useMaterialLearner: () => context.learner,
}))
vi.mock('../../../stories/materials/shared/MaterialTeacherContext', () => ({
  useMaterialTeacher: () => ({
    name: 'Adriana Nogueira',
    avatarUrl: '/teacher.webp',
  }),
}))
beforeEach(() => {
  context.learner = undefined
})
const participants = [
  { id: 'learner', name: 'You' },
  { id: 'teacher', name: 'Your teacher' },
]
function Interactive() {
  const [hints, setHints] = useState<string[]>([])
  const [models, setModels] = useState<string[]>([])
  return (
    <ComicRolePlay
      panels={comicPanels}
      participants={participants}
      guidance={{
        hintedTurnIds: hints,
        revealedTurnIds: models,
        onRevealHint: (id) => setHints((old) => (id ? [...old, id] : [])),
        onRevealModel: (id) => setModels((old) => (id ? [...old, id] : [])),
      }}
    />
  )
}

it('starts with four complete pictures and eight genuinely empty speaking slots', () => {
  render(<Interactive />)
  const pictures = screen.getAllByRole('listitem')
  expect(pictures).toHaveLength(4)
  expect(screen.getAllByRole('img')).toHaveLength(4)
  const slots = screen.getAllByRole('group')
  expect(slots).toHaveLength(8)
  for (const slot of slots) expect(slot).toBeEmptyDOMElement()
  for (const [i, picture] of pictures.entries())
    expect(within(picture).getByRole('img')).toHaveAttribute(
      'src',
      comicPanels[i]!.imageUrl,
    )
  expect(screen.queryByText('Do you like music?')).not.toBeInTheDocument()
  expect(screen.getAllByRole('button')).toHaveLength(2)
})

it('reveals hints and examples in order with keyboard activation, replacing rather than duplicating support', async () => {
  const user = userEvent.setup()
  render(<Interactive />)
  await user.tab()
  await user.keyboard('{Enter}')
  expect(screen.getByRole('group', { name: 'You, turn 1' })).toHaveTextContent(
    'Cumprimente',
  )
  await user.tab()
  await user.keyboard('{Enter}')
  expect(screen.getByRole('group', { name: 'You, turn 1' })).toHaveTextContent(
    'Hi!',
  )
  expect(screen.queryByText('Cumprimente')).not.toBeInTheDocument()
  await user.click(
    screen.getByRole('button', { name: 'Show next speaking tip' }),
  )
  expect(
    screen.getByRole('group', { name: 'Your teacher, turn 2' }),
  ).toHaveTextContent('Pergunte o nome')
  for (let i = 1; i < 8; i++)
    await user.click(screen.getByRole('button', { name: 'Show next example' }))
  expect(
    screen.getByRole('group', { name: 'Your teacher, turn 8' }),
  ).toHaveTextContent('Bye! See you!')
  await user.click(screen.getByRole('button', { name: 'Hide examples' }))
  expect(screen.getByRole('group', { name: 'You, turn 1' })).toHaveTextContent(
    'Cumprimente',
  )
  expect(
    screen.getByRole('group', { name: 'Your teacher, turn 2' }),
  ).toHaveTextContent('Pergunte o nome')
})

it('works without support controls and delegates failed profile photos', () => {
  const failed = vi.fn()
  const { container } = render(
    <ComicRolePlay
      panels={comicPanels}
      participants={[
        { id: 'learner', name: 'Margarida', avatarUrl: '/broken.webp' },
      ]}
      onParticipantImageError={failed}
    />,
  )
  fireEvent.error(container.querySelector('img[src="/broken.webp"]')!)
  expect(failed).toHaveBeenCalledExactlyOnceWith('learner', '/broken.webp')
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})

it('binds real participant identity and returns to You when the learner photo fails', () => {
  context.learner = {
    firstName: 'Margarida',
    avatarUrl: 'https://example.com/learner.webp',
  }
  const { container } = render(<TrialA1Comic />)
  expect(screen.getByText('Margarida')).toBeVisible()
  expect(screen.getByText('Adriana')).toBeVisible()
  expect(screen.queryByText('Adriana Nogueira')).not.toBeInTheDocument()
  fireEvent.error(
    container.querySelector('img[src="https://example.com/learner.webp"]')!,
  )
  expect(screen.getByText('You')).toBeVisible()
  expect(screen.queryByText('Margarida')).not.toBeInTheDocument()
})

it('replaces the final repeated tasks while preserving the trial opening, practice and school-team ending', () => {
  expect(order).toEqual([
    's1',
    's2',
    's3',
    's3-rehearse',
    's3-independent',
    's4',
    's5',
    'next-steps',
  ])
  render(<TrialA1Comic />)
  expect(screen.getByText('You')).toBeVisible()
  expect(screen.queryByText('Yes, I do / No, I don’t')).not.toBeInTheDocument()
})

it('server-renders long examples in normal flow without clipping text or adding an inner scroller', () => {
  const sheet = new ServerStyleSheet()
  try {
    const ids = comicPanels.flatMap((panel) =>
      panel.turns.map((turn) => turn.id),
    )
    const panels = comicPanels.map((panel) => ({
      ...panel,
      turns: panel.turns.map((turn) => ({
        ...turn,
        model:
          'A much longer personal answer that can wrap naturally to several lines',
      })),
    }))
    const html = renderToString(
      sheet.collectStyles(
        <ComicRolePlay
          panels={panels}
          participants={participants}
          guidance={{
            hintedTurnIds: [],
            revealedTurnIds: ids,
            onRevealHint: () => undefined,
            onRevealModel: () => undefined,
          }}
        />,
      ),
    )
    expect(html).toContain('lsui-sc-comic-role-play')
    expect(html.match(/A much longer personal answer/g)).toHaveLength(8)
    const css = sheet.getStyleTags()
    expect(css).not.toMatch(/overflow(?:-y)?:\s*(auto|scroll)/)
    expect(css).toContain('object-fit:contain')
    expect(css).toMatch(/grid-template-columns:\s*minmax\(0,\s*1fr\)/)
  } finally {
    sheet.seal()
  }
})
