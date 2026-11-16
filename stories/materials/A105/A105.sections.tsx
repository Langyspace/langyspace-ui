import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
import { ChoiceExercise, DialogueExercise } from '../shared/LessonExercises'
import {
  GrammarActivity,
  HomeworkActivity,
  ListeningActivity,
  PronunciationActivity,
  ReviewActivity,
} from '../shared/LessonActivities'
import { useMaterialSpeech } from '../shared/useMaterialSpeech'
import kimAvatar from '../A101/assets/bust_kim.webp'
import anaAvatar from '../A101/assets/bust_ana.webp'
import {
  corrections,
  dialogue,
  grammar,
  homework,
  homeworkMessage,
  message,
  produce,
  scene,
} from './A105.data'
import * as Styled from './A105.styles'
import type { PronunciationProps } from './A105.types'

export function OrangeWarmUp() {
  const [open, setOpen] = useState(false)
  return (
    <Common.Stack>
      {!open ? (
        <>
          <Common.Heading>What’s this?</Common.Heading>
          <Styled.Produce>
            <img
              src={scene('orange')}
              alt="Uma laranja cortada com gomos visíveis na feira."
            />
          </Styled.Produce>
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Show options
          </Button>
        </>
      ) : (
        <ChoiceExercise
          question="What’s this?"
          options={['It’s a mango.', 'It’s an orange.', 'It’s an apple.']}
          correctIndex={1}
          image={{
            src: scene('orange'),
            alt: 'Uma laranja cortada com gomos visíveis na feira.',
          }}
          explanation="Orange é laranja. Agora pergunte à professora: What’s this?"
        />
      )}
    </Common.Stack>
  )
}

export function Pronunciation(props: PronunciationProps) {
  return <PronunciationActivity {...props} />
}
export function MarketDialogue() {
  const speech = useMaterialSpeech()
  return (
    <Common.Stack>
      <Button
        variant="secondary"
        onClick={() =>
          speech.speak(dialogue.map((line) => line.text).join(' '))
        }
      >
        Ouvir conversa completa
      </Button>
      <DialogueExercise
        lines={dialogue.map((line) => ({
          ...line,
          avatarUrl: line.speaker === 'Kim' ? kimAvatar : anaAvatar,
        }))}
      />
      {speech.error ? (
        <Common.Hint role="status">{speech.error}</Common.Hint>
      ) : null}
    </Common.Stack>
  )
}

export function LikeGrammar() {
  return (
    <GrammarActivity
      rows={grammar.map((row, index) => ({
        id: String(index),
        label: row.who,
        word: row.word,
        example: row.example,
        translation: row.translation,
      }))}
      explanation={
        <>
          <Common.Heading>Eu ou ela?</Common.Heading>
          <p>
            Com <b>I</b> e <b>you</b>: like. Com <b>he</b>, <b>she</b> ou o nome
            de uma pessoa (Kim, my mother): <b>likes</b>, com s. No negativo: I{' '}
            <b>don’t</b> like · She <b>doesn’t</b> like.
          </p>
        </>
      }
      afterReveal={
        <Common.Stack>
          <Common.Heading>A fruta no plural</Common.Heading>
          <p>
            Para frutas que se contam, o mais comum é o plural: I like apples, I
            love bananas. Em português dizemos “gosto de maçã”, sem plural. Com
            algumas frutas grandes, o singular também se ouve: I love
            watermelon.
          </p>
          <b>Agora você</b>
          <p>
            Diga do que você gosta e do que alguém da sua família, ou um amigo,
            gosta.
          </p>
          <Common.Hint>I like … · My … likes …</Common.Hint>
        </Common.Stack>
      }
    />
  )
}
export function YourVersion() {
  const [swapped, setSwapped] = useState(false)
  const [support, setSupport] = useState(true)
  const normal = [
    { speaker: 'Kim', text: 'Wow! What’s this?' },
    {
      speaker: 'You: Ana',
      text: support
        ? 'It’s a … Do you like …?'
        : 'Diga o que é e pergunte se ela gosta.',
    },
    { speaker: 'Kim', text: 'I don’t know! How much is it?' },
    { speaker: 'You: Ana', text: support ? 'It’s … reais.' : 'Diga um preço.' },
    { speaker: 'Kim', text: 'OK. And do you like …?' },
    {
      speaker: 'You: Ana',
      text: support
        ? 'Yes, I do. I love … · No, I don’t. · A little.'
        : 'Responda a verdade.',
    },
    { speaker: 'Kim', text: 'Me too. But I don’t like …' },
    {
      speaker: 'You: Ana',
      text: support
        ? 'My mother loves … · My brother doesn’t like …'
        : 'Diga de alguém da sua família ou de um amigo.',
    },
  ]
  const alternate = [
    {
      speaker: 'You: Kim',
      text: support
        ? 'What’s this?'
        : 'A professora aponta uma fruta: pergunte o que é.',
    },
    { speaker: 'Ana', text: 'It’s a pineapple. Try it!' },
    {
      speaker: 'You: Kim',
      text: support ? 'How much is it?' : 'Pergunte o preço.',
    },
    { speaker: 'Ana', text: 'It’s four reais.' },
    {
      speaker: 'You: Kim',
      text: support
        ? 'And do you like …? · What kind of fruit do you like?'
        : 'Pergunte se ela gosta de outra coisa.',
    },
    { speaker: 'Ana', text: 'Yes, I do. I love mangoes!' },
    {
      speaker: 'You: Kim',
      text: support
        ? 'Me too. But I don’t like …'
        : 'Diga do que você não gosta.',
    },
  ]
  return (
    <Common.Stack>
      <Common.Row>
        <Common.Chip>
          {swapped ? 'You: Kim · Teacher: Ana' : 'You: Ana · Teacher: Kim'}
        </Common.Chip>
        <Button variant="secondary" onClick={() => setSwapped(!swapped)}>
          {swapped ? 'Swap back' : 'Swap roles'}
        </Button>
        <Button
          variant="secondary"
          aria-pressed={support}
          onClick={() => setSupport(!support)}
        >
          {support ? 'Esconder apoio' : 'Mostrar apoio'}
        </Button>
      </Common.Row>
      <DialogueExercise
        key={`${swapped}-${support}`}
        lines={(swapped ? alternate : normal).map((line, index) => ({
          ...line,
          id: `${swapped}-${index}`,
          avatarUrl: line.speaker.includes('Kim') ? kimAvatar : anaAvatar,
        }))}
      />
      <Styled.ProduceGrid aria-label="As seis frutas, para a professora apontar">
        {produce.slice(0, 6).map((item) => (
          <Styled.Produce key={item.id}>
            <img src={scene(item.id)} alt={item.word} />
          </Styled.Produce>
        ))}
      </Styled.ProduceGrid>
    </Common.Stack>
  )
}

export function Listening() {
  return (
    <ListeningActivity
      contact="Kim"
      avatarUrl={kimAvatar}
      message={message}
      translation="need = preciso · a lot = muito · green = verdes"
      greeting="Hi! 👋"
      timestamp="21:11"
      questions={[
        { id: 'bananas', text: 'Kim likes bananas.', correct: 'Yes' },
        { id: 'oranges', text: 'Kim likes oranges.', correct: 'No' },
        { id: 'jin', text: 'Jin doesn’t like mangoes.', correct: 'No' },
        { id: 'sunday', text: 'The market is on Sunday.', correct: 'No' },
      ]}
      replyPrompt="Responda à Kim: diga do que você gosta."
      support={[
        'I like …',
        'I don’t like …',
        'I like … a little.',
        'See you on Saturday!',
      ]}
    />
  )
}
export function RightOrWrong() {
  return (
    <ReviewActivity
      items={corrections}
      ownPrompt="A professora diz uma frase sua de hoje."
    />
  )
}
export function KimsList() {
  const [fields, setFields] = useState<Record<string, string>>({})
  const [completed, setCompleted] = useState<readonly number[]>([])
  const [support, setSupport] = useState(false)
  const steps = [
    'Pergunte do que a Kim gosta.',
    'Conte à professora do que a Kim gosta e do que ela não gosta.',
    'Acabou uma fruta. Avise a Kim e ofereça outra.',
    'A Kim pergunta o preço. Responda.',
    'Troquem: a professora descobre do que você gosta.',
  ]
  return (
    <Common.Columns>
      <Styled.ProduceGrid aria-label="A banca da feira: seis frutas e seis legumes, cada caixote com o preço">
        {produce.map((item) => (
          <Styled.Produce key={item.id}>
            <img src={scene(item.id)} alt={item.word} />
            <figcaption>R$ {item.price}</figcaption>
          </Styled.Produce>
        ))}
      </Styled.ProduceGrid>
      <Common.Stack>
        <Common.Surface>
          <Common.Row>
            <Common.Heading>Kim’s list</Common.Heading>
            <Button variant="text" onClick={() => setFields({})}>
              Clear
            </Button>
          </Common.Row>
          <Styled.Fields>
            {['Gosta', 'Não gosta'].map((label) => (
              <Common.Stack key={label}>
                <b>{label}</b>
                {[1, 2].map((line) => (
                  <label key={line}>
                    {label}, linha {line}
                    <input
                      value={fields[`${label}-${line}`] ?? ''}
                      onChange={(event) =>
                        setFields((old) => ({
                          ...old,
                          [`${label}-${line}`]: event.target.value,
                        }))
                      }
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </label>
                ))}
              </Common.Stack>
            ))}
          </Styled.Fields>
        </Common.Surface>
        <p>Você está na feira com a Kim. Ela não fala português.</p>
        <Button
          variant="secondary"
          aria-expanded={support}
          onClick={() => setSupport(!support)}
        >
          {support ? 'Esconder apoio' : 'Mostrar apoio'}
        </Button>
        {support ? (
          <Common.Hint>
            Do you like …? · What kind of fruit do you like? · Kim likes … · She
            doesn’t like … · Sorry, no … today. Try the …! · It’s … reais.
          </Common.Hint>
        ) : null}
        <Common.Hint>
          {completed.length} de {steps.length} · Passo a passo: a professora
          marca
        </Common.Hint>
        <Styled.Checklist>
          {steps.map((step, index) => (
            <label key={step}>
              <input
                type="checkbox"
                checked={completed.includes(index)}
                onChange={() =>
                  setCompleted((old) =>
                    old.includes(index)
                      ? old.filter((item) => item !== index)
                      : [...old, index],
                  )
                }
              />
              {step}
            </label>
          ))}
        </Styled.Checklist>
      </Common.Stack>
    </Common.Columns>
  )
}

export function Homework() {
  return <HomeworkActivity items={homework} message={homeworkMessage} />
}
