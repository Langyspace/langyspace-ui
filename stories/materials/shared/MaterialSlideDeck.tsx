import type { SlideDeckProps } from '../../../src/components/Slide/SlideDeck.types'
import { MaterialTheme } from './MaterialTheme'
import * as Styled from './LessonDeck.styles'

function activityGroup(label: string) {
  return /^(Warm up|Pronunciation) ·/.exec(label)?.[1]
}

function exerciseProgress(pages: SlideDeckProps['pages'], pageId?: string) {
  const index = pages.findIndex((page) => page.id === pageId)
  const group = activityGroup(pages[index]?.label ?? '')
  if (!group) return
  let start = index
  let end = index
  while (start > 0 && activityGroup(pages[start - 1]?.label ?? '') === group)
    start--
  while (activityGroup(pages[end + 1]?.label ?? '') === group) end++
  if (end > start) return `${index - start + 1}/${end - start + 1}`
}

export function MaterialSlideDeck({ actions, ...props }: SlideDeckProps) {
  const progress = exerciseProgress(props.pages, props.pageId)
  return (
    <MaterialTheme>
      <Styled.MaterialDeck
        tabIndex={-1}
        {...props}
        data-material-theme="dark"
        actions={
          <>
            {progress ? (
              <Styled.ExerciseProgress role="status">
                <Styled.ExerciseProgressLabel>
                  Exercício{' '}
                </Styled.ExerciseProgressLabel>
                {progress}
              </Styled.ExerciseProgress>
            ) : null}
            {actions}
          </>
        }
      />
    </MaterialTheme>
  )
}
