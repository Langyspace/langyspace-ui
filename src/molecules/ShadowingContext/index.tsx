import * as Styled from './styles'
import type { ShadowingContextProps } from './types'
export function ShadowingContext({ ...props }: ShadowingContextProps) {
  return <Styled.Root {...props} />
}
export type { ShadowingContextProps } from './types'
