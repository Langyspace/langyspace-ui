import type { ComponentPropsWithRef, ReactNode } from 'react'

import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'

const Link = styled.a.withConfig({
  componentId: 'lsui-sc-auth-top-link',
})`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${authRecipe.spacing[1]};
  color: ${authRecipe.colors.text.muted};
  font-size: ${authRecipe.typography.fontSize.sm};
  font-weight: ${authRecipe.typography.fontWeight.regular};
  line-height: ${authRecipe.typography.lineHeight.normal};
  text-decoration: none;

  @media (max-width: ${authRecipe.breakpoints.xs}) {
    font-size: ${authRecipe.typography.fontSize.xs};
  }
`

const Highlight = styled.span.withConfig({
  componentId: 'lsui-sc-auth-top-link-highlight',
})`
  color: ${authRecipe.colors.text.primary};
  text-decoration: underline;
  text-underline-offset: 0.12em;
`

export interface AuthTopLinkProps extends ComponentPropsWithRef<'a'> {
  children: ReactNode
  highlight?: ReactNode
}

export function AuthTopLink({
  children,
  highlight,
  ...props
}: AuthTopLinkProps) {
  return (
    <Link {...props}>
      {children}
      {highlight != null && (
        <>
          {' '}
          <Highlight>{highlight}</Highlight>
        </>
      )}
    </Link>
  )
}
