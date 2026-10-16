import { css } from 'styled-components'

export const flashcardWordLayout = css`
  display: flex;
  min-width: 0;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: safe var(--fc-word-zone-justify);
  gap: var(--fc-word-zone-gap);
  min-height: min-content;
  margin-top: var(--fc-word-zone-margin-top);
  text-align: center;
  transform: translateY(var(--fc-word-zone-offset-y));
`
