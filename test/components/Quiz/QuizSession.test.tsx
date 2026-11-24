import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import { QuizSession } from '../../../src/components/Quiz/QuizSession'
const header = {
  name: 'Introductions',
  counter: '1/6',
  progress: 0.1,
  backLabel: 'Voltar',
  onBack: () => {},
}
describe('QuizSession controlled Student surface', () => {
  it('delegates answer and next actions without owning scoring or persistence', () => {
    const select = vi.fn(),
      next = vi.fn()
    const question = {
      level: 'A1',
      counter: 'Questão 1 de 6',
      detail: 'Gramática · 6 min',
      prompt: 'Choose the correct sentence',
      context: 'Talking about your home country',
      options: [
        { id: 'a', label: 'I’m from Brazil' },
        { id: 'b', label: 'I from Brazil' },
      ],
      onSelect: select,
    }
    const { rerender } = render(
      <QuizSession aria-label="Quiz" header={header} question={question} />,
    )
    fireEvent.click(screen.getByRole('button', { name: /I’m from Brazil/ }))
    expect(select).toHaveBeenCalledExactlyOnceWith('a')
    expect(screen.queryByText('Isso mesmo!')).not.toBeInTheDocument()
    rerender(
      <QuizSession
        header={header}
        question={{
          ...question,
          options: question.options.map((option) => ({
            ...option,
            disabled: true,
          })),
          feedback: { tone: 'correct', content: 'Isso mesmo!' },
          nextAction: { label: 'Próxima', onClick: next },
        }}
      />,
    )
    expect(screen.getByText('Isso mesmo!')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Próxima' }))
    expect(next).toHaveBeenCalledOnce()
    fireEvent.click(screen.getByRole('button', { name: /I’m from Brazil/ }))
    expect(select).toHaveBeenCalledOnce()
  })
  it('keeps replay independent of choosing or advancing and supports result content', () => {
    const replay = vi.fn(),
      select = vi.fn()
    const { rerender } = render(
      <QuizSession
        header={header}
        question={{
          level: 'B1',
          counter: '1/6',
          detail: 'Gramática',
          prompt: 'Complete the sentence',
          narrationAction: <button onClick={replay}>Ouvir o enunciado</button>,
          options: [
            { id: 'a', label: 'have' },
            { id: 'b', label: 'has' },
          ],
          onSelect: select,
        }}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Ouvir o enunciado' }))
    expect(replay).toHaveBeenCalledOnce()
    expect(select).not.toHaveBeenCalled()
    rerender(
      <QuizSession header={{ ...header, counter: '6/6', progress: 1 }}>
        <p>Resultado da atividade</p>
      </QuizSession>,
    )
    expect(screen.getByText('Resultado da atividade')).toBeVisible()
    expect(screen.queryByText('Complete the sentence')).not.toBeInTheDocument()
  })
  it('server-renders the shared header and question without browser media APIs', () => {
    const html = renderToString(
      <QuizSession
        header={header}
        question={{
          level: 'C1',
          counter: '1/6',
          detail: 'Grammar',
          prompt: 'Which form fits?',
          options: [{ id: 'a', label: 'Had I known' }],
          onSelect: () => {},
        }}
      />,
    )
    expect(html).toContain('lsui-sc-quiz-session')
    expect(html).toContain('Had I known')
    expect(html).not.toContain('<audio')
  })
})
