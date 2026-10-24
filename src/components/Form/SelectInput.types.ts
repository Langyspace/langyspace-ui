import type { ComponentPropsWithRef } from 'react'
import type { FieldControlSize } from '../../foundations/fields'

export interface SelectInputProps extends Omit<
  ComponentPropsWithRef<'select'>,
  'size'
> {
  size?: FieldControlSize
}

export type { FieldControlSize as SelectInputSize } from '../../foundations/fields'
