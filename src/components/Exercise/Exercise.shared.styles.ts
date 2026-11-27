import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
export const recipe = resolveSlideTheme
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${theme.spacing[2]};
`
export const Marker = styled.span<{ $role?: 'question' | 'answer' }>`
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  width: ${theme.spacing[8]};
  height: ${theme.spacing[8]};
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$role === 'question' ? recipe(p).accent : p.$role === 'answer' ? theme.exercises.question : (resolveTheme(p).colors?.palette.accent.pinkSoft ?? theme.colors.palette.accent.pinkSoft))};
  color: ${(p) => (p.$role === 'question' ? recipe(p).canvas : p.$role === 'answer' ? theme.colors.palette.white : recipe(p).accent)};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
`
