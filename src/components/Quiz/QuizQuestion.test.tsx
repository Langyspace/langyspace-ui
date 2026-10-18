import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { QuizQuestion } from './QuizQuestion'

afterEach(cleanup)

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
