import * as Styled from './styles'
import type { SkeletonProps } from './types'
export function Skeleton({ shape = 'line', ...props }: SkeletonProps) {
  return (
    <Styled.Root
      {...props}
      data-ui-skeleton
      data-shape={shape}
      aria-hidden="true"
    />
  )
}
export type { SkeletonProps } from './types'
