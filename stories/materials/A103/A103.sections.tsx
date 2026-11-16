import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { GrammarTable } from '../../../src/components/Grammar/GrammarTable'
import { RolePlayExercise } from '../../../src/components/Exercise/RolePlayExercise'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
import {
  ChoiceExercise,
  DialogueExercise,
  PromptExercise,
} from '../shared/LessonExercises'
import { useMaterialSpeech } from '../shared/useMaterialSpeech'
import kimAvatar from '../A101/assets/bust_kim.webp'
import anaAvatar from '../A101/assets/bust_ana.webp'
import { scene, sceneAlt, source } from './A103.data'
import { YourPeople } from './YourPeople'
import * as Styled from './A103.styles'
import type { JobWarmUpProps, PhotoDialogueProps } from './A103.types'

export function JobWarmUp({ index }: JobWarmUpProps) {
  const item = source.WJ[index]
  const id = index === 0 ? 'scene-student' : 'scene-teacher'
  const [open, setOpen] = useState(index === 0)
  return (
    <Common.Stack>
      {open ? (
        <ChoiceExercise
          question={item.q}
          options={item.o}
          correctIndex={item.a}
          image={{ src: scene(id), alt: sceneAlt(id) }}
          explanation={item.now}
        />
      ) : (
        <>
          <Common.Heading>{item.q}</Common.Heading>
          <Styled.Scene src={scene(id)} alt={sceneAlt(id)} />
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Show options
          </Button>
        </>
      )}
    </Common.Stack>
  )
}

export function FamilyWords() {
  const [revealed, setRevealed] = useState<readonly string[]>([])
  const [noteSeen, setNoteSeen] = useState(false)
  const speech = useMaterialSpeech()
  return (
    <Common.Columns>
      <Common.Stack>
        <GrammarTable
          title="My family"
          columns={{
            subject: 'Em português',
            verb: 'Palavra',
            example: 'Exemplo',
          }}
          hiddenAnswers
          revealedIds={revealed}
          rows={source.FAM.map(([translation, word, example], index) => ({
            id: String(index),
            subject: translation,
            verb: word,
            example,
          }))}
          onReveal={(id) => {
            const next = [...revealed, id]
            setRevealed(next)
            if (next.length === source.FAM.length) setNoteSeen(true)
            speech.speak(source.FAM[Number(id)]![1])
          }}
          onPlay={(id) => speech.speak(source.FAM[Number(id)]![2])}
        />
        <Button
          variant="secondary"
          disabled={!revealed.length}
          onClick={() => setRevealed([])}
        >
          Hide all
        </Button>
        {speech.error ? (
          <Common.Hint role="status">{speech.error}</Common.Hint>
        ) : null}
      </Common.Stack>
      {noteSeen ? (
        <Common.Surface>
          <Common.Heading>Cuidado</Common.Heading>
          <p>
            <b>parents</b> = pai e mãe. Não é “parentes”.
          </p>
          <p>
            <b>brother</b> = irmão. Para amigo, a palavra é <b>friend</b>.
          </p>
        </Common.Surface>
      ) : null}
    </Common.Columns>
  )
}

export function PhotoDialogue({ part }: PhotoDialogueProps) {
  const speech = useMaterialSpeech()
  const lines = part === 1 ? source.DL.slice(0, 6) : source.DL.slice(6)
  const photos = [
    { id: 'scene-student', label: 'Leo', speech: source.DL[1].en },
    { id: 'scene-parents', label: 'Os pais da Ana', speech: source.DL[3].en },
    { id: 'scene-engineer', label: 'Jun', speech: source.DL[7].en },
  ]
  return (
    <Common.Stack>
      <Common.Tag>Ana’s photos</Common.Tag>
      <Styled.PhotoRow>
        {photos.map((photo) => (
          <Button
            key={photo.id}
            variant="tertiary"
            aria-label={`Foto de ${photo.label}: ouvir`}
            onClick={() => speech.speak(photo.speech)}
          >
            <img src={scene(photo.id)} alt={sceneAlt(photo.id)} />
          </Button>
        ))}
      </Styled.PhotoRow>
      <Button
        variant="secondary"
        onClick={() => speech.speak(lines.map((line) => line.en).join(' '))}
      >
        Ouvir conversa completa
      </Button>
      <DialogueExercise
        lines={lines.map((line) => ({
          id: line.id,
          speaker: line.who === 'kim' ? 'Kim' : 'Ana',
          text: line.en,
          translation: line.g,
          avatarUrl: line.who === 'kim' ? kimAvatar : anaAvatar,
        }))}
      />
      {speech.error ? (
        <Common.Hint role="status">{speech.error}</Common.Hint>
      ) : null}
    </Common.Stack>
  )
}

export function PeopleGrammar() {
  const [revealed, setRevealed] = useState<readonly string[]>([])
  const speech = useMaterialSpeech()
  const all = revealed.length === source.GRT.length
  return (
    <Common.Columns>
      <Common.Stack>
        <GrammarTable
          title="Apresentar pessoas"
          columns={{ subject: 'Quem', verb: 'Palavra', example: 'Exemplo' }}
          hiddenAnswers
          revealedIds={revealed}
          rows={source.GRT.map(([who, word, example, translation], index) => ({
            id: String(index),
            subject: who,
            verb: word,
            example,
            translation,
          }))}
          onReveal={(id) => {
            setRevealed((old) => [...old, id])
            speech.speak(source.GRT[Number(id)]![2])
          }}
          onPlay={(id) => speech.speak(source.GRT[Number(id)]![2])}
        />
        {all ? (
          <PromptExercise
            items={[
              {
                id: 'now',
                prompt:
                  'Agora você: apresente uma pessoa e depois duas pessoas da sua vida, com a profissão ou a cidade.',
                answer:
                  'This is my … She’s a … · These are my … They’re from …',
              },
            ]}
          />
        ) : null}
        {speech.error ? (
          <Common.Hint role="status">{speech.error}</Common.Hint>
        ) : null}
      </Common.Stack>
      <Common.Surface>
        <Common.Heading>Uma pessoa ou mais de uma?</Common.Heading>
        <p>
          <b>This is</b> = uma pessoa. <b>These are</b> = duas ou mais. Depois:{' '}
          <b>He’s</b> (ele), <b>She’s</b> (ela), <b>They’re</b> (eles, elas).
        </p>
        <p>
          <b>Ana’s</b> brother = o irmão <b>da Ana</b>. <b>Kim’s</b> sister = a
          irmã <b>da Kim</b>.
        </p>
        {all ? (
          <>
            <Common.Heading>A ou an?</Common.Heading>
            <p>
              Em inglês a profissão leva <b>a</b>: She’s <b>a</b> doctor. Antes
              de som de vogal, <b>an</b>: He’s <b>an</b> engineer.
            </p>
          </>
        ) : null}
      </Common.Surface>
    </Common.Columns>
  )
}

export function YourPhotos() {
  const [swapped, setSwapped] = useState(false)
  const questions = swapped
    ? [
        {
          id: 'v1',
          prompt: 'Pergunte quem é a pessoa da professora.',
          answer: 'Who’s this?',
        },
        {
          id: 'v2',
          prompt: 'Pergunte sobre duas pessoas.',
          answer: 'And who are they?',
        },
        {
          id: 'v3',
          prompt: 'Pergunte a profissão de uma delas.',
          answer: 'Is your … a …?',
        },
        {
          id: 'v4',
          prompt: 'Pergunte sobre mais uma pessoa.',
          answer: 'Cool! And who’s he? · And who’s she?',
        },
      ]
    : [
        {
          id: 'v1',
          prompt: 'Kim: Who’s this? Diga quem é e o que faz.',
          answer: 'This is my … He’s a … · She’s a …',
        },
        {
          id: 'v2',
          prompt:
            'Kim: And who are they? Fale de duas pessoas e de onde elas são.',
          answer: 'These are my … They’re from …',
        },
        {
          id: 'v3',
          prompt: 'Kim: Is your … a …? Responda; se estiver errado, corrija.',
          answer: 'No, he isn’t. He’s a … · Yes, she is.',
        },
        {
          id: 'v4',
          prompt: 'Kim: Cool! And who’s he? Fale de um amigo ou de uma amiga.',
          answer: 'This is my friend … He’s a … · She’s from …',
        },
      ]
  return (
    <Common.Stack>
      <Common.Row>
        <Common.Chip>
          {swapped ? 'You: Kim' : 'You: about your life'}
        </Common.Chip>
        <Common.Chip>
          {swapped ? 'Teacher: about her life' : 'Teacher: Kim'}
        </Common.Chip>
        <Button
          variant="secondary"
          aria-pressed={swapped}
          onClick={() => setSwapped(!swapped)}
        >
          {swapped ? 'Swap back' : 'Swap roles'}
        </Button>
      </Common.Row>
      <PromptExercise key={String(swapped)} items={questions} />
    </Common.Stack>
  )
}

export function PhotosRolePlay() {
  const [completed, setCompleted] = useState<readonly string[]>([])
  const [support, setSupport] = useState(false)
  const steps = [
    'Apresente três pessoas da sua vida.',
    'Diga o que cada uma faz ou de onde é.',
    'A professora erra. Corrija.',
    'Troquem: a professora diz um nome. Pergunte até descobrir quem é e o que faz.',
  ]
  return (
    <Common.Columns>
      <RolePlayExercise
        situation="Você está com uma amiga. Mostre três pessoas da sua vida."
        image={{ src: scene('scene-parents'), alt: sceneAlt('scene-parents') }}
        support={[
          'This is my …',
          'These are my …',
          'He’s a … / She’s an …',
          'They’re from …',
          'No, he isn’t. / No, she isn’t.',
          'Is she your …? / Is he a …?',
          'This boy is my son. / This girl is my daughter.',
          'These are my children.',
          'He’s young. / She’s young.',
          'Sorry, I don’t understand.',
        ]}
        supportVisible={support}
        onSupportToggle={() => setSupport(!support)}
        steps={steps.map((label, index) => ({ id: String(index), label }))}
        completedIds={completed}
        onStepToggle={(id) =>
          setCompleted((old) =>
            old.includes(id)
              ? old.filter((value) => value !== id)
              : [...old, id],
          )
        }
      />
      <YourPeople />
    </Common.Columns>
  )
}

export function KimsPhoto() {
  const [expanded, setExpanded] = useState(false)
  return (
    <Common.Stack>
      <Button
        variant="secondary"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Fechar a foto' : 'Ver a foto da Kim'}
      </Button>
      {expanded ? (
        <Styled.Scene
          src={scene('scene-jin-tom')}
          alt={sceneAlt('scene-jin-tom')}
        />
      ) : null}
    </Common.Stack>
  )
}
