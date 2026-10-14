import { styled } from 'styled-components'
import { SelectInput } from '../../atoms/SelectInput'
import { tokens } from '../../foundations/tokens'
import type { FieldControlSize } from '../../foundations/fields'
const fontSizes = {
  sm: tokens.typography.fontSize.xs,
  md: tokens.typography.fontSize.xs,
  lg: tokens.typography.fontSize.sm,
} as const
export const Root = styled(SelectInput).withConfig({
  componentId: 'lsui-sc-filter-select',
})<{ $controlSize: FieldControlSize }>`
  align-self: stretch;
  flex: 1;
  min-height: 0;
  appearance: none;
  padding: 0;
  color: ${tokens.color.content.secondary};
  font-weight: ${tokens.typography.fontWeight.semibold};
  font-size: ${({ $controlSize }) => fontSizes[$controlSize]};
  cursor: pointer;
`
