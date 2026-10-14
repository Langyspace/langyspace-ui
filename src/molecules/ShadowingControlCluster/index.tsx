import * as Styled from './styles'
import type { ShadowingControlClusterProps } from './types'
export function ShadowingControlCluster({
  ...props
}: ShadowingControlClusterProps) {
  return <Styled.Root {...props} />
}
export type { ShadowingControlClusterProps } from './types'
