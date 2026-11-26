import { useLessonNotesPopup } from './useLessonNotesPopup'

import { useLessonPage } from './useLessonPage'
import { LessonNotesTrigger } from './LessonNotesTrigger'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { useLessonSpeech } from './useLessonSpeech'
import { LessonNotes } from './LessonNotes'
import type { LessonShellProps, LessonIntroProps } from './Lesson.types'
import * as S from './Lesson.styles'
import { withFreeConversationEnding } from './freeConversationEnding'
import { useMaterialThemeToggle } from './MaterialAppearanceContext'
export function LessonIntro({
  level,
  lesson,
  before,
  accent,
  goal,
  compact = false,
}: LessonIntroProps) {
  const Introduction = compact ? S.CompactIntroduction : S.Introduction
  return (
    <Introduction>
      <S.Eyebrow>
        <b>{level}</b>
        {lesson}
      </S.Eyebrow>
      <S.Hero>
        {before}
        <em>{accent}</em>
      </S.Hero>
      <S.Goal>
        <span aria-hidden="true">✦</span>
        <p>
          <b>Goal</b>
          {goal}
        </p>
      </S.Goal>
    </Introduction>
  )
}
export function LessonShell({
  initialPageId,
  materialKey,
  pageIds,
  label,
  pages,
  navigationMode,
}: LessonShellProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, materialKey, pageIds)
  const notePopup = useLessonNotesPopup('langy-notes:' + materialKey)

  const speech = useLessonSpeech()
  const themeToggle = useMaterialThemeToggle()

  return (
    <S.Stage>
      <SlideDeck
        themeToggle={themeToggle}
        navigationMode={navigationMode}
        tabIndex={-1}
        label={label}
        previousPageLabel="Back"
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        pages={withFreeConversationEnding(pages(speech, pageId))}
        overlay={
          <LessonNotes
            storageKey={'langy-notes:' + materialKey}
            open={notePopup.isOpen}
            popupWindow={notePopup.popup}
            preview={notePopup.preview}
            error={notePopup.error}
            onClose={notePopup.close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={(element) => {
              notePopup.trigger(element)
            }}
            open={notePopup.isOpen}
            onClick={notePopup.open}
          />
        }
      />
      {speech.error ? (
        <S.AudioError role="status">{speech.error}</S.AudioError>
      ) : null}
    </S.Stage>
  )
}
