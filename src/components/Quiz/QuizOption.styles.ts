import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'
import type { QuizOptionState } from './QuizOption.types'

export const Letter = styled.span`
  width: 1.875rem;
  height: 1.875rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius.md};
  color: ${theme.colors.text.muted};
  background: ${theme.colors.palette.neutral[100]};
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
  color: ${({ $state }) =>
    $state === 'correct'
      ? theme.semantic.status.success.foreground
      : $state === 'wrong'
        ? theme.colors.palette.extended.red700
        : theme.colors.palette.neutral[900]};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  overflow-wrap: anywhere;
`

export const Option = styled(Pressable).withConfig({
  componentId: 'lsui-sc-quiz-option',
})<{ $state: QuizOptionState }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  width: 100%;
  min-height: 3.875rem;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1.5px solid
    ${({ $state }) =>
      $state === 'correct'
        ? theme.colors.palette.feedback.success
        : $state === 'wrong'
          ? theme.colors.palette.extended.red600
          : theme.colors.palette.neutral[400]};
  border-radius: ${theme.radius.xl};
  background: ${({ $state }) =>
    $state === 'correct'
      ? theme.colors.palette.feedback.successSoft
      : $state === 'wrong'
        ? theme.colors.palette.extended.red50
        : theme.colors.surface.canvas};
  color: ${theme.colors.text.primary};
  cursor: pointer;
  text-align: left;
  opacity: ${({ $state }) => ($state === 'dim' ? 0.54 : 1)};
  transition:
    border-color 0.14s ease,
    background 0.14s ease,
    transform 0.14s ease,
    opacity 0.14s ease;

  &:not(:disabled):hover {
    border-color: ${theme.semantic.border.strong};
    transform: translateY(-1px);

    ${Letter} {
      color: ${theme.colors.text.inverse};
      background: ${theme.colors.palette.neutral[900]};
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
`
