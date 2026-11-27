import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-route-map',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Frame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  border: 1px solid ${(p) => Common.recipe(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => Common.recipe(p).surface};
  container-type: inline-size;
`
export const Streets = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  line {
    stroke: ${(p) => Common.recipe(p).border};
    stroke-width: 7;
    stroke-linecap: round;
  }
`
export const Place = styled(Pressable)<{
  $x: number
  $y: number
  $selected: boolean
}>`
  position: absolute;
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;
  transform: translate(-50%, -50%);
  display: grid;
  justify-items: center;
  gap: ${theme.spacing[1]};
  min-width: ${theme.sizes.control.md};
  min-height: ${theme.sizes.control.md};
  max-width: 28cqw;
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border: 2px solid
    ${(p) => (p.$selected ? Common.recipe(p).accent : Common.recipe(p).border)};
  border-radius: ${theme.radius.lg};
  background: ${(p) => Common.recipe(p).canvas};
  color: ${(p) => Common.recipe(p).foreground};
  font: inherit;
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.25;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).accent};
    outline-offset: 3px;
  }
`
export const Symbol = styled.span`
  font-size: clamp(1.25rem, 5cqw, 1.75rem);
  line-height: 1;
`
export const Label = styled.span<{ $concealed: boolean }>`
  visibility: ${(p) => (p.$concealed ? 'hidden' : 'visible')};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-align: center;
`
export const Start = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${(p) => Common.recipe(p).accent};
`
