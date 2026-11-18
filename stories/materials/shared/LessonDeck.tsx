import { useCallback, useState } from 'react'
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
  const [pageId, setPageId] = useState(initialPageId ?? lesson.pages[0]?.id)
  const changePage = useCallback((next: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window)
      window.speechSynthesis.cancel()
    setPageId(next)
  }, [])
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
        actions={<LessonNotes key={lesson.code} code={lesson.code} />}
      />
    </Styled.Stage>
  )
}
