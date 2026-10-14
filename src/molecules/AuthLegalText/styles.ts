import { styled } from 'styled-components'
export const Root = styled.p.withConfig({
  componentId: 'lsui-sc-auth-legal-text',
})`
  margin: 1rem 0 0;
  color: #6b6b6b;
  font-size: 0.75rem;
  line-height: 1.5;

  & + button {
    margin-top: 1rem;
  }
`
