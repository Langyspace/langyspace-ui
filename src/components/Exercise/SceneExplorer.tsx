import { useId } from 'react'
import * as Common from '../Exercise/Material.shared.styles'
import * as Styled from './SceneExplorer.styles'
import type { SceneExplorerProps } from './SceneExplorer.types'
export function SceneExplorer({
  imageUrl,
  imageAlt,
  hotspots,
  selectedId,
  visitedIds,
  onSelect,
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
    ...labels,
  }
  const selected = hotspots.find((h) => h.id === selectedId)
  return (
    <Styled.Root as="section" {...props}>
      <Styled.Scene>
        <img src={imageUrl} alt={imageAlt} />
        {hotspots.map((h, i) => (
          <Styled.Hotspot
            key={h.id}
            type="button"
            $x={h.xPercent}
            $y={h.yPercent}
            $visited={visitedIds.includes(h.id)}
            aria-label={h.label}
            aria-controls={id}
            aria-expanded={selectedId === h.id}
            onClick={() => {
              onSelect(h.id)
            }}
          >
            {visitedIds.includes(h.id) ? '✓' : i + 1}
          </Styled.Hotspot>
        ))}
      </Styled.Scene>
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
    </Styled.Root>
  )
}
