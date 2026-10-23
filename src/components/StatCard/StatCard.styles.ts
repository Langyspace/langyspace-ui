import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const Root = styled.div.withConfig({ componentId: 'lsui-sc-stat-card' })`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 82px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${theme.colors.palette.extended.stone300};
  border-radius: 14px;
  background: ${theme.colors.palette.white};
  box-shadow: 0 1px 0 ${alpha(theme.colors.palette.neutral[900], 0.03)};
  padding: 12px 14px;
  &::before {
    position: absolute;
    inset: 0 0 auto;
    height: 3px;
    background: ${theme.colors.palette.extended.stone350};
    content: '';
  }
  &[data-tone='brand'] {
    border-color: ${alpha(theme.colors.palette.accent.pink, 0.2)};
    background: ${theme.colors.palette.extended.pink50};
    &::before {
      background: ${theme.colors.palette.accent.pink};
    }
  }

  &[data-size='sm'] [data-ui-stat-value] {
    font-size: 18px;
  }
`

export const Value = styled.div.withConfig({
  componentId: 'lsui-sc-stat-value',
})`
  font-size: 22px;
  font-weight: 800;
  line-height: 1;
  overflow-wrap: anywhere;
  [data-ui-stat-action] + & {
    padding-right: 78px;
  }
`

export const Label = styled.div.withConfig({
  componentId: 'lsui-sc-stat-label',
})`
  margin-top: 7px;
  color: ${theme.colors.text.muted};
  font-size: 10px;
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  [data-tone='brand'] & {
    color: ${theme.colors.palette.extended.pink800};
  }
`

export const Action = styled.div.withConfig({
  componentId: 'lsui-sc-stat-action',
})`
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 12px;
`
