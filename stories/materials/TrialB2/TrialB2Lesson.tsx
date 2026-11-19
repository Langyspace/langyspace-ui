import { RecordedDialoguePlayback } from '../shared/RecordedDialoguePlayback'
import { useRef, useState } from 'react'
import { MaterialTheme } from '../shared/MaterialTheme'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { useSceneAudio } from '../shared/useSceneAudio'
import laptopLabel from './assets/laptop-label.mp3'
import anaAtWorkLabel from './assets/ana-at-work-label.mp3'
import deskLabel from './assets/desk-label.mp3'
import { CharacterAvatar } from '../shared/CharacterPortraits.styles'
import { ana, kim } from '../shared/characterPortraits'
import content from './TrialB2.content.json'
import image from './assets/ana-working.webp'
import type { TrialB2LessonProps } from './TrialB2.types'
import * as S from './TrialB2.styles'

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
  const [support, setSupport] = useState(false)
  return (
    <S.Scene
      imageUrl={image}
      imageAlt={content.p2.alt}
      hotspots={content.p2.hotspots.map((item) => ({
        id: item.id,
        label: item.label,
        xPercent: item.x,
        yPercent: item.y,
        targetBounds: item.targetBounds,
        prompt: (
          <>
            <p>{item.q}</p>
            {selected === item.id && audio.error ? (
              <p role="status">{audio.error}</p>
            ) : null}
          </>
        ),
        answer: <p>{item.support}</p>,
      }))}
      selectedId={selected}
      visitedIds={visited}
      onPlayHotspot={audio.play}
      playingId={audio.playingId}
      onSelect={(id) => {
        audio.stop()
        setSelected(id)
        setSupport(false)
        setVisited((old) => (old.includes(id) ? old : [...old, id]))
      }}
      answerVisible={support}
      onAnswerToggle={() => setSupport((open) => !open)}
      labels={{
        initial: '',
        show: 'Phrase support',
        hide: 'Hide support',
      }}
    />
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
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <S.Stack>
      {content.p5.questions.map((question, index) => (
        <S.ConversationButton
          key={question}
          aria-pressed={selected === index}
          onClick={() => setSelected(selected === index ? null : index)}
        >
          {question}
          <span aria-hidden="true">{selected === index ? '✓' : ''}</span>
        </S.ConversationButton>
      ))}
      <S.Support label="Hint: Keep it going" context="Keep it going">
        <ul>
          {content.p5.followUps.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </S.Support>
      <S.Support label="Hint: Go further" context="Go further">
        <S.Prompt>{content.p5.further}</S.Prompt>
      </S.Support>
      <PhraseSupport phrases={content.p5.support} />
      <Glossary entries={content.p5.glossary} />
    </S.Stack>
  )
}
function PageBody({ id, active }: { id: string; active: boolean }) {
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
      <S.Stack>
        <RecordedDialoguePlayback conversationId="TrialB2:s3" active={active} />
        <S.Dialogue>
          {content.p3.lines.map((line, index) => (
            <li key={index}>
              <CharacterAvatar
                size="md"
                imageUrl={line.who === 'ana' ? ana : kim}
                initials={line.who === 'ana' ? 'An' : 'Ki'}
                aria-hidden="true"
              />
              <div>
                <b>{line.who === 'ana' ? 'Ana' : 'Kim'}</b>
                <p>{line.en}</p>
              </div>
            </li>
          ))}
        </S.Dialogue>
        <Glossary entries={content.p3.glossary} />
        <S.Panel>
          <S.Prompt>{content.p3.question}</S.Prompt>
          <PhraseSupport phrases={content.p3.support} />
        </S.Panel>
      </S.Stack>
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
  const [activeId, setActiveId] = useState(initialPageId ?? 's1')
  const trigger = useRef<HTMLButtonElement>(null)
  const [notes, setNotes] = useState(false)
  const close = () => {
    setNotes(false)
    trigger.current?.focus({ preventScroll: true })
  }
  return (
    <S.Root data-material-revision={content.revision}>
      <MaterialSlideDeck
        label="B2 Trial · Work and life"
        previousPageLabel="Back"
        pageId={initialPageId}
        onPageChange={setActiveId}
        actions={
          <LessonNotesTrigger
            ref={trigger}
            open={notes}
            onClick={() => (notes ? close() : setNotes(true))}
          />
        }
        pages={content.pages.map((page) => ({
          id: page.id,
          label: page.title,
          content: (
            <S.Page id={page.id}>
              <S.Content>
                <S.Activity>
                  {
                    (
                      {
                        s1: 'Warm up',
                        s2: 'Picture talk',
                        s3: 'Dialogue',
                        s41: 'Preferences',
                        s42: 'Preferences',
                        s43: 'Preferences',
                        s5: 'Conversation',
                        s6: 'Review',
                      } as Record<string, string>
                    )[page.id]
                  }
                </S.Activity>
                {page.id === 's1' ? (
                  <S.Hero id={`${page.id}-title`}>
                    Work and <em>life</em>
                  </S.Hero>
                ) : (
                  <S.Title id={`${page.id}-title`}>{page.title}</S.Title>
                )}
                <S.Subtitle>{page.subtitle}</S.Subtitle>
                <PageBody id={page.id} active={activeId === page.id} />
              </S.Content>
            </S.Page>
          ),
        }))}
        overlay={
          <LessonNotes
            storageKey="langy-notes:Langy Trial B2 Work and life"
            open={notes}
            onClose={close}
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
