import { styled } from 'styled-components'
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
  display: grid;
  justify-items: start;
  gap: ${theme.spacing[2]};
`
