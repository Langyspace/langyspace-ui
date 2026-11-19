import type { DialogueTitleProps } from './DialogueTitle.types'
import * as S from './DialogueTitle.styles'

/** Keep the action beside the final word when a long title wraps. */
export function DialogueTitle({ title, action }: DialogueTitleProps) {
  const split = title.lastIndexOf(' ')
  return (
    <S.Title data-dialogue-title="true">
      {split >= 0 ? title.slice(0, split + 1) : null}
      <S.Tail>
        <span data-dialogue-title-tail="true">{title.slice(split + 1)}</span>
        <S.Action data-dialogue-title-action="true">{action}</S.Action>
      </S.Tail>
    </S.Title>
  )
}
