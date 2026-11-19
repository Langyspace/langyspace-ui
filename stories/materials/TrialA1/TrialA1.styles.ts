import { LessonHint } from '../shared/LessonHint'
import { css, styled } from 'styled-components'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveTheme } from '../../../src/foundations/theme/resolveTheme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import { Stack, Surface } from '../shared/Lesson.styles'
export const Greeting = styled(ChoiceCard)`
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[2]};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  background: ${(p) => resolveSlideTheme(p).surface};
  &:hover:not(:disabled),
  &[aria-expanded='true'] {
    border-color: ${(p) => resolveSlideTheme(p).accent};
  }
  b {
    font-size: clamp(1.25rem, 3.6cqh, 1.75rem);
    line-height: 1.2;
  }
`
export const GreetingImage = styled.img`
  width: ${theme.spacing[12]};
  height: ${theme.spacing[12]};
  flex-shrink: 0;
  object-fit: contain;
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
`
export const GreetingText = styled(Stack)`
  gap: ${theme.spacing[1]};
  > span {
    font-family: ${theme.typography.fontFamily.sans};
    color: ${(p) => resolveSlideTheme(p).muted};
    font-size: clamp(1rem, 2.6cqh, 1.25rem);
  }
  [aria-pressed='true'] & > span {
    color: inherit;
  }
`
export const SceneFit = styled.div`
  width: 100%;
  max-width: 100%;
  margin-inline: auto;
`
export const Columns = styled.div<{ $scene?: boolean }>`
  display: grid;
  grid-template-columns: ${(p) => (p.$scene ? 'minmax(0,2fr) minmax(220px,1fr)' : 'minmax(0,1.3fr) minmax(240px,1fr)')};
  align-items: center;
  gap: ${theme.spacing[6]};
  min-width: 0;
  @container (max-width:${theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Support = styled(Surface)`
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  gap: ${theme.spacing[2]};
  > b {
    display: block;
    padding: ${theme.spacing[2]};
    border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
    background: ${(p) => resolveTheme(p).colors?.palette.accent.pinkSoft ?? theme.colors.palette.accent.pinkSoft};
    color: ${(p) => resolveSlideTheme(p).accent};
    font-size: ${theme.typography.fontSize.xs};
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  p {
    margin: 0;
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: clamp(0.875rem, 2.3cqh, 1.0625rem);
  }
  span {
    display: block;
    margin-top: ${theme.spacing[1]};
    font-size: clamp(0.8125rem, 2.1cqh, 1rem);
    color: ${(p) => resolveSlideTheme(p).muted};
    font-weight: ${theme.typography.fontWeight.medium};
  }
`
export const Strip = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing[2]};
  span {
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    border-radius: ${theme.radius.pill};
    background: transparent;
    color: ${(p) => resolveSlideTheme(p).muted};
    font-weight: ${theme.typography.fontWeight.semibold};
    font-size: clamp(0.875rem, 2.2cqh, 1.0625rem);
  }
`
export const Pair = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: ${theme.spacing[4]};
  > span {
    font-family: ${(p) => resolveSlideTheme(p).accentFontFamily};
    font-style: italic;
    font-size: clamp(1.75rem, 5cqh, 2.5rem);
    color: ${(p) => resolveSlideTheme(p).indicator};
    text-align: center;
  }
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
const choiceAffordance = css`
  border-color: ${(p) => resolveTheme(p).semantic?.border.strong ?? theme.semantic.border.strong};
  &&:hover:not(:disabled):not([aria-pressed='true']) {
    border-color: ${(p) => resolveSlideTheme(p).accent};
  }
  &&:focus-visible {
    outline: 3px solid ${(p) => resolveSlideTheme(p).accent};
    outline-offset: ${theme.spacing[1]};
  }
`
export const Preference = styled(ChoiceCard)`
  ${choiceAffordance}
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  aspect-ratio: 4/3;
  min-height: 18rem;
  padding: ${theme.spacing[3]};
  gap: ${theme.spacing[2]};
  img {
    display: block;
    width: 100%;
    min-height: 0;
    flex: 1;
    object-fit: contain;
    border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  }
  b {
    font-size: clamp(1.125rem, 3cqh, 1.5rem);
  }
`
export const Selected = styled.span`
  position: absolute;
  top: ${theme.spacing[3]};
  right: ${theme.spacing[3]};
  width: ${theme.spacing[8]};
  height: ${theme.spacing[8]};
  display: grid;
  place-items: center;
  border-radius: ${theme.radius.circle};
  background: ${(p) => resolveSlideTheme(p).accent};
  color: ${theme.colors.palette.white};
`
export const Questions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Talk = styled(ChoiceCard)`
  ${choiceAffordance}
  min-height: ${theme.spacing[12]};
  b {
    flex: 1;
    font-size: clamp(1.125rem, 2.2cqh, 1.375rem);
    line-height: 1.3;
  }
  img {
    width: ${theme.spacing[8]};
    height: ${theme.spacing[8]};
    object-fit: contain;
    border-radius: ${theme.radius.sm};
  }
`
export const Summary = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const SupportTitle = styled.h3`
  margin: 0;
  color: ${(p) => resolveSlideTheme(p).accent};
  font-family: ${(p) => resolveSlideTheme(p).displayFontFamily};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

export const Help = styled(LessonHint)`
  min-width: 0;
`
