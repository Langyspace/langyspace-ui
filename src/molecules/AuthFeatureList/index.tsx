import * as Styled from './styles'
import type { AuthFeatureListProps } from './types'
export function AuthFeatureList({ children, ...props }: AuthFeatureListProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { AuthFeatureListProps } from './types'
