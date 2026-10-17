import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

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
  color: ${token.colorContentMuted};
  font-size: 12px;
  font-weight: ${token.typographyFontWeightSemibold};
`

export const Name = styled.span`
  min-width: 0;
  overflow: hidden;
  color: ${token.colorContentDefault};
  text-overflow: ellipsis;
  white-space: nowrap;
`
