import { useRef, useState } from 'react'
import { useLessonPage } from './useLessonPage'
import { LessonNotesTrigger } from './LessonNotesTrigger'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { useLessonSpeech } from './useLessonSpeech'
import { LessonNotes } from './LessonNotes'
import type { LessonShellProps, LessonIntroProps } from './Lesson.types'
import * as S from './Lesson.styles'
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
}: LessonShellProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, materialKey, pageIds)
  const [notes, setNotes] = useState(false)
  const button = useRef<HTMLButtonElement>(null),
    speech = useLessonSpeech()
  const close = () => {
    setNotes(false)
    button.current?.focus()
  }
  return (
    <S.Stage>
      <SlideDeck
        tabIndex={-1}
        label={label}
        previousPageLabel="Back"
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        pages={pages(speech, pageId)}
        overlay={
          <LessonNotes
            storageKey={'langy-notes:' + materialKey}
            open={notes}
            onClose={close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={button}
            open={notes}
            onClick={() => (notes ? close() : setNotes(true))}
          />
        }
      />
      {speech.error ? (
        <S.AudioError role="status">{speech.error}</S.AudioError>
      ) : null}
    </S.Stage>
  )
}
