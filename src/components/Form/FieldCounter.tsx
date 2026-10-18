import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.span.withConfig({
  componentId: 'lsui-sc-field-counter',
})`
  flex-shrink: 0;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: 400;
  line-height: ${token.typographyLineHeightSnug};
`

export interface FieldCounterProps extends ComponentPropsWithRef<'span'> {
  children: ReactNode
}

export function FieldCounter({ children, ...props }: FieldCounterProps) {
  return <Root {...props}>{children}</Root>
}
