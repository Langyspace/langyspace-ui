import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeResultTitle } from '../../../src/compatibility/PracticeResultPanel'

it('preserves caller semantics and attributes without domain state', () => {
  render(
    <PracticeResultTitle data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeResultTitle>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
