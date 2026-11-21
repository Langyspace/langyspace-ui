import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { presentationMedia } from '../../foundations/layout/presentationMedia'
import { Pressable } from '../Pressable'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-scene-explorer',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Scene = styled.div<{ $gutter: number; $bounded: boolean }>`
  position: relative;
  margin-top: ${(p) => p.$gutter}px;
  border-radius: ${theme.slides.panelRadius};
  img {
    display: block;
    width: 100%;
    border-radius: inherit;
    ${(p) =>
      p.$bounded
        ? css`
            height: auto;
            max-height: min(
              ${presentationMedia.viewportHeight},
              ${presentationMedia.maximumHeight}
            );
            object-fit: contain;
          `
        : undefined}
  }
`
export const Hotspot = styled(Pressable)<{
  $x: number
  $y: number
  $visited: boolean
}>`
  position: absolute;
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  padding: 0;
  border: 3px solid ${theme.colors.palette.white};
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$visited ? theme.semantic.status.success.foreground : Common.recipe(p).accent)};
  color: ${theme.colors.palette.white};
  cursor: pointer;
  &[aria-expanded='true'] {
    outline: 3px solid ${(p) => Common.recipe(p).foreground};
    outline-offset: 3px;
  }
  font-weight: 700;
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).foreground};
    outline-offset: 3px;
  }
`
const dotHotspot = css`
  border: 0;
  background: transparent;
  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    margin: auto;
    border: 2px solid ${theme.colors.palette.white};
    border-radius: ${theme.radius.circle};
    background: ${(p) => Common.recipe(p).accent};
    box-shadow: ${theme.shadows.sm};
  }
  &[aria-expanded='true'] {
    outline: none;
    &::before {
      width: 18px;
      height: 18px;
      outline: 2px solid ${(p) => Common.recipe(p).accent};
      outline-offset: 2px;
    }
  }
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).foreground};
    outline-offset: 2px;
  }
`
export const DotHotspot = styled(Hotspot)`
  ${dotHotspot}
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
  &[data-scene-compact='true'] {
    width: 44px;
    border-radius: ${theme.radius.circle};
    ${dotHotspot}
  }
`

export const Instruction = styled(Common.Hint)`
  margin: 0;
`
export const Callout = styled(Common.Surface)<{
  $left: number
  $top: number
  $placement: 'above' | 'below' | 'left' | 'right'
  $arrow: number
  $imageWidth?: number
  $imageHeight?: number
}>`
  position: absolute;
  z-index: 5;
  box-sizing: border-box;
  left: ${(p) => p.$left}px;
  top: ${(p) => p.$top}px;
  width: max-content;
  max-width: min(
    22rem,
    ${(p) => (p.$imageWidth === undefined ? 'calc(100% - 1rem)' : `${Math.max(0, p.$imageWidth - 16)}px`)}
  );
  height: auto;
  max-height: none;
  overflow: visible;
  padding: ${theme.spacing[3]};
  gap: ${theme.spacing[2]};
  box-shadow: ${theme.shadows.md};
  overflow-wrap: anywhere;
  p {
    margin: 0;
  }
  &::after {
    content: '';
    position: absolute;
    width: ${theme.spacing[2]};
    height: ${theme.spacing[2]};
    background: ${(p) => Common.recipe(p).surface};
    transform: rotate(45deg);
    ${(p) =>
      p.$placement === 'above' || p.$placement === 'below'
        ? `left: ${p.$arrow - 4}px; ${p.$placement === 'above' ? 'bottom: -5px;' : 'top: -5px;'}`
        : `top: ${p.$arrow - 4}px; ${p.$placement === 'left' ? 'right: -5px;' : 'left: -5px;'}`}
  }
`
export const CalloutHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  > h3 {
    font-size: ${theme.typography.fontSize.lg};
  }
  > button {
    flex-shrink: 0;
  }
`

/** Functional relationships over the image; never baked into a generated asset. */
export const Connections = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  line {
    stroke: ${(p) => Common.recipe(p).accent};
    stroke-width: 3;
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
  }
`
export const CalloutExample = styled.p`
  margin: 0;
  color: ${(p) => Common.recipe(p).foreground};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
`
