import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
export const Vocabulary = styled.div.withConfig({
  componentId: 'lsui-sc-vocabulary-grid',
})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const Word = styled(Pressable)`
  position: relative;
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: ${theme.exercises.vocabularyHeight};
  padding: ${theme.spacing[2]};
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
export const WordImage = styled.img`
  width: 100%;
  height: ${theme.exercises.vocabularyImageHeight};
  object-fit: contain;
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
export const WordLabel = styled.span`
  position: absolute;
  bottom: ${theme.spacing[1]};
  left: ${theme.spacing[1]};
  right: ${theme.spacing[1]};
  padding: ${theme.spacing[1]};
  border-radius: ${theme.radius.md};
  background: ${(p) => recipe(p).surface};
  text-align: center;
  b,
  small {
    display: block;
  }
  small {
    color: ${(p) => recipe(p).muted};
  }
`
