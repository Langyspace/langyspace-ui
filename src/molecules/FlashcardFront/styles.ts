import { styled } from 'styled-components'
import { Root as FlipHint } from '../FlashcardFlipHint/styles'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-front',
})`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  min-height: 0;
  flex-direction: column;
  padding: var(--fc-front-padding);
  overflow-y: auto;
  overscroll-behavior-y: contain;

  @media (min-width: 640px) and (max-width: 900px) and (max-height: 500px) {
    display: grid;
    grid-template-columns: minmax(0, 4.5rem) minmax(0, 1fr);
    grid-auto-rows: max-content;
    align-items: start;
    align-content: safe center;
    gap: var(--fc-word-zone-gap);

    > ${FlipHint} {
      grid-column: 1 / -1;
    }
  }
`
