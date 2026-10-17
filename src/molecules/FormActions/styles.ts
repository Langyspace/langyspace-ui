import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-form-actions',
})`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${token.spacing3};
  @media (max-width: 900px) {
    flex-direction: column;
    > button {
      width: 100%;
    }
  }
`
