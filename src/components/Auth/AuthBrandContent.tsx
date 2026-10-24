import * as Styled from './AuthBrandContent.styles'
import type { AuthBrandContentProps } from './AuthBrandContent.types'

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
          // Features are static copy rendered in their given order.
          // eslint-disable-next-line @eslint-react/no-array-index-key
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
