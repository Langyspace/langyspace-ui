import type { ComponentPropsWithRef } from 'react'
export interface ShadowingRepetitionsProps extends ComponentPropsWithRef<'div'> {
  total: number
  value?: number
  playing?: boolean
}
