import { LessonShell } from './LessonShell'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import * as Styled from './LessonDeck.styles'
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
  const groups: string[][] = []
  let previous: string | undefined
  for (const page of lesson.pages) {
    const group = /^(Warm up|Pronunciation) ·/.exec(page.label)?.[1]
    if (group) {
      if (group === previous) groups.at(-1)?.push(page.id)
      else groups.push([page.id])
    }
    previous = group
  }
  return (
    <LessonShell
      initialPageId={initialPageId}
      materialKey={lesson.code.toLowerCase().replace('.', '-')}
      label={`${lesson.code} · ${lesson.title}${learnerName ? ` · ${learnerName}` : ''}`}
      pageIds={lesson.pages.map((page) => page.id)}
      exerciseGroups={groups.filter((group) => group.length > 1)}
      themeSwitch
      pages={() =>
        lesson.pages.map((page) => ({
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
      }
    />
  )
}
