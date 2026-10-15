import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

export const Panel = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-panel',
})`
  display: flex;
  min-height: min(70svh, 34rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing[4]};
  text-align: center;
`
