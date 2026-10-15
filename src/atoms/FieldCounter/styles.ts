import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-field-counter',
})`
  flex-shrink: 0;
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: 400;
  line-height: ${tokens.typography.lineHeight.snug};
`
