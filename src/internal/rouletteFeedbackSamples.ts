import { feedbackSoundDesign as design } from '../foundations/audio/feedbackSoundDesign'
import type { RouletteFeedbackSequence } from './feedbackSounds.types'

/** Soft resonant ticks with smooth zero-valued edges; deterministic and peak-limited. */
export function rouletteFeedbackSamples(
  sampleRate: number,
  { ticks, duration }: Pick<RouletteFeedbackSequence, 'ticks' | 'duration'>,
) {
  const sound = design.roulette
  const samples = new Float32Array(
    Math.ceil((duration + sound.landingSeconds) * sampleRate),
  )
  const tone = (
    at: number,
    seconds: number,
    frequency: number,
    amplitude: number,
  ) => {
    const start = Math.round(at * sampleRate)
    const length = Math.round(seconds * sampleRate)
    for (
      let frame = 0;
      frame < length && start + frame < samples.length;
      frame++
    ) {
      const phase = frame / (length - 1)
      const envelope = Math.sin(Math.PI * phase) ** 2 * Math.exp(-3 * phase)
      const wave = Math.sin((2 * Math.PI * frequency * frame) / sampleRate)
      samples[start + frame]! += amplitude * envelope * wave
    }
  }
  ticks.forEach((at, index) => {
    const frequency = sound.tickHz * [1, 1.035, 0.975, 1.01][index % 4]!
    tone(at, sound.tickSeconds, frequency, 1)
    tone(at, sound.tickSeconds, frequency * 1.5, 0.18)
  })
  for (const frequency of sound.landingHz)
    tone(duration, sound.landingSeconds, frequency, 0.48)
  let maximum = 0
  for (const sample of samples) maximum = Math.max(maximum, Math.abs(sample))
  if (maximum > 0)
    for (let i = 0; i < samples.length; i++)
      samples[i] = (samples[i]! / maximum) * design.peak
  return samples
}
