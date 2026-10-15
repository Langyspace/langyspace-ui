import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Panel = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-panel',
})`
  display: flex;
  min-height: min(70svh, 34rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${token.spacing4};
  text-align: center;
`
