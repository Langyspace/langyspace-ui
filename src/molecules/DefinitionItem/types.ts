import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface DefinitionItemProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  label: ReactNode
  value: ReactNode
  valueTitle?: string
}
