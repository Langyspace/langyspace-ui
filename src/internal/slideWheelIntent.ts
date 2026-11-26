import type { SlideWheelSample } from './slideWheelIntent.types'

const QUIET_MS = 240
const DISCRETE_TICK_GAP_MS = 50

/** One step per drive wave, not per uninterrupted stream of momentum events.
 * WheelEvent has no portable finger-up/momentum phase. Confirm renewed input
 * with two rising packets after decay and relative to its drive peak, so tiny
 * tail rebounds are not new gestures. The first packet after quiet stays immediate.
 */
export function createSlideWheelIntent() {
  let lastTime = -Infinity
  let lastMagnitude = 0
  let lastMode = 0
  let direction: 1 | -1 | undefined
  let peak = 0
  let falling = 0
  let valley = 0
  let tail = false
  let rising: number | undefined

  return (sample: SlideWheelSample): 1 | -1 | undefined => {
    const { deltaY, deltaMode, timeStamp } = sample
    if (!deltaY || !Number.isFinite(deltaY) || !Number.isFinite(timeStamp))
      return undefined
    const nextDirection = deltaY > 0 ? 1 : -1
    const magnitude = Math.abs(deltaY)
    const gap = timeStamp - lastTime
    const accept = () => {
      lastTime = timeStamp
      lastMagnitude = magnitude
      lastMode = deltaMode
      direction = nextDirection
      peak = magnitude
      valley = magnitude
      falling = 0
      tail = false
      rising = undefined
      return nextDirection
    }
    if (
      direction !== nextDirection ||
      deltaMode !== lastMode ||
      gap >= QUIET_MS ||
      gap < 0
    )
      return accept()

    // Line/page wheels are explicit steps. Pixel mice commonly repeat an exact
    // integer tick at a slower cadence; high-frequency trackpad tails stay grouped.
    if (
      deltaMode !== 0 ||
      (gap >= DISCRETE_TICK_GAP_MS &&
        Number.isInteger(magnitude) &&
        magnitude === lastMagnitude &&
        !tail)
    )
      return accept()

    if (tail && rising !== undefined) {
      if (
        magnitude > rising &&
        magnitude >= valley * 2 &&
        magnitude >= peak * 0.35
      )
        return accept()
      rising = undefined
      // A solitary momentum spike is not a new drive. Forget its old trough
      // so later tail jitter cannot keep retrying against an obsolete minimum.
      valley = magnitude
    }
    if (
      tail &&
      magnitude > lastMagnitude &&
      magnitude >= valley * 2 &&
      magnitude >= peak * 0.35
    )
      rising = magnitude

    falling =
      magnitude < lastMagnitude
        ? falling + 1
        : magnitude > lastMagnitude
          ? 0
          : falling
    if (!tail && magnitude > peak) {
      peak = magnitude
      valley = magnitude
      tail = false
      rising = undefined
    }
    if (falling >= 2 && magnitude <= peak * 0.65) tail = true
    if (tail) valley = Math.min(valley, magnitude)
    lastTime = timeStamp
    lastMagnitude = magnitude
    return undefined
  }
}
