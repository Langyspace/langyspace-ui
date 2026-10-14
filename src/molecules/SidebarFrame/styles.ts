import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
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
  background: #fff;
  border-right: 1px solid ${tokens.color.surfaceBorder.subtle};
`
