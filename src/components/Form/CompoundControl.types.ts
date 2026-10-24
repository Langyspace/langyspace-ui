import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FieldControlSize } from '../../foundations/fields'

export type CompoundControlSurface = 'surface' | 'muted'

export interface CompoundControlProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  disabled?: boolean
  invalid?: boolean
  leading?: ReactNode
  size?: FieldControlSize
  surface?: CompoundControlSurface
  trailing?: ReactNode
}
