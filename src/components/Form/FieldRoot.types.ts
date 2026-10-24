import type { ComponentPropsWithRef, ReactNode } from 'react'

export type FieldLabelVariant = 'default' | 'eyebrow'

export interface FieldRootProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  children: ReactNode
  controlId?: string
  error?: ReactNode
  hint?: ReactNode
  label: ReactNode
  labelVariant?: FieldLabelVariant
}
