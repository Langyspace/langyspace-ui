import { styled } from 'styled-components'
import { MessageComposer } from '../../src/components/Message/MessageComposer'
import { GroupedBarChart } from '../../src/components/Charts/GroupedBarChart'
import { PracticeProgressBar } from '../../src/components/Practice/PracticeProgressBar'
import { FlashcardSwiper } from '../../src/components/Flashcard/FlashcardSwiper'

// Ordinary consumer composition lost to the former inline dynamic declarations.
export const ComposedComposer = styled(MessageComposer)`
  textarea {
    height: 1px;
  }
`
export const ComposedChart = styled(GroupedBarChart)`
  span {
    height: 1px;
  }
`
export const ComposedProgress = styled(PracticeProgressBar)`
  > div {
    width: 1px;
  }
`
export const ComposedSwiper = styled(FlashcardSwiper)`
  --tx: 1px;
  --ty: 1px;
  --tr: 1deg;
`
export const CalendarSurface = styled.div`
  [data-calendar-class-id] {
    height: 1px;
    top: 1px;
  }
`
