import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

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
    color: ${alpha(theme.colors.palette.extended.ink, 0.64)};
    font-size: 12px;
    text-align: center;
  }
`

export const Bar = styled.span.attrs<{ $height: number }>(({ $height }) => ({
  style: { height: `${$height}%` },
}))``

export const Bars = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  align-items: end;
  height: 176px;
  gap: 2px;
  ${Bar} {
    min-height: 6px;
    border-radius: 4px 4px 0 0;
    background: ${theme.colors.palette.extended.ink};
  }
  ${Bar}:nth-child(2n) {
    background: ${theme.colors.palette.extended.teal700};
  }
`
