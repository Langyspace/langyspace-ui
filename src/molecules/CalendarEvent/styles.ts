import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-event',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 4px;
  padding: 3px 8px;
  border: 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: ${token.typographyFontWeightSemibold};
  text-align: left;
  color: ${token.colorNeutral0};
  background: ${token.colorNeutral950};
  &[data-tone='success'] {
    color: ${token.colorStatusSuccessForeground};
    background: ${token.colorStatusSuccessBackground};
  }
  &[data-tone='muted'] {
    color: ${token.colorContentMuted};
    background: ${token.colorNeutral100};
    text-decoration: line-through;
  }
`
