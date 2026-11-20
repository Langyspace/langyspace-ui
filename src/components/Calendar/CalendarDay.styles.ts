import { css, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-day',
})<{ $vocabulary: boolean }>`
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  min-height: 112px;
  gap: 4px;
  padding: 8px 12px;
  border-top: 1px solid ${theme.colors.border.subtle};
  border-right: 1px solid ${theme.colors.border.subtle};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.palette.white};
  > [data-ui-calendar-event] {
    position: relative;
    z-index: 1;
  }
  &[data-muted='true'] {
    color: ${theme.colors.text.muted};
    background: ${theme.colors.palette.extended.snow};
  }
  &:nth-child(7n) {
    border-right: 0;
  }
  &[data-interactive='true'] {
    cursor: pointer;
    &:hover {
      background: ${theme.colors.palette.neutral[100]};
    }
  }
  ${(p) =>
    p.$vocabulary
      ? css`
          padding: ${theme.spacing[2]};
          color: ${resolveSlideTheme(p).foreground};
          background: ${resolveSlideTheme(p).surface};
          border-color: ${resolveSlideTheme(p).border};
          font-family: ${theme.typography.fontFamily.sans};
          font-size: ${theme.typography.fontSize.md};
          font-weight: ${theme.typography.fontWeight.semibold};
          text-align: center;
          overflow-wrap: anywhere;
          > button {
            align-self: stretch;
            justify-content: center;
          }
          &[data-selected='true'] {
            box-shadow: inset 0 0 0 2px ${resolveSlideTheme(p).accent};
          }
          &[data-interactive='true']:hover {
            background: ${resolveSlideTheme(p).surface};
          }
          @container (max-width: ${theme.breakpoints.md}) {
            font-size: ${theme.typography.fontSize.sm};
          }
          @container (max-width: ${theme.breakpoints.sm}) {
            min-height: ${theme.spacing[20]};
          }
        `
      : undefined}
`

export const OpenButton = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-day-open',
})`
  display: flex;
  align-self: flex-start;
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  font: inherit;

  &::after {
    position: absolute;
    inset: 0;
    content: '';
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: -3px;
  }
`
