import { useState } from 'react'
import { DialogueTitle } from '../shared/DialogueTitle'
import { RecordedDialoguePlayback } from '../shared/RecordedDialoguePlayback'
import { MaterialTheme } from '../shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonShell } from '../shared/LessonShell'
import type { TrialA1LessonProps } from './TrialA1.types'
import { content, order } from './TrialA1.data'
import {
  GreetingSection,
  PictureTalkSection,
  ListenTalkSection,
  ComprehensionSection,
  PreferenceSection,
  ConversationSection,
  TodaySection,
} from './TrialA1.sections'
export function TrialA1Lesson({
  initialPageId,
  levelLabel = 'A1',
}: TrialA1LessonProps) {
  const [modelActive, setModelActive] = useState(true)
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
                    instruction="Answer your teacher. Then ask her the same questions."
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
                    density="compact"
                    questions={
                      modelActive ? <ComprehensionSection /> : undefined
                    }
                    title={
                      <DialogueTitle
                        title={content.p3.title}
                        action={
                          <RecordedDialoguePlayback
                            conversationId="TrialA1:s3"
                            active={activeId === 's3' && modelActive}
                          />
                        }
                      />
                    }
                    instruction="Listen, then read with your teacher."
                  >
                    <ListenTalkSection
                      onModeChange={(mode) => setModelActive(mode === 'model')}
                    />
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
                  instruction="Complete two sentences with new ideas. Finish with a question for your teacher."
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
