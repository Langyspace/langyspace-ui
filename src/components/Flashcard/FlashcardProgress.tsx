import * as Styled from './FlashcardProgress.styles'
import type { FlashcardProgressProps } from './FlashcardProgress.types'

export function FlashcardProgress(props: FlashcardProgressProps) {
  if (props.loading) {
    return (
      <>
        <Styled.Track
          role="progressbar"
          aria-label={props.label}
          aria-busy="true"
        >
          {Array.from({ length: 4 }, (_, index) => (
            <Styled.LoadingSegment key={index} />
          ))}
        </Styled.Track>
        <Styled.Counter aria-hidden="true">
          <Styled.LoadingCounter />
        </Styled.Counter>
      </>
    )
  }

  const { label, revealed = false, complete = false } = props
  const total = Number.isFinite(props.total)
    ? Math.max(0, Math.floor(props.total))
    : 0
  const current = Number.isFinite(props.current)
    ? Math.min(Math.max(0, Math.floor(props.current)), total)
    : 0
  const segmentCount = Math.min(total, 20)
  const visualProgress =
    total > 20 ? Math.ceil((current / total) * 20) : current
  const activeIndex =
    visualProgress > 0 ? Math.min(visualProgress - 1, segmentCount - 1) : -1

  return (
    <>
      <Styled.Track
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={Math.max(total, 1)}
        aria-valuenow={current}
        data-progress-mode="segmented"
        data-progress-segment-count={segmentCount}
      >
        {Array.from({ length: segmentCount }, (_, index) => {
          const state =
            complete ||
            index < activeIndex ||
            (index === activeIndex && revealed)
              ? 'done'
              : index === activeIndex
                ? 'current'
                : 'pending'

          return (
            <Styled.Segment
              key={index}
              state={state}
              data-progress-segment="true"
              data-progress-state={state}
            />
          )
        })}
      </Styled.Track>
      <Styled.Counter>
        <b>{current}</b> / {total}
      </Styled.Counter>
    </>
  )
}
