import { render, screen } from '@testing-library/react'
import { it, expect, vi } from 'vitest'
import { fireEvent } from '@testing-library/react'
import { QuizQuestion } from '../../../src/components/Quiz/QuizQuestion'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <QuizQuestion data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </QuizQuestion>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})

it('keeps the prompt and supplied narration action separately accessible', () => {
  const replay = vi.fn()
  render(
    <QuizQuestion
      context="Before Friday"
      action={<button onClick={replay}>Ouvir enunciado</button>}
    >
      Choose the correct sentence
    </QuizQuestion>,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Ouvir enunciado' }))
  expect(replay).toHaveBeenCalledOnce()
  expect(screen.getByText('Choose the correct sentence')).toBeTruthy()
  expect(screen.getByText('Before Friday')).toBeTruthy()
})
