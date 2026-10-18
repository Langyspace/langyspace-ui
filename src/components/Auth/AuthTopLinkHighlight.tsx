import type { ComponentPropsWithRef, ReactNode } from 'react'

import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'

const Highlight = styled.span.withConfig({
  componentId: 'lsui-sc-auth-top-link-highlight',
})`
  color: ${authRecipe.colors.text.primary};
  text-decoration: underline;
  text-underline-offset: 0.12em;
`

export interface AuthTopLinkHighlightProps extends ComponentPropsWithRef<'span'> {
  children: ReactNode
}

export function AuthTopLinkHighlight({
  children,
  ...props
}: AuthTopLinkHighlightProps) {
  return <Highlight {...props}>{children}</Highlight>
}
