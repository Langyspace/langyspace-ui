import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-route-map',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Frame = styled.div<{ $aspectRatio: number }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${(p) => p.$aspectRatio};
  border: 1px solid ${(p) => Common.recipe(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => Common.recipe(p).surface};
  container-type: inline-size;
`
export const Art = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: inherit;
  pointer-events: none;
  user-select: none;
`
export const StreetLabel = styled.span<{
  $x: number
  $y: number
  $vertical: boolean
}>`
  position: absolute;
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;
  transform: translate(-50%, -50%)
    rotate(${(p) => (p.$vertical ? '-90deg' : '0deg')});
  padding: 0;
  color: ${theme.slides.foreground};
  font-size: clamp(
    ${theme.typography.fontSize.xs},
    1.8cqw,
    ${theme.typography.fontSize.sm}
  );
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.2;
  white-space: nowrap;
  pointer-events: none;
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
  $illustrated: boolean
  $width?: number
  $height?: number
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
  ${(p) =>
    p.$illustrated
      ? css`
          width: ${p.$width ?? 24}%;
          height: ${p.$height ?? 24}%;
          max-width: none;
          min-width: 0;
          min-height: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: ${theme.spacing[1]};
          border-color: ${p.$selected ? Common.recipe(p).accent : 'transparent'};
          background: transparent;
        `
      : null}
  &:focus-visible {
    outline: 3px solid ${(p) => Common.recipe(p).accent};
    outline-offset: 3px;
  }
`
export const Symbol = styled.span`
  font-size: clamp(1.25rem, 5cqw, 1.75rem);
  line-height: 1;
`
export const Label = styled.span<{
  $concealed: boolean
  $illustrated: boolean
}>`
  visibility: ${(p) => (p.$concealed ? 'hidden' : 'visible')};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-align: center;
  ${(p) =>
    p.$illustrated
      ? css`
          padding: calc(${theme.spacing[1]} / 2) ${theme.spacing[1]};
          border-radius: ${theme.radius.pill};
          background: ${Common.recipe(p).canvas};
          color: ${Common.recipe(p).foreground};
          white-space: nowrap;
          overflow-wrap: normal;
          word-break: normal;
          font-size: clamp(
            ${theme.typography.fontSize.xs},
            2.5cqw,
            ${theme.typography.fontSize.md}
          );
        `
      : null}
`
export const Start = styled.span<{ $illustrated?: boolean }>`
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${(p) => Common.recipe(p).accent};
  ${(p) =>
    p.$illustrated
      ? css`
          padding: ${theme.spacing[1]} ${theme.spacing[2]};
          border-radius: ${theme.radius.pill};
          background: ${Common.recipe(p).canvas};
        `
      : null}
`
