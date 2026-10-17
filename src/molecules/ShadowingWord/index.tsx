import * as Styled from './styles'
import type { ShadowingWordProps } from './types'

export function ShadowingWord({
  state = 'pending',
  ...props
}: ShadowingWordProps) {
  return (
    <Styled.Root {...props} $state={state} data-ui-shadowing-word={state} />
  )
}

export type { ShadowingWordProps } from './types'
