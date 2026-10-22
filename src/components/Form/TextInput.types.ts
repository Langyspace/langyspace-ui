import type { ComponentPropsWithRef } from 'react'
import type { FieldControlSize } from '../../foundations/fields'

export interface TextInputProps extends Omit<
  ComponentPropsWithRef<'input'>,
  'size'
> {
  size?: FieldControlSize
}

export type { FieldControlSize as TextInputSize } from '../../foundations/fields'
