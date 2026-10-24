import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-session-progress',
})`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: ${theme.colors.text.muted};
  font-size: 12px;
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const Name = styled.span`
  min-width: 0;
  overflow: hidden;
  color: ${theme.colors.text.primary};
  text-overflow: ellipsis;
  white-space: nowrap;
`
