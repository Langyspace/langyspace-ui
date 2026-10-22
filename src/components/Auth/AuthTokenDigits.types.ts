import type { ComponentPropsWithRef } from 'react'
import type { CompatibleAccessibleName } from '../../foundations/accessibility'

export type AuthTokenLength = 4 | 6

export type AuthTokenDigitsProps = Omit<
  ComponentPropsWithRef<'div'>,
  'aria-label' | 'aria-labelledby' | 'defaultValue' | 'onChange'
> &
  CompatibleAccessibleName & {
    autoFocus?: boolean
    digitLabel: string
    disabled?: boolean
    defaultValue?: string
    idPrefix: string
    invalid?: boolean
    length: number
    onValueChange: (token: string) => void
    value?: string
  }
