import * as Styled from './ShadowingTranslation.styles'
import type { ShadowingTranslationProps } from './ShadowingTranslation.types'

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
