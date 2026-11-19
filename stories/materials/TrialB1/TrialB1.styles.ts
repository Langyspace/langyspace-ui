import { LessonHint } from '../shared/LessonHint'
import { styled } from 'styled-components'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { theme } from '../../../src/foundations/theme/theme'
import { recipe } from '../../../src/components/InteractiveMaterial/Material.shared.styles'

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
  min-width: 0;
  font-size: ${theme.typography.fontSize.lg};
  p {
    margin: 0;
  }
`
export const Greeting = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[6]};
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Question = styled(Stack)`
  padding: ${theme.spacing[6]};
  background: ${(p) => recipe(p).surface};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${(p) => recipe(p).panelRadius};
`
export const Heading = styled.h3`
  margin: 0;
  color: inherit;
  font-size: ${theme.typography.fontSize.xl};
  line-height: 1.3;
  font-weight: ${theme.typography.fontWeight.semibold};
`
export const Support = styled(LessonHint)`
  align-self: flex-start;
  min-width: 0;
`
export const Invitation = styled(Stack)`
  padding-top: ${theme.spacing[6]};
  border-top: 1px solid ${(p) => recipe(p).border};
  font-size: ${theme.typography.fontSize.xl};
`
export const Scene = styled(SceneExplorer)`
  width: 100%;
  max-width: 56rem;
  margin-inline: auto;
  > div > img {
    object-fit: contain;
    aspect-ratio: 4 / 3;
  }
`
export const Choices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[6]};
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Choice = styled(ChoiceCard)`
  min-height: ${theme.spacing[24]};
  padding: ${theme.spacing[6]};
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize['2xl']};
`
export const Selected = styled.span`
  visibility: hidden;
  color: ${theme.semantic.status.success.foreground};
  [aria-pressed='true'] > & {
    visibility: visible;
  }
`
export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[3]};
`
export const Dialogue = styled(LearningDialogue)`
  img[src$='#ana'] {
    inset: auto;
    max-width: none;
    width: 204.8%;
    height: auto;
    left: -18%;
    top: 0;
    object-fit: contain;
  }

  > div {
    > :last-child {
      font-size: ${theme.typography.fontSize.lg};
    }
  }
`
export const Learner = styled.span`
  color: ${(p) => recipe(p).foreground};
  font-weight: ${theme.typography.fontWeight.bold};
`
export const Steps = styled.ol`
  margin: 0;
  padding-left: ${theme.spacing[8]};
  display: grid;
  gap: ${theme.spacing[5]};
  font-size: ${theme.typography.fontSize.xl};
  li::marker {
    color: ${(p) => recipe(p).accent};
  }
`
export const Summary = styled(Choices)`
  gap: ${theme.spacing[4]};
  > button {
    min-height: ${theme.spacing[20]};
    font-size: ${theme.typography.fontSize.xl};
  }
`
