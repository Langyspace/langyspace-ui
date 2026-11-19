import { MaterialTheme } from '../shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonShell } from '../shared/LessonShell'
import type { TrialA1LessonProps } from './TrialA1.types'
import { content, order } from './TrialA1.data'
import {
  GreetingSection,
  PictureTalkSection,
  ListenTalkSection,
  PreferenceSection,
  ConversationSection,
  TodaySection,
} from './TrialA1.sections'
export function TrialA1Lesson({
  initialPageId,
  levelLabel = 'A1',
}: TrialA1LessonProps) {
  return (
    <MaterialTheme>
      <LessonShell
        materialKey="trial-a1-a2"
        pageIds={order}
        initialPageId={initialPageId}
        label={`${levelLabel} Trial · What do you like?`}
        pages={(_, activeId) =>
          order.map((id) => {
            if (id === 's1')
              return {
                id,
                label: content.title,
                content: (
                  <SlidePage
                    width="reading"
                    eyebrow="Warm up"
                    title={content.title}
                    instruction={content.p1.ins}
                  >
                    <GreetingSection />
                  </SlidePage>
                ),
              }
            if (id === 's2')
              return {
                id,
                label: content.p2.title,
                content: (
                  <SlidePage
                    width="expanded"
                    eyebrow="Picture talk"
                    title={content.p2.title}
                    instruction={content.p2.ins}
                  >
                    <PictureTalkSection active={activeId === 's2'} />
                  </SlidePage>
                ),
              }
            if (id === 's3')
              return {
                id,
                label: content.p3.title,
                content: (
                  <SlidePage
                    width="expanded"
                    eyebrow="Dialogue"
                    title={content.p3.title}
                    instruction={content.p3.ins}
                  >
                    <ListenTalkSection />
                  </SlidePage>
                ),
              }
            if (id === 's41' || id === 's42' || id === 's43') {
              const index = Number(id.slice(2)) - 1
              return {
                id,
                label: content.p4.pairs[index]!.q,
                content: (
                  <SlidePage
                    width="exercise"
                    eyebrow="Preferences"
                    title={content.p4.pairs[index]!.q}
                    instruction={content.p4.ins}
                  >
                    <PreferenceSection index={index} />
                  </SlidePage>
                ),
              }
            }
            if (id === 's5')
              return {
                id,
                label: 'Your turn to ask',
                content: (
                  <SlidePage
                    eyebrow="Conversation"
                    title="Your turn to ask"
                    instruction={content.p5.ins}
                  >
                    <ConversationSection />
                  </SlidePage>
                ),
              }
            return {
              id,
              label: 'What can you say now?',
              content: (
                <SlidePage
                  width="reading"
                  eyebrow="Review"
                  title="What can you say now?"
                  instruction="Complete com suas ideias e faça uma pergunta à professora."
                >
                  <TodaySection />
                </SlidePage>
              ),
            }
          })
        }
      />
    </MaterialTheme>
  )
}
