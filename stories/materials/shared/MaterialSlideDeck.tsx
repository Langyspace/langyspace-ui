import type { SlideDeckProps } from '../../../src/components/Slide/SlideDeck.types'
import { MaterialTheme } from './MaterialTheme'
import { useMaterialThemeToggle } from './MaterialAppearanceContext'
import * as Styled from './LessonDeck.styles'
import { returnToMaterialCatalog } from './materialCatalogNavigation'
import { withFreeConversationEnding } from './freeConversationEnding'
import { MaterialStudentSelectionMenu } from './MaterialStudentSelection'

function ThemedDeck(props: SlideDeckProps) {
  const themeToggle = useMaterialThemeToggle()
  return (
    <Styled.MaterialDeck
      tabIndex={-1}
      feedbackSounds
      {...props}
      actions={
        <>
          <MaterialStudentSelectionMenu />
          {props.actions}
        </>
      }
      onBack={props.onBack ?? returnToMaterialCatalog}
      pages={withFreeConversationEnding(props.pages)}
      themeToggle={themeToggle}
      data-material-theme={themeToggle?.mode}
    />
  )
}

export function MaterialSlideDeck(props: SlideDeckProps) {
  return (
    <MaterialTheme>
      <ThemedDeck {...props} />
    </MaterialTheme>
  )
}
