import * as Styled from './styles'
import type { PracticePlaybackControlsProps } from './types'

export function PracticePlaybackControls<Speed extends string>({
  playing,
  playLabel,
  onPlay,
  skipAction,
  speed,
  speedOptions,
  onSpeedChange,
  translationVisible,
  onTranslationToggle,
}: PracticePlaybackControlsProps<Speed>) {
  return (
    <Styled.ControlCluster data-ui-practice-playback-controls="true">
      <Styled.PlaybackControls $withSkip={Boolean(skipAction)}>
        <Styled.PlayButton
          $playing={playing}
          aria-label={playLabel}
          type="button"
          onClick={onPlay}
        >
          <svg
            aria-hidden="true"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {playing ? (
              <>
                <rect x="14" y="3" width="5" height="18" rx="1" />
                <rect x="5" y="3" width="5" height="18" rx="1" />
              </>
            ) : (
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            )}
          </svg>
        </Styled.PlayButton>
        {skipAction ? (
          <Styled.SkipButton
            aria-label={skipAction.label}
            title={skipAction.label}
            type="button"
            onClick={skipAction.onClick}
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m10 15 5 5 5-5" />
              <path d="M4 4h7a4 4 0 0 1 4 4v12" />
            </svg>
          </Styled.SkipButton>
        ) : null}
      </Styled.PlaybackControls>
      <Styled.ControlRow>
        <Styled.SpeedControl>
          {speedOptions.map((option) => (
            <Styled.SpeedButton
              aria-pressed={speed === option}
              key={option}
              className={speed === option ? 'active' : undefined}
              type="button"
              onClick={() => onSpeedChange(option)}
            >
              {option}
            </Styled.SpeedButton>
          ))}
        </Styled.SpeedControl>
        <Styled.TranslationToggle
          aria-pressed={translationVisible}
          $active={translationVisible}
          type="button"
          onClick={onTranslationToggle}
        >
          Tradução
        </Styled.TranslationToggle>
      </Styled.ControlRow>
    </Styled.ControlCluster>
  )
}

export type { PracticePlaybackControlsProps } from './types'
