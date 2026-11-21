import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TrialA1LiveConversation } from '../../../stories/materials/TrialA1/TrialA1LiveConversation'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import { order } from '../../../stories/materials/TrialA1/TrialA1.data'

const identity = vi.hoisted(() => ({
  teacher: {
    name: 'Camila Oliveira',
    avatarUrl: 'https://example.org/teacher.jpg',
  },
  learner: undefined as { firstName: string; avatarUrl: string } | undefined,
}))
vi.mock('../../../stories/materials/shared/MaterialTeacherContext', () => ({
  useMaterialTeacher: () => identity.teacher,
}))
vi.mock('../../../stories/materials/shared/MaterialLearnerContext', () => ({
  useMaterialLearner: () => identity.learner,
}))
beforeEach(() => {
  identity.learner = undefined
})
afterEach(cleanup)

const visibleLayer = (text: string) =>
  screen.getByText(text).closest('[aria-hidden]')

describe('separate TrialA1 conversation stages', () => {
  it('places both practice pages after the recorded model and retains every previous page', () => {
    expect(order).toEqual([
      's1',
      's2',
      's3',
      's3-rehearse',
      's3-independent',
      's41',
      's42',
      's43',
      's5',
      's6',
    ])
  })
  it('shows all three exchanges with the real teacher and one progressive support row below', () => {
    const { container } = render(
      <MaterialTheme>
        <TrialA1LiveConversation />
      </MaterialTheme>,
    )
    expect(screen.getAllByText('Camila', { exact: true })).toHaveLength(3)
    expect(screen.getAllByText('You', { exact: true })).toHaveLength(3)
    expect(
      container.querySelectorAll('img[src="https://example.org/teacher.jpg"]'),
    ).toHaveLength(3)
    expect(screen.queryByText('Kim', { exact: true })).toBeNull()
    for (const question of [
      'Do you like music?',
      'What do you like?',
      'Do you like soccer?',
    ])
      expect(screen.getByText(question, { exact: true })).toBeVisible()
    expect(
      screen.queryByRole('button', { name: /Next turn|Show support/ }),
    ).toBeNull()
    expect(screen.getAllByRole('button')).toHaveLength(2)
    const bulb = screen.getByRole('button', { name: 'Show next tip (1/3)' })
    const dialogue = container.querySelector(
      '[class*="lsui-sc-learning-dialogue"]',
    )!
    expect(dialogue.children).toHaveLength(6)
    expect(
      dialogue.compareDocumentPosition(bulb) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    fireEvent.click(bulb)
    expect(
      visibleLayer('Diga se gosta de música e pergunte de volta'),
    ).toHaveAttribute('aria-hidden', 'false')
    expect(
      visibleLayer('Use I like para dizer duas coisas de que você gosta'),
    ).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Show next tip (2/3)' }))
    expect(
      visibleLayer('Use I like para dizer duas coisas de que você gosta'),
    ).toHaveAttribute('aria-hidden', 'false')
    fireEvent.click(
      screen.getByRole('button', { name: 'Show next model (1/3)' }),
    )
    expect(visibleLayer('Yes, I do. / No, I don’t. And you?')).toHaveAttribute(
      'aria-hidden',
      'false',
    )
    expect(visibleLayer('I like … and …')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })
  it('binds the supplied learner photo and first name without changing teacher identity', () => {
    identity.learner = {
      firstName: 'Bruna',
      avatarUrl: 'https://example.org/student.jpg',
    }
    const { container } = render(
      <MaterialTheme>
        <TrialA1LiveConversation />
      </MaterialTheme>,
    )
    expect(screen.getAllByText('Bruna', { exact: true })).toHaveLength(3)
    expect(screen.getAllByText('Camila', { exact: true })).toHaveLength(3)
    expect(
      container.querySelectorAll('img[src="https://example.org/student.jpg"]'),
    ).toHaveLength(3)
  })
  it('starts with learner instructions and reveals three ordered tips/models below the conversation', () => {
    const { container } = render(
      <MaterialTheme>
        <TrialA1LiveConversation independent />
      </MaterialTheme>,
    )
    const dialogue = container.querySelector(
      '[class*="lsui-sc-learning-dialogue"]',
    )!
    expect(dialogue.children).toHaveLength(6)
    expect(dialogue.firstElementChild).toHaveTextContent('You')
    const stem = screen.getByText('Ask about something your teacher likes', {
      exact: true,
    })
    expect(stem).toBeVisible()
    expect(
      screen.getByText('Answer and add one thing you like', { exact: true }),
    ).toBeVisible()
    expect(
      screen.getByText('Give your opinion, then ask back', { exact: true }),
    ).toBeVisible()
    expect(visibleLayer('Do you like …?')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
    expect(
      getComputedStyle(dialogue.firstElementChild!.lastElementChild!).flex,
    ).not.toBe('1 1 0%')
    expect(screen.queryByText(/music|soccer|Your teacher is Kim/)).toBeNull()
    expect(screen.getAllByRole('button')).toHaveLength(2)
    const bulb = screen.getByRole('button', { name: 'Show next tip (1/3)' })
    expect(
      dialogue.compareDocumentPosition(bulb) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    fireEvent.click(bulb)
    expect(
      visibleLayer('Escolha um assunto e use Do you like para perguntar'),
    ).toHaveAttribute('aria-hidden', 'false')
    expect(
      visibleLayer(
        'Use Yes, I do ou No, I don’t e acrescente algo de que você gosta',
      ),
    ).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(
      screen.getByRole('button', { name: 'Show next model (1/3)' }),
    )
    expect(visibleLayer('Do you like …?')).toHaveAttribute(
      'aria-hidden',
      'false',
    )
    fireEvent.click(screen.getByRole('button', { name: 'Show next tip (2/3)' }))
    expect(
      visibleLayer(
        'Use Yes, I do ou No, I don’t e acrescente algo de que você gosta',
      ),
    ).toHaveAttribute('aria-hidden', 'false')
    expect(
      visibleLayer('I like … . / I don’t like … . And you?'),
    ).toHaveAttribute('aria-hidden', 'true')
  })
})
