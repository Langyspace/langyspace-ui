import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { MaterialTheme } from '../shared/MaterialTheme'
import { LessonShell } from '../shared/LessonShell'
import source from './TrialB1.content.json'
import sceneUrl from './assets/roadside-stop.png'
import anaUrl from './assets/ana-working.webp'
import kimUrl from './assets/kim-profile.webp'
import type {
  TrialB1Content,
  TrialB1LessonProps,
  TrialB1Page,
} from './TrialB1.types'
import * as S from './TrialB1.styles'

const content = source as TrialB1Content
function Support({
  lines,
  label = 'Show support',
}: {
  lines: string | string[]
  label?: string
}) {
  return (
    <S.Support>
      <summary>{label}</summary>
      <div>
        {(typeof lines === 'string' ? [lines] : lines).map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </S.Support>
  )
}
function Activity({ page }: { page: TrialB1Page }) {
  const [selected, setSelected] = useState<string>()
  const [visited, setVisited] = useState<string[]>([])
  const [support, setSupport] = useState(false)
  const [translated, setTranslated] = useState(false)
  const [learner, setLearner] = useState('ana')
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
      <S.Scene
        imageUrl={sceneUrl}
        imageAlt={page.imageAlt}
        hotspots={page.hotspots.map((h) => ({
          ...h,
          prompt: <p>{h.prompt}</p>,
          answer: <p>{h.support}</p>,
        }))}
        selectedId={selected}
        visitedIds={visited}
        onSelect={(id) => {
          setSelected(id)
          setSupport(false)
          setVisited((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }}
        answerVisible={support}
        onAnswerToggle={() => setSupport((open) => !open)}
        labels={{
          initial: 'Choose a detail',
          show: 'Show support',
          hide: 'Hide support',
          progress: 'explored',
        }}
      />
    )
  if (page.kind === 'dialogue')
    return (
      <S.Stack>
        <S.Tools>
          <Button
            variant="secondary"
            aria-pressed={learner === 'kim'}
            onClick={() => setLearner((who) => (who === 'ana' ? 'kim' : 'ana'))}
          >
            You: {learner === 'ana' ? 'Ana' : 'Kim'} · Swap roles
          </Button>
          <Button
            variant="secondary"
            aria-expanded={translated}
            onClick={() => setTranslated((open) => !open)}
          >
            {translated ? 'Hide translation' : 'Show translation'}
          </Button>
        </S.Tools>
        <S.Dialogue
          lines={page.lines.map((line, i) => ({
            id: String(i),
            speaker: line.who === 'ana' ? 'Ana' : 'Kim',
            avatarUrl: line.who === 'ana' ? anaUrl + '#ana' : kimUrl,
            side: line.who === learner ? ('end' as const) : ('start' as const),
            content: line.en,
            translation: line.pt,
          }))}
          translatedIds={translated ? page.lines.map((_, i) => String(i)) : []}
        />
        <S.Stack>
          <S.Heading>{page.followup}</S.Heading>
          <Support lines={page.support} />
        </S.Stack>
      </S.Stack>
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
  return (
    <MaterialTheme>
      <LessonShell
        initialPageId={initialPageId}
        materialKey="trial-b1-a-trip-to-remember"
        pageIds={content.pages.map((page) => page.id)}
        label="B1 Trial · A trip to remember"
        pages={() =>
          content.pages.map((page) => ({
            id: page.id,
            label: page.title,
            content: (
              <SlidePage
                width="expanded"
                title={page.title}
                instruction={page.subtitle}
              >
                <Activity page={page} />
              </SlidePage>
            ),
          }))
        }
      />
    </MaterialTheme>
  )
}
