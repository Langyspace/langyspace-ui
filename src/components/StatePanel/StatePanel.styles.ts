import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { StatePanelDensity, StatePanelSurface } from './StatePanel.types'

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
  gap: ${({ $density }) => ($density === 'compact' ? compactPanelGap : token.spacing2)};
  padding: ${({ $density }) => ($density === 'compact' ? compactPanelPadding : `${token.spacing16} ${token.spacing5}`)};
  border-width: 1px;
  border-style: ${({ $surface }) => ($surface === 'dashed' ? 'dashed' : 'solid')};
  border-color: ${({ $surface }) =>
    $surface === 'dashed'
      ? token.colorSurfaceBorderDefault
      : token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusCard};
  color: ${token.colorNeutral600};
  background: ${token.colorNeutral0};
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
  color: ${token.colorNeutral950};
  font-size: ${token.typographyFontSizeMd};
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
`

export const Description = styled.div<{ $density: StatePanelDensity }>`
  margin-top: ${({ $density }) => ($density === 'compact' ? compactDescriptionOffset : token.spacing1)};
  font-size: ${({ $density }) => ($density === 'compact' ? compactDescriptionFontSize : token.typographyFontSizeSm)};
  line-height: ${token.typographyLineHeightNormal};
`

export const Action = styled.div<{ $density: StatePanelDensity }>`
  display: inline-flex;
  justify-content: center;
  margin-top: ${({ $density }) => ($density === 'compact' ? 0 : token.spacing1)};
`
