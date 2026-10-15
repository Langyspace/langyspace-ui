import * as Styled from './styles'
import type { TimelineEventProps } from './types'
export function TimelineEvent({
  tone = 'neutral',
  type = 'button',
  ...props
}: TimelineEventProps) {
  return <Styled.Root {...props} type={type} data-tone={tone} />
}
export type { TimelineEventProps } from './types'
