export interface PracticePlaybackControlsProps<Speed extends string = string> {
  playing: boolean
  playLabel: string
  onPlay: () => void
  skipAction?: { label: string; onClick: () => void }
  speed: Speed
  speedOptions: readonly Speed[]
  onSpeedChange: (speed: Speed) => void
  /** @default 'Tradução' */
  translationLabel?: string
  translationVisible: boolean
  onTranslationToggle: () => void
}
