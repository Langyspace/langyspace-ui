import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-practice-card',
})`
  display: flex;
  min-width: 0;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: 14px;
  color: ${theme.colors.text.primary};
  background: ${theme.colors.palette.white};
  text-align: left;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
  &:hover:not(:disabled) {
    border-color: ${theme.semantic.border.strong};
    transform: translateY(-1px);
  }
  &:disabled {
    cursor: default;
    opacity: 0.72;
  }
  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 2px;
  }
  &[data-completed='true'] {
    border-color: ${theme.colors.palette.neutral[400]};
    background: ${theme.colors.palette.neutral[100]};
    box-shadow: none;
    [data-ui-practice-card-cover] {
      opacity: 0.72;
      filter: grayscale(0.38);
    }
    &:hover:not(:disabled) {
      background: ${theme.colors.palette.neutral[200]};
    }
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
