import type { AuthFormProps } from './AuthForm.types'
import * as Styled from './AuthForm.styles'

export function AuthForm({ children, ...props }: AuthFormProps) {
  return <Styled.Form {...props}>{children}</Styled.Form>
}
