import type { ComponentPropsWithRef } from 'react'
import type { FieldControlSize } from '../../foundations/fields'

export interface TextareaInputProps extends ComponentPropsWithRef<'textarea'> {
  size?: FieldControlSize
}

export type { FieldControlSize as TextareaInputSize } from '../../foundations/fields'
