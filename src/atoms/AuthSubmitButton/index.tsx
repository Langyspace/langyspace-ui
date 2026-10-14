import * as Styled from './styles'
import type { AuthSubmitButtonProps } from './types'
export function AuthSubmitButton({
  type = 'submit',
  ...props
}: AuthSubmitButtonProps) {
  return (
    <Styled.Button
      {...props}
      type={type}
      fullWidth
      size="lg"
      variant="primary"
    />
  )
}
export type { AuthSubmitButtonProps } from './types'
