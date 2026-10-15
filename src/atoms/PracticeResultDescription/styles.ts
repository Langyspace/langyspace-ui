import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Description = styled.p.withConfig({
  componentId: 'lsui-sc-practice-result-description',
})`
  max-width: 22rem;
  margin: 0;
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.sm};
  line-height: ${tokens.typography.lineHeight.normal};
`
