import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { PracticeResultActions } from '.'

afterEach(cleanup)

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
