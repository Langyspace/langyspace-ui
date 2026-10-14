import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-control-cluster',
})`
  display: flex;
  width: min(22rem, 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 640px) {
    width: 100%;
    gap: 1rem;
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    width: min(28rem, 100%);
  }
`
