import * as Styled from './styles'
import type { StatActionProps } from './types'
export function StatAction(props: StatActionProps) {
  return <Styled.Root {...props} data-ui-stat-action />
}
export type { StatActionProps } from './types'
