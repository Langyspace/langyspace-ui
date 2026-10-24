import { styled } from 'styled-components'
import { cardRecipe } from '../../foundations/surfaces/cardRecipe'
import { theme } from '../../foundations/theme/theme'
import { LinkElement } from '../../internal/LinkElement/LinkElement'

export const Root = styled(LinkElement).withConfig({
  componentId: 'lsui-sc-card-link',
})`
  ${cardRecipe};
  display: block;
  color: inherit;
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;
  &:hover {
    border-color: ${theme.semantic.border.strong};
  }
  &:focus-visible {
    outline: 3px solid ${theme.colors.palette.extended.pink600};
    outline-offset: 3px;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
