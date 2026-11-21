import { LessonOpening, TrialNextSteps } from '../shared/LessonBookends'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { MaterialLearningDialogue as LearningDialogue } from '../shared/MaterialLearningDialogue'
import { PromptExercise } from '../shared/LessonExercises'
import { useLessonPage } from '../shared/useLessonPage'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { GuidedConversation } from '../shared/GuidedConversation'
import type { GuidedConversationProps } from '../shared/GuidedConversation.types'
import { guidedConversation } from './TrialB2.guided'
import { DialogueTitle } from '../shared/DialogueTitle'
import { RecordedDialoguePlayback } from '../shared/RecordedDialoguePlayback'
import { useState } from 'react'
import { MaterialTheme } from '../shared/MaterialTheme'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { useSceneAudio } from '../shared/useSceneAudio'
import laptopLabel from './assets/laptop-label.mp3'
import anaAtWorkLabel from './assets/ana-at-work-label.mp3'
import deskLabel from './assets/desk-label.mp3'
import { ana, kim } from '../shared/characterPortraits'
import content from './TrialB2.content.json'
import image from './assets/ana-working.webp'
import type { TrialB2LessonProps } from './TrialB2.types'
import * as S from './TrialB2.styles'

const lessonPages = content.pages.filter((page) => page.id !== 's31')

const sceneClips = {
  setup: laptopLabel,
  focus: anaAtWorkLabel,
  boundaries: deskLabel,
}

// Reuse the same image-coordinate and anchored-feedback contract as the other trials.
function PictureTalk({ active }: { active: boolean }) {
  const audio = useSceneAudio(active, sceneClips)
  const [selected, setSelected] = useState<string>()
  const [visited, setVisited] = useState<string[]>([])
  return (
    <>
      <S.Scene
        imageUrl={image}
        imageAlt={content.p2.alt}
        hotspots={content.p2.hotspots.map((item) => ({
          id: item.id,
          label: item.label,
          xPercent: item.x,
          yPercent: item.y,
          targetBounds: item.targetBounds,
          prompt: null,
        }))}
        selectedId={selected}
        visitedIds={visited}
        onPlayHotspot={audio.play}
        playingId={audio.playingId}
        onSelect={(id) => {
          audio.stop()
          setSelected(id)
          setVisited((old) => (old.includes(id) ? old : [...old, id]))
        }}
        labels={{
          initial: '',
        }}
      />
      {selected && audio.error ? <p role="status">{audio.error}</p> : null}
    </>
  )
}
function PhraseSupport({ phrases }: { phrases: string[] }) {
  return (
    <S.Support context="Phrase support">
      <ul>
        {phrases.map((phrase) => (
          <li key={phrase}>{phrase}</li>
        ))}
      </ul>
    </S.Support>
  )
}
function Glossary({ entries }: { entries: string[][] }) {
  return (
    <S.Support context="Word help">
      <ul>
        {entries.map(([term, meaning]) => (
          <li key={term}>
            <b>{term}</b> — {meaning}
          </li>
        ))}
      </ul>
    </S.Support>
  )
}
function Preference({ index }: { index: number }) {
  const [choice, setChoice] = useState<string | null>(null)
  const pair = content.p4.pairs[index]!
  return (
    <S.Stack>
      <S.Prompt>{pair.q}</S.Prompt>
      <S.Choices>
        {[pair.a, pair.b].map((option) => (
          <S.Choice
            key={option}
            aria-pressed={choice === option}
            onClick={() => setChoice(choice === option ? null : option)}
          >
            {option}
            <span aria-hidden="true">{choice === option ? '✓' : ''}</span>
          </S.Choice>
        ))}
      </S.Choices>
      {choice ? (
        <S.Panel>
          <S.Prompt>{pair.followUp}</S.Prompt>
        </S.Panel>
      ) : null}
      <PhraseSupport phrases={content.p4.support} />
    </S.Stack>
  )
}
function Conversation() {
  return (
    <PromptExercise
      items={[
        {
          id: '0',
          prompt: 'How do you switch off at the end of the day?',
          answer: 'For me, a good day is when … What about you?',
        },
        {
          id: '1',
          prompt:
            'If you could change one thing about your routine, what would it be?',
          answer: 'I’d rather … because … It depends on …',
        },
        {
          id: '2',
          prompt: 'What makes a healthy work-life balance possible?',
          answer: 'What I value most is … For example, …',
        },
      ]}
    />
  )
}
function PageBody({
  id,
  active,
  onModeChange,
}: { id: string; active: boolean } & Pick<
  GuidedConversationProps,
  'onModeChange'
>) {
  const [translated, setTranslated] = useState<string[]>([])
  if (id === 's1')
    return (
      <S.Stack>
        <S.Questions>
          {content.p1.cards.map((card) => (
            <S.Panel as="li" key={card.q}>
              <S.Prompt>{card.q}</S.Prompt>
              <PhraseSupport phrases={[card.support]} />
            </S.Panel>
          ))}
        </S.Questions>
        <S.Prompt>{content.p1.ask}</S.Prompt>
      </S.Stack>
    )
  if (id === 's2') return <PictureTalk active={active} />
  if (id === 's3')
    return (
      <GuidedConversation {...guidedConversation} onModeChange={onModeChange}>
        <S.Stack>
          <LearningDialogue
            density="compact"
            lines={content.p3.lines.map((line, i) => ({
              id: String(i),
              speaker: line.who === 'ana' ? 'Ana' : 'Kim',
              avatarUrl: line.who === 'ana' ? ana : kim,
              side: line.who === 'kim' ? 'start' : 'end',
              content: line.en,
              translation: line.g,
            }))}
            translatedIds={translated}
            onTranslate={(id) =>
              setTranslated((ids) =>
                ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id],
              )
            }
          />
        </S.Stack>
      </GuidedConversation>
    )
  if (id === 's31')
    return (
      <PromptExercise
        items={[
          {
            id: 'office',
            prompt: 'What does Ana value about the office?',
            answer: 'The people: she learns from her team.',
          },
          {
            id: 'home',
            prompt: 'Why does Kim prefer working at home?',
            answer:
              'There is no commute or noise, and she can take a break when she wants.',
          },
          {
            id: 'balance',
            prompt: 'What do they both want from a good day?',
            answer:
              'To get things done and still have time for life outside work.',
          },
        ]}
      />
    )
  if (id.startsWith('s4'))
    return <Preference index={Number(id.slice(-1)) - 1} />
  if (id === 's5') return <Conversation />
  return (
    <S.Questions>
      {content.p6.questions.map((question) => (
        <S.Panel as="li" key={question}>
          <S.Prompt>{question}</S.Prompt>
        </S.Panel>
      ))}
    </S.Questions>
  )
}
function TrialB2Content({ initialPageId }: TrialB2LessonProps) {
  const [activeId, setActiveId] = useLessonPage(initialPageId, 'trial-b2', [
    ...lessonPages.map((page) => page.id),
    'next-steps',
  ])
  const [modelActive, setModelActive] = useState(true)

  const notePopup = useLessonNotesPopup(
    'langy-notes:Langy Trial B2 Work and life',
  )

  return (
    <S.Root data-material-revision={content.revision}>
      <MaterialSlideDeck
        label="B2 Trial · Work and life"
        previousPageLabel="Back"
        pageId={activeId}
        onPageChange={setActiveId}
        actions={
          <LessonNotesTrigger
            ref={(element) => {
              notePopup.trigger(element)
            }}
            open={notePopup.isOpen}
            onClick={notePopup.open}
          />
        }
        pages={[
          ...lessonPages.map((page) => ({
            id: page.id,
            label: page.title,
            content:
              page.id === 's1' ? (
                <LessonOpening
                  materialKey="trial-b2"
                  reviewTitle={page.title}
                  instruction={page.subtitle}
                >
                  <PageBody id={page.id} active={activeId === page.id} />
                </LessonOpening>
              ) : (
                <SlidePage
                  width={page.id === 's2' ? 'expanded' : 'reading'}
                  density={page.id === 's3' ? 'compact' : 'regular'}
                  questions={
                    page.id === 's3' && modelActive ? (
                      <PageBody id="s31" active={activeId === page.id} />
                    ) : undefined
                  }
                  eyebrow={
                    page.id === 's1'
                      ? 'Warm up'
                      : page.id === 's2'
                        ? 'Picture talk'
                        : page.id === 's3' || page.id === 's31'
                          ? 'Guided conversation'
                          : page.id.startsWith('s4')
                            ? 'Preferences'
                            : 'Conversation'
                  }
                  title={
                    page.id === 's3' ? (
                      <DialogueTitle
                        title={page.title}
                        action={
                          <RecordedDialoguePlayback
                            conversationId="TrialB2:s3"
                            active={activeId === page.id && modelActive}
                          />
                        }
                      />
                    ) : (
                      page.title
                    )
                  }
                  instruction={
                    page.id === 's3'
                      ? 'Listen, then read with your teacher.'
                      : page.subtitle
                  }
                >
                  <PageBody
                    id={page.id}
                    active={activeId === page.id}
                    onModeChange={(mode) => setModelActive(mode === 'model')}
                  />
                </SlidePage>
              ),
          })),
          {
            id: 'next-steps',
            label: 'Next steps',
            content: <TrialNextSteps materialKey="trial-b2" />,
          },
        ]}
        overlay={
          <LessonNotes
            storageKey="langy-notes:Langy Trial B2 Work and life"
            open={notePopup.isOpen}
            popupWindow={notePopup.popup}
            preview={notePopup.preview}
            error={notePopup.error}
            onClose={notePopup.close}
          />
        }
      />
    </S.Root>
  )
}
export function TrialB2Lesson(props: TrialB2LessonProps) {
  return (
    <MaterialTheme>
      <TrialB2Content {...props} />
    </MaterialTheme>
  )
}
