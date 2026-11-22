import { styled } from 'styled-components'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { Header } from '../../../src/components/Slide/SlidePage.styles'
import { theme } from '../../../src/foundations/theme/theme'

/** Keep the introduction and warm-up media/options on the same centered column. */
export const WarmupPage = styled(SlidePage).attrs({ columns: 1 as const })`
  ${Header} {
    margin-bottom: ${theme.spacing[3]};
  }
`
