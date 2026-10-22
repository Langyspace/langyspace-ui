import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const Notice = styled.aside.withConfig({
  componentId: 'lsui-sc-notice-banner',
})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: ${theme.spacing[3]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.palette.neutral[100]};
  box-shadow:
    0 1px 0 ${alpha(theme.colors.palette.neutral[900], 0.04)},
    0 1px 2px ${alpha(theme.colors.palette.neutral[900], 0.04)};
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: flex-start;
  }
`

export const Icon = styled.span.withConfig({
  componentId: 'lsui-sc-notice-icon',
})`
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius.pill};
  background: ${theme.colors.palette.neutral[200]};
  color: ${theme.colors.text.secondary};
`

export const Copy = styled.div.withConfig({
  componentId: 'lsui-sc-notice-copy',
})`
  min-width: 0;
`

export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-notice-actions',
})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[2]};
  @media (max-width: ${theme.breakpoints.md}) {
    grid-column: 1 / -1;
    justify-self: end;
    margin-top: ${theme.spacing[3]};
  }
`

export const Title = styled.strong.withConfig({
  componentId: 'lsui-sc-notice-title',
})`
  display: block;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.snug};
`

export const Text = styled.span.withConfig({
  componentId: 'lsui-sc-notice-text',
})`
  display: block;
  margin-top: ${theme.spacing[1]};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`
