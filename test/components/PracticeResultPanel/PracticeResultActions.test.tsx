import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeResultActions } from '../../../src/compatibility/PracticeResultPanel'

it('preserves caller semantics and attributes without domain state', () => {
  render(
    <PracticeResultActions data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeResultActions>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
