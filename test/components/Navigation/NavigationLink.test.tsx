import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { NavigationLink } from '../../../src/components/Navigation/NavigationLink'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <NavigationLink data-testid="content" href="/materiais">
      <strong>Conteúdo fornecido</strong>
    </NavigationLink>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
  expect(screen.getByRole('link')).toHaveAttribute('href', '/materiais')
})

it('renders through a router link while keeping the library class and props', () => {
  const navigate = vi.fn()

  render(
    <NavigationLink
      aria-current="page"
      render={({ className, children, ...props }) => (
        <a
          {...props}
          className={className}
          href="/alunos"
          onClick={(event) => {
            event.preventDefault()
            navigate('/alunos')
          }}
        >
          {children}
        </a>
      )}
    >
      Alunos
    </NavigationLink>,
  )

  const link = screen.getByRole('link', { name: 'Alunos' })

  expect(link).toHaveAttribute('href', '/alunos')
  expect(link).toHaveAttribute('aria-current', 'page')
  expect(link.className).toMatch(/lsui-sc-navigation-link/)

  fireEvent.click(link)

  expect(navigate).toHaveBeenCalledWith('/alunos')
})
