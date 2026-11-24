import type { SlideDeckProps } from '../../../src/components/Slide/SlideDeck.types'
import { MaterialTheme } from './MaterialTheme'
import * as Styled from './LessonDeck.styles'
import { withFreeConversationEnding } from './freeConversationEnding'

export function MaterialSlideDeck(props: SlideDeckProps) {
  return (
    <MaterialTheme>
      <Styled.MaterialDeck
        tabIndex={-1}
        feedbackSounds
        {...props}
        pages={withFreeConversationEnding(props.pages)}
        data-material-theme="dark"
      />
    </MaterialTheme>
  )
}
