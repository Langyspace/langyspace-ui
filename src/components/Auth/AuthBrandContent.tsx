import type { ReactNode } from 'react'
import * as Styled from './AuthBrandContent.styles'

export interface AuthBrandContentProps {
  logo: ReactNode
  title: ReactNode
  highlight?: ReactNode
  description: ReactNode
  features: readonly ReactNode[]
  footer?: ReactNode
}

export function AuthBrandContent({
  logo,
  title,
  highlight,
  description,
  features,
  footer,
}: AuthBrandContentProps) {
  return (
    <>
      {logo}
      <Styled.Title>
        {title}
        {highlight != null && <Styled.Accent>{highlight}</Styled.Accent>}
      </Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.FeatureList>
        {features.map((feature, index) => (
          <Styled.Feature key={index}>
            <Styled.Mark aria-hidden="true" />
            {feature}
          </Styled.Feature>
        ))}
      </Styled.FeatureList>
      {footer}
    </>
  )
}
