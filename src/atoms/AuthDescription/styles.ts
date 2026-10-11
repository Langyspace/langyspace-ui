import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

const authDescriptionWidth = '25rem'
const authDescriptionLineHeight = 1.55
const authDescriptionSpacing = `clamp(${tokens.spacing[2]}, 1.5svh, ${tokens.spacing[3]})`

export const Description = styled.p.withConfig({
  componentId: 'lsui-sc-auth-description',
})`
  max-width: ${authDescriptionWidth};
  margin: 0;
  margin-top: ${authDescriptionSpacing};
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.sm};
  line-height: ${authDescriptionLineHeight};
`
