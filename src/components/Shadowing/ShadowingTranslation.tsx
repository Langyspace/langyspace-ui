import * as Styled from './ShadowingTranslation.styles'

import type { ComponentPropsWithRef } from 'react'

export type ShadowingTranslationProps = ComponentPropsWithRef<'div'>

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
