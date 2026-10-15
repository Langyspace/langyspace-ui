import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-scroller',
})`
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-top-left-radius: 0.875rem;
  border-top-right-radius: 0.875rem;
  background: ${token.colorNeutral0};
  overflow-x: auto;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`
