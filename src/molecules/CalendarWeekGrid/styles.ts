import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-week-grid',
})`
  display: grid;
  grid-template-columns: 4rem repeat(7, minmax(7rem, 1fr));
  min-width: 53rem;
  background: ${token.colorNeutral0};
`
