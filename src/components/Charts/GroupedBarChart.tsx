import * as Styled from './GroupedBarChart.styles'

import type { ComponentPropsWithRef } from 'react'

export interface GroupedBarChartProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  items: readonly {
    id: string
    label: string
    description: string
    values: readonly number[]
  }[]
}

export function GroupedBarChart({
  items,
  onKeyDown,
  ...props
}: GroupedBarChartProps) {
  const max = Math.max(
    1,
    ...items.flatMap((item) =>
      item.values.map((v) => (Number.isFinite(v) ? v : 0)),
    ),
  )

  return (
    <Styled.Root
      {...props}
      role="region"
      tabIndex={0}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (event.defaultPrevented || !['Home', 'End'].includes(event.key))
          return
        event.preventDefault()
        event.currentTarget.scrollLeft =
          event.key === 'Home' ? 0 : event.currentTarget.scrollWidth
      }}
    >
      {items.map((item) => (
        <Styled.Day key={item.id} role="img" aria-label={item.description}>
          <Styled.Bars aria-hidden>
            {item.values.map((value, index) => (
              <span
                key={index}
                style={{
                  height: `${Math.max(6, ((Number.isFinite(value) ? value : 0) / max) * 100)}%`,
                }}
              />
            ))}
          </Styled.Bars>
          <small aria-hidden>{item.label}</small>
        </Styled.Day>
      ))}
    </Styled.Root>
  )
}
