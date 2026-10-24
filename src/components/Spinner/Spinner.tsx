import * as Styled from './Spinner.styles'
import type { SpinnerProps } from './Spinner.types'

export function Spinner({ size = 'inherit', ...nativeProps }: SpinnerProps) {
  return <Styled.Spinner {...nativeProps} $size={size} aria-hidden="true" />
}
