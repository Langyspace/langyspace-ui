import { useId } from 'react'
import * as Common from './Material.shared.styles'
import * as Styled from './SceneExplorer.styles'
import type { SceneExplorerProps } from './SceneExplorer.types'
export function SceneExplorer({
  imageUrl,
  imageAlt,
  hotspots,
  selectedId,
  visitedIds,
  onSelect,
  presentation = 'explore',
  answerVisible = false,
  onAnswerToggle,
  labels,
  ...props
}: SceneExplorerProps) {
  const id = useId()
  const text = {
    initial: 'Tap a pink dot',
    progress: 'explorados',
    show: 'Mostrar resposta',
    hide: 'Esconder resposta',
    play: 'Ouvir',
    ...labels,
  }
  const selected = hotspots.find((h) => h.id === selectedId)
  const Marker =
    presentation === 'labels' ? Styled.LabelHotspot : Styled.Hotspot
  const Frame = presentation === 'labels' ? Styled.LabelScene : Styled.Scene
  return (
    <Styled.Root as="section" {...props}>
      <Frame>
        <img src={imageUrl} alt={imageAlt} />
        {hotspots.map((h, i) => (
          <Marker
            key={h.id}
            type="button"
            $x={h.xPercent}
            $y={h.yPercent}
            $visited={visitedIds.includes(h.id)}
            aria-label={
              presentation === 'labels' ? `${text.play}: ${h.label}` : h.label
            }
            aria-controls={presentation === 'explore' ? id : undefined}
            aria-expanded={
              presentation === 'explore' ? selectedId === h.id : undefined
            }
            onClick={() => {
              onSelect(h.id)
            }}
          >
            {presentation === 'labels' ? (
              <span>{h.label}</span>
            ) : visitedIds.includes(h.id) ? (
              '✓'
            ) : (
              i + 1
            )}
          </Marker>
        ))}
      </Frame>
      {presentation === 'explore' ? (
        <>
          <Common.Surface id={id} aria-live="polite">
            <Common.Heading>{selected?.label ?? text.initial}</Common.Heading>
            {selected?.prompt}
            {selected?.answer && onAnswerToggle ? (
              <Common.Action
                type="button"
                variant="secondary"
                aria-expanded={answerVisible}
                onClick={onAnswerToggle}
              >
                {answerVisible ? text.hide : text.show}
              </Common.Action>
            ) : null}
            {answerVisible ? selected?.answer : null}
          </Common.Surface>
          <Common.Hint>
            {hotspots.filter((h) => visitedIds.includes(h.id)).length} /{' '}
            {hotspots.length} {text.progress}
          </Common.Hint>
        </>
      ) : null}
    </Styled.Root>
  )
}
