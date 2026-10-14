import * as Styled from './styles'
import type { ShadowingContextPhraseProps } from './types'
export function ShadowingContextPhrase({
  ...props
}: ShadowingContextPhraseProps) {
  return <Styled.Root {...props} />
}
export type { ShadowingContextPhraseProps } from './types'
