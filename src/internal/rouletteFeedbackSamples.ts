import { feedbackSoundDesign as design } from '../foundations/audio/feedbackSoundDesign'
import type { RouletteFeedbackSequence } from './feedbackSounds.types'

/** Soft filtered taps with a low, damped body instead of pitched chimes. */
export function rouletteFeedbackSamples(
  sampleRate: number,
  { ticks, duration }: Pick<RouletteFeedbackSequence, 'ticks' | 'duration'>,
) {
  const sound = design.roulette
  const samples = new Float32Array(
    Math.ceil((duration + sound.landingSeconds) * sampleRate),
  )
  const tap = (
    at: number,
    seconds: number,
    seed: number,
    amplitude: number,
  ) => {
    const start = Math.round(at * sampleRate)
    const length = Math.round(seconds * sampleRate)
    const fast = 1 - Math.exp((-2 * Math.PI * sound.lowPassHz) / sampleRate)
    const slow = 1 - Math.exp((-2 * Math.PI * sound.highPassHz) / sampleRate)
    let high = 0
    let low = 0
    for (
      let frame = 0;
      frame < length && start + frame < samples.length;
      frame++
    ) {
      const phase = frame / (length - 1)
      const envelope = Math.sin(Math.PI * phase) ** 2 * Math.exp(-4 * phase)
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
      const noise = (seed / 4294967296) * 2 - 1
      high += fast * (noise - high)
      low += slow * (noise - low)
      const body = Math.sin((2 * Math.PI * sound.bodyHz * frame) / sampleRate)
      const wave = high - low + body * sound.bodyGain
      samples[start + frame]! += amplitude * envelope * wave
    }
  }
  ticks.forEach((at, index) => {
    tap(at, sound.tickSeconds, 142 + index * 97, 1)
  })
  tap(duration, sound.landingSeconds, 587, 0.55)
  let maximum = 0
  for (const sample of samples) maximum = Math.max(maximum, Math.abs(sample))
  if (maximum > 0)
    for (let i = 0; i < samples.length; i++)
      samples[i] = (samples[i]! / maximum) * design.peak
  return samples
}
