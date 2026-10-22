import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-scroller',
})`
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  border: 1px solid ${theme.colors.border.subtle};
  border-top-left-radius: 0.875rem;
  border-top-right-radius: 0.875rem;
  background: ${theme.colors.palette.white};
  overflow-x: auto;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`
