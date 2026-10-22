import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-practice-card-cover',
})`
  display: flex;
  min-height: 128px;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  color: ${theme.colors.palette.white};
  background: ${theme.colors.palette.neutral[900]};
  @media (max-width: ${theme.breakpoints.mobileShell}) {
    min-height: 0;
    aspect-ratio: 16 / 9;
  }
`

export const Value = styled.div.withConfig({
  componentId: 'lsui-sc-practice-cover-value',
})`
  color: inherit;
  font-size: 40px;
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1;
  display: flex;
  align-items: center;
`

export const Label = styled.div.withConfig({
  componentId: 'lsui-sc-practice-cover-label',
})`
  color: ${alpha(theme.colors.palette.white, 0.72)};
  font-size: 12px;
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  text-transform: uppercase;
`
