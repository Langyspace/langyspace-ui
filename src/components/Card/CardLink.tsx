import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { cardRecipe } from '../../foundations/surfaces/cardRecipe'

const Root = styled.a.withConfig({ componentId: 'lsui-sc-card-link' })`
  ${cardRecipe};
  display: block;
  color: inherit;
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;
  &:hover {
    border-color: ${token.colorSurfaceBorderStrong};
  }
  &:focus-visible {
    outline: 3px solid #f10f4d;
    outline-offset: 3px;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export type CardLinkProps = ComponentPropsWithRef<'a'>

export function CardLink({ children, ...props }: CardLinkProps) {
  return <Root {...props}>{children}</Root>
}
