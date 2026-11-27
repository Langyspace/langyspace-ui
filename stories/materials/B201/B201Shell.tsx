import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { useEffect, useRef } from 'react'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { useLessonPage } from '../shared/useLessonPage'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import type { B201ShellProps } from './B201.types'
import * as S from './B201.styles'

export function B201Shell({
  initialPageId,
  materialKey,
  pageIds,
  label,
  pages,
}: B201ShellProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, materialKey, pageIds)
  const notePopup = useLessonNotesPopup('langy-notes:' + materialKey, pageId)

  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    root.current
      ?.querySelector<HTMLElement>('[data-slide-viewport]')
      ?.focus({ preventScroll: true })
  }, [])

  return (
    <S.Stage ref={root}>
      <MaterialSlideDeck
        label={label}
        pageId={pageId}
        onPageChange={(id) => {
          setPageId(id)
        }}
        pages={pages(pageId)}
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
    </S.Stage>
  )
}
