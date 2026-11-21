import { css, styled } from 'styled-components'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveTheme } from '../../../src/foundations/theme/resolveTheme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import { Stack } from '../shared/Lesson.styles'
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
