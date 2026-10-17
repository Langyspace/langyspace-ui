import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { QuizBadge } from '.'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <QuizBadge data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </QuizBadge>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
