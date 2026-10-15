import { PracticeProgressBar } from '../../atoms/PracticeProgressBar'
import * as Styled from './styles'
import type { SessionProgressProps } from './types'
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
export type { SessionProgressProps } from './types'
