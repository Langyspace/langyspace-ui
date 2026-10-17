import * as Styled from './styles'
import type { FormErrorProps } from './types'

export function FormError({ children, ...props }: FormErrorProps) {
  return (
    <Styled.Root {...props} role="alert">
      {children}
    </Styled.Root>
  )
}

export type { FormErrorProps } from './types'
