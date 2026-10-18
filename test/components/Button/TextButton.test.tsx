import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { expect, it, vi } from 'vitest'
import { styled } from 'styled-components'
import { TextButton } from '../../../src/compatibility/Button'

it.each(['emphasized', 'subtle', 'danger'] as const)(
  'keeps %s compatible with native form actions and refs',
  async (variant) => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    const onSubmit = vi.fn((event) => event.preventDefault())
    const ref = createRef<HTMLButtonElement>()
    render(
      <form onSubmit={onSubmit}>
        <TextButton
          variant={variant}
          ref={ref}
          onClick={onClick}
          data-context="filter"
          iconStart={<svg data-testid="icon" />}
        >
          <strong>Editar detalhes</strong>
        </TextButton>
      </form>,
    )
    const button = screen.getByRole('button', { name: 'Editar detalhes' })

    expect(button).toHaveClass('lsui-sc-text-button', 'lsui-sc-button')
    expect(button).toHaveAttribute('data-variant', variant)
    expect(button).toHaveAttribute('data-context', 'filter')
    expect(button).toHaveAttribute('type', 'button')
    expect(ref.current).toBe(button)
    expect(button.firstElementChild).toBe(screen.getByTestId('icon'))

    await user.click(button)

    expect(onClick).toHaveBeenCalledOnce()
    expect(onSubmit).not.toHaveBeenCalled()
  },
)

it('preserves styled consumer overrides, explicit submit and disabled behavior', async () => {
  const MenuAction = styled(TextButton)`
    width: 100%;
    min-height: 2.5rem;
    justify-content: flex-start;
    color: rgb(42, 42, 42);
    text-decoration: none;
  `
  const user = userEvent.setup()
  const onSubmit = vi.fn((event) => event.preventDefault())
  const { rerender } = render(
    <form onSubmit={onSubmit}>
      <MenuAction type="submit">Editar detalhes</MenuAction>
    </form>,
  )
  const button = screen.getByRole('button', { name: 'Editar detalhes' })

  expect(button).toHaveStyle({
    width: '100%',
    minHeight: '2.5rem',
    justifyContent: 'flex-start',
    color: 'rgb(42, 42, 42)',
    textDecoration: 'none',
  })

  await user.click(button)

  expect(onSubmit).toHaveBeenCalledOnce()

  rerender(
    <form onSubmit={onSubmit}>
      <MenuAction disabled type="submit">
        Editar detalhes
      </MenuAction>
    </form>,
  )
  await user.click(button)

  expect(onSubmit).toHaveBeenCalledOnce()
  expect(button).toHaveStyle({ opacity: '0.5' })
})
