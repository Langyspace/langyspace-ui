import type { RouteMapProps } from './RouteMap.types'
import * as Styled from './RouteMap.styles'
const position = (value: number) =>
  Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0
export function RouteMap({
  label,
  image,
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
      <Styled.Frame $aspectRatio={image?.aspectRatio ?? 1.5}>
        {image ? (
          <Styled.Art src={image.src} alt={image.alt} draggable={false} />
        ) : (
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
        )}
        {streets.map((street) =>
          street.label ? (
            <Styled.StreetLabel
              key={street.id}
              $x={position((street.from.x + street.to.x) / 2)}
              $y={position((street.from.y + street.to.y) / 2)}
              $vertical={
                Math.abs(street.to.y - street.from.y) >
                Math.abs(street.to.x - street.from.x)
              }
            >
              {street.label}
            </Styled.StreetLabel>
          ) : null,
        )}
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
              $illustrated={Boolean(image)}
              $width={place.area?.widthPercent}
              $height={place.area?.heightPercent}
              aria-label={place.label}
              aria-pressed={selectedId === place.id}
              onClick={() => onSelect?.(place.id)}
            >
              {place.symbol && !image ? (
                <Styled.Symbol aria-hidden="true">{place.symbol}</Styled.Symbol>
              ) : null}
              <Styled.Label
                $concealed={concealed}
                $illustrated={Boolean(image)}
                aria-hidden={concealed || undefined}
              >
                {image && startId === place.id ? (
                  <Styled.Origin
                    role="img"
                    aria-label={startLabel}
                    title={startLabel}
                  />
                ) : null}
                {place.label}
              </Styled.Label>
              {!image && startId === place.id ? (
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
