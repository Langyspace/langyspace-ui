import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import type React from 'react'
import { AuthTopLink } from '../../../src/components/Auth/AuthTopLink'

it('keeps navigation and modifier handling with the caller', () => {
  const click = vi.fn((event: React.MouseEvent) => event.preventDefault())

  render(
    <AuthTopLink href="/cadastro" onClick={click}>
      Cadastro
    </AuthTopLink>,
  )

  const link = screen.getByRole('link', { name: 'Cadastro' })

  expect(link.getAttribute('href')).toBe('/cadastro')

  fireEvent.click(link, { ctrlKey: true })

  expect(click).toHaveBeenCalledOnce()
})
