import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { alpha } from '../../foundations/theme/alpha'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-key-value-list',
})<{ $compact?: boolean }>`
  display: grid;
  gap: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])};
`

export const Row = styled.div<{
  $material?: boolean
  $compact?: boolean
  $stacked?: boolean
}>`
  display: flex;
  align-items: ${(p) => (p.$stacked ? 'stretch' : 'center')};
  flex-direction: ${(p) => (p.$stacked ? 'column' : 'row')};
  justify-content: space-between;
  min-height: ${(p) => (p.$compact ? theme.spacing[8] : '44px')};
  gap: ${(p) => (p.$stacked ? theme.spacing[1] : theme.spacing[4])};
  padding-bottom: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])};
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
})<{ $material?: boolean; $compact?: boolean; $stacked?: boolean }>`
  flex-shrink: ${(p) => (p.$stacked ? 1 : 0)};
  min-width: 0;
  max-width: ${(p) => (p.$stacked ? '100%' : undefined)};
  overflow-wrap: ${(p) => (p.$stacked ? 'anywhere' : undefined)};
  color: ${(p) => (p.$material ? resolveSlideTheme(p).foreground : 'inherit')};
  font-size: ${(p) => (p.$compact ? theme.typography.fontSize.md : theme.typography.fontSize.xl)};
`
