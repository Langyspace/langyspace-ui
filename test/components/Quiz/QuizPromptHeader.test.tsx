import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { QuizPromptHeader } from '../../../src/components/Quiz/QuizPromptHeader'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <QuizPromptHeader data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </QuizPromptHeader>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
