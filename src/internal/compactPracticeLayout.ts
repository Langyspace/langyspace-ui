import { css } from 'styled-components'
import { theme } from '../foundations/theme/theme'

export const compactPracticeLayout = css`
  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.xs}) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);

    > header {
      grid-column: 1 / -1;
    }
  }
`
