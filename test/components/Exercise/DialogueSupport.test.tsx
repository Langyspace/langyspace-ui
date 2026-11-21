import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
function SupportedDialogue() {
  const [level, setLevel] = useState<'cue' | 'hint' | 'full'>('cue')
  const [activeLineId, setActiveLineId] = useState<string>()
  return (
    <LearningDialogue
      presentation="paired"
      guidance={{
        placement: 'line',
        level,
        activeLineId,
        onChange: (next, id) => {
          setLevel(next)
          setActiveLineId(id)
        },
      }}
      lines={[
        { id: 'q1', speaker: 'Teacher', side: 'start', content: 'Name?' },
        {
          id: 'a1',
          speaker: 'You',
          participant: 'learner',
          side: 'end',
          guidanceLabel: 'Name',
          cue: 'First cue',
          hint: 'First hint',
          content: 'First model',
        },
        { id: 'q2', speaker: 'Teacher', side: 'start', content: 'City?' },
        {
          id: 'a2',
          speaker: 'You',
          participant: 'learner',
          side: 'end',
          guidanceLabel: 'City',
          cue: 'Second cue',
          hint: 'Second hint',
          content: 'Second model',
        },
      ]}
    />
  )
}
describe('contextual dialogue support', () => {
  it('opens one support at a time and collapses it from the same control', () => {
    render(<SupportedDialogue />)
    expect(
      screen.queryByRole('button', { name: 'Show model dialogue' }),
    ).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Show tip: Name' }))
    expect(
      screen.getByText('First hint').closest('[aria-hidden]'),
    ).toHaveAttribute('aria-hidden', 'false')
    fireEvent.click(screen.getByRole('button', { name: 'Show model: City' }))
    expect(
      screen.getByText('First hint').closest('[aria-hidden]'),
    ).toHaveAttribute('aria-hidden', 'true')
    expect(
      screen.getByText('Second model').closest('[aria-hidden]'),
    ).toHaveAttribute('aria-hidden', 'false')
    expect(
      screen.getByRole('button', { name: 'Hide model: City' }),
    ).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Hide model: City' }))
    expect(
      screen.getByText('Second cue').closest('[aria-hidden]'),
    ).toHaveAttribute('aria-hidden', 'false')
  })
})
