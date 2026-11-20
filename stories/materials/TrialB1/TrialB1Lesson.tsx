import { PromptExercise } from '../shared/LessonExercises'
import { GuidedConversation } from '../shared/GuidedConversation'
import type { GuidedConversationProps } from '../shared/GuidedConversation.types'
import { guidedConversation } from './TrialB1.guided'
import { DialogueTitle } from '../shared/DialogueTitle'
import { RecordedDialoguePlayback } from '../shared/RecordedDialoguePlayback'
import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { MaterialTheme } from '../shared/MaterialTheme'
import { LessonShell } from '../shared/LessonShell'
import { useSceneAudio } from '../shared/useSceneAudio'
import tireLabel from './assets/flat-tire-label.mp3'
import suitcaseLabel from './assets/suitcase-label.mp3'
import coastLabel from './assets/coast-label.mp3'
import source from './TrialB1.content.json'
import sceneUrl from './assets/roadside-stop.png'
import { ana as anaUrl, kim as kimUrl } from '../shared/characterPortraits'
import type {
  TrialB1Content,
  TrialB1LessonProps,
  TrialB1Page,
} from './TrialB1.types'
import * as S from './TrialB1.styles'

const content = source as TrialB1Content
const lessonPages = content.pages.filter((page) => page.kind !== 'questions')
const comprehensionPage = content.pages.find(
  (page) => page.kind === 'questions',
)
const sceneClips = {
  tire: tireLabel,
  suitcase: suitcaseLabel,
  coast: coastLabel,
}
function Support({
  lines,
  label = 'Show support',
}: {
  lines: string | string[]
  label?: string
}) {
  return (
    <S.Support context={label}>
      <div>
        {(typeof lines === 'string' ? [lines] : lines).map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </S.Support>
  )
}
function Activity({
  page,
  active,
  onModeChange,
}: { page: TrialB1Page; active: boolean } & Pick<
  GuidedConversationProps,
  'onModeChange'
>) {
  const audio = useSceneAudio(active && page.kind === 'scene', sceneClips)
  const [selected, setSelected] = useState<string>()
  const [visited, setVisited] = useState<string[]>([])
  const [translated, setTranslated] = useState<string[]>([])
  const [phrases, setPhrases] = useState<string[]>([])
  if (page.kind === 'greeting')
    return (
      <S.Stack>
        <S.Greeting>
          {page.questions.map((question) => (
            <S.Question key={question.q}>
              <S.Heading>{question.q}</S.Heading>
              <Support lines={question.support} />
            </S.Question>
          ))}
        </S.Greeting>
        <S.Invitation>
          <p>{page.ask}</p>
        </S.Invitation>
      </S.Stack>
    )
  if (page.kind === 'scene')
    return (
      <>
        <S.Scene
          imageUrl={sceneUrl}
          imageAlt={page.imageAlt}
          hotspots={page.hotspots.map((h) => ({
            ...h,
            prompt: null,
          }))}
          selectedId={selected}
          visitedIds={visited}
          onPlayHotspot={audio.play}
          playingId={audio.playingId}
          onSelect={(id) => {
            audio.stop()
            setSelected(id)
            setVisited((ids) => (ids.includes(id) ? ids : [...ids, id]))
          }}
          labels={{
            initial: '',
          }}
        />
        {selected && audio.error ? <p role="status">{audio.error}</p> : null}
      </>
    )
  if (page.kind === 'dialogue')
    return (
      <GuidedConversation {...guidedConversation} onModeChange={onModeChange}>
        <S.Stack>
          <S.Dialogue
            lines={page.lines.map((line, i) => ({
              id: String(i),
              speaker: line.who === 'ana' ? 'Ana' : 'Kim',
              avatarUrl: line.who === 'ana' ? anaUrl : kimUrl,
              side: line.who === 'kim' ? 'start' : 'end',
              content: line.en,
              translation: line.pt,
            }))}
            density="compact"
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
  if (page.kind === 'questions')
    return (
      <PromptExercise
        items={page.questions.map((item, i) => ({
          id: String(i),
          prompt: item.q,
          answer: item.answer,
        }))}
      />
    )
  if (page.kind === 'choice')
    return (
      <S.Stack>
        <S.Choices role="group" aria-label={page.title}>
          {page.choices.map((choice) => (
            <S.Choice
              key={choice}
              variant="lesson"
              aria-pressed={selected === choice}
              onClick={() =>
                setSelected((current) =>
                  current === choice ? undefined : choice,
                )
              }
            >
              <span>{choice}</span>
              <S.Selected aria-hidden="true">✓</S.Selected>
            </S.Choice>
          ))}
        </S.Choices>
        <S.Heading as="p">{page.followup}</S.Heading>
        <Support lines={page.support} />
      </S.Stack>
    )
  if (page.kind === 'story')
    return (
      <S.Stack>
        <S.Heading as="p">{page.prompt}</S.Heading>
        <S.Steps>
          {page.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </S.Steps>
        <Support lines={page.support} />
        <Support label="Keep talking" lines={page.extension} />
        <S.Invitation>
          <p>{page.ask}</p>
          <Support lines={page.askSupport} />
        </S.Invitation>
      </S.Stack>
    )
  return (
    <S.Stack>
      <S.Summary role="group" aria-label="Useful phrases">
        {page.starters.map((phrase) => (
          <S.Choice
            key={phrase}
            variant="lesson"
            aria-pressed={phrases.includes(phrase)}
            onClick={() =>
              setPhrases((items) =>
                items.includes(phrase)
                  ? items.filter((item) => item !== phrase)
                  : [...items, phrase],
              )
            }
          >
            <span>{phrase}</span>
            <S.Selected aria-hidden="true">✓</S.Selected>
          </S.Choice>
        ))}
      </S.Summary>
      <S.Invitation>
        <p>{page.reflection}</p>
      </S.Invitation>
    </S.Stack>
  )
}
export function TrialB1Lesson({ initialPageId }: TrialB1LessonProps) {
  const [modelActive, setModelActive] = useState(true)
  return (
    <MaterialTheme>
      <LessonShell
        initialPageId={initialPageId}
        materialKey="trial-b1-a-trip-to-remember"
        pageIds={lessonPages.map((page) => page.id)}
        label="B1 Trial · A trip to remember"
        pages={(_, activeId) =>
          lessonPages.map((page) => ({
            id: page.id,
            label: page.title,
            content: (
              <SlidePage
                width="expanded"
                density={page.kind === 'dialogue' ? 'compact' : 'regular'}
                questions={
                  page.kind === 'dialogue' &&
                  modelActive &&
                  comprehensionPage ? (
                    <Activity
                      page={comprehensionPage}
                      active={activeId === page.id}
                    />
                  ) : undefined
                }
                eyebrow={
                  {
                    greeting: 'Warm up',
                    scene: 'Picture talk',
                    dialogue: 'Guided conversation',
                    questions: 'Guided conversation',
                    choice: 'Preferences',
                    story: 'Conversation',
                    review: 'Review',
                  }[page.kind]
                }
                title={
                  page.kind === 'dialogue' ? (
                    <DialogueTitle
                      title={page.title}
                      action={
                        <RecordedDialoguePlayback
                          conversationId="TrialB1:s3"
                          active={activeId === page.id && modelActive}
                        />
                      }
                    />
                  ) : (
                    page.title
                  )
                }
                instruction={
                  page.kind === 'dialogue'
                    ? 'Listen, then read with your teacher.'
                    : page.subtitle
                }
              >
                <Activity
                  page={page}
                  active={activeId === page.id}
                  onModeChange={(mode) => setModelActive(mode === 'model')}
                />
              </SlidePage>
            ),
          }))
        }
      />
    </MaterialTheme>
  )
}
