import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-toggle-button',
})`
  min-width: 0;
  min-height: 2.25rem;
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.pill};
  background-color: ${theme.colors.palette.white};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover:not(:disabled):not([aria-pressed='true']) {
    border-color: ${theme.semantic.border.strong};
    color: ${theme.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.palette.accent.aqua};
    outline-offset: 2px;
  }

  &[aria-pressed='true'] {
    border-color: ${theme.semantic.border.strong};
    background-color: ${theme.colors.palette.black};
    color: ${theme.colors.palette.white};
  }

  &:disabled {
    cursor: default;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    min-height: 2.5rem;
  }
`
