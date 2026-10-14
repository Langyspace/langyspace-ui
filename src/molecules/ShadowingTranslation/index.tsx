import * as Styled from './styles'
import type { ShadowingTranslationProps } from './types'
export function ShadowingTranslation({ ...props }: ShadowingTranslationProps) {
  return <Styled.Root {...props} />
}
export type { ShadowingTranslationProps } from './types'
