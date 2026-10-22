import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-metadata',
})`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
`
