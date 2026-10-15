import { styled } from 'styled-components'
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
  color: #6b6b6b;
  font-size: 12px;
  font-weight: 600;
`
export const Name = styled.span`
  min-width: 0;
  overflow: hidden;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;
`
