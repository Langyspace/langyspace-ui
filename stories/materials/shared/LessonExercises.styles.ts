import { styled } from 'styled-components'
import { Pressable } from '../../../src/components/Pressable'
import { recipe } from '../../../src/components/Exercise/Exercise.shared.styles'
import { theme } from '../../../src/foundations/theme/theme'

export const Scene = styled.img`
  display: block;
  width: min(100%, 340px);
  max-height: 300px;
  aspect-ratio: 1;
  object-fit: cover;
  margin-inline: auto;
  border-radius: ${theme.radius.xl};
`

export const PromptList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: ${theme.spacing[3]};
`

export const Prompt = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[3]};
  p {
    margin: 0;
    line-height: 1.6;
  }
`

export const AnswerPanel = styled.div`
  min-width: 0;
  display: grid;
  justify-items: start;
  gap: ${theme.spacing[2]};
`

export const QuestionTrigger = styled(Pressable)`
  display: block;
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
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 3px;
  }
`
