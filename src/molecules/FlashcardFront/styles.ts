import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-front',
})`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: var(--fc-front-padding);
`
