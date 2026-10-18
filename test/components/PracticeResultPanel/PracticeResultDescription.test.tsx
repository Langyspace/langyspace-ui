import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeResultDescription } from '../../../src/compatibility/PracticeResultPanel'

it('preserves caller semantics and attributes without domain state', () => {
  render(
    <PracticeResultDescription data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeResultDescription>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
