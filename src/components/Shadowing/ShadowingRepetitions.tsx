import * as Styled from './ShadowingRepetitions.styles'

import type { ComponentPropsWithRef } from 'react'

export interface ShadowingRepetitionsProps extends ComponentPropsWithRef<'div'> {
  total: number
  value?: number
  playing?: boolean
}

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
        <span
          key={index}
          aria-hidden
          className={[
            'dot',
            index < value ? 'on' : '',
            index === value - 1 && playing ? 'live' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        />
      ))}
      <span className="label">{children}</span>
    </Styled.Root>
  )
}
