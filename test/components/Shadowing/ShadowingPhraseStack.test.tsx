import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { ShadowingPhraseStack } from '../../../src/components/Shadowing/ShadowingPhraseStack'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ShadowingPhraseStack data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ShadowingPhraseStack>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
