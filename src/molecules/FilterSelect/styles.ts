import { styled } from 'styled-components'
import { SelectInput } from '../../atoms/SelectInput'
import * as token from '../../foundations/tokenValues'
import type { FieldControlSize } from '../../foundations/fields'

const fontSizes = {
  sm: token.typographyFontSizeXs,
  md: token.typographyFontSizeXs,
  lg: token.typographyFontSizeSm,
} as const

export const Root = styled(SelectInput).withConfig({
  componentId: 'lsui-sc-filter-select',
})<{ $controlSize: FieldControlSize }>`
  align-self: stretch;
  flex: 1;
  min-height: 0;
  appearance: none;
  padding: 0;
  color: ${token.colorContentSecondary};
  font-weight: ${token.typographyFontWeightSemibold};
  font-size: ${({ $controlSize }) => fontSizes[$controlSize]};
  cursor: pointer;
`
