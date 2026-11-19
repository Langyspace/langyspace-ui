import type {
  SceneCalloutLayout,
  SceneImageGeometry,
  SceneTargetRect,
} from './SceneExplorer.types'

/** Mirrors CSS replaced-image sizing; percentages belong to image pixels, not its box. */
export function sceneImageGeometry({
  naturalWidth,
  naturalHeight,
  box,
  frame,
  fit = 'fill',
  position = '50% 50%',
}: {
  naturalWidth: number
  naturalHeight: number
  box: SceneTargetRect
  frame: { width: number; height: number }
  fit?: string
  position?: string
}): SceneImageGeometry {
  const contain = Math.min(box.width / naturalWidth, box.height / naturalHeight)
  const scale =
    fit === 'contain'
      ? contain
      : fit === 'cover'
        ? Math.max(box.width / naturalWidth, box.height / naturalHeight)
        : fit === 'scale-down'
          ? Math.min(1, contain)
          : 1
  const width = fit === 'fill' ? box.width : naturalWidth * scale
  const height = fit === 'fill' ? box.height : naturalHeight * scale
  const [x = '50%', y = '50%'] = position.split(/\s+/)
  const offset = (value: string, remaining: number) => {
    if (value === 'left' || value === 'top') return 0
    if (value === 'right' || value === 'bottom') return remaining
    if (value === 'center') return remaining / 2
    return value.endsWith('%')
      ? (remaining * parseFloat(value)) / 100
      : parseFloat(value) || 0
  }
  return {
    left: box.left + offset(x, box.width - width),
    top: box.top + offset(y, box.height - height),
    width,
    height,
    frameWidth: frame.width,
    frameHeight: frame.height,
  }
}

export function scenePoint(geometry: SceneImageGeometry, x: number, y: number) {
  return {
    x: geometry.left + (geometry.width * x) / 100,
    y: geometry.top + (geometry.height * y) / 100,
  }
}

/** Prefer above the target, then below; keep every fallback inside the image. */
export function sceneCalloutLayout(
  frame: { width: number; height: number },
  point: { x: number; y: number },
  target: SceneTargetRect,
  callout: { width: number; height: number },
  obstacles: readonly SceneTargetRect[] = [],
): SceneCalloutLayout {
  const edge = 8,
    gap = 12
  const clamp = (value: number, max: number) =>
    Math.max(edge, Math.min(max, value))
  const centeredLeft = clamp(
    point.x - callout.width / 2,
    frame.width - callout.width - edge,
  )
  const candidates = [
    {
      placement: 'above' as const,
      left: centeredLeft,
      top: target.top - gap - callout.height,
    },
    {
      placement: 'below' as const,
      left: centeredLeft,
      top: target.top + target.height + gap,
    },
  ]
  const fits = (candidate: (typeof candidates)[number]) =>
    candidate.left >= edge &&
    candidate.top >= edge &&
    candidate.left + callout.width <= frame.width - edge &&
    candidate.top + callout.height <= frame.height - edge
  const selected = candidates.find(
    (candidate) =>
      fits(candidate) &&
      obstacles.every(
        (obstacle) =>
          candidate.left + callout.width <= obstacle.left ||
          candidate.left >= obstacle.left + obstacle.width ||
          candidate.top + callout.height <= obstacle.top ||
          candidate.top >= obstacle.top + obstacle.height,
      ),
  )
  const fallback = {
    placement: 'above' as const,
    left: centeredLeft,
    top: clamp(
      point.y - gap - callout.height,
      frame.height - callout.height - edge,
    ),
  }
  const result = selected ?? candidates.find(fits) ?? fallback
  return {
    ...result,
    gutter: 0,
    arrow: clamp(point.x - result.left, callout.width - edge),
  }
}
