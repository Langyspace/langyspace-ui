import type { PressableProps } from './Pressable.types'
import * as Styled from './Pressable.styles'

export function Pressable({ type = 'button', ...nativeProps }: PressableProps) {
  return <Styled.Root {...nativeProps} type={type} />
}
