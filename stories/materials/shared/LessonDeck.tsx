import { useLessonNotesPopup } from './useLessonNotesPopup'
import { useCallback } from 'react'
import { useLessonPage } from './useLessonPage'
import { LessonNotesTrigger } from './LessonNotesTrigger'
import { MaterialSlideDeck } from './MaterialSlideDeck'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import * as Styled from './LessonDeck.styles'
import { LessonNotes } from './LessonNotes'
import type { LessonCoverProps, LessonDeckProps } from './LessonDeck.types'

export function LessonCover({ code, title, goal }: LessonCoverProps) {
  return (
    <Styled.Cover>
      <Styled.Eyebrow>{code}</Styled.Eyebrow>
      <Styled.Heading>{title}</Styled.Heading>
      {goal ? (
        <Styled.Goal>
          <strong>Goal</strong>
          {goal}
        </Styled.Goal>
      ) : null}
    </Styled.Cover>
  )
}

export function LessonDeck({
  lesson,
  initialPageId,
  learnerName = '',
}: LessonDeckProps) {
  const materialKey = lesson.code.toLowerCase().replace('.', '-')
  const [pageId, setPageId] = useLessonPage(
    initialPageId,
    materialKey,
    lesson.pages.map((page) => page.id),
  )
  const notePopup = useLessonNotesPopup('langy-material-notes-' + lesson.code)

  const changePage = useCallback(
    (next: string) => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window)
        window.speechSynthesis.cancel()
      setPageId(next)
    },
    [setPageId],
  )
  const pages = lesson.pages.map((page) => ({
    id: page.id,
    label: page.label,
    content: (
      <SlidePage
        title={page.title}
        eyebrow={page.eyebrow}
        instruction={page.instruction}
        width={page.width ?? 'standard'}
        tone={page.tone}
        lead={page.lead}
      >
        {page.content}
      </SlidePage>
    ),
  }))
  return (
    <Styled.Stage>
      <MaterialSlideDeck
        label={`${lesson.code} · ${lesson.title}${learnerName ? ` · ${learnerName}` : ''}`}
        pages={pages}
        pageId={pageId}
        onPageChange={changePage}
        previousPageLabel="Voltar"
        overlay={
          <LessonNotes
            storageKey={'langy-material-notes-' + lesson.code}
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
    </Styled.Stage>
  )
}
