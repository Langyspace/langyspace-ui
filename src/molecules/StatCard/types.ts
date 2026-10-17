import type { ComponentPropsWithRef } from 'react'

export interface StatCardProps extends ComponentPropsWithRef<'div'> {
  tone?: 'neutral' | 'brand'
}
