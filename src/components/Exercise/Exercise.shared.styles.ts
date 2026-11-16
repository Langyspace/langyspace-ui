import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
export const recipe = (props: Parameters<typeof resolveTheme>[0]) =>
  resolveTheme(props).slides ?? theme.slides
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${theme.spacing[2]};
`
export const Marker = styled.span`
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  width: ${theme.spacing[8]};
  height: ${theme.spacing[8]};
  border-radius: ${theme.radius.circle};
  background: ${(p) => recipe(p).canvas};
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
`
