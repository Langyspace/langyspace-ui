import { styled } from 'styled-components'
import type { StatePanelDensity, StatePanelSurface } from './StatePanel.types'
import { theme } from '../../foundations/theme/theme'

const compactDescriptionFontSize = '0.8125rem'
const compactDescriptionOffset = '0.4375rem'
const compactPanelGap = '0.625rem'
const compactPanelPadding = '1.875rem'
const contentMaxWidth = '32rem'
const filledPanelMinHeight = '13.125rem'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-state-panel',
})<{
  $density: StatePanelDensity
  $fill: boolean
  $surface: StatePanelSurface
}>`
  display: grid;
  min-width: 0;
  min-height: ${({ $fill }) => ($fill ? filledPanelMinHeight : 'auto')};
  align-content: center;
  justify-items: center;
  gap: ${({ $density }) => ($density === 'compact' ? compactPanelGap : theme.spacing[2])};
  padding: ${({ $density }) => ($density === 'compact' ? compactPanelPadding : `${theme.spacing[16]} ${theme.spacing[5]}`)};
  border-width: 1px;
  border-style: ${({ $surface }) => ($surface === 'dashed' ? 'dashed' : 'solid')};
  border-color: ${({ $surface }) =>
    $surface === 'dashed'
      ? theme.semantic.border.default
      : theme.colors.border.subtle};
  border-radius: ${theme.radius.card};
  color: ${theme.colors.palette.neutral[600]};
  background: ${theme.colors.palette.white};
  text-align: center;
`

export const Icon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
`

export const Content = styled.div`
  max-width: ${contentMaxWidth};
`

export const Title = styled.strong`
  display: block;
  color: ${theme.colors.palette.neutral[900]};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
`

export const Description = styled.div<{ $density: StatePanelDensity }>`
  margin-top: ${({ $density }) => ($density === 'compact' ? compactDescriptionOffset : theme.spacing[1])};
  font-size: ${({ $density }) => ($density === 'compact' ? compactDescriptionFontSize : theme.typography.fontSize.sm)};
  line-height: ${theme.typography.lineHeight.normal};
`

export const Action = styled.div<{ $density: StatePanelDensity }>`
  display: inline-flex;
  justify-content: center;
  margin-top: ${({ $density }) => ($density === 'compact' ? 0 : theme.spacing[1])};
`
