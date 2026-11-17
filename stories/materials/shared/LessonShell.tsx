import { useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
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
  initialPageId = 's1',
  label,
  pages,
}: LessonShellProps) {
  const [pageId, setPageId] = useState(initialPageId),
    [notes, setNotes] = useState(false)
  const button = useRef<HTMLButtonElement>(null),
    speech = useLessonSpeech()
  const close = () => {
    setNotes(false)
    button.current?.focus()
  }
  return (
    <S.Stage>
      <SlideDeck
        label={label}
        previousPageLabel="Back"
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        pages={pages(speech, pageId)}
        actions={
          <Button
            ref={button}
            size="sm"
            variant="secondary"
            aria-expanded={notes}
            onClick={() => (notes ? close() : setNotes(true))}
          >
            Notes
          </Button>
        }
      />
      <LessonNotes open={notes} onClose={close} />
      {speech.error ? (
        <S.AudioError role="status">{speech.error}</S.AudioError>
      ) : null}
    </S.Stage>
  )
}
