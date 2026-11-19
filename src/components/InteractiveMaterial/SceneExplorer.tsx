import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { IconButton } from '../IconButton/IconButton'
import * as Common from './Material.shared.styles'
import * as Styled from './SceneExplorer.styles'
import {
  sceneCalloutLayout,
  sceneImageGeometry,
  scenePoint,
} from './SceneExplorer.geometry'
import type {
  SceneCalloutLayout,
  SceneExplorerProps,
  SceneImageGeometry,
} from './SceneExplorer.types'

export function SceneExplorer({
  imageUrl,
  imageAlt,
  hotspots,
  selectedId,
  visitedIds,
  onSelect,
  onPlayHotspot,
  playingId,
  presentation = 'explore',
  answerVisible = false,
  onAnswerToggle,
  labels,
  ...props
}: SceneExplorerProps) {
  const id = useId()
  const frameRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const calloutRef = useRef<HTMLDivElement>(null)
  const [geometry, setGeometry] = useState<SceneImageGeometry>()
  const [layout, setLayout] = useState<SceneCalloutLayout>()
  const text = {
    initial: 'Tap a dot to explore',
    show: 'Mostrar resposta',
    hide: 'Esconder resposta',
    play: 'Ouvir',
    ...labels,
  }
  const selected = hotspots.find((h) => h.id === selectedId)
  const measure = useCallback(() => {
    if (!frameRef.current || !imageRef.current) return
    const bounds = frameRef.current.getBoundingClientRect()
    const box = imageRef.current.getBoundingClientRect()
    if (!bounds.width || !box.height || !imageRef.current.naturalWidth) return
    const computed = getComputedStyle(imageRef.current)
    const next = sceneImageGeometry({
      naturalWidth: imageRef.current.naturalWidth,
      naturalHeight: imageRef.current.naturalHeight,
      box: {
        left: box.left - bounds.left,
        top: box.top - bounds.top,
        width: box.width,
        height: box.height,
      },
      frame: bounds,
      fit: computed.objectFit,
      position: computed.objectPosition,
    })
    setGeometry((old) =>
      JSON.stringify(old) === JSON.stringify(next) ? old : next,
    )
    if (!selected || !calloutRef.current) return
    const point = scenePoint(next, selected.xPercent, selected.yPercent)
    const target = selected.targetBounds
    const start = target
      ? scenePoint(next, target.xPercent, target.yPercent)
      : { x: point.x - 24, y: point.y - 24 }
    const panel = calloutRef.current.getBoundingClientRect()
    const obstacles = hotspots.flatMap((hotspot) => {
      const center = scenePoint(next, hotspot.xPercent, hotspot.yPercent)
      const bounds = hotspot.targetBounds
      const origin = bounds
        ? scenePoint(next, bounds.xPercent, bounds.yPercent)
        : center
      return [
        { left: center.x - 22, top: center.y - 22, width: 44, height: 44 },
        ...(bounds
          ? [
              {
                left: origin.x,
                top: origin.y,
                width: (next.width * bounds.widthPercent) / 100,
                height: (next.height * bounds.heightPercent) / 100,
              },
            ]
          : []),
      ]
    })
    const nextLayout = sceneCalloutLayout(
      bounds,
      point,
      {
        left: start.x,
        top: start.y,
        width: target ? (next.width * target.widthPercent) / 100 : 48,
        height: target ? (next.height * target.heightPercent) / 100 : 48,
      },
      panel,
      obstacles,
    )
    setLayout((old) =>
      JSON.stringify(old) === JSON.stringify(nextLayout) ? old : nextLayout,
    )
  }, [selected, hotspots])
  useLayoutEffect(measure, [measure, answerVisible, imageUrl])
  useEffect(() => {
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    if (frameRef.current) observer.observe(frameRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (calloutRef.current) observer.observe(calloutRef.current)
    return () => {
      observer.disconnect()
    }
  }, [measure])
  const Marker =
    presentation === 'labels' ? Styled.LabelHotspot : Styled.DotHotspot
  const Frame = presentation === 'labels' ? Styled.LabelScene : Styled.Scene
  return (
    <Styled.Root as="section" {...props}>
      {presentation === 'explore' && !selected ? (
        <Styled.Instruction>{text.initial}</Styled.Instruction>
      ) : null}
      <Frame
        ref={frameRef}
        $gutter={
          selected && presentation === 'explore' ? (layout?.gutter ?? 0) : 0
        }
      >
        <img ref={imageRef} src={imageUrl} alt={imageAlt} onLoad={measure} />
        {hotspots.map((h) => {
          const point = geometry
            ? scenePoint(geometry, h.xPercent, h.yPercent)
            : undefined
          const cropped =
            geometry &&
            point &&
            (point.x < 0 ||
              point.x > geometry.frameWidth ||
              point.y < 0 ||
              point.y > geometry.frameHeight)
          return (
            <Marker
              key={h.id}
              type="button"
              hidden={Boolean(cropped)}
              $x={
                point && geometry
                  ? (point.x / geometry.frameWidth) * 100
                  : h.xPercent
              }
              $y={
                point && geometry
                  ? (point.y / geometry.frameHeight) * 100
                  : h.yPercent
              }
              $visited={visitedIds.includes(h.id)}
              aria-label={
                presentation === 'labels' ? `${text.play}: ${h.label}` : h.label
              }
              aria-controls={
                presentation === 'explore' && selectedId === h.id
                  ? id
                  : undefined
              }
              aria-expanded={
                presentation === 'explore' ? selectedId === h.id : undefined
              }
              onClick={() => {
                onSelect(h.id)
              }}
            >
              {presentation === 'labels' ? <span>{h.label}</span> : null}
            </Marker>
          )
        })}
        {presentation === 'explore' && selected ? (
          <Styled.Callout
            ref={calloutRef}
            id={id}
            role="region"
            aria-label={selected.label}
            aria-live="polite"
            data-scene-callout={selected.id}
            $left={layout?.left ?? 8}
            $top={layout?.top ?? 8}
            $placement={layout?.placement ?? 'above'}
            $arrow={layout?.arrow ?? 24}
          >
            <Styled.CalloutHeading>
              <Common.Heading>{selected.label}</Common.Heading>
              {onPlayHotspot ? (
                <IconButton
                  variant="brand"
                  size="md"
                  aria-label={`${text.play}: ${selected.label}`}
                  aria-busy={playingId === selected.id || undefined}
                  onClick={() => {
                    onPlayHotspot(selected.id)
                  }}
                >
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M11 5 6 9H3v6h3l5 4zM15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14" />
                  </svg>
                </IconButton>
              ) : null}
            </Styled.CalloutHeading>
            {selected.prompt}
            {selected.answer && onAnswerToggle ? (
              <Common.Action
                type="button"
                variant="secondary"
                aria-expanded={answerVisible}
                onClick={onAnswerToggle}
              >
                {answerVisible ? text.hide : text.show}
              </Common.Action>
            ) : null}
            {answerVisible ? selected.answer : null}
          </Styled.Callout>
        ) : null}
      </Frame>
    </Styled.Root>
  )
}
