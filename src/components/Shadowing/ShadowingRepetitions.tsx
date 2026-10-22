import * as Styled from './ShadowingRepetitions.styles'
import type { ShadowingRepetitionsProps } from './ShadowingRepetitions.types'

export function ShadowingRepetitions({
  total,
  value = 0,
  playing = false,
  children,
  ...props
}: ShadowingRepetitionsProps) {
  const count = Number.isFinite(total) ? Math.max(0, Math.trunc(total)) : 0

  return (
    <Styled.Root {...props}>
      {Array.from({ length: count }, (_, index) => (
        <Styled.Dot
          key={index}
          aria-hidden
          data-ui-shadowing-dot="true"
          data-active={index < value || undefined}
          data-live={(index === value - 1 && playing) || undefined}
        />
      ))}
      <Styled.Label>{children}</Styled.Label>
    </Styled.Root>
  )
}
