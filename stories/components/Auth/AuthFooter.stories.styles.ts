import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'

export const DarkFooterPreview = styled.div`
  &&&& {
    background: ${theme.colors.palette.black};
    color: ${theme.colors.palette.white};
    padding: 24px;
  }
`
