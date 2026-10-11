import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { AuthDescription } from '.'

describe('AuthDescription', () => {
  it('preserves linked copy, label association, and a native ref without a product theme', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(
      <>
        <input aria-label="Celular" aria-describedby="phone-hint" />
        <AuthDescription id="phone-hint" ref={ref}>
          Confirme seu celular ou <a href="/ajuda">acesse a ajuda</a>.
        </AuthDescription>
      </>,
    )

    expect(screen.getByRole('textbox')).toHaveAccessibleDescription(
      'Confirme seu celular ou acesse a ajuda.',
    )
    expect(
      screen.getByRole('link', { name: 'acesse a ajuda' }),
    ).toHaveAttribute('href', '/ajuda')
    expect(ref.current).toHaveClass('lsui-sc-auth-description')
    expect(ref.current).toHaveStyle({ maxWidth: '25rem', fontSize: '0.875rem' })
  })
})
