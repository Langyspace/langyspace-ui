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

export {
  PromptList,
  Prompt,
  PromptQuestion,
} from '../../../src/components/Exercise/PromptList.styles'
