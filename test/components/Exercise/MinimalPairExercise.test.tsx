import { render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'

const choices = [
  { id: 'a', word: 'It was a bit rushed.', phonetic: 'Version A' },
  { id: 'b', word: 'It was a bit rushed.', phonetic: 'Version B' },
]

it('does not announce a score for an ungraded comparison while retaining its layout row', () => {
  render(
    <MinimalPairExercise mode="listen" choices={choices} onSelect={vi.fn()} />,
  )

  expect(screen.queryByRole('img')).not.toBeInTheDocument()
  expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
    'aria-hidden',
    'true',
  )
})

it('announces the supplied score for a graded exercise', () => {
  render(
    <MinimalPairExercise
      mode="listen"
      choices={choices}
      onSelect={vi.fn()}
      score={[
        { id: 'first', result: 'correct' },
        { id: 'second', result: 'incorrect' },
      ]}
    />,
  )

  expect(screen.getByRole('img', { name: 'Placar: 1 / 2' })).toHaveAttribute(
    'aria-hidden',
    'false',
  )
})
