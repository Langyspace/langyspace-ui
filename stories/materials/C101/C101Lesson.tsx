import {
  withLessonOpeningPages,
  withLessonOpeningPageIds,
} from '../shared/lessonOpeningPolicy'
import { LessonPracticePlan } from '../shared/LessonBookends'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { DialogueTitle } from '../shared/DialogueTitle'
import { DialoguePlaybackAction } from '../shared/DialoguePlaybackAction'
import { useEffect, useRef } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { SourceQuestions } from '../shared/LessonPractice'
import { useLessonPage } from '../shared/useLessonPage'
import { MaterialTheme } from '../shared/MaterialTheme'
import {
  C101Questions,
  Expressions,
  WarmUp,
  Reading,
  Prosody,
  Dialogue,
  Grammar,
  NaturalReview,
  RespondToRaj,
} from './C101.practice'
import { YourVersion, Listening, RolePlay } from './C101.conversation'
import { useC101Audio } from './C101.audio'
import content from './C101.content.json'
import type { C101LessonProps } from './C101.types'
import * as S from './C101.styles'
export const c101PageIds = content.order
  .map((id) => `s${id}`)
  .filter((id) => id !== 's61')
const pageInfo: Record<string, [string, string, string]> = {
  s1: [
    'C1 · Lesson 01',
    'Giving and receiving feedback',
    'Share experiences of giving and receiving difficult feedback.',
  ],
  s2: [
    'Expressions',
    'Giving feedback',
    'Suggest an expression for the gap, then click to reveal and listen.',
  ],
  s21: [
    'Expressions',
    'Feedback in context',
    'Suggest an expression for the gap, then click to reveal and listen.',
  ],
  s31: [
    'Warm up',
    'From blunt to tactful',
    'Choose feedback that is specific without overgeneralising.',
  ],
  s32: [
    'Warm up',
    'Ask for a change',
    'Choose a specific request that leaves room for a response.',
  ],
  s33: [
    'Warm up',
    'Take another perspective',
    'Acknowledge Raj’s perspective without losing the client’s concern.',
  ],
  s4: [
    'Reading',
    'An email from Laura',
    'Read the email and explain what Laura is implying.',
  ],
  s51: [
    'Pronunciation',
    'Same words, different effect',
    'Listen to both versions. Explain how the delivery changes the impression.',
  ],
  s52: [
    'Decision',
    'Respond to Raj',
    'Choose a reply that balances Raj’s independence with Laura’s request.',
  ],
  s6: [
    'Dialogue · 1 of 2',
    'Practicing with Kim',
    'Thursday night: listen to Ana’s first attempt and Kim’s reaction.',
  ],
  s62: [
    'Dialogue · 2 of 2',
    'Making the point land',
    'Listen for the changes that make Ana’s feedback more constructive.',
  ],
  s7: [
    'Grammar',
    'Constructive feedback',
    'Explore two goals: describe the effect and ask for a change.',
  ],
  s8: [
    'Your version',
    'Talk to Raj',
    'Give Raj a clear observation and negotiate a workable next step.',
  ],
  s9: [
    'Listening',
    'A message from Raj',
    'Listen, choose Yes or No, and correct the false statements.',
  ],
  s10: [
    'Review',
    'Does it fit this conversation?',
    'Judge the wording in a specific peer-to-peer feedback situation.',
  ],
  s11: [
    'Role play',
    'Your feedback',
    'Choose a case. Respond to Raj’s concern without losing your point.',
  ],
  s12: [
    'Before next class',
    'Keep the conversation going',
    'Prepare a real example and bring it to your next class.',
  ],
}
function C101Content({ initialPageId }: C101LessonProps) {
  const [pageId, setPageId] = useLessonPage(
    initialPageId,
    'c1-01',
    withLessonOpeningPageIds('c1-01', c101PageIds),
  )
  const notePopup = useLessonNotesPopup('langy-notes:c1-01')

  const audio = useC101Audio()
  const stage = useRef<HTMLDivElement>(null)
  useEffect(() => {
    stage.current
      ?.querySelector<HTMLElement>('[data-slide-viewport]')
      ?.focus({ preventScroll: true })
  }, [])

  const dialogueAction = (id: string) => {
    const lines =
      id === 's6' ? content.dialogue.slice(0, 7) : content.dialogue.slice(7)
    const ids = lines.map((line) => `c101-${line.id.replace('.', '-')}`)
    const playing = ids.includes(audio.playingId ?? '')
    return (
      <DialoguePlaybackAction
        context={pageInfo[id]![1]}
        disabled={pageId !== id}
        status={
          playing
            ? audio.paused
              ? 'paused'
              : 'playing'
            : audio.error
              ? 'error'
              : 'idle'
        }
        onClick={() => (playing ? audio.togglePause() : audio.play(ids))}
      />
    )
  }
  const body = (id: string) => {
    if (id === 's1') return <SourceQuestions items={content.review} />
    if (id === 's2' || id === 's21')
      return <Expressions group={id === 's2' ? 0 : 1} active={pageId === id} />
    if (['s31', 's32', 's33'].includes(id))
      return <WarmUp index={Number(id.slice(2)) - 1} />
    if (id === 's4') return <Reading />
    if (id === 's51') return <Prosody audio={audio} />
    if (id === 's52') return <RespondToRaj />
    if (id === 's6' || id === 's62')
      return <Dialogue part={id === 's6' ? 0 : 1} audio={audio} />
    if (id === 's7') return <Grammar />
    if (id === 's8') return <YourVersion />
    if (id === 's9') return <Listening active={pageId === id} />
    if (id === 's10') return <NaturalReview />
    if (id === 's11') return <RolePlay />
    return (
      <LessonPracticePlan
        tasks={content.homePractice.map((item) => ({
          title: item.title,
          description: item.text,
        }))}
      />
    )
  }
  return (
    <S.Stage ref={stage}>
      <MaterialSlideDeck
        label="C1.01 · It tends to come across as …"
        pageId={pageId}
        previousPageLabel="Back"
        onPageChange={(id) => {
          if (id !== pageId) audio.stop()
          setPageId(id)
        }}
        actions={
          <LessonNotesTrigger
            ref={(element) => {
              notePopup.trigger(element)
            }}
            open={notePopup.isOpen}
            onClick={notePopup.open}
          />
        }
        overlay={
          <LessonNotes
            storageKey="langy-notes:c1-01"
            open={notePopup.isOpen}
            popupWindow={notePopup.popup}
            preview={notePopup.preview}
            error={notePopup.error}
            onClose={notePopup.close}
          />
        }
        pages={withLessonOpeningPages(
          'c1-01',
          c101PageIds.map((id) => {
            const [eyebrow, title, instruction] = pageInfo[id]!
            if (id === 's1')
              return {
                id,
                label: 'Warm up · Giving and receiving feedback',
                content: (
                  <SlidePage
                    width="conversation"
                    density="compact"
                    eyebrow="Warm up"
                    title={title}
                    instruction={instruction}
                  >
                    {body(id)}
                  </SlidePage>
                ),
              }
            const Page = SlidePage
            return {
              id,
              label: `${eyebrow} · ${title}`,
              content: (
                <Page
                  layout={id === 's12' ? 'split' : 'stacked'}
                  density="dense"
                  eyebrow={eyebrow}
                  title={
                    id === 's6' || id === 's62' ? (
                      <DialogueTitle
                        title={title}
                        action={dialogueAction(id)}
                      />
                    ) : (
                      title
                    )
                  }
                  instruction={instruction}
                  questions={
                    id === 's4' ? (
                      <C101Questions items={content.reading} />
                    ) : id === 's6' || id === 's62' ? (
                      <C101Questions
                        items={
                          id === 's6'
                            ? content.comprehension.slice(0, 1)
                            : content.comprehension.slice(1)
                        }
                      />
                    ) : undefined
                  }
                  width={
                    ['s4', 's8', 's9', 's11'].includes(id) ? 'expanded' : 'wide'
                  }
                >
                  {body(id)}
                  {audio.error && pageId === id ? (
                    <S.Hint role="status">{audio.error}</S.Hint>
                  ) : null}
                </Page>
              ),
            }
          }),
        )}
      />
    </S.Stage>
  )
}
export function C101Lesson(props: C101LessonProps) {
  return (
    <MaterialTheme>
      <C101Content {...props} />
    </MaterialTheme>
  )
}
