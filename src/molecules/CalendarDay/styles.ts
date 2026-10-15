import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-day',
})`
  display: flex;
  min-width: 0;
  flex-direction: column;
  min-height: 112px;
  gap: 4px;
  padding: 8px 12px;
  border-top: 1px solid #ececea;
  border-right: 1px solid #ececea;
  color: #0a0a0a;
  background: #fff;
  &[data-muted='true'] {
    color: #6b6b6b;
    background: #fcfcfb;
  }
  &:nth-child(7n) {
    border-right: 0;
  }
  &[data-interactive='true'] {
    cursor: pointer;
    &:hover {
      background: #fafaf9;
    }
  }
`
