import { useId } from 'react'
import { Button } from '../Button/Button'
import * as Styled from './CardDetailsFields.styles'
import {
  digits,
  formatCardNumber,
  formatDocumentNumber,
  formatExpiry,
  formatPhone,
  formatPostalCode,
  maskedEdit,
} from './CardDetailsFields.format'
import type { HTMLInputAutoCompleteAttribute, ReactNode } from 'react'

/** Numeric fields contain digits only; formatting never enters the consumer's payload. */
export interface CardDetailsValue {
  holderName: string
  number: string
  expiry: string
  securityCode: string
  documentNumber: string
  email: string
  postalCode: string
  addressNumber: string
  phone: string
}

export type CardPostalCodeLookup =
  | { status: 'idle' | 'loading' | 'not_found' | 'error' }
  | { status: 'found'; address: string }

export interface CardDetailsFieldsProps {
  value: CardDetailsValue
  onChange: (value: CardDetailsValue) => void
  disabled?: boolean
  postalCodeLookup?: CardPostalCodeLookup
  onRetryPostalCode?: () => void
  /** A consumer may supply its existing country-aware phone control. */
  phoneField?: ReactNode
}

const fields: Array<{
  name: keyof CardDetailsValue
  label: string
  accessibleLabel?: string
  autoComplete: HTMLInputAutoCompleteAttribute
  limit: number
  maxLength?: number
  span: number
  wide?: boolean
  numeric?: boolean
  pattern?: string
  placeholder?: string
  format?: (value: string) => string
}> = [
  {
    name: 'holderName',
    label: 'Nome do titular',
    autoComplete: 'cc-name',
    limit: 100,
    span: 12,
  },
  {
    name: 'number',
    label: 'Número do cartão',
    autoComplete: 'cc-number',
    limit: 19,
    maxLength: 23,
    span: 12,
    numeric: true,
    pattern: '(?:[0-9] ?){13,19}',
    format: formatCardNumber,
  },
  {
    name: 'expiry',
    label: 'Validade',
    autoComplete: 'cc-exp',
    limit: 6,
    maxLength: 7,
    span: 6,
    numeric: true,
    pattern: '(0[1-9]|1[0-2])/[0-9]{2}([0-9]{2})?',
    placeholder: 'MM/AA',
    format: formatExpiry,
  },
  {
    name: 'securityCode',
    label: 'Código de segurança',
    autoComplete: 'cc-csc',
    limit: 4,
    span: 6,
    numeric: true,
    pattern: '[0-9]{3,4}',
  },
  {
    name: 'documentNumber',
    label: 'CPF ou CNPJ do titular',
    autoComplete: 'off',
    limit: 14,
    maxLength: 18,
    span: 6,
    wide: true,
    numeric: true,
    pattern:
      '(?:[0-9]{3}[.][0-9]{3}[.][0-9]{3}-[0-9]{2}|[0-9]{2}[.][0-9]{3}[.][0-9]{3}/[0-9]{4}-[0-9]{2})',
    format: formatDocumentNumber,
  },
  {
    name: 'email',
    label: 'E-mail do titular',
    autoComplete: 'email',
    limit: 254,
    span: 6,
    wide: true,
  },
  {
    name: 'phone',
    label: 'Telefone do titular com DDD',
    autoComplete: 'tel-national',
    limit: 13,
    maxLength: 19,
    span: 12,
    numeric: true,
    pattern: '(?:(?:\\+55 )?\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}|[0-9]{10,13})',
    placeholder: '(11) 99999-9999',
    format: formatPhone,
  },
  {
    name: 'postalCode',
    label: 'CEP da fatura',
    accessibleLabel: 'CEP da fatura do cartão',
    autoComplete: 'postal-code',
    limit: 8,
    maxLength: 9,
    span: 8,
    numeric: true,
    pattern: '[0-9]{5}-[0-9]{3}',
    format: formatPostalCode,
  },
  {
    name: 'addressNumber',
    label: 'Número',
    accessibleLabel: 'Número do endereço',
    autoComplete: 'off',
    limit: 20,
    span: 4,
  },
]

/** Presentation only: no network, persistence, analytics, card registration or submission. */
export function CardDetailsFields({
  value,
  onChange,
  disabled,
  postalCodeLookup,
  onRetryPostalCode,
  phoneField,
}: CardDetailsFieldsProps) {
  const addressId = useId()
  const postalError =
    postalCodeLookup?.status === 'not_found'
      ? 'CEP não encontrado. Confira os números.'
      : undefined
  return (
    <Styled.Grid
      className="ph-no-capture ph-no-autocapture"
      data-private="true"
    >
      {fields.map((field) =>
        field.name === 'phone' && phoneField !== undefined ? (
          <Styled.PhoneSlot key={field.name}>{phoneField}</Styled.PhoneSlot>
        ) : (
          <Styled.Field
            key={field.name}
            label={field.label}
            $span={field.span}
            $wide={field.wide}
            error={field.name === 'postalCode' ? postalError : undefined}
          >
            <Styled.Input
              aria-label={field.accessibleLabel}
              type={
                field.name === 'email'
                  ? 'email'
                  : field.name === 'phone'
                    ? 'tel'
                    : 'text'
              }
              autoComplete={field.autoComplete}
              inputMode={field.numeric ? 'numeric' : undefined}
              maxLength={field.maxLength ?? field.limit}
              pattern={field.pattern}
              placeholder={field.placeholder}
              required
              disabled={disabled}
              name={field.name}
              value={
                field.format
                  ? field.format(value[field.name])
                  : value[field.name]
              }
              aria-describedby={
                field.name === 'postalCode' &&
                postalCodeLookup &&
                ['loading', 'found', 'error'].includes(postalCodeLookup.status)
                  ? addressId
                  : undefined
              }
              aria-busy={
                (field.name === 'postalCode' &&
                  postalCodeLookup?.status === 'loading') ||
                undefined
              }
              onChange={(event) => {
                const next = field.format
                  ? maskedEdit(
                      event.currentTarget,
                      value[field.name],
                      field.limit,
                      field.format,
                      (event.nativeEvent as InputEvent).inputType,
                    )
                  : field.numeric
                    ? digits(event.target.value, field.limit)
                    : event.target.value
                onChange({ ...value, [field.name]: next })
              }}
            />
          </Styled.Field>
        ),
      )}
      {postalCodeLookup?.status === 'loading' ? (
        <Styled.Address id={addressId} role="status">
          Consultando CEP…
        </Styled.Address>
      ) : null}
      {postalCodeLookup?.status === 'found' ? (
        <Styled.Address id={addressId} role="status">
          {postalCodeLookup.address}
        </Styled.Address>
      ) : null}
      {postalCodeLookup?.status === 'error' ? (
        <Styled.Address id={addressId} role="status">
          Não foi possível consultar o CEP. Confira o endereço da fatura ou
          tente novamente.{' '}
          {onRetryPostalCode ? (
            <Button
              type="button"
              variant="text"
              size="sm"
              disabled={disabled}
              onClick={onRetryPostalCode}
            >
              Consultar CEP novamente
            </Button>
          ) : null}
        </Styled.Address>
      ) : null}
    </Styled.Grid>
  )
}
