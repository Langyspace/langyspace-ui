import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-scene-explorer',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Scene = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  img {
    display: block;
    width: 100%;
  }
`
export const Hotspot = styled(Pressable)<{
  $x: number
  $y: number
  $visited: boolean
}>`
  position: absolute;
  left: ${(p) => Math.min(95, Math.max(5, p.$x))}%;
  top: ${(p) => Math.min(95, Math.max(5, p.$y))}%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  padding: 0;
  border: 3px solid ${theme.colors.palette.white};
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$visited ? theme.semantic.status.success.foreground : Common.recipe(p).accent)};
  color: ${theme.colors.palette.white};
  cursor: pointer;
  font-weight: 700;
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).foreground};
    outline-offset: 3px;
  }
`
export const LabelScene = styled(Scene)`
  container-type: inline-size;
  border-radius: ${theme.slides.panelRadius};
`
export const LabelHotspot = styled(Hotspot)`
  width: auto;
  min-width: 44px;
  height: 44px;
  border: 0;
  border-radius: ${theme.slides.panelRadius};
  background: transparent;
  span {
    padding: ${theme.spacing[1]} ${theme.spacing[2]};
    border-radius: ${theme.slides.panelRadius};
    background: ${(p) => (p.$visited ? theme.semantic.status.success.foreground : theme.colors.palette.white)};
    color: ${(p) => (p.$visited ? theme.colors.palette.white : theme.slides.foreground)};
    box-shadow: ${theme.shadows.sm};
    white-space: nowrap;
    font-size: clamp(0.8125rem, 2.1cqw, 1rem);
  }
`
