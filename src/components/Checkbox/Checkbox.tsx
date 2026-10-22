import type { CheckboxProps } from './Checkbox.types'
import * as Styled from './Checkbox.styles'

export function Checkbox(props: CheckboxProps) {
  return <Styled.Root {...props} type="checkbox" data-ui-field="true" />
}
