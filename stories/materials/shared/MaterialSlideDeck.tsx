import type { SlideDeckProps } from '../../../src/components/Slide/SlideDeck.types'
import { MaterialTheme } from './MaterialTheme'
import * as Styled from './LessonDeck.styles'

export function MaterialSlideDeck(props: SlideDeckProps) {
  return (
    <MaterialTheme>
      <Styled.MaterialDeck
        tabIndex={-1}
        {...props}
        data-material-theme="dark"
      />
    </MaterialTheme>
  )
}
