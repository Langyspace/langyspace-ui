import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-definition-item',
})`
  min-width: 0;
  border: 1px solid ${token.colorSurfaceBorderDefault};
  border-radius: 14px;
  padding: 12px;
`

const Label = styled.span`
  display: block;
  color: ${token.colorContentMuted};
  font-size: 12px;
  font-weight: ${token.typographyFontWeightBold};
`

const Value = styled.strong`
  display: block;
  margin-top: 4px;
  color: ${token.colorContentDefault};
  font-size: 14px;
  font-weight: ${token.typographyFontWeightBold};
  overflow-wrap: anywhere;
`

export interface DefinitionItemProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  label: ReactNode
  value: ReactNode
  valueTitle?: string
}

export function DefinitionItem({
  label,
  value,
  valueTitle,
  ...props
}: DefinitionItemProps) {
  return (
    <Root {...props} data-ui-definition-item>
      <Label>{label}</Label>
      <Value title={valueTitle}>{value}</Value>
    </Root>
  )
}
