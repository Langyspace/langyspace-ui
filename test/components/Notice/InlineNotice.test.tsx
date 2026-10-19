import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { InlineNotice } from '../../../src/components/Notice/InlineNotice'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <InlineNotice data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </InlineNotice>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
