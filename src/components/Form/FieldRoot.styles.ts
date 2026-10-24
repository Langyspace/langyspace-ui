import { css, styled } from 'styled-components'
import type { FieldLabelVariant } from './FieldRoot.types'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-field-root',
})`
  display: grid;
  min-width: 0;
  gap: ${theme.spacing[2]};
`

const labelVariants = {
  default: css`
    color: ${theme.colors.text.secondary};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.snug};
  `,
  eyebrow: css`
    margin-bottom: ${theme.spacing[1]};
    color: ${theme.colors.text.muted};
    font-weight: ${theme.typography.fontWeight.semibold};
    letter-spacing: 0.08em;
    line-height: ${theme.typography.lineHeight.normal};
    text-transform: uppercase;
  `,
}

export const Label = styled.label<{ $variant: FieldLabelVariant }>`
  font-size: ${theme.typography.fontSize.xs};
  ${({ $variant }) => labelVariants[$variant]}
`

export const Hint = styled.p`
  margin: 0;
  color: ${theme.colors.text.muted};
  font-size: 0.71875rem;
  line-height: ${theme.typography.lineHeight.normal};
`

export const Error = styled.p`
  margin: 0;
  color: ${theme.colors.feedback.danger};
  font-size: 0.71875rem;
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.normal};
`
