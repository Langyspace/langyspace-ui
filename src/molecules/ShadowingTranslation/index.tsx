import * as Styled from './styles'
import type { ShadowingTranslationProps } from './types'

export function ShadowingTranslation({
  children,
  ...props
}: ShadowingTranslationProps) {
  const hasContent = children != null && children !== false

  return (
    <Styled.Root {...props}>
      {hasContent && (
        <div data-ui-shadowing-translation-content>{children}</div>
      )}
    </Styled.Root>
  )
}

export type { ShadowingTranslationProps } from './types'
