import { playFeedbackSound } from '../../internal/feedbackSounds'
import { SimulationIcon } from './SimulationIcon'
import * as Common from './Material.shared.styles'
import * as Styled from './AudioSequenceControls.styles'
import type { AudioSequenceControlsProps } from './AudioSequenceControls.types'
export function AudioSequenceControls({
  index,
  count,
  onNext,
  onPrevious,
  onReplay,
  disabled = false,
  loading = false,
  status,
  supportAction,
  density = 'regular',
  labels,
  playback,
  children,
  ...props
}: AudioSequenceControlsProps) {
  const text = {
    play: 'Play current part',
    pause: 'Pause current part',
    resume: 'Resume current part',
    previous: 'Áudio anterior',
    next: 'Tocar o próximo áudio',
    replay: 'Tocar de novo',
    progress: 'Áudios',
    ...labels,
  }
  const toggleLabel = playback
    ? playback.state === 'playing'
      ? text.pause
      : playback.state === 'paused'
        ? text.resume
        : text.play
    : text.replay
  const compact = density === 'compact'
  const total = Math.max(0, Math.floor(count))
  const onSupportClick = () => {
    supportAction?.onClick()
    if (supportAction?.feedbackSound)
      playFeedbackSound(supportAction.feedbackSound)
  }
  return (
    <Styled.Root {...props} $compact={compact} aria-busy={loading}>
      {density === 'compact' ? (
        <Styled.Transport $compact>
          {onPrevious ? (
            <Styled.Playback
              $compact
              type="button"
              aria-label={text.previous}
              disabled={
                disabled || (loading && !playback) || !onPrevious || index <= 0
              }
              onClick={onPrevious}
            >
              <SimulationIcon name="previous" />
            </Styled.Playback>
          ) : null}
          <Styled.Playback
            $compact
            $primary={Boolean(playback)}
            type="button"
            aria-label={toggleLabel}
            title={toggleLabel}
            disabled={disabled || loading || index < 0 || !total}
            onClick={playback?.onToggle ?? onReplay}
          >
            <SimulationIcon
              name={
                playback
                  ? playback.state === 'playing'
                    ? 'pause'
                    : 'play'
                  : 'replay'
              }
            />
          </Styled.Playback>
          <Styled.Playback
            $compact
            $primary={!playback}
            type="button"
            aria-label={text.next}
            title={text.next}
            disabled={
              disabled || (loading && !playback) || !total || index >= total - 1
            }
            onClick={onNext}
          >
            <SimulationIcon name="next" />
          </Styled.Playback>
          {supportAction ? (
            <Styled.Playback
              $compact={compact}
              type="button"
              aria-label={supportAction.label}
              title={supportAction.label}
              aria-pressed={supportAction.pressed}
              disabled={disabled || supportAction.disabled}
              onClick={onSupportClick}
            >
              {supportAction.icon}
            </Styled.Playback>
          ) : null}
        </Styled.Transport>
      ) : (
        <>
          <Styled.Transport>
            <Styled.Playback
              type="button"
              aria-label={text.previous}
              disabled={disabled || loading || !onPrevious || index <= 0}
              onClick={onPrevious}
            >
              <SimulationIcon name="previous" />
            </Styled.Playback>
            <Styled.Playback
              type="button"
              $primary
              aria-label={text.next}
              disabled={disabled || loading || !total || index >= total - 1}
              onClick={onNext}
            >
              <SimulationIcon name="play" />
            </Styled.Playback>
            <Styled.Playback
              type="button"
              aria-label={text.replay}
              disabled={disabled || loading || index < 0 || !total}
              onClick={onReplay}
            >
              <SimulationIcon name="replay" />
            </Styled.Playback>
            {supportAction ? (
              <Styled.Playback
                $compact={compact}
                type="button"
                aria-label={supportAction.label}
                title={supportAction.label}
                aria-pressed={supportAction.pressed}
                disabled={disabled || supportAction.disabled}
                onClick={onSupportClick}
              >
                {supportAction.icon}
              </Styled.Playback>
            ) : null}
          </Styled.Transport>
          <Styled.Dots
            role="img"
            aria-label={`${text.progress}: ${Math.min(total, Math.max(0, index + 1))} / ${total}`}
          >
            {Array.from({ length: total }, (_, i) => (
              <Styled.Dot
                key={i}
                $state={i === index ? 'current' : i < index ? 'done' : 'empty'}
              />
            ))}
          </Styled.Dots>
        </>
      )}
      {status ? <Common.Hint role="status">{status}</Common.Hint> : null}
      {children}
    </Styled.Root>
  )
}
