import type { InputHTMLAttributes } from 'react'

export interface PhoneCountryOption {
  code: string
  dialCode: string
  flag: string
  name: string
  placeholder: string
}

export interface PhoneFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  countries: readonly PhoneCountryOption[]
  country: PhoneCountryOption
  errorMessage?: string
  label: string
  onCountryChange: (country: PhoneCountryOption) => void
}
