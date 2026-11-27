import type { RouteMapProps } from './RouteMap.types'
import * as Styled from './RouteMap.styles'
const position = (value: number) =>
  Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0
export function RouteMap({
  label,
  places,
  streets,
  startId,
  startLabel = 'Start',
  selectedId,
  revealedIds,
  onSelect,
  footer,
  ...props
}: RouteMapProps) {
  return (
    <Styled.Root as="section" aria-label={label} {...props}>
      <Styled.Frame>
        <Styled.Streets
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {streets.map((street) => (
            <line
              key={street.id}
              x1={position(street.from.x)}
              y1={position(street.from.y)}
              x2={position(street.to.x)}
              y2={position(street.to.y)}
            />
          ))}
        </Styled.Streets>
        {places.map((place) => {
          const concealed =
            revealedIds !== undefined && !revealedIds.includes(place.id)
          return (
            <Styled.Place
              key={place.id}
              type="button"
              $x={position(place.xPercent)}
              $y={position(place.yPercent)}
              $selected={selectedId === place.id}
              aria-label={place.label}
              aria-pressed={selectedId === place.id}
              onClick={() => onSelect?.(place.id)}
            >
              {place.symbol ? (
                <Styled.Symbol aria-hidden="true">{place.symbol}</Styled.Symbol>
              ) : null}
              <Styled.Label
                $concealed={concealed}
                aria-hidden={concealed || undefined}
              >
                {place.label}
              </Styled.Label>
              {startId === place.id ? (
                <Styled.Start>{startLabel}</Styled.Start>
              ) : null}
            </Styled.Place>
          )
        })}
      </Styled.Frame>
      {footer}
    </Styled.Root>
  )
}
