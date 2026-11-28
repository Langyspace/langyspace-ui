import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-grouped-bar-chart',
})`
  display: grid;
  grid-auto-columns: minmax(40px, 1fr);
  grid-auto-flow: column;
  align-items: end;
  height: 224px;
  gap: 8px;
  padding-bottom: 8px;
  overflow-x: auto;
  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 2px;
  }
`

export const Day = styled.div`
  display: grid;
  align-items: end;
  min-width: 0;
  height: 100%;
  gap: 8px;
  small {
    color: inherit;
    font-size: ${theme.typography.fontSize.sm};
    text-align: center;
  }
`

export const Bar = styled.span<{ $height: number }>`
  position: relative;
  &&&& {
    height: ${({ $height }) => $height}%;
  }
`

export const Value = styled.span`
  position: absolute;
  bottom: calc(100% + ${theme.spacing[1]});
  inset-inline: 0;
  color: inherit;
  text-align: center;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1;
`

export const Bars = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  align-items: end;
  height: 176px;
  padding-top: ${theme.spacing[6]};
  gap: 2px;
  ${Bar} {
    min-height: 6px;
    border-radius: 4px 4px 0 0;
    background: currentColor;
  }
  ${Bar}:nth-child(2n) {
    background: ${theme.colors.palette.extended.teal700};
  }
`
