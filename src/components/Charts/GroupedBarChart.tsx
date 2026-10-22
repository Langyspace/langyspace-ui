import * as Styled from './GroupedBarChart.styles'
import type { GroupedBarChartProps } from './GroupedBarChart.types'

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
              <Styled.Bar
                // Each position is one series of the grouped chart.
                // eslint-disable-next-line @eslint-react/no-array-index-key
                key={index}
                $height={Math.max(
                  6,
                  ((Number.isFinite(value) ? value : 0) / max) * 100,
                )}
              />
            ))}
          </Styled.Bars>
          <small aria-hidden>{item.label}</small>
        </Styled.Day>
      ))}
    </Styled.Root>
  )
}
