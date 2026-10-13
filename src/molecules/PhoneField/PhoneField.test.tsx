import { createRef, type ChangeEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PhoneField } from '.'

const countries = [
  {
    code: 'BR',
    name: 'Brasil',
    dialCode: '+55',
    flag: 'BR',
    placeholder: '00 00000 0000',
  },
  {
    code: 'IE',
    name: 'Irlanda',
    dialCode: '+353',
    flag: 'IE',
    placeholder: '00 000 0000',
  },
]
const props = {
  countries,
  country: countries[0],
  label: 'Celular',
  onCountryChange: vi.fn(),
}

describe('PhoneField', () => {
  it('does not submit the owner form while searching for a country', async () => {
    const user = userEvent.setup()
    const submit = vi.fn((event) => event.preventDefault())
    render(
      <form onSubmit={submit}>
        <PhoneField {...props} />
      </form>,
    )
    await user.click(screen.getByRole('button', { name: 'BR +55' }))
    await user.type(screen.getByLabelText('buscar pais'), 'IE{Enter}')
    expect(submit).not.toHaveBeenCalled()
    expect(screen.getAllByRole('option')).toHaveLength(1)
  })
  it('forwards native ref, formatted value, change and paste without normalizing', () => {
    const ref = createRef<HTMLInputElement>()
    let receivedValue = ''
    const change = vi.fn((event: ChangeEvent<HTMLInputElement>) => {
      receivedValue = event.currentTarget.value
    })
    const paste = vi.fn()
    render(
      <PhoneField
        {...props}
        ref={ref}
        value="00 12345 0000"
        onChange={change}
        onPaste={paste}
      />,
    )
    const input = screen.getByLabelText('Celular')
    expect(ref.current).toBe(input)
    expect(input).toHaveValue('00 12345 0000')
    expect(input).toHaveAttribute('autocomplete', 'tel')
    expect(input).toHaveAttribute('inputmode', 'tel')
    fireEvent.change(input, { target: { value: '+353 00 000 0000' } })
    expect(change).toHaveBeenCalledOnce()
    expect(receivedValue).toBe('+353 00 000 0000')
    fireEvent.paste(input, {
      clipboardData: { getData: () => '+353 00 000 0000' },
    })
    expect(paste).toHaveBeenCalledOnce()
  })

  it('associates generated id, native description and validation error', () => {
    render(
      <>
        <p id="hint">Exemplo sintético</p>
        <PhoneField
          {...props}
          aria-describedby="hint"
          errorMessage="Confira o celular"
        />
      </>,
    )
    const input = screen.getByLabelText('Celular')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription(
      'Exemplo sintético Confira o celular',
    )
    expect(screen.getByText('Confira o celular')).toHaveAttribute(
      'id',
      `${input.id}-error`,
    )
  })

  it('keeps supplied input id and native invalid state without an error message', () => {
    render(<PhoneField {...props} id="phone" aria-invalid="true" />)
    expect(screen.getByLabelText('Celular')).toHaveAttribute('id', 'phone')
    expect(screen.getByLabelText('Celular')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })

  it('filters by country name, code and dial code and selects exactly once', async () => {
    const user = userEvent.setup()
    const choose = vi.fn()
    render(<PhoneField {...props} onCountryChange={choose} />)
    const trigger = screen.getByRole('button', { name: 'BR +55' })
    await user.click(trigger)
    const search = screen.getByLabelText('buscar pais')
    await user.type(search, '353')
    expect(screen.getAllByRole('option')).toHaveLength(1)
    await user.click(screen.getByRole('option', { name: 'Irlanda +353' }))
    expect(choose).toHaveBeenCalledExactlyOnceWith(countries[1])
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
    await user.click(trigger)
    expect(search).not.toBeInTheDocument()
    expect(screen.getByLabelText('buscar pais')).toHaveValue('')
  })

  it('supports keyboard option navigation and Escape with restored focus', async () => {
    const user = userEvent.setup()
    render(<PhoneField {...props} />)
    const trigger = screen.getByRole('button', { name: 'BR +55' })
    await user.click(trigger)
    const options = screen.getAllByRole('option')
    expect(options[0]).toHaveAttribute('aria-selected', 'true')
    options[0].focus()
    await user.keyboard('{ArrowDown}')
    expect(options[1]).toHaveFocus()
    await user.keyboard('{Home}')
    expect(options[0]).toHaveFocus()
    await user.keyboard('{End}')
    expect(options[1]).toHaveFocus()
    await user.keyboard('{ArrowUp}')
    expect(options[0]).toHaveFocus()
    await user.keyboard('{Escape}')
    expect(trigger).toHaveFocus()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the list and hides it when input becomes disabled', async () => {
    const user = userEvent.setup()
    const view = render(<PhoneField {...props} />)
    const trigger = screen.getByRole('button', { name: 'BR +55' })
    await user.click(trigger)
    await user.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    await user.click(trigger)
    view.rerender(<PhoneField {...props} disabled />)
    expect(trigger).toBeDisabled()
    expect(screen.getByLabelText('Celular')).toBeDisabled()
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('preserves empty search without inventing a country or changing the input', async () => {
    const user = userEvent.setup()
    const choose = vi.fn()
    render(
      <PhoneField
        {...props}
        onCountryChange={choose}
        value="00 00000 0000"
        readOnly
      />,
    )
    await user.click(screen.getByRole('button', { name: 'BR +55' }))
    await user.type(screen.getByLabelText('buscar pais'), 'zzzz')
    expect(screen.queryByRole('option')).not.toBeInTheDocument()
    expect(choose).not.toHaveBeenCalled()
    expect(screen.getByLabelText('Celular')).toHaveValue('00 00000 0000')
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})
