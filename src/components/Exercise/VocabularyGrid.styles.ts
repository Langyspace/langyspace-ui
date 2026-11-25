import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
import { regularVocabularyMaxWidth } from '../../foundations/layout/vocabularyGrid'

/** Shared by the scene grid and an introduction aligned to that same grid. */
export { regularVocabularyMaxWidth } from '../../foundations/layout/vocabularyGrid'

export const Vocabulary = styled.div.withConfig({
  componentId: 'lsui-sc-vocabulary-grid',
})<{
  $columns?: 2 | 3 | 4
  $native?: boolean
  $regularScene?: boolean
  $reference?: boolean
}>`
  display: grid;
  grid-template-columns: repeat(
    ${(p) => (p.$reference ? 7 : (p.$columns ?? 3))},
    minmax(0, 1fr)
  );
  gap: ${(p) => (p.$reference ? theme.spacing[2] : theme.spacing[3])};
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
      ${(p) => (p.$reference ? 4 : p.$native || p.$columns === 4 ? 2 : (p.$columns ?? 2))},
      minmax(0, 1fr)
    );
  }
`
export const Word = styled(Pressable)<{
  $native?: boolean
  $plain?: boolean
  $static?: boolean
  $symbol?: boolean
  $reference?: boolean
  $scene: boolean
  $regular: boolean
  $completed?: boolean
  $imageAspectRatio?: number
}>`
  ${(p) =>
    p.$symbol
      ? css`
          && {
            height: clamp(5.5rem, 14cqh, 6rem);
            min-height: 0;
            padding-bottom: ${theme.spacing[6]};
          }
        `
      : undefined}
  ${(p) =>
    p.$reference
      ? css`
          && {
            height: clamp(${theme.spacing[16]}, 10cqh, ${theme.spacing[20]});
            min-height: 0;
            padding: ${theme.spacing[1]} ${theme.spacing[1]} ${theme.spacing[3]};
          }
        `
      : undefined}
  position: relative;
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: ${(p) => (p.$scene || p.$regular ? '0' : theme.exercises.vocabularyHeight)};
  height: ${(p) => (p.$scene && p.$regular ? 'auto' : p.$regular ? theme.exercises.vocabularyRegularHeight : p.$scene ? theme.exercises.sceneHeight : 'auto')};
  aspect-ratio: ${(p) =>
    p.$scene && p.$regular
      ? Number.isFinite(p.$imageAspectRatio) && (p.$imageAspectRatio ?? 0) > 0
        ? p.$imageAspectRatio
        : '3 / 2'
      : 'auto'};
  padding: ${(p) => (p.$scene ? '0' : theme.spacing[2])};
  border: 1px solid
    ${(p) => (p.$plain ? 'transparent' : p.$completed ? theme.semantic.status.success.foreground : recipe(p).border)};
  border-radius: ${theme.radius.lg};
  background: ${(p) => (p.$plain ? 'transparent' : recipe(p).surface)};
  color: ${(p) => recipe(p).foreground};
  margin: 0;
  cursor: ${(p) => (p.$static ? 'default' : 'pointer')};
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
  }
  ${(p) =>
    p.$native
      ? css`
          && {
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing[2]};
            align-items: stretch;
            height: 100%;
            min-height: 0;
            aspect-ratio: auto;
            padding: ${theme.spacing[2]};
          }
        `
      : undefined}
`
export const WordImage = styled.img<{
  $scene: boolean
  $regular: boolean
  $fit?: 'cover' | 'contain'
}>`
  position: ${(p) => (p.$scene ? 'absolute' : 'static')};
  inset: 0;
  width: 100%;
  height: ${(p) => (p.$scene ? '100%' : p.$regular ? `calc(${theme.exercises.vocabularyRegularHeight} - ${theme.spacing[4]})` : theme.exercises.vocabularyImageHeight)};
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
export const WordLabel = styled.span<{
  $native?: boolean
  $revealed: boolean
  $reference?: boolean
  $hasExample?: boolean
}>`
  ${vocabularyLabel}
  border-radius: ${(p) => (p.$hasExample ? theme.radius.lg : undefined)};
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
  ${(p) =>
    p.$reference
      ? css`
          && {
            bottom: ${theme.spacing[1]};
            max-width: none;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            color: ${recipe(p).muted};
            font-size: ${theme.typography.fontSize.xs};
            line-height: 1.2;
            white-space: nowrap;
          }
          && b {
            font-size: inherit;
            font-weight: ${theme.typography.fontWeight.medium};
            color: inherit;
          }
        `
      : undefined}
  ${(p) =>
    p.$native
      ? css`
          && {
            position: static;
            transform: none;
            width: auto;
            max-width: none;
            margin-top: auto;
            border-radius: ${theme.radius.lg};
            padding: ${theme.spacing[2]};
            min-height: 4.5em;
          }
        `
      : undefined}
`

export const WordExample = styled.span`
  display: block;
  margin-top: ${theme.spacing[1]};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.35;
`

export const VocabularySection = styled.div`
  display: grid;
  min-width: 0;
  gap: ${theme.spacing[3]};
`

export const WordSymbol = styled.span`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1;
  color: inherit;
`

/** Native diagram slot, above the same vocabulary label used by image cards. */
export const WordVisual = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  width: 100%;
  height: auto;
  padding: ${theme.spacing[2]};
  box-sizing: border-box;
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.3;
  color: inherit;
  > svg {
    width: ${theme.spacing[8]};
    height: ${theme.spacing[8]};
    flex-shrink: 0;
  }
`
