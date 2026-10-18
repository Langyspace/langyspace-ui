import type { ComponentPropsWithRef, ReactNode } from 'react'

import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'

const Eyebrow = styled.span.withConfig({
  componentId: 'lsui-sc-auth-eyebrow',
})`
  display: inline-flex;
  margin-bottom: ${authRecipe.spacing.responsive.block.sm};
  padding: 0.375rem 0.875rem;
  border: ${authRecipe.borders.default};
  border-radius: ${authRecipe.radius.pill};
  background-color: ${authRecipe.colors.surface.raised};
  color: ${authRecipe.colors.text.primary};
  font-size: ${authRecipe.typography.fontSize.xs};
  font-weight: ${authRecipe.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media (max-width: ${authRecipe.breakpoints.mobileShell}) {
    margin-bottom: ${authRecipe.spacing.responsive.compactBlock.sm};
  }
`

export interface AuthEyebrowProps extends ComponentPropsWithRef<'span'> {
  children: ReactNode
}

export function AuthEyebrow({ children, ...props }: AuthEyebrowProps) {
  return <Eyebrow {...props}>{children}</Eyebrow>
}
