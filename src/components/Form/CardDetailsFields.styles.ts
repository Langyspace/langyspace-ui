import { styled } from 'styled-components'
import { FieldRoot } from './FieldRoot'
import { TextInput } from './TextInput'
import { theme } from '../../foundations/theme/theme'

export const PhoneSlot = styled.div`
  grid-column: span 12;
  min-width: 0;
`

export const Grid = styled.div.withConfig({
  componentId: 'lsui-sc-card-details-fields',
})`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${theme.spacing[4]};
  min-width: 0;
`

export const Field = styled(FieldRoot)<{ $span: number; $wide?: boolean }>`
  grid-column: span ${({ $span }) => $span};
  min-width: 0;
  > label {
    font-size: ${theme.typography.fontSize.sm};
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-column: span ${({ $wide, $span }) => ($wide ? 12 : $span)};
  }
`

export const Address = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`

export const Input = styled(TextInput)`
  font-size: ${theme.typography.fontSize.md};
`
