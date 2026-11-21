import { styled } from 'styled-components'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { Content, Header } from '../../../src/components/Slide/SlidePage.styles'
import { warmupMaxWidth } from '../../../src/components/Exercise/ExercisePanel.styles'
import { theme } from '../../../src/foundations/theme/theme'

/** Keep the introduction and warm-up media/options on the same centered column. */
export const WarmupPage = styled(SlidePage)`
  ${Content} {
    max-width: ${warmupMaxWidth};
  }
  ${Header} {
    margin-bottom: ${theme.spacing[3]};
  }
`
