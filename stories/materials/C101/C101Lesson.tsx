import { WarmupPage } from '../shared/WarmupPage.styles'
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
} from './C101.practice'
import { YourVersion, Listening, RolePlay } from './C101.conversation'
import { useC101Audio } from './C101.audio'
import content from './C101.content.json'
import type { C101LessonProps } from './C101.types'
import * as S from './C101.styles'
export const c101PageIds = content.order.map((id) => `s${id}`)
const pageInfo: Record<string, [string, string, string]> = {
  s1: [
    'C1 · Lesson 01',
    'It tends to come across as …',
    'Revisit last class, then respond to a different point of view.',
  ],
  s2: [
    'Expressions',
    'Giving feedback',
    'Paraphrase each expression before opening its meaning.',
  ],
  s31: [
    'Warm up',
    'From blunt to tactful',
    'Help Ana turn her notes into constructive feedback.',
  ],
  s32: [
    'Warm up',
    'Ask for a change',
    'Try a suggestion before revealing the options.',
  ],
  s33: [
    'Warm up',
    'Feedback that stayed with you',
    'Choose Ana’s answer, then share your own experience.',
  ],
  s4: [
    'Reading',
    'An email from Laura',
    'Read the email and explain what Laura is implying.',
  ],
  s51: [
    'Pronunciation',
    'Soft or harsh?',
    'Compare the two deliveries and explain the impression each creates.',
  ],
  s52: [
    'Pronunciation',
    'A suggestion or an order?',
    'Compare the same words in two deliveries, then imitate them.',
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
  s61: [
    'Dialogue',
    'Read between the lines',
    'Answer with evidence from Kim and Ana’s conversation.',
  ],
  s7: [
    'Grammar',
    'Softer, please',
    'Rephrase each direct sentence before revealing an alternative.',
  ],
  s8: [
    'Your version',
    'Talk to Raj',
    'Give clear, tactful feedback; respond when Raj questions it.',
  ],
  s9: [
    'Listening',
    'A message from Raj',
    'Listen, choose Yes or No, and correct the false statements.',
  ],
  s10: [
    'Review',
    'Natural or not?',
    'Judge the wording and tone, then improve what needs changing.',
  ],
  s11: [
    'Role play',
    'Your feedback',
    'Handle a difficult conversation, then swap perspectives.',
  ],
  s12: [
    'Before next class',
    'Keep the conversation going',
    'Prepare a real example and bring it to your next class.',
  ],
}
function C101Content({ initialPageId }: C101LessonProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, 'c1-01', c101PageIds)
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
    if (id === 's2') return <Expressions />
    if (['s31', 's32', 's33'].includes(id))
      return <WarmUp index={Number(id.slice(2)) - 1} />
    if (id === 's4') return <Reading />
    if (id === 's51' || id === 's52')
      return <Prosody index={id === 's51' ? 0 : 1} audio={audio} />
    if (id === 's6' || id === 's62')
      return <Dialogue part={id === 's6' ? 0 : 1} audio={audio} />
    if (id === 's61') return <C101Questions items={content.comprehension} />
    if (id === 's7') return <Grammar />
    if (id === 's8') return <YourVersion />
    if (id === 's9') return <Listening active={pageId === id} />
    if (id === 's10') return <NaturalReview />
    if (id === 's11') return <RolePlay />
    return (
      <S.Stack>
        {content.homePractice.map((item, i) => (
          <S.Surface key={item.title}>
            <b>
              {i + 1}. {item.title}
            </b>
            <p>{item.text}</p>
          </S.Surface>
        ))}
      </S.Stack>
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
        pages={c101PageIds.map((id) => {
          const [eyebrow, title, instruction] = pageInfo[id]!
          const Page = ['s31', 's32', 's33'].includes(id)
            ? WarmupPage
            : SlidePage
          return {
            id,
            label: `${eyebrow} · ${title}`,
            content: (
              <Page
                eyebrow={eyebrow}
                title={
                  id === 's6' || id === 's62' ? (
                    <DialogueTitle title={title} action={dialogueAction(id)} />
                  ) : (
                    title
                  )
                }
                instruction={instruction}
                width={
                  ['s4', 's8', 's9', 's11'].includes(id) ? 'expanded' : 'wide'
                }
              >
                {body(id)}
                {audio.error && pageId === id ? (
                  <S.AudioStatus role="status">{audio.error}</S.AudioStatus>
                ) : null}
              </Page>
            ),
          }
        })}
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
