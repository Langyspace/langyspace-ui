import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
export const Photo = styled.figure`
  position: relative;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background: ${(p) => resolveSlideTheme(p).surface};
`
export const Portrait = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
export const Flag = styled.img`
  position: absolute;
  top: ${theme.spacing[2]};
  inset-inline-start: ${theme.spacing[2]};
  width: ${theme.spacing[8]};
  height: ${theme.spacing[6]};
  object-fit: contain;
`
export const Name = styled.figcaption`
  position: absolute;
  bottom: 0;
  inset-inline: 0;
  padding: ${theme.spacing[2]};
  background: ${(p) => resolveSlideTheme(p).surface};
  color: ${(p) => resolveSlideTheme(p).foreground};
  text-align: center;
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
`
