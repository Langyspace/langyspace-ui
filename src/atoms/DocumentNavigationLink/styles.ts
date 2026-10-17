import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.a.withConfig({
  componentId: 'lsui-sc-document-navigation-link',
})`
  border-radius: ${token.radiusPill};
  padding: ${token.spacing2} ${token.spacing3};
  color: ${token.colorContentSecondary};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightSemibold};
  text-decoration: none;
  transition:
    background-color 180ms ease,
    color 180ms ease;
  &:hover {
    background: ${token.colorNeutral50};
    color: ${token.colorContentDefault};
  }
  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
