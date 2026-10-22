import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.aside.withConfig({
  componentId: 'lsui-sc-sidebar-frame',
})`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-shrink: 0;
  height: 100svh;
  background: ${theme.colors.palette.white};
  border-right: 1px solid ${theme.colors.border.subtle};
`
