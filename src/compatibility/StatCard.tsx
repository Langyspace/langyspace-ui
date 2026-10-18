import * as Styled from '../components/StatCard/StatCard.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface StatValueProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

/** @deprecated Prefer StatCard; retained for existing consumers. */
export function StatValue({ children, ...props }: StatValueProps) {
  return <Styled.Value {...props}>{children}</Styled.Value>
}

export interface StatLabelProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

/** @deprecated Prefer StatCard; retained for existing consumers. */
export function StatLabel({ children, ...props }: StatLabelProps) {
  return <Styled.Label {...props}>{children}</Styled.Label>
}

export interface StatActionProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

/** @deprecated Prefer StatCard; retained for existing consumers. */
export function StatAction(props: StatActionProps) {
  return <Styled.Action {...props} data-ui-stat-action />
}
