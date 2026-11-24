import { useSyncExternalStore } from 'react'
import {
  feedbackSoundsEnabled,
  feedbackSoundsServerSnapshot,
  subscribeFeedbackSounds,
  setFeedbackSoundsEnabled,
  playFeedbackSound,
  stopFeedbackSounds,
} from '../../internal/feedbackSounds'
import type { FeedbackSoundsController } from './useFeedbackSounds.types'

/** One answer-sound channel and mute preference per client window. No storage or network. */
export function useFeedbackSounds(): FeedbackSoundsController {
  const enabled = useSyncExternalStore(
    subscribeFeedbackSounds,
    feedbackSoundsEnabled,
    feedbackSoundsServerSnapshot,
  )
  return {
    enabled,
    setEnabled: setFeedbackSoundsEnabled,
    play: playFeedbackSound,
    stop: stopFeedbackSounds,
  }
}
