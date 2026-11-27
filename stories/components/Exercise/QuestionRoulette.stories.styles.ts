import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'

export const Stage = styled.main`
  padding: ${theme.spacing[6]};
  min-height: 100dvh;
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).canvas};
`
export const Narrow = styled.div`
  width: min(100%, 22.5rem);
`
