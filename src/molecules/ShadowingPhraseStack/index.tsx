import * as Styled from './styles'
import type { ShadowingPhraseStackProps } from './types'
export function ShadowingPhraseStack({
  rising = false,
  ...props
}: ShadowingPhraseStackProps) {
  return <Styled.Root {...props} $rising={rising} />
}
export type { ShadowingPhraseStackProps } from './types'
