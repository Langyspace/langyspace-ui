import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
import { ChoiceExercise, DialogueExercise } from '../shared/LessonExercises'
import { useMaterialSpeech } from '../shared/useMaterialSpeech'
import anaAvatar from '../A101/assets/bust_ana.webp'
import kimAvatar from '../A101/assets/bust_kim.webp'
import { dialogue, homeQuestions, pets, scene } from './A106.data'
import * as Styled from './A106.styles'
import type { PetConversationProps } from './A106.types'

export function FishWarmUp() {
  const [open, setOpen] = useState(false)
  return (
    <Common.Stack>
      {open ? (
        <ChoiceExercise
          question="Is it a turtle?"
          options={[
            'No, it isn’t. It’s a fish.',
            'Yes, it is.',
            'No, it isn’t. It’s a rabbit.',
          ]}
          correctIndex={0}
          image={{
            src: scene('fish'),
            alt: 'Um peixe dentro de um aquário redondo.',
          }}
          explanation="Turtle é tartaruga. Agora você pensa num bicho. A professora adivinha."
        />
      ) : (
        <>
          <Common.Heading>Is it a turtle?</Common.Heading>
          <Styled.Scene
            src={scene('fish')}
            alt="Um peixe dentro de um aquário redondo."
          />
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Show options
          </Button>
        </>
      )}
    </Common.Stack>
  )
}

export function ExploreHome() {
  const [current, setCurrent] = useState<number>()
  const [shown, setShown] = useState<readonly number[]>([])
  const [correct, setCorrect] = useState<readonly number[]>([])
  const speech = useMaterialSpeech()
  const item = current === undefined ? undefined : homeQuestions[current]
  return (
    <Common.Columns>
      <Styled.Room>
        <img
          src={scene('home')}
          alt="A sala da Ana: cama à esquerda, sofá com Thor, mesa com aquário e caixa ao lado da cama."
        />
        {homeQuestions.map((point, index) => (
          <button
            key={point.id}
            type="button"
            data-location={index}
            aria-label={`Ponto ${index + 1}`}
            aria-pressed={current === index}
            onClick={() => setCurrent(index)}
          >
            {correct.includes(index) ? '✓' : index + 1}
          </button>
        ))}
      </Styled.Room>
      <Common.Stack>
        <Common.Hint>
          {correct.length} of {homeQuestions.length}
        </Common.Hint>
        <Common.Surface>
          <Common.Heading>{item?.question ?? 'Where’s …?'}</Common.Heading>
          {item && current !== undefined ? (
            <>
              <Common.Row>
                <Button
                  variant="brand"
                  aria-label="Certo"
                  onClick={() => {
                    setCorrect((old) =>
                      old.includes(current) ? old : [...old, current],
                    )
                    setShown((old) =>
                      old.includes(current) ? old : [...old, current],
                    )
                    speech.speak(item.answer)
                  }}
                >
                  Certo
                </Button>
                <Button
                  variant="secondary"
                  aria-expanded={shown.includes(current)}
                  onClick={() =>
                    setShown((old) =>
                      old.includes(current)
                        ? old.filter((value) => value !== current)
                        : [...old, current],
                    )
                  }
                >
                  {shown.includes(current) ? 'Hide answer' : 'Answer'}
                </Button>
              </Common.Row>
              {shown.includes(current) ? (
                <Button
                  variant="text"
                  onClick={() => speech.speak(item.answer)}
                >
                  {item.answer}
                </Button>
              ) : null}
            </>
          ) : (
            <p>Click a pink dot.</p>
          )}
        </Common.Surface>
        <Styled.Explanation>
          <Common.Heading>Onde está?</Common.Heading>
          <p>
            Where’s …? = Cadê …?
            <br />
            He’s … = Ele está …<br />
            She’s … = Ela está …<br />
            It’s … = Está … (para coisa ou bicho sem nome)
          </p>
        </Styled.Explanation>
        {speech.error ? (
          <Common.Hint role="status">{speech.error}</Common.Hint>
        ) : null}
      </Common.Stack>
    </Common.Columns>
  )
}

export function PetDialogue({ part }: PetConversationProps) {
  const speech = useMaterialSpeech()
  const lines = part === 0 ? dialogue.slice(0, 6) : dialogue.slice(6)
  return (
    <Common.Stack>
      <Button
        variant="secondary"
        onClick={() => speech.speak(lines.map((line) => line.text).join(' '))}
      >
        Ouvir conversa completa
      </Button>
      <DialogueExercise
        lines={lines.map((line) => ({
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

export function PetConversation({
  part,
  swapped = false,
  onSwap,
  completed = [],
  onComplete,
}: PetConversationProps) {
  const normal =
    part === 0
      ? [
          { speaker: 'Kim', text: 'Do you have a pet?' },
          {
            speaker: 'You',
            text: 'Yes, I do. I have a … · No, I don’t. My … has a …',
          },
          { speaker: 'Kim', text: 'Who’s this? What’s his name? And his age?' },
          {
            speaker: 'You',
            text: 'His name is … He’s … · Her name is … She’s …',
          },
        ]
      : [
          { speaker: 'Kim', text: 'Where’s …? Is … on the sofa?' },
          {
            speaker: 'You',
            text: 'No, he isn’t. He’s on the … · Yes, she is. · I don’t know!',
          },
          { speaker: 'Kim', text: 'Ha! My sister has two cats.' },
          {
            speaker: 'You',
            text: 'My … has a … · My son has a … · My … doesn’t have a pet.',
          },
        ]
  const alternate =
    part === 0
      ? [
          { speaker: 'You: Kim', text: 'Is this your dog?' },
          { speaker: 'Teacher', text: 'Yes! This is Max. He’s five.' },
          {
            speaker: 'You: Kim',
            text: 'Do you have a cat too? What’s her name? And her age?',
          },
          {
            speaker: 'Teacher',
            text: 'Yes, I do. Her name is Luna. She’s two.',
          },
        ]
      : [
          { speaker: 'You: Kim', text: 'Where’s …? Is he on the sofa?' },
          { speaker: 'Teacher', text: 'No, he isn’t. He’s under the table.' },
          { speaker: 'You: Kim', text: 'Ha! My … has a …' },
        ]
  const prefix = `${swapped}-${part}`
  const revealed = [0, 1].filter((index) =>
    completed.includes(`${prefix}-${index}`),
  ).length
  const lines = swapped ? alternate.slice(0, 1 + revealed * 2) : normal
  return (
    <Common.Stack>
      <Common.Row>
        <Common.Chip>
          {swapped
            ? 'You: Kim · Teacher: about her pet'
            : 'You: about your pet · Teacher: Kim'}
        </Common.Chip>
        <Button variant="secondary" aria-pressed={swapped} onClick={onSwap}>
          {swapped ? 'Swap back' : 'Swap roles'}
        </Button>
        <Common.Chip>
          {completed.filter((id) => id.startsWith(String(swapped))).length} of 4
        </Common.Chip>
      </Common.Row>
      <Common.Hint>
        {swapped
          ? 'Agora você é a Kim e faz as perguntas. As respostas da professora são um modelo: ela pode mudar.'
          : 'A mesma conversa, com o seu bicho. Se você não tem, fale do bicho de alguém, ou do Thor e da Mia.'}
      </Common.Hint>
      <DialogueExercise
        key={`${swapped}-${revealed}`}
        lines={lines.map((line, index) => ({
          ...line,
          id: `${part}-${swapped}-${index}`,
          avatarUrl: line.speaker.includes('Kim') ? kimAvatar : anaAvatar,
        }))}
      />
      <Common.Row>
        {[0, 1].map((index) => (
          <Button
            key={index}
            variant="secondary"
            aria-pressed={completed.includes(`${prefix}-${index}`)}
            disabled={
              swapped && index === 1 && !completed.includes(`${prefix}-0`)
            }
            onClick={() => onComplete?.(`${prefix}-${index}`)}
          >
            {swapped
              ? `Já perguntei ${index + 1} · Mostrar a resposta`
              : `Marcar minha fala ${index + 1}`}
          </Button>
        ))}
      </Common.Row>
      <Styled.Pets aria-label="Os seis bichos da aula">
        {pets.map((pet) => (
          <img key={pet.id} src={scene(pet.id)} alt={pet.word} />
        ))}
      </Styled.Pets>
    </Common.Stack>
  )
}

export function PetNotes() {
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [completed, setCompleted] = useState<readonly number[]>([])
  const [support, setSupport] = useState(false)
  const [empty, setEmpty] = useState<readonly number[]>([])
  const [found, setFound] = useState<number>()
  const locations = ['Sofa', 'Bed', 'Table', 'Box']
  const answers = [
    'She’s on the sofa.',
    'She’s under the bed.',
    'She’s under the table.',
    'She’s in the box.',
  ]
  const foundScenes = ['home-sofa', 'home-bed', 'home-table', 'home']
  const foundDescriptions = [
    'Mia está em cima do sofá, ao lado do Thor.',
    'Mia está parcialmente visível embaixo da cama à esquerda.',
    'Mia está embaixo da mesa à direita.',
    'Mia está dentro da caixa ao lado da cama.',
  ]
  const steps = [
    'Diga do que o Thor e a Mia gostam e onde eles dormem.',
    'A Kim não acha a Mia. Pergunte onde ela está até achar.',
    'Troquem: você esconde a Mia, e a Kim pergunta.',
    'Troquem de novo: a professora viaja. Diga o que você entendeu do bicho dela.',
  ]
  const active = steps.findIndex((_, index) => !completed.includes(index))
  const help =
    active === 0
      ? 'Thor likes … · Mia doesn’t like … · He sleeps on the … · She sleeps under the … · Thor is a boy. Mia is a girl. · He runs a lot every day. · Don’t run in the house! · She never sleeps on the … · He sometimes sleeps on the bed. · She often sleeps in the box. · He likes other dogs.'
      : active === 1 || active === 2
        ? 'Is she in the …? · No, she isn’t.'
        : 'Your … likes …'
  return (
    <Common.Columns>
      <Common.Stack>
        <Styled.Scene
          src={scene(
            found === undefined
              ? 'home-hidden'
              : (foundScenes[found] ?? 'home-hidden'),
          )}
          alt={
            found === undefined
              ? 'A sala da Ana com cama, sofá, mesa e caixa. A gata está escondida.'
              : `A mesma sala da Ana. ${foundDescriptions[found] ?? ''}`
          }
        />
        <Common.Hint>
          Um clique marca onde a gata não está. Dois cliques mostram a gata
          naquele lugar.
        </Common.Hint>
        <Common.Row>
          {locations.map((location, index) => (
            <Button
              key={location}
              variant={found === index ? 'brand' : 'secondary'}
              aria-pressed={found === index}
              onClick={() =>
                setEmpty((old) => (old.includes(index) ? old : [...old, index]))
              }
              onDoubleClick={() => setFound(index)}
            >
              {location}
              {empty.includes(index) && found !== index
                ? ' · não está aqui'
                : ''}
            </Button>
          ))}
        </Common.Row>
        {found !== undefined ? (
          <Common.Surface>
            <b>Mia: {answers[found]}</b>
          </Common.Surface>
        ) : null}
        <Button
          variant="secondary"
          onClick={() => {
            setFound(undefined)
            setEmpty([])
          }}
        >
          Hide again
        </Button>
        <Common.Hint>
          Para usar pelo teclado: escolha o lugar e marque abaixo.
        </Common.Hint>
        <Common.Row>
          {locations.map((location, index) => (
            <Button
              key={location}
              variant="text"
              onClick={() => setFound(index)}
            >
              Mostrar Mia: {location}
            </Button>
          ))}
        </Common.Row>
      </Common.Stack>
      <Common.Stack>
        <Common.Surface>
          <Common.Row>
            <Common.Heading>Pet notes</Common.Heading>
            <Button variant="text" onClick={() => setNotes({})}>
              Clear
            </Button>
          </Common.Row>
          <Styled.Notes>
            {['Thor', 'Mia'].map((pet) => (
              <Common.Stack key={pet}>
                <b>{pet}</b>
                {[
                  ['likes', 'Gosta de'],
                  ['sleeps', 'Dorme'],
                ].map(([field, label]) => (
                  <label key={field}>
                    {label} · {field}
                    <input
                      aria-label={`${pet}: ${label}`}
                      value={notes[`${pet}-${field}`] ?? ''}
                      onChange={(event) =>
                        setNotes((old) => ({
                          ...old,
                          [`${pet}-${field}`]: event.target.value,
                        }))
                      }
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </label>
                ))}
              </Common.Stack>
            ))}
          </Styled.Notes>
        </Common.Surface>
        <p>Você é a Ana. A Kim vai cuidar dos seus bichos.</p>
        <Button
          variant="secondary"
          aria-expanded={support}
          onClick={() => setSupport(!support)}
        >
          {support ? 'Esconder apoio' : 'Mostrar apoio'}
        </Button>
        {support ? <Common.Hint>{help}</Common.Hint> : null}
        <Common.Hint>
          {completed.length} de {steps.length} · Passo a passo
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
