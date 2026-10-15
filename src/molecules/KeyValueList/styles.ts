import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-key-value-list',
})`
  display: grid;
  gap: 12px;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
  gap: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
  &:last-child {
    padding-bottom: 0;
    border: 0;
  }
  span {
    min-width: 0;
    color: rgba(17, 17, 17, 0.62);
    font-size: 14px;
    overflow-wrap: anywhere;
  }
  strong {
    flex-shrink: 0;
    font-size: 20px;
  }
`
