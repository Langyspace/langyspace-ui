import { useRef, useState } from 'react'
import { MaterialTheme } from '../shared/MaterialTheme'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import content from './TrialB2.content.json'
import image from './assets/ana-working.webp'
import type { TrialB2LessonProps } from './TrialB2.types'
import * as S from './TrialB2.styles'

// Adapted from the actual UX Lab index.html, HS/drawScene/openHs, lines 861–883.
// The image and question change together; support is optional, with no model answer.
function PictureTalk() {
  const [active, setActive] = useState(0)
  const [seen, setSeen] = useState(() => new Set([0]))
  const hotspot = content.p2.hotspots[active]!
  return (
    <S.Columns>
      <S.Stack>
        <S.Scene>
          <img src={image} alt={content.p2.alt} />
          {content.p2.hotspots.map((item, index) => (
            <S.Hotspot
              key={item.id}
              $x={item.x}
              $y={item.y}
              aria-label={`Explore ${item.label.toLowerCase()}`}
              aria-pressed={active === index}
              aria-controls="b2-picture-question"
              onClick={() => {
                setActive(index)
                setSeen((previous) => new Set(previous).add(index))
              }}
            >
              {index + 1}
            </S.Hotspot>
          ))}
        </S.Scene>
        <S.Caption data-explored-count>{seen.size} of 3 explored</S.Caption>
      </S.Stack>
      <S.Panel id="b2-picture-question" aria-live="polite">
        <S.Prompt>{hotspot.q}</S.Prompt>
        <S.Support key={hotspot.id}>
          <summary>Phrase support</summary>
          <p>{hotspot.support}</p>
        </S.Support>
      </S.Panel>
    </S.Columns>
  )
}
function PhraseSupport({ phrases }: { phrases: string[] }) {
  return (
    <S.Support>
      <summary>Phrase support</summary>
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
    <S.Support>
      <summary>Word help</summary>
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
      <S.Support>
        <summary>Keep it going</summary>
        <ul>
          {content.p5.followUps.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </S.Support>
      <S.Support>
        <summary>Go further</summary>
        <S.Prompt>{content.p5.further}</S.Prompt>
      </S.Support>
      <PhraseSupport phrases={content.p5.support} />
      <Glossary entries={content.p5.glossary} />
    </S.Stack>
  )
}
function PageBody({ id }: { id: string }) {
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
  if (id === 's2') return <PictureTalk />
  if (id === 's3')
    return (
      <S.Stack>
        <S.Dialogue>
          {content.p3.lines.map((line, index) => (
            <li key={index}>
              <b>{line.who === 'ana' ? 'Ana' : 'Kim'}</b>
              <p>{line.en}</p>
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
                {page.id === 's1' ? (
                  <S.Hero id={`${page.id}-title`}>
                    Work and <em>life</em>
                  </S.Hero>
                ) : (
                  <S.Title id={`${page.id}-title`}>{page.title}</S.Title>
                )}
                <S.Subtitle>{page.subtitle}</S.Subtitle>
                <PageBody id={page.id} />
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
