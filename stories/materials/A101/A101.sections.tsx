import { VocabularyControls } from '../shared/VocabularyControls'
import { PromptExercise } from '../shared/LessonExercises'
import { useEffect, useRef, useState } from 'react'
import { FluencyTimer } from '../../../src/components/InteractiveMaterial/FluencyTimer'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import { MatchPairs } from '../../../src/components/Exercise/MatchPairs'
import {
  lesson,
  conversationAnswers,
  ana,
  kim,
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
} from './A101.data'
import * as Styled from './A101.styles'
import type {
  VocabularySectionProps,
  WarmUpSectionProps,
  DialogueSectionProps,
  TranslatedTextProps,
  VerbPhraseProps,
  ConversationSectionProps,
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
        revealVariant="tooltip"
        density="regular"
        imageFit="contain"
        revealOnHover={false}
        revealedIds={revealed}
        showAll={all}
        showInitial={hint}
        onReveal={(id) =>
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }
        onPlay={(id) =>
          speak([{ id, text: items.find((item) => item.id === id)!.word }])
        }
      />
      <VocabularyControls
        showInitial={hint}
        showAll={all}
        onToggleInitial={() => setHint(!hint)}
        onToggleAll={() => setAll(!all)}
      />
    </Styled.Stack>
  )
}
export function WarmUpSection({ item }: WarmUpSectionProps) {
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(item.a)
  return (
    <ExercisePanel
      variant="warmup"
      counter={`${item.id.split('.')[1]}/12`}
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
          }}
        >
          {option}
        </QuizOption>
      ))}
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
    <Styled.Stack>
      <LearningDialogue
        density="compact"
        playingId={playingId}
        translatedIds={translated}
        onTranslate={(id) =>
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
          avatarUrl: line.who === 'kim' ? kim : ana,
          translation: line.g,
          audioLabel: `Play: ${line.en}`,
          content: gaps ? (
            <span>
              {itemAt(gapTexts, index)
                .split(/(\{\d\})/)
                .map((part) =>
                  part.startsWith('{') ? (
                    <Styled.Gap
                      key={part}
                      size="sm"
                      variant="text"
                      $revealed={revealed.includes(index)}
                      aria-label={`Gap ${index + 1}: ${revealed.includes(index) ? 'hide' : 'show'} answer`}
                      aria-expanded={revealed.includes(index)}
                      onClick={(event) => {
                        event.stopPropagation()
                        setRevealed((old) =>
                          old.includes(index)
                            ? old.filter((n) => n !== index)
                            : [...old, index],
                        )
                      }}
                    >
                      <Styled.GapAnswer $revealed={revealed.includes(index)}>
                        {gapAnswers[index]}
                      </Styled.GapAnswer>
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
    </Styled.Stack>
  )
}
export function DialogueQuestions() {
  return <PromptExercise items={questions} />
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
        <h3>Negatives</h3>
        <p>
          Add <b>not</b> after the verb.
        </p>
        <Styled.Stack>
          <TranslatedText
            text="I am not tired. → I’m not tired."
            translation="Eu não estou cansada."
          />
          <TranslatedText
            text="She is not hungry. → She isn’t hungry."
            translation="Ela não está com fome."
          />
          <TranslatedText
            text="They are not from Japan. → They aren’t from Japan."
            translation="Eles não são do Japão."
          />
        </Styled.Stack>
        <p>is not → isn’t · are not → aren’t</p>
        <Styled.Muted>
          Informal speech: “I ain’t tired.” In class, use “I’m not tired.”
        </Styled.Muted>
      </Styled.GrammarCard>
      <Styled.GrammarCard $kind="question">
        <h3>Questions</h3>
        <p>
          Start with the verb: <b>am, is, are</b>.
        </p>
        <Styled.Stack>
          <TranslatedText
            text="You are tired. → Are you tired?"
            translation="Você está cansada?"
          />
          <TranslatedText
            text="She is from Japan. → Is she from Japan?"
            translation="Ela é do Japão?"
          />
          <TranslatedText
            text="They are happy. → Are they happy?"
            translation="Eles estão felizes?"
          />
        </Styled.Stack>
        <p>Yes, I am. · No, I’m not.</p>
      </Styled.GrammarCard>
    </Styled.TwoColumns>
  )
}
export function AgeSection() {
  return (
    <Styled.AgePanel
      layout="split"
      media={
        <Styled.AgeImage
          src={image('scene-birthday-adult')}
          alt="An adult celebrating a birthday with a cake and balloons."
        />
      }
    >
      <Styled.AgePractice>
        <Styled.AgeExamples>
          <Styled.AgeExample $correct>
            <span aria-label="Correct">✓</span>
            <strong>I’m 32 years old.</strong>
          </Styled.AgeExample>
          <Styled.AgeExample $correct>
            <span aria-label="Correct">✓</span>
            <strong>I’m 32.</strong>
          </Styled.AgeExample>
          <Styled.AgeExample $correct={false}>
            <span aria-label="Incorrect">✕</span>
            <strong>I have 32.</strong>
          </Styled.AgeExample>
        </Styled.AgeExamples>
        <Styled.Stack>
          <h3>Now you:</h3>
          <PromptExercise
            items={[
              { id: 'age-you', prompt: 'How old are you?' },
              { id: 'age-teacher', prompt: 'How old is your teacher?' },
              { id: 'age-parents', prompt: 'How old are your parents?' },
            ]}
          />
        </Styled.Stack>
      </Styled.AgePractice>
    </Styled.AgePanel>
  )
}
export function TwoTruthsAndALie() {
  return (
    <Styled.TwoColumns>
      {['You', 'Your teacher'].map((person) => (
        <Styled.TruthsPanel key={person}>
          <h3>{person}</h3>
          <PromptExercise
            items={[
              { id: `${person}-one`, prompt: 'I’m …' },
              { id: `${person}-two`, prompt: 'I’m from …' },
              { id: `${person}-three`, prompt: 'My … is …' },
            ]}
          />
          <p>Which fact is the lie?</p>
        </Styled.TruthsPanel>
      ))}
    </Styled.TwoColumns>
  )
}
export function SpeakingTimer({ active }: { active: boolean }) {
  const [remaining, setRemaining] = useState(30)
  const [running, setRunning] = useState(false)
  const deadline = useRef(0)
  useEffect(() => {
    if (!active || !running) return
    const interval = window.setInterval(() => {
      const left = Math.max(
        0,
        Math.ceil((deadline.current - Date.now()) / 1000),
      )
      setRemaining(left)
      if (left === 0) setRunning(false)
    }, 200)
    return () => window.clearInterval(interval)
  }, [active, running])
  const reset = () => {
    setRunning(false)
    setRemaining(30)
    deadline.current = 0
  }
  return (
    <Styled.Stack>
      <FluencyTimer
        title="Ready?"
        rounds={[{ id: 'introduction', seconds: 30 }]}
        roundIndex={remaining === 0 ? 1 : 0}
        remainingSeconds={remaining}
        running={running}
        support={['My name is …', 'I’m from …', 'I’m …']}
        onToggle={() => {
          if (running) {
            setRunning(false)
            return
          }
          deadline.current = Date.now() + remaining * 1000
          setRunning(true)
        }}
        onReset={reset}
        labels={{
          start: 'Start',
          pause: 'Pause',
          restart: 'Try again',
          round: 'Round',
          finished: 'Time’s up!',
          empty: '',
        }}
      />
      <Styled.TranslationButton variant="text" onClick={reset}>
        Reset timer
      </Styled.TranslationButton>
    </Styled.Stack>
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
            {index === 0 ? 'I’m not American. I’m Brazilian.' : null}
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
      questionLabel="Questions"
      answerLabel="Answers"
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
        setStatus(`Question ${Number(id) + 1}. Choose an answer.`)
      }}
      onAnswerSelect={(id) => {
        if (selected === undefined) {
          setStatus('Choose a question first.')
          return
        }
        if (Number(itemAt(lesson.MQ, Number(selected))[1]) === Number(id)) {
          setMatches((old) => ({ ...old, [selected]: id }))
          setSelected(undefined)
          setIncorrect(undefined)
          setStatus(
            Object.keys(matches).length === 7
              ? 'All matched.'
              : 'Choose the next question.',
          )
        } else {
          setIncorrect(id)
          setStatus('Try another answer.')
        }
      }}
    />
  )
}
export function GuessWho() {
  return (
    <Styled.Stack>
      <Styled.Prompts>
        <b>Are you …?</b>
        <b>Are you from …?</b>
        <b>Are you tired?</b>
      </Styled.Prompts>
      <Styled.ThreeColumns>
        {lesson.GUESTS.map(([name, country, feeling]) => (
          <Styled.Guest key={name}>
            <Styled.GuestImages>
              <Styled.GuestScene
                src={guestImage(name)}
                alt={guestImageAlt(name, country, feeling)}
              />
              <Styled.CountryFlag src={countryFlag(country)} alt="" />
              <Styled.GuestName>{name}</Styled.GuestName>
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
export function ConversationSection({
  part = 0,
}: ConversationSectionProps = {}) {
  return (
    <PromptExercise
      items={lesson.TALK.slice(part * 5, part * 5 + 5).map((prompt, index) => ({
        id: prompt,
        prompt,
        answer: conversationAnswers[part * 5 + index] ?? 'Use your own ideas.',
      }))}
    />
  )
}
export function HomeworkSection() {
  return (
    <Styled.HomeworkStack>
      {lesson.HW13.map((item) => (
        <Styled.Homework key={item.t}>
          <img src={image(item.img)} alt="" />
          <div>
            <b>{item.t}</b>
            <span>{item.d}</span>
          </div>
        </Styled.Homework>
      ))}
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
