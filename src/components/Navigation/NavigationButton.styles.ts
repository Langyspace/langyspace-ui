import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-navigation-button',
})`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 40px;
  padding: 0 12px;
  border: 0;
  border-radius: 10px;
  color: ${theme.colors.text.secondary};
  font: inherit;
  font-size: 14px;
  font-weight: ${theme.typography.fontWeight.medium};
  white-space: nowrap;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  &:hover {
    background: ${theme.colors.palette.neutral[100]};
  }
  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 2px;
  }
  &[aria-current]:not([aria-current='false']),
  &.active {
    color: ${theme.colors.palette.white};
    background: ${theme.colors.text.primary};
  }
  svg {
    flex-shrink: 0;
  }
`
