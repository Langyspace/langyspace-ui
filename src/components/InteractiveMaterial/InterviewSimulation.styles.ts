import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-interview-simulation',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Meet = styled.div`
  background: ${theme.simulations.canvas};
  color: ${theme.simulations.foreground};
  border-radius: 18px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  font-size: 12px;
  color: ${theme.simulations.muted};
  padding: 0 ${theme.spacing[1]};
`
export const Main = styled.div`
  position: relative;
  background: ${theme.simulations.stage};
  border-radius: 14px;
  aspect-ratio: 16/9;
  min-height: 0;
  overflow: hidden;
  display: grid;
  place-items: end center;
  > img {
    height: 88%;
    max-height: 100%;
    min-height: 0;
    object-fit: contain;
  }
`
export const Name = styled.span`
  position: absolute;
  left: 10px;
  bottom: 8px;
  font-size: 12px;
  font-weight: 600;
  background: ${theme.simulations.nameBackground};
  padding: 2px 8px;
  border-radius: 6px;
`
export const Self = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 24%;
  aspect-ratio: 4/3;
  background: ${theme.simulations.controls};
  border-radius: 10px;
  display: grid;
  place-items: center;
  border: 2px solid ${theme.simulations.canvas};
  padding-bottom: 10px;
  box-sizing: border-box;
  b {
    width: 45%;
    max-width: 40px;
    height: auto;
    aspect-ratio: 1;
    border-radius: ${theme.radius.circle};
    display: grid;
    place-items: center;
    background: ${theme.slides.accent};
    font-family: ${theme.typography.fontFamily.sans};
    font-size: clamp(12px, 2vw, 18px);
  }
  span {
    position: absolute;
    left: 6px;
    bottom: 4px;
    font-size: 10px;
    font-weight: 600;
    max-width: calc(100% - 12px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const Caption = styled.div`
  position: absolute;
  left: 12px;
  right: calc(24% + 22px);
  bottom: 44px;
  background: ${theme.simulations.captionBackground};
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 14px;
  line-height: 1.35;
  small {
    display: block;
    color: ${theme.simulations.muted};
    font-size: 10px;
  }
  @media (max-width: ${theme.simulations.stackWidth}) {
    right: calc(28% + 20px);
    font-size: 12px;
    bottom: 38px;
  }
`
export const Bar = styled(Common.Row)`
  justify-content: center;
  gap: 10px;
  padding: ${theme.spacing[1]} 0;
`
export const Control = styled(Common.DeviceControl)<{
  $active?: boolean
  $end?: boolean
}>`
  width: ${(p) => (p.$end ? '56px' : '40px')};
  min-width: 0;
  height: 40px;
  padding: 0;
  border: 0;
  border-radius: ${theme.radius.pill};
  background: ${(p) => (p.$end ? theme.simulations.end : p.$active ? theme.simulations.active : theme.simulations.controls)};
  color: ${(p) => (p.$active ? theme.simulations.activeForeground : theme.simulations.foreground)};
  &[data-device][aria-pressed='false'] {
    background: ${theme.simulations.end};
    color: ${theme.simulations.foreground};
  }
  &:not(:disabled):hover {
    background: ${(p) => (p.$end ? theme.simulations.end : theme.simulations.controls)};
    color: ${theme.simulations.foreground};
  }
  svg {
    width: 18px;
    height: 18px;
  }
`
