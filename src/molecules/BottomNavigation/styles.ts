import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.nav.withConfig({
  componentId: 'lsui-sc-bottom-navigation',
})`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  display: none;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  padding: 8px 12px calc(8px + var(--safe-area-inset-bottom, 0px));
  border-top: 1px solid ${token.colorSurfaceBorderSubtle};
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  @media (max-width: 900px) {
    display: grid;
  }
`
