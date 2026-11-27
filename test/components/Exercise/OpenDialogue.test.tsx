import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { MaterialPersonalDialogue } from '../../../stories/materials/shared/MaterialPersonalDialogue'
import conversation from '../../../stories/materials/A101/A101.personal-conversations.json'
import type { MaterialPersonalDialogueTurn } from '../../../stories/materials/shared/MaterialPersonalDialogue.types'

const identities = vi.hoisted(() => ({
  teacher: {
    name: 'Adriana',
    avatarUrl: 'https://example.test/teacher.jpg',
    identified: true,
  },
  learner: {
    firstName: 'Maria',
    avatarUrl: 'https://example.test/learner.jpg',
  },
}))
vi.mock('../../../stories/materials/shared/MaterialTeacherContext', () => ({
  useMaterialTeacher: () => identities.teacher,
}))
vi.mock('../../../stories/materials/shared/MaterialLearnerContext', () => ({
  useMaterialLearner: () => identities.learner,
}))

function OpenExample() {
  const [gapValues, setGaps] = useState<Record<string, string>>({})
  return (
    <LearningDialogue
      lines={[
        {
          id: 'line',
          speaker: 'You',
          side: 'end',
          content: 'I’m from …',
          parts: [
            'I’m from ',
            { kind: 'open', id: 'country', label: 'Country' },
            '!',
            { id: 'fixed', answer: 'Brazil' },
          ],
        },
      ]}
      gapValues={gapValues}
      onGapChange={(id, value) => setGaps((old) => ({ ...old, [id]: value }))}
    />
  )
}
it('accepts arbitrary personal answers and keeps fixed reveal gaps as a separate interaction', () => {
  render(<OpenExample />)
  const input = screen.getByRole('textbox', { name: 'You: Country' })
  for (const value of [
    'Brazil',
    'the United States',
    'São Paulo',
    'somewhere else',
  ]) {
    fireEvent.change(input, { target: { value } })
    expect(input).toHaveValue(value)
    expect(input).not.toHaveAttribute('aria-invalid')
  }
  expect(
    screen.getByRole('button', { name: 'Reveal answer 4' }),
  ).toHaveAttribute('aria-expanded', 'false')
  expect(screen.queryByRole('status')).toBeNull()
  expect(screen.queryByRole('audio')).toBeNull()
})
it('binds both participant identities, preserves independent gaps and clears answers on participant replacement', () => {
  const lines = conversation.someone as readonly MaterialPersonalDialogueTurn[]
  const view = render(<MaterialPersonalDialogue lines={lines} />)
  expect(screen.getAllByText('Adriana')).toHaveLength(4)
  expect(screen.getAllByText('Maria')).toHaveLength(3)
  expect(view.container.querySelector('img')).toHaveAttribute(
    'src',
    identities.teacher.avatarUrl,
  )
  expect(
    screen.queryByRole('textbox', { name: 'Adriana: Greeting' }),
  ).toBeNull()
  expect(screen.getAllByRole('textbox')).toHaveLength(3)
  fireEvent.change(
    screen.getByRole('textbox', { name: 'Maria: Friend’s country' }),
    {
      target: { value: 'Brazil' },
    },
  )
  expect(
    screen.getByRole('textbox', { name: 'Maria: Friend’s country' }),
  ).toHaveValue('Brazil')
  identities.learner = {
    firstName: 'Bia',
    avatarUrl: 'https://example.test/bia.jpg',
  }
  view.rerender(<MaterialPersonalDialogue lines={lines} />)
  expect(
    screen.getByRole('textbox', { name: 'Bia: Friend’s country' }),
  ).toHaveValue('')
  expect(view.container.querySelector('audio')).toBeNull()
})
