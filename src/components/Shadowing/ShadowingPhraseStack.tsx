import type { ShadowingPhraseStackProps } from './ShadowingPhraseStack.types'
import * as Styled from './ShadowingPhraseStack.styles'

export function ShadowingPhraseStack({
  rising = false,
  ...props
}: ShadowingPhraseStackProps) {
  return <Styled.Root {...props} $rising={rising} />
}
