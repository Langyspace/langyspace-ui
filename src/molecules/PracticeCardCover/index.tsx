import * as Styled from './styles'
import type { PracticeCardCoverProps } from './types'
export function PracticeCardCover(props: PracticeCardCoverProps) {
  return <Styled.Root {...props} data-ui-practice-card-cover />
}
export type { PracticeCardCoverProps } from './types'
