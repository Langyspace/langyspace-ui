import type { RevealSequenceCardProps } from './RevealSequenceCard.types'
import * as S from './RevealSequenceCard.styles'
export function RevealSequenceCard({
  title,
  stages,
  stageId,
  onAdvance,
  emptyLabel = 'No cards available',
  type = 'button',
  disabled,
  ...props
}: RevealSequenceCardProps) {
  const index = Math.max(
    0,
    stages.findIndex((s) => s.id === stageId),
  )
  const stage = stages[index],
    next = stages[index + 1]
  return (
    <S.Root
      {...props}
      type={type}
      disabled={disabled || !stage}
      aria-disabled={!next}
      aria-expanded={index > 0}
      aria-label={next?.revealLabel ?? stage?.revealLabel ?? emptyLabel}
      onClick={() => {
        if (next) onAdvance(next.id)
      }}
    >
      <b>{title}</b>
      {stage?.image ? (
        <img src={stage.image.src} alt={stage.image.alt} />
      ) : null}
      {stage?.content ? <span>{stage.content}</span> : null}
    </S.Root>
  )
}
