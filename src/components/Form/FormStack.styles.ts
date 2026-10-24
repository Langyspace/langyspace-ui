import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-form-stack',
})`
  display: grid;
  min-width: 0;
  align-content: start;
  gap: ${theme.spacing[5]};
`
