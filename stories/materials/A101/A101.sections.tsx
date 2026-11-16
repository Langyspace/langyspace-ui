import { useState } from 'react'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import { MatchPairs } from '../../../src/components/Exercise/MatchPairs'
import {
  lesson,
  itemAt,
  image,
  warmUpImage,
  warmUpImageAlt,
  warmUpFlag,
  countryFlag,
  gapTexts,
  gapAnswers,
  questions,
  trueForYou,
  guestImage,
  guestImageAlt,
  homeworkMessage,
} from './A101.data'
import * as Styled from './A101.styles'
import type {
  VocabularySectionProps,
  WarmUpSectionProps,
  DialogueSectionProps,
  TranslatedTextProps,
  VerbPhraseProps,
} from './A101.sections.types'
export function VocabularySection({
  items,
  speak,
  imageVariant = 'isolated',
}: VocabularySectionProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [all, setAll] = useState(false)
  const [hint, setHint] = useState(false)
  return (
    <Styled.Stack>
      <Styled.LessonVocabulary
        $regular={imageVariant !== 'scene'}
        items={items}
        imageVariant={imageVariant}
        columns={3}
        revealVariant="tooltip"
        density={imageVariant === 'scene' ? 'compact' : 'regular'}
        revealedIds={revealed}
        showAll={all}
        showInitial={hint}
        onReveal={(id) =>
          setRevealed((old) =>
            old.includes(id)
              ? old.filter((value) => value !== id)
              : [...old, id],
          )
        }
        onPlay={(id) =>
          speak([{ id, text: items.find((item) => item.id === id)!.word }])
        }
      />
      <Styled.Tools>
        <IconButton
          size="md"
          variant="neutral"
          aria-label="Dica: primeira letra"
          aria-pressed={hint}
          onClick={() => setHint(!hint)}
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z" />
          </svg>
        </IconButton>
        <IconButton
          size="md"
          variant="neutral"
          aria-label={
            all ? 'Esconder todas as palavras' : 'Mostrar todas as palavras'
          }
          aria-pressed={all}
          onClick={() => setAll(!all)}
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </IconButton>
      </Styled.Tools>
    </Styled.Stack>
  )
}
export function WarmUpSection({ item, index, speak }: WarmUpSectionProps) {
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(item.a)
  const last = attempts.at(-1)
  return (
    <ExercisePanel
      title={item.t}
      counter={`${index + 1} / 6`}
      media={
        <Styled.WarmScene>
          <Styled.WarmImage
            src={warmUpImage(item)}
            alt={warmUpImageAlt(item)}
          />
          {warmUpFlag(item) ? (
            <Styled.CountryFlag src={warmUpFlag(item)} alt="" />
          ) : null}
        </Styled.WarmScene>
      }
    >
      {item.o.map((option, i) => (
        <QuizOption
          key={option}
          density="compact"
          letter={String.fromCharCode(65 + i)}
          state={
            attempts.includes(i)
              ? i === item.a
                ? 'correct'
                : 'wrong'
              : 'default'
          }
          disabled={done}
          aria-pressed={attempts.includes(i)}
          onClick={() => {
            setAttempts((old) => [...old, i])
            if (i === item.a) speak([{ id: item.id, text: option }])
          }}
        >
          {option}
        </QuizOption>
      ))}
      <Styled.Feedback role="status">
        {last === undefined ? '' : done ? 'Correto!' : item.why[String(last)]}
      </Styled.Feedback>
    </ExercisePanel>
  )
}
export function DialogueSection({
  gaps = false,
  playingId,
  speak,
}: DialogueSectionProps) {
  const [translated, setTranslated] = useState<string[]>([])
  const [revealed, setRevealed] = useState<number[]>([])
  return (
    <LearningDialogue
      playingId={playingId}
      translatedIds={translated}
      onTranslate={
        gaps
          ? undefined
          : (id) =>
              setTranslated((old) =>
                old.includes(id)
                  ? old.filter((value) => value !== id)
                  : [...old, id],
              )
      }
      onPlay={
        gaps
          ? undefined
          : (id) => {
              const line = lesson.RT.find((line) => line.id === id)!
              speak([{ id, text: line.en, speaker: line.who }])
            }
      }
      lines={lesson.RT.map((line, index) => ({
        id: line.id,
        speaker: line.who === 'kim' ? 'Kim' : 'Ana',
        side: line.who === 'kim' ? 'start' : 'end',
        avatarUrl: image(`bust_${line.who}`),
        translation: line.g,
        audioLabel: `Ouvir: ${line.en}`,
        content: gaps ? (
          <span>
            {itemAt(gapTexts, index)
              .split(/(\{\d\})/)
              .map((part) =>
                part.startsWith('{') ? (
                  <Styled.Gap
                    key={part}
                    size="sm"
                    variant={revealed.includes(index) ? 'success' : 'tertiary'}
                    aria-label={`Lacuna ${index + 1}: ${revealed.includes(index) ? 'esconder' : 'mostrar'} a resposta`}
                    aria-expanded={revealed.includes(index)}
                    onClick={() =>
                      setRevealed((old) =>
                        old.includes(index)
                          ? old.filter((n) => n !== index)
                          : [...old, index],
                      )
                    }
                  >
                    {revealed.includes(index) ? (
                      gapAnswers[index]
                    ) : (
                      <span aria-hidden="true">____</span>
                    )}
                  </Styled.Gap>
                ) : (
                  part
                ),
              )}
          </span>
        ) : (
          line.en
        ),
      }))}
    />
  )
}
export function DialogueQuestions() {
  return (
    <Styled.Stack>
      {questions.map((question, index) => (
        <Styled.DialogueQuestion key={question}>
          <Styled.Number>{index + 1}</Styled.Number>
          <strong>{question}</strong>
        </Styled.DialogueQuestion>
      ))}
    </Styled.Stack>
  )
}
export function TranslatedText({ text, translation }: TranslatedTextProps) {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Styled.TranslationButton
        variant="text"
        aria-expanded={visible}
        onClick={() => setVisible(!visible)}
      >
        {text}
      </Styled.TranslationButton>
      {visible ? <Styled.Muted>{translation}</Styled.Muted> : null}
    </div>
  )
}
export function GrammarTable() {
  return (
    <Styled.Grammar>
      <Styled.TableScroll>
        <Styled.Table aria-label="Verb to be">
          <thead>
            <tr>
              {['Pronoun', 'Verb', 'Short', 'Example'].map((label) => (
                <th key={label} scope="col">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lesson.G_TAB.map(([pronoun, verb, short, text, translation]) => (
              <tr key={pronoun}>
                <th scope="row">{pronoun}</th>
                <td>{verb}</td>
                <td>
                  <b>{short}</b>
                </td>
                <td>
                  <TranslatedText text={text} translation={translation} />
                </td>
              </tr>
            ))}
          </tbody>
        </Styled.Table>
      </Styled.TableScroll>
      <Styled.Use>
        <small>We use it for</small>
        <p>
          Name <b>I’m Ana.</b>
        </p>
        <p>
          Origin <b>I’m from Brazil.</b>
        </p>
        <p>
          Feelings <b>I’m happy!</b>
        </p>
      </Styled.Use>
    </Styled.Grammar>
  )
}
export function GrammarNegative() {
  return (
    <Styled.TwoColumns>
      <Styled.GrammarCard $kind="negative">
        <h3>
          <span aria-hidden="true">−</span>Negative
        </h3>
        <Styled.Stack>
          {lesson.G_NEG.map(([text, translation]) => (
            <TranslatedText key={text} text={text} translation={translation} />
          ))}
        </Styled.Stack>
        <p>is not = isn’t · are not = aren’t</p>
      </Styled.GrammarCard>
      <Styled.GrammarCard $kind="question">
        <h3>
          <span aria-hidden="true">?</span>Questions
        </h3>
        <Styled.Stack>
          {lesson.G_Q.map(([text, translation, answer]) => (
            <div key={text}>
              <TranslatedText text={text} translation={translation} />
              <Styled.Muted>{answer}</Styled.Muted>
            </div>
          ))}
        </Styled.Stack>
      </Styled.GrammarCard>
    </Styled.TwoColumns>
  )
}
export function TrueForYou() {
  return (
    <Styled.TrueGrid>
      {trueForYou.map((text, index) => (
        <Styled.TrueCard key={text} $index={index}>
          <Styled.Number>{index + 1}</Styled.Number>
          <strong>{text}</strong>
          <small>
            {index
              ? 'True ✓ or not true ✗?'
              : 'e.g. I’m not American. I’m Brazilian.'}
          </small>
        </Styled.TrueCard>
      ))}
    </Styled.TrueGrid>
  )
}
export function MatchingSection() {
  const [selected, setSelected] = useState<string>()
  const [incorrect, setIncorrect] = useState<string>()
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')
  return (
    <MatchPairs
      questionLabel="Perguntas"
      answerLabel="Respostas"
      questions={lesson.MQ.map(([label], i) => ({
        id: String(i),
        label: String(label),
        marker: i + 1,
      }))}
      answers={lesson.MA.map((label, i) => ({
        id: String(i),
        label,
        marker: String.fromCharCode(65 + i),
      }))}
      matches={matches}
      selectedQuestionId={selected}
      incorrectAnswerId={incorrect}
      status={status}
      onQuestionSelect={(id) => {
        setSelected(id)
        setIncorrect(undefined)
        setStatus(`Pergunta ${Number(id) + 1} selecionada. Escolha a resposta.`)
      }}
      onAnswerSelect={(id) => {
        if (selected === undefined) {
          setStatus('Escolha uma pergunta primeiro.')
          return
        }
        if (Number(itemAt(lesson.MQ, Number(selected))[1]) === Number(id)) {
          setMatches((old) => ({ ...old, [selected]: id }))
          setSelected(undefined)
          setIncorrect(undefined)
          setStatus(
            Object.keys(matches).length === 7
              ? 'Todas as associações estão corretas!'
              : 'Correto! Escolha a próxima pergunta.',
          )
        } else {
          setIncorrect(id)
          setStatus('Essa resposta não corresponde. Tente outra.')
        }
      }}
    />
  )
}
export function GuessWho() {
  const [found, setFound] = useState<string[]>([])
  return (
    <Styled.Stack>
      <Styled.Prompts>
        <b>How are you?</b>
        <b>Where are you from?</b>
        <b>Are you …?</b>
      </Styled.Prompts>
      <Styled.ThreeColumns>
        {lesson.GUESTS.map(([name, country, feeling]) => (
          <Styled.Guest
            key={name}
            aria-label={`${name}${found.includes(name) ? ': já descoberta' : ''}`}
            aria-pressed={found.includes(name)}
            onClick={() =>
              setFound((old) =>
                old.includes(name)
                  ? old.filter((value) => value !== name)
                  : [...old, name],
              )
            }
          >
            <b>
              {name}
              {found.includes(name) ? ' ✓' : ''}
            </b>
            <Styled.GuestImages>
              <Styled.GuestScene
                src={guestImage(name)}
                alt={guestImageAlt(name, country, feeling)}
              />
              <Styled.CountryFlag src={countryFlag(country)} alt="" />
            </Styled.GuestImages>
          </Styled.Guest>
        ))}
      </Styled.ThreeColumns>
    </Styled.Stack>
  )
}
export function MakeQuestions() {
  const [revealed, setRevealed] = useState<number[]>([])
  return (
    <Styled.Stack>
      {lesson.INV.map(([text, answer], index) => (
        <RevealCard
          key={text}
          marker={index + 1}
          answer={<VerbPhrase text={answer} />}
          revealed={revealed.includes(index)}
          onClick={() =>
            setRevealed((old) =>
              old.includes(index)
                ? old.filter((n) => n !== index)
                : [...old, index],
            )
          }
        >
          <VerbPhrase text={text} />
        </RevealCard>
      ))}
    </Styled.Stack>
  )
}
export function ConversationSection() {
  const [marked, setMarked] = useState<string[]>([])
  return (
    <Styled.TalkGrid>
      {lesson.TALK.map((text, index) => (
        <Styled.TalkQuestion
          key={text}
          aria-pressed={marked.includes(text)}
          onClick={() =>
            setMarked((old) =>
              old.includes(text)
                ? old.filter((value) => value !== text)
                : [...old, text],
            )
          }
        >
          <Styled.Number>{index + 1}</Styled.Number>
          <b>{text}</b>
          {marked.includes(text) ? <span aria-hidden="true">✓</span> : null}
        </Styled.TalkQuestion>
      ))}
    </Styled.TalkGrid>
  )
}
export function HomeworkSection() {
  const [copied, setCopied] = useState(false)
  const [fallback, setFallback] = useState(false)
  return (
    <Styled.HomeworkStack>
      {lesson.HW13.map((item, index) => (
        <Styled.Homework key={item.t}>
          <img
            src={image(itemAt(['e_cards', 'e_mic', 'e_brain'], index))}
            alt=""
          />
          <div>
            <b>{item.t}</b>
            <span>{item.d}</span>
          </div>
        </Styled.Homework>
      ))}
      <Styled.Tools>
        <Styled.HomeworkCopy
          variant="brand"
          onClick={() => {
            void (async () => {
              try {
                await navigator.clipboard.writeText(homeworkMessage)
                setCopied(true)
                setFallback(false)
              } catch {
                setFallback(true)
              }
            })()
          }}
        >
          {copied ? 'Copied ✓' : 'Copy links'}
        </Styled.HomeworkCopy>
      </Styled.Tools>
      {fallback ? (
        <label>
          Copie os links abaixo.
          <Styled.CopyFallback
            readOnly
            value={homeworkMessage}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      ) : null}
    </Styled.HomeworkStack>
  )
}

export function VerbPhrase({ text }: VerbPhraseProps) {
  return (
    <span>
      {text
        .split(/(\b(?:Am|Is|Are|am|is|are)\b)/)
        .map((part) =>
          /^(Am|Is|Are)$/.test(part) ? (
            <Styled.QuestionVerb key={part}>{part}</Styled.QuestionVerb>
          ) : /^(am|is|are)$/.test(part) ? (
            <Styled.StatementVerb key={part}>{part}</Styled.StatementVerb>
          ) : (
            part
          ),
        )}
    </span>
  )
}
