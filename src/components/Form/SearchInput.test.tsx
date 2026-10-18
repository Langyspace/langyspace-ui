import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SearchInput } from './SearchInput'
import type {
  SearchInputClearAction,
  SearchInputProps,
} from './SearchInput.types'

describe('SearchInput', () => {
  it('keeps a stable callback ref attached and runs its React cleanup on unmount', () => {
    const cleanup = vi.fn()
    const ref = vi.fn(() => cleanup)
    const { rerender, unmount } = render(
      <SearchInput aria-label="Busca" ref={ref} value="A" readOnly />,
    )
    const input = screen.getByRole('searchbox')

    rerender(<SearchInput aria-label="Busca" ref={ref} value="AB" readOnly />)

    expect(ref).toHaveBeenCalledExactlyOnceWith(input)
    expect(cleanup).not.toHaveBeenCalled()

    unmount()

    expect(cleanup).toHaveBeenCalledTimes(1)
    expect(ref).toHaveBeenCalledTimes(1)
  })

  it('focuses the input when its decorative icon or surface is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<SearchInput aria-label="Busca" />)
    const input = screen.getByRole('searchbox', { name: 'Busca' })

    await user.click(container.querySelector('svg')!)

    expect(input).toHaveFocus()

    input.blur()
    await user.click(container.querySelector('[data-ui-compound-control]')!)

    expect(input).toHaveFocus()
  })

  it('does not focus a disabled search when its surface is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<SearchInput aria-label="Busca" disabled />)

    await user.click(container.querySelector('svg')!)

    expect(screen.getByRole('searchbox')).not.toHaveFocus()
  })

  it('clears the value through the consumer callback and restores focus', async () => {
    const onClear = vi.fn()
    const user = userEvent.setup()

    render(
      <SearchInput
        aria-label="Buscar aluno"
        clearLabel="Limpar busca"
        onClear={onClear}
        value="Maria"
        readOnly
      />,
    )

    const input = screen.getByRole('searchbox', { name: 'Buscar aluno' })

    await user.click(screen.getByRole('button', { name: 'Limpar busca' }))

    expect(onClear).toHaveBeenCalledTimes(1)
    expect(input).toHaveFocus()
  })

  it('requires consumer copy when a clear action exists', () => {
    const withoutClear: SearchInputClearAction = {}
    const withClear: SearchInputClearAction = {
      clearLabel: 'Limpar busca',
      onClear: () => undefined,
    }

    // @ts-expect-error onClear requires explicit product copy
    const missingCopy: SearchInputClearAction = {
      onClear: () => undefined,
    }

    expect(withoutClear.onClear).toBeUndefined()
    expect(withClear.clearLabel).toBe('Limpar busca')
    expect(missingCopy.onClear).toBeTypeOf('function')

    const legacyCompatibleProps: SearchInputProps = {
      'aria-label': 'Buscar',
      onClear: () => undefined,
    }

    expect(legacyCompatibleProps.onClear).toBeTypeOf('function')
  })
})
