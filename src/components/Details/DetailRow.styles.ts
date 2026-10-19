import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-detail-row',
})`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
  border: 1px solid ${token.colorSurfaceBorderDefault};
  border-radius: 12px;
  padding: 11px 12px;
`

export const Icon = styled.span`
  display: inline-flex;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${token.colorNeutral50};
  color: ${token.colorContentMuted};
`

export const Content = styled.div`
  flex: 1;
  min-width: 0;
`

export const Label = styled.div`
  color: ${token.colorContentMuted};
  font-size: 11px;
  font-weight: ${token.typographyFontWeightSemibold};
`

export const Value = styled.div`
  margin-top: 1px;
  font-size: 14px;
  font-weight: ${token.typographyFontWeightMedium};
  overflow-wrap: anywhere;
`
