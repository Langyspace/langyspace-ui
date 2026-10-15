import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-context',
})`
  padding: 1rem;
  border-radius: 0.875rem;
  color: #6b6b6b;
  background: #fafaf9;
  font-size: 0.875rem;

  .label {
    margin-bottom: 0.25rem;
    color: #0a0a0a;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`
