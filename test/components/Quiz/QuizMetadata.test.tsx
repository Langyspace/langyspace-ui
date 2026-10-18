import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { QuizMetadata } from '../../../src/components/Quiz/QuizMetadata'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <QuizMetadata data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </QuizMetadata>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
