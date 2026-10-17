import { styled } from 'styled-components'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-month-grid',
})`
  display: grid;
  grid-template-columns: repeat(7, minmax(7.5rem, 1fr));
  min-width: 52.5rem;
`
