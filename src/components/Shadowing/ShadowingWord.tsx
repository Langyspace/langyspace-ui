import type { ShadowingWordProps } from './ShadowingWord.types'
import * as Styled from './ShadowingWord.styles'

export function ShadowingWord({
  state = 'pending',
  ...props
}: ShadowingWordProps) {
  return (
    <Styled.Root {...props} $state={state} data-ui-shadowing-word={state} />
  )
}
