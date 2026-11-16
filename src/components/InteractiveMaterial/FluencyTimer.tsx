import { EMPTY_LIST } from './Material.constants'
import * as Common from './Material.shared.styles'
import * as Styled from './FluencyTimer.styles'
import type { FluencyTimerProps } from './FluencyTimer.types'
export function FluencyTimer({
  title,
  description,
  rounds,
  roundIndex,
  remainingSeconds,
  running,
  support = EMPTY_LIST,
  onToggle,
  onReset,
  labels,
  ...props
}: FluencyTimerProps) {
  const text = {
    start: 'Começar rodada',
    pause: 'Parar',
    restart: 'Recomeçar',
    round: 'Rodada',
    finished: 'Fim',
    empty: 'Nenhuma rodada.',
    ...labels,
  }
  const round = rounds[roundIndex]
  const finished = roundIndex >= rounds.length && !!rounds.length
  const left = Math.max(
    0,
    Math.floor(Number.isFinite(remainingSeconds) ? remainingSeconds : 0),
  )
  return (
    <Styled.Root as="section" {...props}>
      <Common.Heading>{title}</Common.Heading>
      {description ? <Common.Hint>{description}</Common.Hint> : null}
      <Common.Row>
        {rounds.map((item, i) => (
          <Common.Chip
            key={item.id}
            aria-current={i === roundIndex ? 'step' : undefined}
          >
            {i < roundIndex ? '✓ ' : ''}
            {item.seconds >= 120
              ? `${item.seconds / 60} min`
              : `${item.seconds}s`}
          </Common.Chip>
        ))}
      </Common.Row>
      <Styled.Clock role="timer" aria-live="off">
        {finished
          ? '✓'
          : `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`}
      </Styled.Clock>
      <Common.Tag>
        {finished
          ? text.finished
          : round
            ? `${text.round} ${roundIndex + 1}`
            : text.empty}
      </Common.Tag>
      {round ? (
        <Styled.Progress
          max={Math.max(1, round.seconds)}
          value={Math.max(0, Math.min(round.seconds, round.seconds - left))}
          aria-label={text.round}
        />
      ) : null}
      {round?.audience ? <Common.Hint>{round.audience}</Common.Hint> : null}
      <Common.Row>
        {support.map((line) => (
          <Common.Chip key={line}>{line}</Common.Chip>
        ))}
      </Common.Row>
      <Common.Action
        type="button"
        variant="brand"
        onClick={finished ? onReset : onToggle}
        disabled={!rounds.length}
      >
        {finished
          ? text.restart
          : running
            ? text.pause
            : `${text.start} ${roundIndex + 1}`}
      </Common.Action>
    </Styled.Root>
  )
}
