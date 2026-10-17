import * as Styled from './styles'
import type { RadioButtonProps } from './types'

export function RadioButton(props: RadioButtonProps) {
  return <Styled.Root {...props} type="radio" data-ui-field="true" />
}

export type { RadioButtonProps } from './types'
