import * as Styled from './WeeklyCountChart.styles'

import type { ComponentPropsWithRef } from 'react'

export interface WeeklyCountChartProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  items: readonly {
    id: string
    label: string
    value: number
    active?: boolean
  }[]
}

export function WeeklyCountChart({ items, ...props }: WeeklyCountChartProps) {
  const max = Math.max(
    1,
    ...items.map((item) => (Number.isFinite(item.value) ? item.value : 0)),
  )

  return (
    <Styled.Root {...props}>
      {items.map((item) => (
        <Styled.Day
          key={item.id}
          role="img"
          aria-label={`${item.label}: ${item.value}`}
        >
          <Styled.Count aria-hidden>{item.value || ''}</Styled.Count>
          <Styled.Bar
            aria-hidden
            $active={Boolean(item.active)}
            $height={
              ((Number.isFinite(item.value) ? item.value : 0) / max) * 90
            }
          />
          <Styled.Label aria-hidden $active={Boolean(item.active)}>
            {item.label}
          </Styled.Label>
        </Styled.Day>
      ))}
    </Styled.Root>
  )
}
