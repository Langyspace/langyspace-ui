import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { LinkElement } from '../../internal/LinkElement/LinkElement'

export const Root = styled(LinkElement).withConfig({
  componentId: 'lsui-sc-brand-link',
})`
  display: inline-flex;
  flex: 0 1 auto;
  min-width: 0;
  align-items: center;
  text-decoration: none;
  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 2px;
  }
`
