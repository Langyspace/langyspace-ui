import { styled } from 'styled-components'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
export const MaterialRoot = styled.div`
  width: 100%;
  min-width: 0;
  min-height: 100%;
  height: 100%;
  color-scheme: dark;
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).canvas};
  :where(h1, h2, h3, h4, h5, h6) {
    color: inherit;
  }
`
