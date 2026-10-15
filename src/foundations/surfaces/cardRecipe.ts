import { css } from 'styled-components'
import { tokens } from '../tokens'
export const cardRecipe = css`
  min-width: 0;
  padding: ${tokens.spacing[4]};
  border: 1px solid ${tokens.color.surfaceBorder.subtle};
  border-radius: ${tokens.radius.card};
  background: ${tokens.color.neutral[0]};
  box-shadow: ${tokens.shadow.subtle};
  overflow-wrap: anywhere;
`
