import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  VocabularySection,
  GapSection,
  ComprehensionSection,
} from '../../../stories/materials/A201/A201.practice'
import {
  PersonalSection,
  RolePlaySection,
} from '../../../stories/materials/A201/A201.conversation'

describe('A2.01 official oral lesson', () => {
  it('keeps the scene concealed on keyboard focus and reveals the complete chunk without audio', async () => {
    const user = userEvent.setup()
    render(<VocabularySection />)
    const first = screen.getByRole('button', {
      name: 'Mostrar palavra 1: Estou trabalhando.',
    })
    await user.tab()
    expect(first).toHaveFocus()
    expect(first).toHaveAttribute('aria-expanded', 'false')
    await user.keyboard('{Enter}')
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAccessibleName('I’m working.: Estou trabalhando.')
    expect(
      screen.queryByRole('button', { name: /listen|play/i }),
    ).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Show all' }))
    expect(screen.getByText('I’m walking.', { exact: true })).toBeVisible()
  })
  it('keeps incorrect gap choices retryable, advances six gaps and retains all eight dialogue lines', async () => {
    const user = userEvent.setup()
    render(<GapSection />)
    await user.click(screen.getByRole('button', { name: 'A is' }))
    expect(screen.getByText('Try again.')).toBeVisible()
    expect(screen.getByText('0 of 6')).toBeVisible()
    for (const answer of [
      'are',
      'walking',
      'working',
      'am',
      'drinking',
      'not',
    ]) {
      const button = screen
        .getAllByRole('button')
        .find(
          (node) => node.textContent?.replace(/^[AB]/, '').trim() === answer,
        )
      expect(button).toBeDefined()
      fireEvent.click(button!)
    }
    expect(
      screen.getByText('Complete. Read the conversation with your teacher.'),
    ).toBeVisible()
    expect(
      screen.getByText('I’m walking to my meeting. It’s at ten.'),
    ).toBeVisible()
    expect(screen.queryByText('Try again.')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
  it('reveals factual answers while personal questions stay open', async () => {
    const user = userEvent.setup()
    const view = render(<ComprehensionSection />)
    expect(
      screen.queryByText('She’s working in Porto.'),
    ).not.toBeInTheDocument()
    await user.click(
      screen.getByRole('button', { name: /Where is Ana working this week/ }),
    )
    expect(screen.getByText('She’s working in Porto.')).toBeVisible()
    expect(
      screen.getByText('Are you working or studying at home this week?'),
    ).toBeVisible()
    view.unmount()
    render(<PersonalSection />)
    expect(screen.queryByText('I usually…')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Show support' }))
    expect(screen.getByText('I usually…')).toBeVisible()
  })
  it('preserves checklist progress across signal, support, role changes and optional scene cues', async () => {
    const user = userEvent.setup()
    render(<RolePlaySection />)
    const step = screen.getByRole('button', { name: /Find out where Kim/ })
    await user.click(step)
    await user.click(screen.getByRole('button', { name: 'Bad signal' }))
    expect(screen.getByRole('button', { name: 'Signal OK' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Swap roles' }))
    expect(step).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('You: Kim · Teacher: Ana')).toBeVisible()
    await user.click(screen.getByRole('button', { name: 'Show action cues' }))
    expect(screen.getByAltText('Estou trabalhando.')).toBeVisible()
    await user.click(screen.getByRole('button', { name: 'Next action' }))
    expect(screen.getByAltText('Estou caminhando.')).toBeVisible()
  })
})
