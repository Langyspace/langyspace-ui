import { styled } from 'styled-components'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-calendar-day-number',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  border-radius: 999px;
  color: inherit;
  background: transparent;
  font-size: 12px;
  font-weight: 600;
  &[aria-current='date'] {
    color: #fff;
    background: #0a0a0a;
  }
`
