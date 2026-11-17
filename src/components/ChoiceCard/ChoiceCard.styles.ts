import { css, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { alpha } from '../../foundations/theme/alpha'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-choice-card',
})<{ $lesson?: boolean }>`
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 2.875rem;
  gap: ${theme.spacing[3]};
  padding-top: ${theme.spacing[3]};
  padding-right: ${theme.spacing[4]};
  padding-bottom: ${theme.spacing[3]};
  padding-left: ${theme.spacing[4]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.lg};
  color: ${(p) => resolveTheme(p).colors?.text.primary ?? theme.colors.text.primary};
  background-color: ${(p) => resolveTheme(p).colors?.surface.canvas ?? theme.colors.palette.white};
  text-align: left;
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover:not(:disabled) {
    border-color: ${(p) => resolveTheme(p).semantic?.border.strong ?? theme.semantic.border.strong};
    box-shadow: 0 1px 2px ${alpha(theme.colors.palette.black, 0.05)};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.palette.accent.aqua};
    outline-offset: 2px;
  }

  &[aria-pressed='true'] {
    border-color: ${(p) => resolveTheme(p).semantic?.border.strong ?? theme.semantic.border.strong};
    color: ${theme.colors.palette.white};
    background-color: ${theme.colors.palette.black};
  }

  &:disabled {
    cursor: default;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    min-height: 3rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    gap: ${theme.spacing[2]};
    padding-right: ${theme.spacing[3]};
    padding-left: ${theme.spacing[3]};
  }
  ${(p) =>
    p.$lesson
      ? css`
          border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
          border-color: ${(p) => resolveSlideTheme(p).border};
          color: ${(p) => resolveSlideTheme(p).foreground};
          background: ${(p) => resolveSlideTheme(p).surface};
          font-family: ${(p) => resolveSlideTheme(p).displayFontFamily};
          &[aria-pressed='true'] {
            border: 3px solid
              ${(p) => resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground};
            color: ${(p) => resolveSlideTheme(p).foreground};
            background: ${(p) => resolveSlideTheme(p).surface};
          }
          &:focus-visible {
            outline-color: ${(p) => resolveSlideTheme(p).accent};
          }
        `
      : undefined}
`
