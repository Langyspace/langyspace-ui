import { styled } from 'styled-components'
import { Skeleton } from '../../primitives/Skeleton'
import { flashcardWordLayout } from '../../internal/flashcardWordLayout'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-word-skeleton',
})`
  ${flashcardWordLayout}
  justify-content: center;
`
export const Word = styled(Skeleton)`
  width: 68%;
  height: 2.25rem;
`
export const Rule = styled(Skeleton)`
  width: 1.875rem;
  height: 0.1875rem;
`
export const Phonetic = styled(Skeleton)`
  width: 44%;
  height: 0.875rem;
`
