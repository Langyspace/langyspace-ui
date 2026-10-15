import * as Styled from './styles'
import type { AuthFormProps } from './types'

export function AuthForm({ children, ...props }: AuthFormProps) {
  return <Styled.Form {...props}>{children}</Styled.Form>
}

export type { AuthFormProps } from './types'
