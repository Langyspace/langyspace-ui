import type { SkeletonProps } from './Skeleton.types'
import * as Styled from './Skeleton.styles'

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
