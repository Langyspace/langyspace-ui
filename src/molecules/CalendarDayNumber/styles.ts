import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-calendar-day-number',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  border-radius: ${token.radiusPill};
  color: inherit;
  background: transparent;
  font-size: 12px;
  font-weight: ${token.typographyFontWeightSemibold};
  &[aria-current='date'] {
    color: ${token.colorNeutral0};
    background: ${token.colorNeutral950};
  }
`
