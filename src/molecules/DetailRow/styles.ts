import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-detail-row',
})`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
  border: 1px solid ${tokens.color.surfaceBorder.default};
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
  background: ${tokens.color.neutral[50]};
  color: ${tokens.color.content.muted};
`
export const Content = styled.div`
  flex: 1;
  min-width: 0;
`
export const Label = styled.div`
  color: ${tokens.color.content.muted};
  font-size: 11px;
  font-weight: 600;
`
export const Value = styled.div`
  margin-top: 1px;
  font-size: 14px;
  font-weight: 500;
  overflow-wrap: anywhere;
`
