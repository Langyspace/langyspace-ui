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

const answerReveal = keyframes`
  from { opacity: 0; transform: translateY(${theme.spacing[1]}); }
  to { opacity: 1; transform: translateY(0); }
`

/** A perceptible answer entrance; transforms never change the surrounding layout. */
export const answerRevealMotion = css`
  animation: ${answerReveal} ${theme.transitions.duration.normal}
    ${theme.transitions.easing.standard} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
