import { css } from 'styled-components'

export const compactPracticeLayout = css`
  @media (min-width: 640px) and (max-width: 900px) and (max-height: 500px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);

    > header {
      grid-column: 1 / -1;
    }
  }
`
