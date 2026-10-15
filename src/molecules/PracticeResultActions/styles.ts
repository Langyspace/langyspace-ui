import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-actions',
})`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${tokens.spacing[2]};
  margin-top: ${tokens.spacing[1]};

  > button {
    width: 100%;
    align-self: stretch;
  }
`
