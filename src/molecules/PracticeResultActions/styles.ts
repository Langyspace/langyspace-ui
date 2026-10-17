import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-actions',
})`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${token.spacing2};
  margin-top: ${token.spacing1};

  > button {
    width: 100%;
    align-self: stretch;
  }
`
