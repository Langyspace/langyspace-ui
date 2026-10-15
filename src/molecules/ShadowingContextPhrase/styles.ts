import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-context-phrase',
})`
  min-height: 1.25rem;
  max-width: 22rem;
  color: #6b6b6b;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    max-width: 32rem;
    font-size: 1rem;
  }
`
