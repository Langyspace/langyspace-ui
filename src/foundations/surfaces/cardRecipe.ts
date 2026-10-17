import { css } from 'styled-components'
import * as token from '../tokenValues'

export const cardRecipe = css`
  min-width: 0;
  padding: ${token.spacing4};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusCard};
  background: ${token.colorNeutral0};
  box-shadow: ${token.shadowSubtle};
  overflow-wrap: anywhere;
`
