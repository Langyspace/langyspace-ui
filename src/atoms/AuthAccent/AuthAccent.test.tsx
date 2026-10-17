import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { AuthAccent } from '.'

describe('AuthAccent', () => {
  it('keeps the parent accessible name and supports an inline native ref', () => {
    const ref = createRef<HTMLSpanElement>()

    render(
      <h2>
        Confira seu <AuthAccent ref={ref}>celular.</AuthAccent>
      </h2>,
    )

    expect(
      screen.getByRole('heading', { name: 'Confira seu celular.' }),
    ).toContainElement(ref.current)
    expect(ref.current).toHaveClass('lsui-sc-auth-accent')
    expect(ref.current).toHaveStyle({ color: 'rgb(255, 31, 92)' })
  })
})
