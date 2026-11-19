import { useEffect, useRef, useState } from 'react'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { useLessonPage } from '../shared/useLessonPage'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import type { LessonShellProps } from '../shared/Lesson.types'
import { useB201Speech } from './useB201Speech'
import * as S from './B201.styles'

export function B201Shell({
  initialPageId,
  materialKey,
  pageIds,
  label,
  pages,
}: LessonShellProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, materialKey, pageIds)
  const [notes, setNotes] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const root = useRef<HTMLDivElement>(null)
  const speech = useB201Speech()
  useEffect(() => {
    root.current
      ?.querySelector<HTMLElement>('[data-slide-viewport]')
      ?.focus({ preventScroll: true })
  }, [])
  const close = () => {
    setNotes(false)
    trigger.current?.focus()
  }
  return (
    <S.Stage ref={root}>
      <MaterialSlideDeck
        label={label}
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
            ref={trigger}
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
