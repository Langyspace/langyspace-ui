import type { ComponentPropsWithRef } from 'react'
import type { CompatibleAccessibleName } from '../../foundations/accessibility'

export type FilterToolbarProps = Omit<
  ComponentPropsWithRef<'div'>,
  'role' | 'aria-label' | 'aria-labelledby'
> &
  CompatibleAccessibleName
