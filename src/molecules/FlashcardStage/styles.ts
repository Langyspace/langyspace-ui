import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-stage',
})`
  display: flex;
  min-height: 0;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding-block: var(--fc-stage-padding-block);
  padding-inline: var(--fc-stage-padding-inline);
  -webkit-perspective: 1600px;
  perspective: 1600px;

  @media (max-width: 900px) {
    flex: 1 1 auto;
  }
`
