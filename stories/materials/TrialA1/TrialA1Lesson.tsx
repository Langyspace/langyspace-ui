import {
  withLessonOpeningPages,
  withLessonOpeningPageIds,
} from '../shared/lessonOpeningPolicy'
import { LikesBoardSection } from './TrialA1LikesBoard'
import {
  TrialA1Listening,
  listeningTitle,
  listeningInstruction,
} from './TrialA1Listening'
import { TrialNextSteps } from '../shared/LessonBookends'
import { FreeConversationPage } from '../shared/FreeConversationPage'
import { TrialA1LiveConversation } from './TrialA1LiveConversation'
import { TrialA1DialoguePage } from './TrialA1DialoguePage'
import { MaterialTheme } from '../shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonShell } from '../shared/LessonShell'
import type { TrialA1LessonProps } from './TrialA1.types'
import { content, order, parkScene } from './TrialA1.data'
import { GreetingSection, PictureTalkSection } from './TrialA1.sections'
import { MaterialVideoPage } from '../shared/MaterialVideoPage'
import video from './TrialA1.video.json'
export function TrialA1Lesson({
  initialPageId,
  levelLabel = 'A1',
}: TrialA1LessonProps) {
  return (
    <MaterialTheme>
      <LessonShell
        materialKey="trial-a1-a2"
        pageIds={withLessonOpeningPageIds('trial-a1-a2', order)}
        initialPageId={initialPageId}
        label={`${levelLabel} Trial · What do you like?`}
        pages={(_, activeId) =>
          withLessonOpeningPages(
            'trial-a1-a2',
            order.map((id) => {
              if (id === 's1')
                return {
                  id,
                  label: content.p1.title,
                  content: (
                    <SlidePage
                      columns={1}
                      density="compact"
                      eyebrow="Warm up"
                      title={content.p1.title}
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
                      width={{
                        mediaAspectRatio: parkScene.width / parkScene.height,
                      }}
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
                  content: <TrialA1DialoguePage active={activeId === 's3'} />,
                }
              if (id === 's3-rehearse' || id === 's3-independent') {
                const independent = id === 's3-independent'
                const title = independent
                  ? 'Start a new conversation'
                  : 'Talk about what you like'
                return {
                  id,
                  label: title,
                  content: (
                    <SlidePage
                      columns={1}
                      eyebrow="Conversation"
                      title={title}
                      instruction={
                        independent
                          ? 'Choose a topic. Ask your teacher, answer and ask back'
                          : 'Answer your teacher about yourself. Ask back when you can.'
                      }
                    >
                      <TrialA1LiveConversation independent={independent} />
                    </SlidePage>
                  ),
                }
              }
              if (id === 's4')
                return {
                  id,
                  label: content.p4.title,
                  content: (
                    <SlidePage
                      columns={3}
                      density="compact"
                      eyebrow="Speaking"
                      title={content.p4.title}
                      instruction={content.p4.ins}
                    >
                      <LikesBoardSection />
                    </SlidePage>
                  ),
                }
              if (id === 's5') {
                return {
                  id,
                  label: listeningTitle,
                  content: (
                    <SlidePage
                      width="standard"
                      density="compact"
                      eyebrow="Listening"
                      title={listeningTitle}
                      instruction={listeningInstruction}
                    >
                      <TrialA1Listening active={activeId === id} />
                    </SlidePage>
                  ),
                }
              }
              if (id === 's_video_comedy')
                return {
                  id,
                  label: video.title,
                  content: (
                    <MaterialVideoPage
                      content={video}
                      active={activeId === id}
                    />
                  ),
                }
              if (id === 'free-conversation')
                return {
                  id,
                  label: 'Free conversation',
                  content: (
                    <FreeConversationPage instruction="Talk freely about people you know and things you like. Ask each other questions and share more about yourselves" />
                  ),
                }
              if (id === 'next-steps')
                return {
                  id,
                  label: 'Next steps',
                  content: <TrialNextSteps materialKey="trial-a1-a2" />,
                }
              throw new Error(`Unknown TrialA1 page: ${id}`)
            }),
          )
        }
      />
    </MaterialTheme>
  )
}
