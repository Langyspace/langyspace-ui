import type { ComponentPropsWithRef, ReactNode } from 'react'

import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'
import starSrc from '../../assets/brand/star.svg'

const Root = styled.li.withConfig({
  componentId: 'lsui-sc-auth-feature',
})`
  display: flex;
  align-items: center;
  gap: ${authRecipe.spacing[3]};
  color: rgba(255, 255, 255, 0.92);
  font-size: ${authRecipe.typography.fontSize.md};
`

const Mark = styled.img.attrs({
  alt: '',
  src: starSrc,
})`
  display: block;
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
  object-fit: contain;
`

export interface AuthFeatureProps extends ComponentPropsWithRef<'li'> {
  children: ReactNode
}

export function AuthFeature({ children, ...props }: AuthFeatureProps) {
  return (
    <Root {...props}>
      <Mark aria-hidden="true" />
      {children}
    </Root>
  )
}
