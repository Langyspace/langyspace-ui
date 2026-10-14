import * as Styled from './styles'
import type { CheckboxProps } from './types'
export function Checkbox(props: CheckboxProps) {
  return <Styled.Root {...props} type="checkbox" data-ui-field="true" />
}
export type { CheckboxProps } from './types'
