import type { SlideTitleProps } from './SlideTitle.types'
import * as S from './SlideTitle.styles'

/** One coherent heading, with a separate aligned action instead of a detached final word. */
export function SlideTitle({ title, action }: SlideTitleProps) {
  return (
    <S.Title data-dialogue-title="true">
      <S.Text data-dialogue-title-text="true">{title}</S.Text>
      <S.Action data-dialogue-title-action="true">{action}</S.Action>
    </S.Title>
  )
}
