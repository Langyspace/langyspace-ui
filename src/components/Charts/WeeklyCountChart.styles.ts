import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-weekly-count-chart',
})`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: end;
  height: 7.5rem;
  gap: ${theme.spacing[2]};
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
  gap: ${theme.spacing[2]};
`

export const Count = styled.div.withConfig({
  componentId: 'lsui-sc-count-chart-count',
})`
  min-height: 0.75rem;
  color: ${theme.colors.text.muted};
  font-size: 0.625rem;
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const Bar = styled.div.withConfig({
  componentId: 'lsui-sc-count-chart-bar',
})<{ $active: boolean; $height: number }>`
  width: 70%;
  min-height: 0.375rem;
  height: ${({ $height }) => `${Math.max(6, $height)}px`};
  border-radius: 0.25rem;
  background: ${({ $active }) => ($active ? theme.semantic.foreground.brand : theme.colors.palette.neutral[900])};
`

export const Label = styled.div.withConfig({
  componentId: 'lsui-sc-count-chart-label',
})<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? theme.semantic.foreground.brand : theme.colors.palette.neutral[600])};
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.625rem;
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1;
  text-transform: uppercase;
`
