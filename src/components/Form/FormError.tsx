import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.p.withConfig({ componentId: 'lsui-sc-form-error' })`
  margin: 0;
  padding: ${token.spacing3} ${token.spacing4};
  border: 1px solid ${token.colorFeedbackDanger};
  border-radius: ${token.radiusControl};
  color: ${token.colorFeedbackDanger};
  background: ${token.colorFeedbackDangerSoft};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`

export interface FormErrorProps extends Omit<
  ComponentPropsWithRef<'p'>,
  'role'
> {
  children: ReactNode
}

export function FormError({ children, ...props }: FormErrorProps) {
  return (
    <Root {...props} role="alert">
      {children}
    </Root>
  )
}
