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
  /** Overrides the Portuguese field labels and lookup messages. */
  labels?: Partial<CardDetailsFieldsLabels>
}

export interface CardDetailsFieldsLabels {
  fields: Partial<Record<keyof CardDetailsValue, string>>
  postalCodeLookupFailed: string
  postalCodeNotFound: string
  retryPostalCode: string
}

export interface CardDetailsFieldDefinition {
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
}
