import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { PracticeResultTitle } from '.'
afterEach(cleanup)
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
