export interface PreparedAudioPlaybackOptions {
  /** The controller still owns this request and this native element. */
  isCurrent: () => boolean
  /** Called once, only after a persistent failure or a non-retryable rejection. */
  onFailure: () => void
  onStarted?: () => void
}
