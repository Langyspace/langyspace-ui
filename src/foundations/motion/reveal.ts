import { css, keyframes } from 'styled-components'
import { theme } from '../theme/theme'

const reveal = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

/** A user-triggered reveal, without moving text or changing its reserved space. */
export const revealContentMotion = css`
  animation: ${reveal} ${theme.transitions.duration.fast}
    ${theme.transitions.easing.entrance};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
