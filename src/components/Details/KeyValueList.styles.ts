import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { alpha } from '../../foundations/theme/alpha'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-key-value-list',
})`
  display: grid;
  gap: 12px;
`

export const Row = styled.div<{ $material?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
  gap: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid
    ${(p) => (p.$material ? resolveSlideTheme(p).border : alpha(theme.colors.palette.extended.ink, 0.08))};
  &:last-child {
    padding-bottom: 0;
    border: 0;
  }
`

export const Label = styled.span.withConfig({
  componentId: 'lsui-sc-key-value-label',
})<{ $material?: boolean }>`
  min-width: 0;
  color: ${(p) => (p.$material ? resolveSlideTheme(p).muted : alpha(theme.colors.palette.extended.ink, 0.62))};
  font-size: 14px;
  overflow-wrap: anywhere;
`

export const Value = styled.strong.withConfig({
  componentId: 'lsui-sc-key-value-value',
})<{ $material?: boolean }>`
  flex-shrink: 0;
  color: ${(p) => (p.$material ? resolveSlideTheme(p).foreground : 'inherit')};
  font-size: 20px;
`
