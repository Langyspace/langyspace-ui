import type { FormErrorProps } from './FormError.types'
import * as Styled from './FormError.styles'

export function FormError({ children, ...props }: FormErrorProps) {
  return (
    <Styled.Root {...props} role="alert">
      {children}
    </Styled.Root>
  )
}
