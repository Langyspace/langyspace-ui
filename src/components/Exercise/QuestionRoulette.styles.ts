import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme as recipe } from '../../foundations/theme/resolveSlideTheme'
import { Button } from '../Button/Button'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-question-roulette',
})`
  container-type: inline-size;
  width: 100%;
  min-width: 0;
  color: ${(p) => recipe(p).foreground};
  font-family: ${theme.typography.fontFamily.sans};
`
export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  align-items: center;
  gap: ${theme.spacing[8]};
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${theme.spacing[4]};
  }
`
export const Wheel = styled.div`
  position: relative;
  width: min(100%, 20rem);
  aspect-ratio: 1;
  margin-inline: auto;
  @container (max-width: ${theme.breakpoints.sm}) {
    width: min(70%, 15rem);
  }
`
export const Rotor = styled.svg<{ $rotation: number }>`
  display: block;
  width: 100%;
  height: 100%;
  transform: rotate(${(p) => p.$rotation}deg);
  transition: transform ${theme.transitions.duration.spinner}
    ${theme.transitions.easing.standard};
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
export const Sector = styled.path<{ $alternate: boolean; $selected: boolean }>`
  fill: ${(p) => (p.$selected ? `color-mix(in srgb, ${recipe(p).accent} 85%, ${theme.colors.palette.black})` : p.$alternate ? recipe(p).surface : recipe(p).canvas)};
  stroke: ${(p) => recipe(p).border};
  stroke-width: 1.5;
`
export const Topic = styled.text<{ $selected: boolean }>`
  fill: ${(p) => (p.$selected ? theme.colors.palette.white : recipe(p).foreground)};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-anchor: middle;
  dominant-baseline: middle;
  pointer-events: none;
`
export const Pointer = styled.svg`
  position: absolute;
  z-index: 1;
  width: ${theme.spacing[6]};
  height: ${theme.spacing[6]};
  top: 0;
  left: 50%;
  transform: translate(-50%, -15%);
  fill: ${(p) => recipe(p).accent};
`
export const Spin = styled(Button)`
  position: absolute;
  inset: calc(50% - ${theme.spacing[10]}) auto auto
    calc(50% - ${theme.spacing[10]});
  border-radius: ${theme.radius.circle};
  width: ${theme.spacing[20]};
  height: ${theme.spacing[20]};
  min-height: ${theme.spacing[20]};
  padding: ${theme.spacing[2]};
  white-space: normal;
  box-shadow: 0 0 0 ${theme.spacing[1]} ${(p) => recipe(p).canvas};
`
export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: center;
  min-width: 0;
  min-height: 15rem;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[6]};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => recipe(p).surface};
  @container (max-width: ${theme.breakpoints.sm}) {
    min-height: 11rem;
    padding: ${theme.spacing[4]};
  }
`
export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  font-variant-numeric: tabular-nums;
`
export const Prompt = styled.p`
  margin: 0;
  font-size: clamp(
    ${theme.typography.fontSize.lg},
    3.2cqw,
    ${theme.typography.fontSize['2xl']}
  );
  line-height: ${theme.typography.lineHeight.snug};
  font-weight: ${theme.typography.fontWeight.medium};
  overflow-wrap: anywhere;
`
export const Placeholder = styled.p`
  margin: 0;
  text-align: center;
  color: ${(p) => recipe(p).muted};
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: ${theme.typography.fontSize['4xl']};
`
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`
export const Hint = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.md};
  line-height: ${theme.typography.lineHeight.normal};
  color: ${(p) => recipe(p).muted};
`
