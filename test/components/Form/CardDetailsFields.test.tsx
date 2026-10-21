import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import {
  CardDetailsFields,
  type CardDetailsFieldsProps,
  type CardDetailsValue,
} from '../../../src/components/Form/CardDetailsFields'

const empty: CardDetailsValue = {
  holderName: '',
  number: '',
  expiry: '',
  securityCode: '',
  documentNumber: '',
  email: '',
  postalCode: '',
  addressNumber: '',
  phone: '',
}
function Controlled(
  props: Partial<CardDetailsFieldsProps> & {
    observe?: (value: CardDetailsValue) => void
  },
) {
  const [value, setValue] = useState(props.value ?? empty)
  return (
    <CardDetailsFields
      {...props}
      value={value}
      onChange={(next) => {
        setValue(next)
        props.observe?.(next)
      }}
    />
  )
}

describe('CardDetailsFields', () => {
  it('allows a country-aware phone control without rendering a second phone field', () => {
    render(
      <Controlled
        phoneField={
          <label>
            Telefone do cadastro
            <input name="phone" type="tel" defaultValue="83 123 4567" />
          </label>
        }
      />,
    )
    expect(screen.getByLabelText('Telefone do cadastro')).toHaveValue(
      '83 123 4567',
    )
    expect(
      screen.queryByLabelText('Telefone do titular com DDD'),
    ).not.toBeInTheDocument()
    expect(document.querySelectorAll('input[name="phone"]')).toHaveLength(1)
  })
  it.each([
    ['11999999999', '(11) 99999-9999'],
    ['1133334444', '(11) 3333-4444'],
    ['5511999999999', '+55 (11) 99999-9999'],
    ['551133334444', '+55 (11) 3333-4444'],
    ['353871234567', '353871234567'],
  ])(
    'formats phone %s while preserving its numeric payload',
    async (raw, formatted) => {
      const observe = vi.fn()
      render(<Controlled observe={observe} />)
      const phone = screen.getByLabelText(
        'Telefone do titular com DDD',
      ) as HTMLInputElement
      await userEvent.type(phone, raw)
      expect(phone).toHaveValue(formatted)
      expect(phone.validity.patternMismatch).toBe(false)
      expect(observe.mock.calls.at(-1)?.[0].phone).toBe(raw)
      await userEvent.clear(phone)
      await userEvent.paste(formatted)
      expect(phone).toHaveValue(formatted)
      expect(observe.mock.calls.at(-1)?.[0].phone).toBe(raw)
    },
  )

  it('deletes across phone punctuation without retaining the removed digit', async () => {
    const observe = vi.fn()
    render(
      <Controlled
        value={{ ...empty, phone: '11999999999' }}
        observe={observe}
      />,
    )
    const phone = screen.getByLabelText(
      'Telefone do titular com DDD',
    ) as HTMLInputElement
    phone.focus()
    fireEvent.input(phone, {
      target: { value: '(11) 999999999', selectionStart: 10 },
      inputType: 'deleteContentBackward',
    })
    await waitFor(() => expect(phone).toHaveValue('(11) 9999-9999'))
    expect(observe.mock.calls.at(-1)?.[0].phone).toBe('1199999999')
  })

  it('formats card, CPF, CNPJ, expiry and postal code while returning only digits', async () => {
    const observe = vi.fn()
    render(<Controlled observe={observe} />)
    await userEvent.type(
      screen.getByLabelText('Número do cartão'),
      '4111111111111111',
    )
    expect(screen.getByLabelText('Número do cartão')).toHaveValue(
      '4111 1111 1111 1111',
    )
    await userEvent.type(
      screen.getByLabelText('CPF ou CNPJ do titular'),
      '52998224725',
    )
    expect(screen.getByLabelText('CPF ou CNPJ do titular')).toHaveValue(
      '529.982.247-25',
    )
    await userEvent.clear(screen.getByLabelText('CPF ou CNPJ do titular'))
    await userEvent.type(
      screen.getByLabelText('CPF ou CNPJ do titular'),
      '11222333000181',
    )
    expect(screen.getByLabelText('CPF ou CNPJ do titular')).toHaveValue(
      '11.222.333/0001-81',
    )
    await userEvent.type(
      screen.getByLabelText('CEP da fatura do cartão'),
      '01001000',
    )
    await userEvent.type(screen.getByLabelText('Validade'), '122031')
    expect(screen.getByLabelText('CEP da fatura do cartão')).toHaveValue(
      '01001-000',
    )
    expect(screen.getByLabelText('Validade')).toHaveValue('12/2031')
    expect(observe.mock.calls.at(-1)?.[0]).toMatchObject({
      number: '4111111111111111',
      documentNumber: '11222333000181',
      postalCode: '01001000',
      expiry: '122031',
    })
  })

  it('accepts a formatted paste and groups an Amex number without truncating it', async () => {
    const observe = vi.fn()
    render(<Controlled observe={observe} />)
    await userEvent.click(screen.getByLabelText('Número do cartão'))
    await userEvent.paste('3782 822463 10005')
    expect(screen.getByLabelText('Número do cartão')).toHaveValue(
      '3782 822463 10005',
    )
    expect(observe.mock.calls.at(-1)?.[0].number).toBe('378282246310005')
  })

  it('keeps editing in the middle and removes a digit when backspacing across a separator', async () => {
    render(<Controlled value={{ ...empty, number: '4111111111111111' }} />)
    const input = screen.getByLabelText('Número do cartão') as HTMLInputElement
    input.focus()
    input.setSelectionRange(5, 5)
    fireEvent.input(input, {
      target: { value: '41111111 1111 1111', selectionStart: 4 },
      inputType: 'deleteContentBackward',
    })
    await waitFor(() => expect(input).toHaveValue('4111 1111 1111 111'))
    await waitFor(() => expect(input.selectionStart).toBe(3))
  })

  it('shows the numeric CVV and forwards native validation and disabled state', async () => {
    const view = render(<Controlled />)
    const cvv = screen.getByLabelText('Código de segurança')
    expect(cvv).toHaveAttribute('type', 'text')
    expect(cvv).toHaveAttribute('inputmode', 'numeric')
    expect(cvv).toHaveAttribute('autocomplete', 'cc-csc')
    await userEvent.type(cvv, '1234')
    expect(cvv).toHaveValue('1234')
    view.rerender(<Controlled disabled />)
    expect(cvv).toBeDisabled()
  })

  it('announces address lookup and error states without making its own request', async () => {
    const retry = vi.fn()
    const view = render(<Controlled postalCodeLookup={{ status: 'loading' }} />)
    expect(screen.getByRole('status')).toHaveTextContent('Consultando CEP')
    view.rerender(
      <Controlled
        postalCodeLookup={{
          status: 'found',
          address: 'Praça da Sé — Sé, São Paulo/SP',
        }}
      />,
    )
    expect(screen.getByRole('status')).toHaveTextContent('São Paulo/SP')
    view.rerender(<Controlled postalCodeLookup={{ status: 'not_found' }} />)
    expect(screen.getByLabelText('CEP da fatura do cartão')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    expect(screen.getByRole('alert')).toHaveTextContent('CEP não encontrado')
    view.rerender(
      <Controlled
        postalCodeLookup={{ status: 'error' }}
        onRetryPostalCode={retry}
      />,
    )
    await userEvent.click(
      screen.getByRole('button', { name: 'Consultar CEP novamente' }),
    )
    expect(retry).toHaveBeenCalledOnce()
  })
})
