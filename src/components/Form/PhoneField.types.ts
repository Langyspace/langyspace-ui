import type { ComponentPropsWithRef } from 'react'

export interface PhoneCountryOption {
  code: string
  dialCode: string
  flag: string
  name: string
  placeholder: string
}

export interface PhoneFieldProps extends Omit<
  ComponentPropsWithRef<'input'>,
  'size'
> {
  countries: readonly PhoneCountryOption[]
  /** Accessible name of the country list. @default 'País' */
  countryListLabel?: string
  /** Label and placeholder of the country search. @default 'buscar pais' */
  countrySearchLabel?: string
  country: PhoneCountryOption
  errorMessage?: string
  label: string
  onCountryChange: (country: PhoneCountryOption) => void
}
