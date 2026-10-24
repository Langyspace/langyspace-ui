import { styled } from 'styled-components'
import { SelectInput } from '../Form/SelectInput'
import type { FieldControlSize } from '../../foundations/fields'
import { theme } from '../../foundations/theme/theme'

const fontSizes = {
  sm: theme.typography.fontSize.xs,
  md: theme.typography.fontSize.xs,
  lg: theme.typography.fontSize.sm,
} as const

export const Root = styled(SelectInput).withConfig({
  componentId: 'lsui-sc-filter-select',
})<{ $controlSize: FieldControlSize }>`
  align-self: stretch;
  flex: 1;
  min-height: 0;
  appearance: none;
  padding: 0;
  color: ${theme.colors.text.secondary};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${({ $controlSize }) => fontSizes[$controlSize]};
  cursor: pointer;
`
