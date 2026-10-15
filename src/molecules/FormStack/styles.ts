import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-form-stack',
})`
  display: grid;
  min-width: 0;
  align-content: start;
  gap: ${tokens.spacing[5]};
`
