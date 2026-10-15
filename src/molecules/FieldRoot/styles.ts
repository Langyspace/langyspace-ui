import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { FieldLabelVariant } from './types'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-field-root',
})`
  display: grid;
  min-width: 0;
  gap: ${token.spacing2};
`

const labelVariants = {
  default: css`
    color: ${token.colorContentSecondary};
    font-weight: ${token.typographyFontWeightBold};
    line-height: ${token.typographyLineHeightSnug};
  `,
  eyebrow: css`
    margin-bottom: ${token.spacing1};
    color: ${token.colorContentMuted};
    font-weight: ${token.typographyFontWeightSemibold};
    letter-spacing: 0.08em;
    line-height: ${token.typographyLineHeightNormal};
    text-transform: uppercase;
  `,
}

export const Label = styled.label<{ $variant: FieldLabelVariant }>`
  font-size: ${token.typographyFontSizeXs};
  ${({ $variant }) => labelVariants[$variant]}
`

export const Hint = styled.p`
  margin: 0;
  color: ${token.colorContentMuted};
  font-size: 0.71875rem;
  line-height: ${token.typographyLineHeightNormal};
`

export const Error = styled.p`
  margin: 0;
  color: ${token.colorFeedbackDanger};
  font-size: 0.71875rem;
  font-weight: ${token.typographyFontWeightMedium};
  line-height: ${token.typographyLineHeightNormal};
`
