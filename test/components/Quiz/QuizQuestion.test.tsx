import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
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
