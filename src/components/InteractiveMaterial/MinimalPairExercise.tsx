import { EMPTY_LIST } from './Material.constants'
import * as Common from './Material.shared.styles'
import * as Styled from './MinimalPairExercise.styles'
import type { MinimalPairExerciseProps } from './MinimalPairExercise.types'
export function MinimalPairExercise({
  mode,
  onModeChange,
  choices,
  onSelect,
  onListen,
  onNext,
  selectedId,
  feedback,
  hint,
  score = EMPTY_LIST,
  disabled = false,
  labels,
  ...props
}: MinimalPairExerciseProps) {
  const text = {
    listenMode: 'You listen',
    speakMode: 'You say',
    listen: 'Listen',
    next: 'Próximo par',
    score: 'Placar',
    ...labels,
  }
  return (
    <Styled.Root as="section" {...props}>
      {onModeChange ? (
        <Common.Row role="group" aria-label="Modo">
          <Common.Action
            type="button"
            variant={mode === 'listen' ? 'primary' : 'secondary'}
            aria-pressed={mode === 'listen'}
            onClick={() => {
              onModeChange('listen')
            }}
          >
            {text.listenMode}
          </Common.Action>
          <Common.Action
            type="button"
            variant={mode === 'speak' ? 'primary' : 'secondary'}
            aria-pressed={mode === 'speak'}
            onClick={() => {
              onModeChange('speak')
            }}
          >
            {text.speakMode}
          </Common.Action>
        </Common.Row>
      ) : null}
      {mode === 'listen' && onListen ? (
        <Common.Action
          type="button"
          variant="brand"
          onClick={onListen}
          disabled={disabled}
        >
          {text.listen}
        </Common.Action>
      ) : null}
      <Styled.Choices>
        {choices.map((choice) => (
          <Styled.Choice
            key={choice.id}
            type="button"
            aria-pressed={selectedId === choice.id}
            $feedback={selectedId === choice.id ? feedback : undefined}
            disabled={disabled}
            onClick={() => {
              onSelect(choice.id)
            }}
          >
            {choice.imageUrl ? (
              <img src={choice.imageUrl} alt={choice.imageAlt ?? ''} />
            ) : null}
            <b>{choice.word}</b>
            {choice.phonetic ? <span>{choice.phonetic}</span> : null}
          </Styled.Choice>
        ))}
      </Styled.Choices>
      <Common.Row
        role="img"
        aria-label={`${text.score}: ${score.filter((s) => s.result === 'correct').length} / ${score.length}`}
      >
        {score.map((value) => (
          <Styled.Score key={value.id} $correct={value.result === 'correct'} />
        ))}
      </Common.Row>
      {hint ? <Common.Hint role="status">{hint}</Common.Hint> : null}
      {onNext ? (
        <Common.Action
          type="button"
          variant="secondary"
          onClick={onNext}
          disabled={disabled}
        >
          {text.next}
        </Common.Action>
      ) : null}
    </Styled.Root>
  )
}
