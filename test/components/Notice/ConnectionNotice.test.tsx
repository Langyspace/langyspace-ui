import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { ConnectionNotice } from '../../../src/components/Notice/ConnectionNotice'

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
