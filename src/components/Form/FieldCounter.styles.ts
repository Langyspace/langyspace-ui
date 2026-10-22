import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-field-counter',
})`
  flex-shrink: 0;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: 400;
  line-height: ${theme.typography.lineHeight.snug};
`
