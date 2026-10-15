import * as Styled from './styles'
import type { StatCardProps } from './types'
export function StatCard({ tone = 'neutral', ...props }: StatCardProps) {
  return <Styled.Root {...props} data-tone={tone} />
}
export type { StatCardProps } from './types'
