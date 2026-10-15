import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FieldControlSize } from '../../foundations/fields'
export interface FilterSelectProps extends Omit<
  ComponentPropsWithRef<'select'>,
  'size' | 'multiple'
> {
  children: ReactNode
  size?: FieldControlSize
}
