import { MaterialTheme } from '../shared/MaterialTheme'
import { Button } from '../../../src/components/Button/Button'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonShell, LessonIntro } from '../shared/LessonShell'
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
function TrialA1LessonContent({
  initialPageId,
  levelLabel = 'A1',
}: TrialA1LessonProps) {
  return (
    <LessonShell
      initialPageId={initialPageId}
      label={`${levelLabel} Trial · What do you like?`}
      pages={(speech) =>
        order.map((id) => {
          if (id === 's1')
            return {
              id,
              label: 'Hello · Let’s meet',
              content: (
                <SlidePage
                  width="standard"
                  density="dense"
                  eyebrow="Hello"
                  title="Let’s meet"
                  instruction={content.p1.ins}
                  lead={
                    <LessonIntro
                      compact
                      level={levelLabel}
                      lesson="Trial class"
                      before={content.titleParts[0] ?? ''}
                      accent={content.titleParts[1] ?? ''}
                      goal={content.goal}
                    />
                  }
                >
                  <GreetingSection />
                </SlidePage>
              ),
            }
          if (id === 's2')
            return {
              id,
              label: 'Picture talk · Sunday in the park',
              content: (
                <SlidePage
                  eyebrow="Picture talk"
                  width="expanded"
                  title={content.p2.title}
                  instruction={content.p2.ins}
                >
                  <PictureTalkSection speech={speech} />
                </SlidePage>
              ),
            }
          if (id === 's3')
            return {
              id,
              label: 'Listen and talk · Do you like the park?',
              content: (
                <SlidePage
                  density="dense"
                  eyebrow="Listen and talk"
                  width="expanded"
                  title={content.p3.title}
                  instruction={content.p3.ins}
                  tools={
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        speech.playingId?.startsWith('D.')
                          ? speech.togglePause()
                          : speech.speak(
                              content.p3.lines.map((l, i) => ({
                                id: 'D.' + (i + 1),
                                text: l.en,
                                speaker: l.who,
                              })),
                            )
                      }
                    >
                      {speech.playingId?.startsWith('D.')
                        ? speech.paused
                          ? 'Resume'
                          : 'Pause'
                        : 'Listen to the dialogue'}
                    </Button>
                  }
                >
                  <ListenTalkSection speech={speech} />
                </SlidePage>
              ),
            }
          if (id === 's41' || id === 's42' || id === 's43')
            return {
              id,
              label: `This or that? · ${content.p4.pairs[Number(id.slice(2)) - 1]?.q}`,
              content: (
                <SlidePage
                  width="exercise"
                  eyebrow="This or that?"
                  title={content.p4.title}
                  instruction={content.p4.ins}
                >
                  <PreferenceSection
                    index={Number(id.slice(2)) - 1}
                    speech={speech}
                  />
                </SlidePage>
              ),
            }
          if (id === 's5')
            return {
              id,
              label: 'Conversation · Let’s talk',
              content: (
                <SlidePage
                  eyebrow="Conversation"
                  title="Let’s talk"
                  instruction={content.p5.ins}
                >
                  <ConversationSection />
                </SlidePage>
              ),
            }
          return {
            id,
            label: 'Today · Today you said',
            content: (
              <SlidePage width="reading" eyebrow="Today" title="Today you said">
                <TodaySection speech={speech} />
              </SlidePage>
            ),
          }
        })
      }
    />
  )
}

export function TrialA1Lesson(props: TrialA1LessonProps) {
  return (
    <MaterialTheme>
      <TrialA1LessonContent {...props} />
    </MaterialTheme>
  )
}
