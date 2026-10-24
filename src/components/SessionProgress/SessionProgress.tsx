import { PracticeProgressBar } from '../Practice/PracticeProgressBar'
import type { SessionProgressProps } from './SessionProgress.types'
import * as Styled from './SessionProgress.styles'

export function SessionProgress({
  name,
  counter,
  value,
  ...props
}: SessionProgressProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Label>
        <Styled.Name>{name}</Styled.Name>
        <span>{counter}</span>
      </Styled.Label>
      <PracticeProgressBar value={value} />
    </Styled.Root>
  )
}
