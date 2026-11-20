import type { SlideTitleProps } from './SlideTitle.types'
import * as S from './SlideTitle.styles'

/** Keep the action beside the final word when a long title wraps. */
export function SlideTitle({ title, action }: SlideTitleProps) {
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
