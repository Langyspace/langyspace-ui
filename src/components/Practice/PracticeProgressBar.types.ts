import type { ComponentPropsWithRef } from 'react'

export interface PracticeProgressBarProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden' | 'role' | 'tabIndex'
> {
  /** Consumer-owned progress in the 0–1 range. Non-finite values render as zero. */
  value: number
}
