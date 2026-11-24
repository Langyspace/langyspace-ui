import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'
import { recipe, Stack as SharedStack } from './Exercise.shared.styles'

/** Internal composition width, also used by a warm-up page's external header. */
export const warmupMaxWidth = theme.slides.focusedWidth

export const Stack = styled(SharedStack)`
  gap: ${theme.exercises.compactOptionGap};
`
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[3]};
  margin-top: ${theme.spacing[3]};
  grid-column: 1 / -1;
`
export const Panel = styled.section.withConfig({
  componentId: 'lsui-sc-exercise-panel',
})<{ $warmup?: boolean }>`
  min-width: 0;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.lg};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  @container (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[3]};
  }
  ${(p) =>
    p.$warmup &&
    css`
      width: 100%;
      max-width: ${warmupMaxWidth};
      margin-inline: auto;
      padding: 0;
      border: 0;
      background: transparent;
      @container (max-width: ${theme.breakpoints.md}) {
        padding: 0;
      }
    `}
`
export const PanelHeading = styled.div<{ $warmup: boolean }>`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[2]};
  h3 {
    font-family: ${(p) => (p.$warmup ? theme.typography.fontFamily.sans : recipe(p).displayFontFamily)};
    margin: 0;
    color: inherit;
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: clamp(${theme.typography.fontSize.xl}, 3cqh, 1.625rem);
    line-height: 1.25;
    letter-spacing: -0.01em;
    @container (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`
export const Split = styled.div`
  > [data-exercise-media] {
    min-width: 0;
    img {
      max-width: 100%;
      max-height: 18rem;
      object-fit: contain;
    }
  }
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: center;
  gap: ${theme.spacing[6]};
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Counter = styled.span`
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  flex-shrink: 0;
`
export const Media = styled.div`
  display: grid;
  place-items: center;
  min-width: 0;
  height: ${theme.exercises.mediaHeight};
  max-height: min(34cqh, calc(100cqh - 570px));
  min-height: 84px;
  margin-bottom: ${theme.spacing[2]};
  border-radius: ${theme.radius.lg};
  background: ${theme.exercises.mediaBackground};
  @container (max-width: ${theme.breakpoints.md}) {
    height: clamp(7.5rem, 26cqh, 13rem);
  }
  @container (max-height: ${theme.viewportHeights.md}) {
    max-height: calc(100cqh - 505px);
    min-height: 60px;
  }
  img {
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Warmup = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacing[3]};
  width: 100%;
  min-width: 0;
`
export const WarmupMedia = styled.div<{ $presentation?: boolean }>`
  position: relative;
  display: grid;
  gap: ${theme.spacing[3]};
  width: 100%;
  min-width: 0;
  max-width: ${(p) => (p.$presentation ? `calc(${theme.exercises.mediaHeight} * 1.5)` : undefined)};
  margin-inline: ${(p) => (p.$presentation ? 'auto' : undefined)};
  /* Scene at the slot root or in a simple stack; nested speaker avatars retain their sizes. */
  > img,
  > div > img:first-child {
    display: block;
    width: 100%;
    height: ${(p) => (p.$presentation ? theme.exercises.mediaHeight : 'auto')};
    min-height: 0;
    max-width: 100%;
    max-height: none;
    aspect-ratio: ${(p) => (p.$presentation ? 'auto' : '3 / 2')};
    object-fit: contain;
    border-radius: ${(p) => recipe(p).panelRadius};
  }
`
export const MediaCounter = styled.span`
  position: absolute;
  top: ${theme.spacing[3]};
  left: ${theme.spacing[3]};
  z-index: 1;
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: ${theme.radius.pill};
  background: ${alpha(theme.colors.palette.black, 0.6)};
  color: ${theme.colors.palette.white};
  font-size: ${theme.typography.fontSize.sm};
  font-variant-numeric: tabular-nums;
  line-height: 1.4;
  pointer-events: none;
`

/** Native workstation for a contextual data-entry exercise; no UI is baked into its image. */
export const Workstation = styled.section<{ $withMedia: boolean }>`
  display: grid;
  grid-template-columns: ${(p) => (p.$withMedia ? 'minmax(0, 1.05fr) minmax(0, 1fr)' : 'minmax(0, 1fr)')};
  gap: ${theme.spacing[6]};
  align-items: center;
  min-width: 0;
  color: ${(p) => recipe(p).foreground};
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const ContextMedia = styled.div`
  min-width: 0;
  img {
    display: block;
    width: 100%;
    height: auto;
    max-height: min(48cqh, 24rem);
    object-fit: contain;
    border-radius: ${theme.radius.xl};
  }
`
export const Desktop = styled.div`
  min-width: 0;
  width: 100%;
  max-width: 34rem;
  margin-inline: auto;
  display: grid;
  justify-items: center;
`
export const MonitorPanel = styled.section`
  min-width: 0;
  color: ${(p) => recipe(p).foreground};
`
export const Screen = styled.div`
  width: 100%;
  min-width: 0;
  min-height: min-content;
  display: flex;
  flex-direction: column;
  border: ${theme.spacing[2]} solid ${theme.exercises.workstation.frame};
  border-bottom: 0;
  border-radius: ${theme.radius.lg} ${theme.radius.lg} 0 0;
  background: ${(p) => recipe(p).canvas};
  box-shadow: 0 0 0 1px ${theme.exercises.workstation.edge};
  overflow: hidden;
`
export const WindowBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  min-height: ${theme.spacing[8]};
  flex-shrink: 0;
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  background: ${theme.exercises.workstation.windowBar};
  color: ${theme.exercises.workstation.windowForeground};
`
export const WindowControls = styled.span`
  display: inline-flex;
  gap: ${theme.spacing[1]};
  flex-shrink: 0;
  i {
    width: ${theme.spacing[2]};
    height: ${theme.spacing[2]};
    border-radius: ${theme.radius.circle};
    background: ${theme.exercises.workstation.close};
    &:nth-child(2) {
      background: ${theme.exercises.workstation.minimize};
    }
    &:nth-child(3) {
      background: ${theme.exercises.workstation.maximize};
    }
  }
`
export const ScreenHeader = styled.h3`
  margin: 0;
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.3;
  color: inherit;
`
export const ScreenBody = styled.div<{ $form: boolean }>`
  display: ${(p) => (p.$form ? 'grid' : 'block')};
  grid-template-columns: ${(p) => (p.$form ? 'repeat(2, minmax(0, 1fr))' : undefined)};
  align-content: center;
  flex: 1 0 auto;
  min-width: 0;
  padding: ${theme.spacing[4]};
  gap: ${theme.spacing[3]};
  > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Taskbar = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  min-height: ${theme.spacing[8]};
  flex-shrink: 0;
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  background: ${theme.exercises.workstation.taskbar};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize['2xs']};
  color: ${theme.exercises.workstation.taskbarForeground};
  > span {
    min-width: 0;
    overflow-wrap: anywhere;
  }
`
export const DesktopClock = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: ${theme.spacing[2]};
  margin-left: auto;
  text-align: right;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize['2xs']};
  white-space: nowrap;
`
export const DesktopMenu = styled.span`
  display: grid;
  grid-template-columns: repeat(2, ${theme.spacing[1]});
  gap: 2px;
  i {
    width: ${theme.spacing[1]};
    height: ${theme.spacing[1]};
    background: currentColor;
  }
`
export const MonitorChin = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: ${theme.spacing[4]};
  border-radius: 0 0 ${theme.radius.lg} ${theme.radius.lg};
  background: ${theme.exercises.workstation.frame};
  i {
    width: ${theme.spacing[1]};
    height: ${theme.spacing[1]};
    border-radius: ${theme.radius.circle};
    background: ${theme.exercises.workstation.edge};
  }
`
export const Stand = styled.div`
  width: ${theme.spacing[24]};
  max-width: 40%;
  height: ${theme.spacing[6]};
  border-bottom: ${theme.spacing[2]} solid ${theme.exercises.workstation.frame};
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0 35%;
    background: ${theme.exercises.workstation.frame};
  }
`
