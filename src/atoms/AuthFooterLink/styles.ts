import { styled } from 'styled-components'
export const Root = styled.a.withConfig({
  componentId: 'lsui-sc-auth-footer-link',
})`
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.16em;

  &:hover {
    opacity: 0.8;
  }
`
