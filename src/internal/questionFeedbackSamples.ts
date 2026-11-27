import { feedbackSoundDesign as design } from '../foundations/audio/feedbackSoundDesign'

/** Deterministic, band-limited air; zero-valued ends and a smooth rise/fall avoid a hard transient. */
export function questionFeedbackSamples(sampleRate: number) {
  const samples = new Float32Array(
    Math.round(sampleRate * design.question.duration),
  )
  const fast =
    1 - Math.exp((-2 * Math.PI * design.question.lowPassHz) / sampleRate)
  const slow =
    1 - Math.exp((-2 * Math.PI * design.question.highPassHz) / sampleRate)
  let seed = 127
  let high = 0
  let low = 0
  let maximum = 0
  for (let i = 0; i < samples.length; i++) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    const noise = (seed / 4294967296) * 2 - 1
    high += fast * (noise - high)
    low += slow * (noise - low)
    const window = Math.sin((Math.PI * i) / (samples.length - 1)) ** 2
    const value = (high - low) * window
    samples[i] = value
    maximum = Math.max(maximum, Math.abs(value))
  }
  if (maximum > 0) {
    for (let i = 0; i < samples.length; i++)
      samples[i] = (samples[i]! / maximum) * design.peak
  }
  return samples
}
