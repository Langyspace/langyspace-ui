import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe, Stack as SharedStack } from './Exercise.shared.styles'

/** Internal composition width, also used by a warm-up page's external header. */
export const warmupMaxWidth = theme.slides.focusedWidth

export const Stack = styled(SharedStack)`
  gap: ${theme.exercises.compactOptionGap};
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
export const PanelHeading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[2]};
  h3 {
    font-family: ${(p) => recipe(p).displayFontFamily};
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
export const WarmupMedia = styled.div`
  display: grid;
  gap: ${theme.spacing[3]};
  width: 100%;
  min-width: 0;
  /* Scene at the slot root or in a simple stack; nested speaker avatars retain their sizes. */
  > img,
  > div > img:first-child {
    display: block;
    width: 100%;
    height: auto;
    min-height: 0;
    max-width: 100%;
    max-height: none;
    aspect-ratio: 3 / 2;
    object-fit: contain;
    border-radius: ${(p) => recipe(p).panelRadius};
  }
`
