import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-progress-track',
})`
  min-width: 0;
  flex: 1;
  display: flex;
  gap: ${token.spacing1};
`
