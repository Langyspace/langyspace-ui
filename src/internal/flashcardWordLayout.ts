import { css } from 'styled-components'

export const flashcardWordLayout = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: var(--fc-word-zone-justify);
  gap: var(--fc-word-zone-gap);
  min-height: 0;
  margin-top: var(--fc-word-zone-margin-top);
  text-align: center;
  transform: translateY(var(--fc-word-zone-offset-y));
`
