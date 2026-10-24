import { keyframes, styled } from 'styled-components'
import type { SpinnerSize } from './Spinner.types'
import { theme } from '../../foundations/theme/theme'

interface SpinnerStyleProps {
  $size: SpinnerSize
}

const sizes = {
  inherit: '1em',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
} satisfies Record<SpinnerSize, string>

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

// The ring turns inside a fixed box, so its rotated corners never add scroll overflow.
export const Spinner = styled.span.withConfig({
  componentId: 'lsui-sc-spinner',
})<SpinnerStyleProps>`
  display: inline-block;
  width: ${({ $size }) => sizes[$size]};
  height: ${({ $size }) => sizes[$size]};
  flex: 0 0 auto;
  overflow: hidden;

  &::before {
    content: '';
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid currentcolor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${spin} ${theme.transitions.duration.spinner} linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`
