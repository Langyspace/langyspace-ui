import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
function SequentialDialogue({
  modelsEnabled = true,
}: {
  modelsEnabled?: boolean
}) {
  const [hintedLineIds, hints] = useState<string[]>([])
  const [revealedLineIds, models] = useState<string[]>([])
  return (
    <LearningDialogue
      sequentialGuidance={{
        hintedLineIds,
        revealedLineIds,
        onRevealHint: (id) => hints((old) => (id ? [...old, id] : [])),
        onRevealModel: modelsEnabled
          ? (id) => models((old) => (id ? [...old, id] : []))
          : undefined,
      }}
      lines={[
        { id: 'q1', speaker: 'Teacher', side: 'start', content: 'Name?' },
        {
          id: 'a1',
          speaker: 'You',
          side: 'end',
          cue: 'Cue one',
          hint: 'Hint one',
          content: 'Model one',
        },
        { id: 'q2', speaker: 'Teacher', side: 'start', content: 'City?' },
        {
          id: 'a2',
          speaker: 'You',
          side: 'end',
          cue: 'Cue two',
          hint: 'Hint two',
          content: 'Model two',
        },
      ]}
    />
  )
}
const hidden = (text: string) => screen.getByText(text).closest('[aria-hidden]')
describe('shared sequential support', () => {
  it('offers a single hint action when no model action is supplied, retaining order and reset', () => {
    render(<SequentialDialogue modelsEnabled={false} />)
    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(hidden('Cue one')).toHaveAttribute('aria-hidden', 'false')
    fireEvent.click(screen.getByRole('button', { name: 'Show next tip (1/2)' }))
    expect(hidden('Hint one')).toHaveAttribute('aria-hidden', 'false')
    expect(hidden('Hint two')).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Show next tip (2/2)' }))
    expect(hidden('Hint one')).toHaveAttribute('aria-hidden', 'false')
    expect(hidden('Hint two')).toHaveAttribute('aria-hidden', 'false')
    expect(hidden('Model one')).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Hide tips' }))
    expect(hidden('Cue one')).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getAllByRole('button')).toHaveLength(1)
  })
  it('shows only two controls, retains ordered revelations and resets the completed layer', () => {
    render(<SequentialDialogue />)
    expect(screen.getAllByRole('button')).toHaveLength(2)
    expect(getComputedStyle(hidden('Hint one')!).display).toBe('none')
    expect(getComputedStyle(hidden('Model one')!).display).toBe('none')
    fireEvent.click(screen.getByRole('button', { name: 'Show next tip (1/2)' }))
    expect(hidden('Hint one')).toHaveAttribute('aria-hidden', 'false')
    expect(getComputedStyle(hidden('Hint one')!).display).not.toBe('none')
    expect(hidden('Hint two')).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Show next tip (2/2)' }))
    expect(hidden('Hint one')).toHaveAttribute('aria-hidden', 'false')
    expect(hidden('Hint two')).toHaveAttribute('aria-hidden', 'false')
    fireEvent.click(screen.getByRole('button', { name: 'Hide tips' }))
    expect(hidden('Cue one')).toHaveAttribute('aria-hidden', 'false')
  })
  it('keeps models visible, skips them for tips and enables hints after hiding models', () => {
    render(<SequentialDialogue />)
    fireEvent.click(
      screen.getByRole('button', { name: 'Show next model (1/2)' }),
    )
    fireEvent.click(screen.getByRole('button', { name: 'Show next tip (2/2)' }))
    expect(hidden('Model one')).toHaveAttribute('aria-hidden', 'false')
    expect(hidden('Hint two')).toHaveAttribute('aria-hidden', 'false')
    fireEvent.click(
      screen.getByRole('button', { name: 'Show next model (2/2)' }),
    )
    expect(
      screen.getByRole('button', { name: 'Models are already shown' }),
    ).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'Hide models' }))
    expect(hidden('Hint two')).toHaveAttribute('aria-hidden', 'false')
    expect(
      screen.getByRole('button', { name: 'Show next tip (1/2)' }),
    ).toBeEnabled()
  })
})
