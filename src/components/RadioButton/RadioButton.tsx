import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'

const Root = styled.input.withConfig({
  componentId: 'lsui-sc-radio-button',
})`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin: 0;
  accent-color: #0a0a0a;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid rgba(0, 242, 234, 0.72);
    outline-offset: 3px;
  }
  &:disabled {
    cursor: default;
  }
`

export type RadioButtonProps = Omit<ComponentPropsWithRef<'input'>, 'type'>

export function RadioButton(props: RadioButtonProps) {
  return <Root {...props} type="radio" data-ui-field="true" />
}
