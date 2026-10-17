import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-form-stack',
})`
  display: grid;
  min-width: 0;
  align-content: start;
  gap: ${token.spacing5};
`
