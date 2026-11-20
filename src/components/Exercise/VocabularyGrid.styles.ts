import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'

/** Shared by the scene grid and an introduction aligned to that same grid. */
export const regularVocabularyMaxWidth = (columns = 3) =>
  `calc(${theme.exercises.vocabularyRegularHeight} * ${columns * 1.5} + ${theme.spacing[3]} * ${columns - 1})`

export const Vocabulary = styled.div.withConfig({
  componentId: 'lsui-sc-vocabulary-grid',
})<{ $columns?: 2 | 3 | 4; $regularScene?: boolean }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$columns ?? 3}, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  ${(p) =>
    p.$regularScene
      ? css`
          width: 100%;
          max-width: ${regularVocabularyMaxWidth(p.$columns)};
          margin-inline: auto;
        `
      : undefined}
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(
      ${(p) => (p.$columns === 4 ? 2 : (p.$columns ?? 2))},
      minmax(0, 1fr)
    );
  }
`
export const Word = styled(Pressable)<{
  $scene: boolean
  $regular: boolean
  $completed?: boolean
}>`
  position: relative;
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: ${(p) => (p.$scene || p.$regular ? '0' : theme.exercises.vocabularyHeight)};
  height: ${(p) => (p.$scene && p.$regular ? 'auto' : p.$regular ? theme.exercises.vocabularyRegularHeight : p.$scene ? theme.exercises.sceneHeight : 'auto')};
  aspect-ratio: ${(p) => (p.$scene && p.$regular ? '3 / 2' : 'auto')};
  padding: ${(p) => (p.$scene ? '0' : theme.spacing[2])};
  border: 1px solid
    ${(p) => (p.$completed ? theme.semantic.status.success.foreground : recipe(p).border)};
  border-radius: ${theme.radius.lg};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
  }
`
export const WordImage = styled.img<{
  $scene: boolean
  $regular: boolean
  $fit?: 'cover' | 'contain'
}>`
  position: ${(p) => (p.$scene ? 'absolute' : 'static')};
  inset: 0;
  width: 100%;
  height: ${(p) => (p.$scene ? '100%' : p.$regular ? theme.exercises.vocabularyRegularImageHeight : theme.exercises.vocabularyImageHeight)};
  object-fit: ${(p) => p.$fit ?? (p.$scene ? 'cover' : 'contain')};
  object-position: ${(p) => (p.$scene && !p.$regular ? 'center 25%' : 'center')};
  border-radius: inherit;
`
export const QuestionMark = styled.span<{ $completed?: boolean }>`
  position: absolute;
  top: ${theme.spacing[2]};
  right: ${theme.spacing[2]};
  display: grid;
  place-items: center;
  width: ${theme.spacing[6]};
  height: ${theme.spacing[6]};
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$completed ? theme.semantic.status.success.foreground : recipe(p).accent)};
  color: ${(p) => (p.$completed ? theme.colors.palette.white : recipe(p).canvas)};
  font-size: ${theme.typography.fontSize.sm};
`
export const WordBadge = styled.span`
  position: absolute;
  top: ${theme.spacing[2]};
  left: ${theme.spacing[2]};
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: ${theme.radius.pill};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
`
// Exact label treatment recovered from Margarida's 19/11 Vocabulary edit.
const vocabularyLabel = css`
  position: absolute;
  top: auto;
  bottom: 10px;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  width: max-content;
  max-width: calc(100% - 20px);
  padding: 6px 14px;
  border-radius: ${theme.radius.pill};
  background: color-mix(
    in srgb,
    ${theme.colors.palette.white} 82%,
    transparent
  );
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: ${theme.colors.palette.extended.ink};
  border: 1px solid
    color-mix(in srgb, ${theme.colors.palette.white} 70%, transparent);
  box-shadow: 0 6px 18px
    color-mix(in srgb, ${theme.colors.palette.black} 14%, transparent);
  text-align: center;
  font-family: ${theme.typography.fontFamily.sans};
  font-size: 15px;
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.15;
  letter-spacing: -0.01em;
  z-index: 1;
  @media (max-width: 600px) {
    bottom: 6px;
    padding: 4px 10px;
    font-size: 13px;
  }
`
export const WordCaption = styled.span`
  ${vocabularyLabel}
`
export const WordLabel = styled.span<{ $revealed: boolean }>`
  ${vocabularyLabel}
  b {
    display: block;
    font-size: ${(p) => (p.$revealed ? theme.typography.fontSize.md : '15px')};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.palette.extended.ink};
  }
  small {
    display: none;
  }
  @media (max-width: 600px) {
    b {
      font-size: ${(p) => (p.$revealed ? '13.5px' : '13px')};
    }
  }
`
