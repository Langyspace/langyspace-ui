/** Product earcons, not clinically optimized frequencies. See choice-feedback41/sound-study.md. */
export const feedbackSoundDesign = {
  volume: 0.4,
  peak: 0.16,
  attackSeconds: 0.006,
  releaseSeconds: 0.045,
  harmonicGain: 0.1,
  correct: [
    { frequency: 523.25, start: 0, duration: 0.13 },
    { frequency: 659.25, start: 0.11, duration: 0.17 },
  ],
  /** Quiet neutral acknowledgement: one soft note, no success/failure contour. */
  hintGain: 0.38,
  hint: [{ frequency: 587.33, start: 0, duration: 0.15 }],
  /** Muted low tap: no upper harmonic, a rounded onset and a short tail. */
  questionGain: 0.1,
  questionAttackSeconds: 0.018,
  question: [{ frequency: 220, start: 0, duration: 0.09 }],
  wrong: [
    { frequency: 440, start: 0, duration: 0.095 },
    { frequency: 392, start: 0.105, duration: 0.12 },
  ],
} as const
