import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-form-stack',
})`
  display: grid;
  min-width: 0;
  align-content: start;
  gap: ${token.spacing5};
`

export interface FormStackProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function FormStack({ children, ...props }: FormStackProps) {
  return <Root {...props}>{children}</Root>
}
