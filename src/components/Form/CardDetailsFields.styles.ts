import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { authRecipe } from '../../foundations/authRecipe'
import { FieldRoot } from './FieldRoot'
import { TextInput } from './TextInput'

export const PhoneSlot = styled.div`
  grid-column: span 12;
  min-width: 0;
`

export const Grid = styled.div.withConfig({
  componentId: 'lsui-sc-card-details-fields',
})`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: ${token.spacing4};
  min-width: 0;
`

export const Field = styled(FieldRoot)<{ $span: number; $wide?: boolean }>`
  grid-column: span ${({ $span }) => $span};
  min-width: 0;
  > label {
    font-size: ${token.typographyFontSizeSm};
  }
  @media (max-width: ${authRecipe.breakpoints.sm}) {
    grid-column: span ${({ $wide, $span }) => ($wide ? 12 : $span)};
  }
`

export const Address = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  color: ${token.colorContentSecondary};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
  overflow-wrap: anywhere;
`

export const Input = styled(TextInput)`
  font-size: ${token.typographyFontSizeMd};
`
