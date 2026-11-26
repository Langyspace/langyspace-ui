import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { answerRevealMotion } from '../../foundations/motion/reveal'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
import { Button } from '../Button/Button'
export { Marker } from './Exercise.shared.styles'
export const Reveal = styled(Pressable).withConfig({
  componentId: 'lsui-sc-reveal-card',
})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: ${theme.spacing[4]};
  width: 100%;
  min-width: 0;
  min-height: 52px;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1.5px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  text-align: left;
  font: inherit;
  font-size: ${theme.typography.fontSize.lg};
  cursor: pointer;
  overflow-wrap: anywhere;
  @container (max-height: ${theme.viewportHeights.lg}) {
    min-height: 44px;
    padding-block: ${theme.spacing[1]};
  }
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: auto minmax(0, 1fr);
    gap: ${theme.spacing[2]};
  }
`
export const Answer = styled.span`
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const PromptPanel = styled.div`
  width: 100%;
  min-width: 0;
  display: grid;
  justify-items: start;
  gap: ${theme.spacing[1]};
`

export const PromptTrigger = styled(Pressable)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  min-height: ${theme.spacing[8]};
  width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  > span:last-child {
    flex: 1;
    min-width: 0;
  }
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 3px;
  }
`

export const PromptAnswer = styled.p<{ $revealed: boolean; $minLines: number }>`
  margin: 0;
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.4;
  min-block-size: calc(1.4em * ${(p) => Math.max(1, p.$minLines)});
  visibility: ${(p) => (p.$revealed ? 'visible' : 'hidden')};
  pointer-events: ${(p) => (p.$revealed ? 'auto' : 'none')};
  ${(p) => p.$revealed && answerRevealMotion}
`

export const GuidedQuestion = styled.p`
  margin: 0;
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.5;
`
export const GuidanceButton = styled(Button).attrs({
  variant: 'secondary',
  size: 'sm',
})`
  margin-block: ${theme.spacing[1]};
`
export const GuidanceContent = styled.div`
  display: grid;
  width: 100%;
  > p {
    grid-area: 1 / 1;
  }
`
