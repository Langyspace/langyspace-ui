import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-translation',
})`
  display: flex;
  width: 100%;
  min-height: 1.75rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    width: 100%;
    max-width: 22rem;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    color: #6b6b6b;
    font-size: 0.875rem;
    line-height: 1.5;

    &::before {
      content: '';
      display: block;
      width: 1.875rem;
      height: 0.1875rem;
      margin: 0 auto 0.5rem;
      border-radius: 999px;
      background: #ff1f5c;
    }
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    div {
      max-width: 32rem;
      font-size: 1rem;

      &::before {
        width: 2.5rem;
        margin-bottom: 0.75rem;
      }
    }
  }
`
