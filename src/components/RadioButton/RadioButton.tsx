import type { RadioButtonProps } from './RadioButton.types'
import * as Styled from './RadioButton.styles'

export function RadioButton(props: RadioButtonProps) {
  return <Styled.Root {...props} type="radio" data-ui-field="true" />
}
