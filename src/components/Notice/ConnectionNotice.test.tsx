import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { ConnectionNotice } from './ConnectionNotice'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ConnectionNotice data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ConnectionNotice>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
