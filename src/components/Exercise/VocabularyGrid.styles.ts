import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
export const Vocabulary = styled.div.withConfig({
  componentId: 'lsui-sc-vocabulary-grid',
})<{ $columns?: 2 | 3 }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$columns ?? 3}, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(${(p) => p.$columns ?? 2}, minmax(0, 1fr));
  }
`
export const Word = styled(Pressable)<{ $scene: boolean; $regular: boolean }>`
  position: relative;
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: ${(p) => (p.$scene || p.$regular ? '0' : theme.exercises.vocabularyHeight)};
  height: ${(p) => (p.$scene ? theme.exercises.sceneHeight : p.$regular ? theme.exercises.vocabularyRegularHeight : 'auto')};
  padding: ${(p) => (p.$scene ? '0' : theme.spacing[2])};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.lg};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
  }
`
export const WordImage = styled.img<{ $scene: boolean; $regular: boolean }>`
  position: ${(p) => (p.$scene ? 'absolute' : 'static')};
  inset: 0;
  width: 100%;
  height: ${(p) => (p.$scene ? '100%' : p.$regular ? theme.exercises.vocabularyRegularImageHeight : theme.exercises.vocabularyImageHeight)};
  object-fit: ${(p) => (p.$scene ? 'cover' : 'contain')};
  object-position: ${(p) => (p.$scene ? 'center 25%' : 'center')};
  border-radius: inherit;
`
export const QuestionMark = styled.span`
  position: absolute;
  top: ${theme.spacing[2]};
  right: ${theme.spacing[2]};
  display: grid;
  place-items: center;
  width: ${theme.spacing[6]};
  height: ${theme.spacing[6]};
  border-radius: ${theme.radius.circle};
  background: ${(p) => recipe(p).accent};
  color: ${theme.colors.palette.white};
  font-size: ${theme.typography.fontSize.sm};
`
export const WordCaption = styled.span`
  position: absolute;
  bottom: ${theme.spacing[1]};
  left: ${theme.spacing[1]};
  right: ${theme.spacing[1]};
  border-radius: ${theme.radius.md};
  padding: ${theme.spacing[1]};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.md};
  line-height: 1.1;
`
export const WordLabel = styled.span<{ $floating: boolean }>`
  position: absolute;
  bottom: ${(p) => (p.$floating ? `calc(100% - ${theme.spacing[2]})` : theme.spacing[1])};
  left: ${theme.spacing[1]};
  right: ${theme.spacing[1]};
  padding: ${theme.spacing[1]};
  border-radius: ${theme.radius.md};
  background: ${(p) => (p.$floating ? recipe(p).inverseCanvas : recipe(p).surface)};
  color: ${(p) => (p.$floating ? recipe(p).inverseForeground : recipe(p).foreground)};
  z-index: 1;
  font-family: ${(p) => recipe(p).displayFontFamily};
  text-align: center;
  b,
  small {
    display: block;
  }
  small {
    color: ${(p) => (p.$floating ? recipe(p).inverseMuted : recipe(p).muted)};
  }
`
