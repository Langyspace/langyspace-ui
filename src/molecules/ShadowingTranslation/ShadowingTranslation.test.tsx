import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { ShadowingTranslation } from '.'

afterEach(cleanup)

it('styles plain content and leaves rich descendant layouts untouched', () => {
  const { rerender } = render(
    <ShadowingTranslation>Uma tradução</ShadowingTranslation>,
  )

  expect(screen.getByText('Uma tradução')).toHaveStyle({
    fontSize: '0.875rem',
    display: 'flex',
  })

  rerender(
    <ShadowingTranslation>
      <div data-testid="rich" style={{ display: 'grid' }}>
        Texto rico
      </div>
    </ShadowingTranslation>,
  )

  expect(screen.getByTestId('rich')).toHaveStyle({ display: 'grid' })
})

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ShadowingTranslation data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ShadowingTranslation>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
