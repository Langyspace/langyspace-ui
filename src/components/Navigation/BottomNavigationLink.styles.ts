import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { LinkElement } from '../../internal/LinkElement/LinkElement'

export const Root = styled(LinkElement).withConfig({
  componentId: 'lsui-sc-bottom-navigation-link',
})`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 52px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: ${theme.colors.text.muted};
  font: inherit;
  font-size: 11px;
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 2px;
  }
  &[aria-current]:not([aria-current='false']),
  &.active {
    color: ${theme.colors.text.primary};
  }
`
