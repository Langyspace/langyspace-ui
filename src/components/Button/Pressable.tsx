import * as Styled from './Pressable.styles'

import type { ComponentPropsWithRef as NativePropsWithRef } from 'react'

export type PressableProps = NativePropsWithRef<'button'>

export function Pressable({ type = 'button', ...nativeProps }: PressableProps) {
  return <Styled.Pressable {...nativeProps} type={type} />
}
