import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Title = styled.h2.withConfig({
  componentId: 'lsui-sc-practice-result-title',
})`
  margin: 0;
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize['2xl']};
  font-weight: ${tokens.typography.fontWeight.bold};
`
