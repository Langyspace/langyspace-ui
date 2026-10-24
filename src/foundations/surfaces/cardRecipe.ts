import { css } from 'styled-components'
import { theme } from '../theme/theme'

export const cardRecipe = css`
  min-width: 0;
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.card};
  background: ${theme.colors.palette.white};
  box-shadow: ${theme.shadows.xs};
  overflow-wrap: anywhere;
`
