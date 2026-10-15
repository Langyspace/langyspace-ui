import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-weekly-count-chart',
})`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: end;
  height: 7.5rem;
  gap: 0.5rem;
`
export const Day = styled.div.withConfig({
  componentId: 'lsui-sc-count-chart-day',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  min-height: 0;
  gap: 0.5rem;
`
export const Count = styled.div.withConfig({
  componentId: 'lsui-sc-count-chart-count',
})`
  min-height: 0.75rem;
  color: #6b6b6b;
  font-size: 0.625rem;
  font-weight: 600;
`
export const Bar = styled.div.withConfig({
  componentId: 'lsui-sc-count-chart-bar',
})<{ $active: boolean; $height: number }>`
  width: 70%;
  min-height: 0.375rem;
  height: ${({ $height }) => `${Math.max(6, $height)}px`};
  border-radius: 0.25rem;
  background: ${({ $active }) => ($active ? '#CC0F45' : '#0A0A0A')};
`
export const Label = styled.div.withConfig({
  componentId: 'lsui-sc-count-chart-label',
})<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? '#CC0F45' : '#6B6B6B')};
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.625rem;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`
