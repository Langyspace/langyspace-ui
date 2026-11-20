import { css, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import type { QuizOptionState } from './QuizOption.types'

export const Letter = styled.span`
  width: 1.875rem;
  height: 1.875rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius.md};
  color: ${(p) => resolveTheme(p).colors?.text.muted ?? theme.colors.text.muted};
  background: ${(p) => resolveTheme(p).colors?.palette.neutral[100] ?? theme.colors.palette.neutral[100]};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  flex-shrink: 0;
  transition:
    color 0.14s ease,
    background 0.14s ease;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 1.75rem;
    height: 1.75rem;
  }
`

export const OptionText = styled.span<{ $state: QuizOptionState }>`
  flex: 1;
  min-width: 0;
  color: ${(p) =>
    p.$state === 'correct'
      ? (resolveTheme(p).semantic?.status.success.foreground ??
        theme.semantic.status.success.foreground)
      : p.$state === 'wrong'
        ? (resolveTheme(p).colors?.palette.extended.red700 ??
          theme.colors.palette.extended.red700)
        : (resolveTheme(p).colors?.text.primary ??
          theme.colors.palette.neutral[900])};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  overflow-wrap: anywhere;
`

export const Option = styled(Pressable).withConfig({
  componentId: 'lsui-sc-quiz-option',
})<{
  $state: QuizOptionState
  $density: 'regular' | 'compact'
  $layout: 'block' | 'inline'
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  width: 100%;
  min-height: 3.875rem;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1.5px solid
    ${(p) =>
      p.$state === 'correct'
        ? (resolveTheme(p).colors?.palette.feedback.success ??
          theme.colors.palette.feedback.success)
        : p.$state === 'wrong'
          ? (resolveTheme(p).colors?.palette.extended.red600 ??
            theme.colors.palette.extended.red600)
          : (resolveTheme(p).colors?.palette.neutral[400] ??
            theme.colors.palette.neutral[400])};
  border-radius: ${theme.radius.xl};
  background: ${(p) =>
    p.$state === 'correct'
      ? (resolveTheme(p).colors?.palette.feedback.successSoft ??
        theme.colors.palette.feedback.successSoft)
      : p.$state === 'wrong'
        ? (resolveTheme(p).colors?.palette.extended.red50 ??
          theme.colors.palette.extended.red50)
        : (resolveTheme(p).colors?.surface.canvas ??
          theme.colors.surface.canvas)};
  color: ${(p) => resolveTheme(p).colors?.text.primary ?? theme.colors.text.primary};
  cursor: pointer;
  text-align: left;
  opacity: ${(p) => (p.$state === 'dim' ? 0.54 : 1)};
  transition:
    border-color 0.14s ease,
    background 0.14s ease,
    transform 0.14s ease,
    opacity 0.14s ease;

  &:not(:disabled):hover {
    border-color: ${(p) => resolveTheme(p).semantic?.border.strong ?? theme.semantic.border.strong};
    transform: translateY(-1px);

    ${Letter} {
      color: ${(p) => resolveTheme(p).colors?.text.inverse ?? theme.colors.text.inverse};
      background: ${(p) => resolveTheme(p).colors?.palette.neutral[900] ?? theme.colors.palette.neutral[900]};
    }
  }

  &:not(:disabled):active {
    transform: scale(0.99);
  }

  &:disabled {
    cursor: default;
    transform: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${theme.shadows.focus};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-height: 3.5rem;
    padding: ${theme.spacing[3]} ${theme.spacing[3]};
  }
  ${(p) =>
    p.$density === 'compact' &&
    css`
      min-height: ${theme.exercises.compactOptionHeight};
      background: ${p.$state === 'default' ? resolveSlideTheme(p).surface : ''};
      border-color: ${p.$state === 'default' ? resolveSlideTheme(p).border : ''};
      padding: ${theme.spacing[1]} ${theme.spacing[2]};
      border-radius: ${theme.radius.lg};
      ${Letter} {
        width: 36px;
        height: 36px;
        border-radius: ${theme.radius.circle};
        background: ${(p) => resolveSlideTheme(p).canvas};
        font-family: ${theme.typography.fontFamily.sans};
        font-size: 0.9375rem;
      }
      ${OptionText} {
        font-size: clamp(${theme.typography.fontSize.lg}, 2.8cqh, 1.375rem);
        font-weight: ${theme.typography.fontWeight.semibold};
      }
      @container (max-width: ${theme.breakpoints.md}) {
        min-height: ${theme.spacing[12]};
        ${Letter} {
          width: 28px;
          height: 28px;
          font-size: 0.8125rem;
        }
        ${OptionText} {
          font-size: ${theme.typography.fontSize.md};
        }
      }
    `}
  ${(p) =>
    p.$layout === 'inline' &&
    css`
      width: auto;
      min-height: ${theme.spacing[12]};
      padding: ${theme.spacing[1]} ${theme.spacing[3]};
      gap: ${theme.spacing[2]};
      ${OptionText} {
        font-size: ${theme.typography.fontSize.sm};
      }
    `}
`

export const InlineResult = styled.span`
  display: inline-grid;
  place-items: center;
  width: 1.625rem;
  height: 1.625rem;
  flex-shrink: 0;
`
