import { styled } from 'styled-components'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-stat-value',
})`
  font-size: 22px;
  font-weight: 800;
  line-height: 1;
  overflow-wrap: anywhere;
  [data-ui-stat-action] + & {
    padding-right: 78px;
  }
`
