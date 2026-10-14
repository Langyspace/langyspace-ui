import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-active-phrase',
})`
  max-width: 22rem;
  color: #0a0a0a;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.34;
  text-wrap: balance;

  [data-ui-skeleton] {
    margin-right: auto;
    margin-left: auto;
  }

  [data-ui-skeleton] + [data-ui-skeleton] {
    margin-top: 0.5rem;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    max-width: 34rem;
    font-size: 2rem;
    line-height: 1.28;
  }
`
