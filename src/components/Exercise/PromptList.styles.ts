import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

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
  }
`

export const PromptQuestion = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  width: 100%;
  min-width: 0;
  min-height: ${theme.spacing[8]};
  p {
    flex: 1;
    min-width: 0;
    font-weight: ${theme.typography.fontWeight.semibold};
  }
`
