import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { IconButton } from '../IconButton/IconButton'
import { theme } from '../../foundations/theme/theme'
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
  SceneTargetRect,
} from './SceneExplorer.types'

export function SceneExplorer(options: SceneExplorerProps) {
  const {
    imageUrl,
    imageAlt,
    imageSizing = 'natural',
    hotspots,
    connections = [],
    selectedId,
    visitedIds,
    onSelect,
    onDismiss,
    onPlayHotspot,
    playingId,
    presentation = 'explore',
    labelVisibility = 'responsive',
    answerVisible = false,
    onAnswerToggle,
    labels,
    ...props
  } = options
  const id = useId()
  const frameRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const calloutRef = useRef<HTMLDivElement>(null)
  const [geometry, setGeometry] = useState<SceneImageGeometry>()
  const [layout, setLayout] = useState<SceneCalloutLayout>()
  const [imageBounds, setImageBounds] = useState<SceneTargetRect>()
  const [frameWidth, setFrameWidth] = useState(0)
  const [localSelectedId, setLocalSelectedId] = useState<string>()
  const controlledSelection = Object.hasOwn(options, 'selectedId')
  const compactLabels =
    presentation === 'labels' &&
    labelVisibility === 'responsive' &&
    frameWidth < parseFloat(theme.breakpoints.sm)
  const labelButtons = presentation === 'labels' && !compactLabels
  const showCallout = presentation !== 'labels' || compactLabels
  const currentSelectedId = controlledSelection ? selectedId : localSelectedId
  const text = {
    initial: 'Tap a dot to explore',
    show: 'Mostrar resposta',
    hide: 'Esconder resposta',
    play: 'Ouvir',
    ...labels,
  }
  const selected = hotspots.find((h) => h.id === currentSelectedId)
  const practice =
    presentation === 'explore' && Boolean(selected?.answer && onAnswerToggle)
  const measure = useCallback(() => {
    if (!frameRef.current || !imageRef.current) return
    const bounds = frameRef.current.getBoundingClientRect()
    setFrameWidth((old) => (old === bounds.width ? old : bounds.width))
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
    const left = Math.max(0, box.left - bounds.left, next.left)
    const top = Math.max(0, box.top - bounds.top, next.top)
    const visible = {
      left,
      top,
      width:
        Math.min(
          bounds.width,
          box.right - bounds.left,
          next.left + next.width,
        ) - left,
      height:
        Math.min(
          bounds.height,
          box.bottom - bounds.top,
          next.top + next.height,
        ) - top,
    }
    setImageBounds((old) =>
      JSON.stringify(old) === JSON.stringify(visible) ? old : visible,
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
    const relativeLayout = sceneCalloutLayout(
      visible,
      { x: point.x - left, y: point.y - top },
      {
        left: start.x - left,
        top: start.y - top,
        width: target ? (next.width * target.widthPercent) / 100 : 48,
        height: target ? (next.height * target.heightPercent) / 100 : 48,
      },
      panel,
      obstacles.map((obstacle) => ({
        ...obstacle,
        left: obstacle.left - left,
        top: obstacle.top - top,
      })),
    )
    const nextLayout = {
      ...relativeLayout,
      left: relativeLayout.left + left,
      top: relativeLayout.top + top,
    }
    setLayout((old) =>
      JSON.stringify(old) === JSON.stringify(nextLayout) ? old : nextLayout,
    )
  }, [selected, hotspots])
  useLayoutEffect(measure, [measure, answerVisible, imageUrl, compactLabels])
  useEffect(() => {
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    if (frameRef.current) observer.observe(frameRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (calloutRef.current) observer.observe(calloutRef.current)
    return () => {
      observer.disconnect()
    }
  }, [measure, compactLabels])
  const Frame = presentation !== 'explore' ? Styled.LabelScene : Styled.Scene
  return (
    <Styled.Root as="section" {...props}>
      {presentation === 'explore' && !selected && text.initial ? (
        <Styled.Instruction>{text.initial}</Styled.Instruction>
      ) : null}
      <Frame
        ref={frameRef}
        $bounded={imageSizing === 'presentation'}
        $gutter={selected && showCallout ? (layout?.gutter ?? 0) : 0}
      >
        <img ref={imageRef} src={imageUrl} alt={imageAlt} onLoad={measure} />
        {geometry && connections.length ? (
          <Styled.Connections
            aria-hidden="true"
            viewBox={`0 0 ${geometry.frameWidth} ${geometry.frameHeight}`}
            preserveAspectRatio="none"
          >
            {connections.map((connection) => {
              const from = hotspots.find((h) => h.id === connection.from)
              const to = hotspots.find((h) => h.id === connection.to)
              if (!from || !to) return null
              const start = scenePoint(geometry, from.xPercent, from.yPercent)
              const end = scenePoint(geometry, to.xPercent, to.yPercent)
              return (
                <line
                  key={`${connection.from}-${connection.to}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                />
              )
            })}
          </Styled.Connections>
        ) : null}
        {hotspots.map((h) => {
          const vocabularyLabel =
            presentation === 'vocabulary' && visitedIds.includes(h.id)
          const Marker =
            presentation === 'vocabulary'
              ? Styled.VocabularyHotspot
              : presentation === 'labels'
                ? Styled.LabelHotspot
                : Styled.DotHotspot
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
              $revealed={
                presentation === 'vocabulary' ? vocabularyLabel : undefined
              }
              aria-label={
                labelButtons && onPlayHotspot
                  ? `${text.play}: ${h.label}`
                  : h.label
              }
              aria-controls={
                showCallout && currentSelectedId === h.id ? id : undefined
              }
              aria-expanded={
                showCallout ? currentSelectedId === h.id : undefined
              }
              data-scene-compact={compactLabels || undefined}
              onClick={() => {
                if (!controlledSelection)
                  setLocalSelectedId((old) =>
                    !labelButtons && old === h.id ? undefined : h.id,
                  )
                onSelect(h.id)
                onPlayHotspot?.(h.id)
              }}
            >
              {labelButtons || vocabularyLabel ? <span>{h.label}</span> : null}
            </Marker>
          )
        })}
        {showCallout && selected ? (
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
            $imageWidth={imageBounds?.width}
            $imageHeight={imageBounds?.height}
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
              {onDismiss ? (
                <IconButton
                  variant="subtle"
                  size="sm"
                  aria-label={`Close: ${selected.label}`}
                  onClick={() => {
                    frameRef.current
                      ?.querySelector<HTMLButtonElement>(
                        `button[aria-controls="${id}"]`,
                      )
                      ?.focus({ preventScroll: true })
                    if (!controlledSelection) setLocalSelectedId(undefined)
                    onDismiss()
                  }}
                >
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 6 12 12M18 6 6 18" />
                  </svg>
                </IconButton>
              ) : null}
            </Styled.CalloutHeading>
            {selected.example ? (
              <Styled.CalloutExample>{selected.example}</Styled.CalloutExample>
            ) : null}
            {practice ? selected.prompt : null}
            {practice ? (
              <Common.Action
                type="button"
                variant="secondary"
                aria-expanded={answerVisible}
                onClick={onAnswerToggle}
              >
                {answerVisible ? text.hide : text.show}
              </Common.Action>
            ) : null}
            {practice && answerVisible ? selected.answer : null}
          </Styled.Callout>
        ) : null}
      </Frame>
    </Styled.Root>
  )
}
