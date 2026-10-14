import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-stat-label',
})`
  margin-top: 7px;
  color: ${tokens.color.content.muted};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  [data-tone='brand'] & {
    color: #9d174d;
  }
`
