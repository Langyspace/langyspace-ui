import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import type { LearningDialogueLine } from '../../../src/components/Exercise/LearningDialogue.types'
const lines: LearningDialogueLine[] = [
  { id: 'model', speaker: 'Kim', side: 'start', content: 'What’s your name?' },
  {
    id: 'learner',
    speaker: 'You',
    participant: 'learner',
    side: 'end',
    content: 'My name is …',
  },
]
describe('controlled learner identity', () => {
  it('requires both first name and photo and preserves fictional speakers', () => {
    const view = render(
      <LearningDialogue
        lines={lines}
        learnerIdentity={{ firstName: 'Ana Maria', avatarUrl: '' }}
      />,
    )
    expect(screen.getByText('You')).toBeVisible()
    view.rerender(
      <LearningDialogue
        lines={lines}
        learnerIdentity={{
          firstName: 'Ana Maria',
          avatarUrl: 'https://example.test/ana.png',
        }}
      />,
    )
    expect(screen.getByText('Ana')).toBeVisible()
    expect(screen.getByText('Kim')).toBeVisible()
    expect(view.container.querySelector('img')).toHaveAttribute(
      'src',
      'https://example.test/ana.png',
    )
    view.rerender(<LearningDialogue lines={lines} />)
    expect(screen.getByText('You')).toBeVisible()
    expect(screen.queryByText('Ana')).not.toBeInTheDocument()
  })
  it('returns to You on image failure and accepts a subsequent photo', () => {
    const view = render(
      <LearningDialogue
        lines={lines}
        learnerIdentity={{
          firstName: 'Ana',
          avatarUrl: 'https://example.test/broken.png',
        }}
      />,
    )
    fireEvent.error(view.container.querySelector('img')!)
    expect(screen.getByText('You')).toBeVisible()
    expect(screen.queryByText('Ana')).not.toBeInTheDocument()
    view.rerender(
      <LearningDialogue
        lines={lines}
        learnerIdentity={{
          firstName: 'Bia',
          avatarUrl: 'https://example.test/bia.png',
        }}
      />,
    )
    expect(screen.getByText('Bia')).toBeVisible()
  })
})
