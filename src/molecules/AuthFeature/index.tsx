import * as Styled from './styles'
import type { AuthFeatureProps } from './types'

export function AuthFeature({ children, ...props }: AuthFeatureProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Mark aria-hidden="true" />
      {children}
    </Styled.Root>
  )
}

export type { AuthFeatureProps } from './types'
