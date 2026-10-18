import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { AuthAccent } from '../../../src/components/Auth/AuthAccent'
import { AuthTitle } from '../../../src/components/Auth/AuthTitle'

describe('AuthTitle', () => {
  it('preserves a rich accessible heading and its native ref without a product theme', () => {
    const ref = createRef<HTMLHeadingElement>()

    render(
      <AuthTitle id="login-title" ref={ref}>
        Bom te ver de <AuthAccent>volta.</AuthAccent>
      </AuthTitle>,
    )

    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Bom te ver de volta.',
    })

    expect(ref.current).toBe(heading)
    expect(heading).toHaveAttribute('id', 'login-title')
    expect(heading).toHaveClass('lsui-sc-auth-title')
    expect(heading).toHaveStyle({ margin: '0', fontSize: '1.75rem' })
  })
})
