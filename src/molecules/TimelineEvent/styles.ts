import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-timeline-event',
})`
  position: absolute;
  right: 4px;
  left: 4px;
  overflow: hidden;
  padding: 8px 12px;
  border: 0;
  border-left: 3px solid ${token.colorSurfaceBorderStrong};
  border-radius: 8px;
  font-size: 12px;
  text-align: left;
  color: ${token.colorContentDefault};
  background: ${token.colorNeutral100};
  &[data-tone='success'] {
    color: ${token.colorStatusSuccessForeground};
    background: ${token.colorStatusSuccessBackground};
    border-left-color: ${token.colorStatusSuccessIndicator};
  }
  &[data-tone='muted'] {
    color: ${token.colorContentMuted};
    background: ${token.colorNeutral100};
    border-left-color: ${token.colorNeutral500};
  }
`
