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
  density = 'regular',
  labels,
  children,
  ...props
}: AudioSequenceControlsProps) {
  const text = {
    previous: 'Áudio anterior',
    next: 'Tocar o próximo áudio',
    replay: 'Tocar de novo',
    progress: 'Áudios',
    ...labels,
  }
  const total = Math.max(0, Math.floor(count))
  return (
    <Styled.Root
      {...props}
      $compact={density === 'compact'}
      aria-busy={loading}
    >
      {density === 'compact' ? (
        <Styled.Transport $compact>
          {onPrevious ? (
            <Styled.Playback
              $compact
              type="button"
              aria-label={text.previous}
              disabled={disabled || loading || !onPrevious || index <= 0}
              onClick={onPrevious}
            >
              <SimulationIcon name="previous" />
            </Styled.Playback>
          ) : null}
          <Styled.Playback
            $compact
            type="button"
            aria-label={text.replay}
            title={text.replay}
            disabled={disabled || loading || index < 0 || !total}
            onClick={onReplay}
          >
            <SimulationIcon name="replay" />
          </Styled.Playback>
          <Styled.Playback
            $compact
            $primary
            type="button"
            aria-label={text.next}
            title={text.next}
            disabled={disabled || loading || !total || index >= total - 1}
            onClick={onNext}
          >
            <SimulationIcon name="next" />
          </Styled.Playback>
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
