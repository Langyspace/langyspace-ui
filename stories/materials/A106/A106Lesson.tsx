import { useState } from 'react'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import kimAvatar from '../A101/assets/bust_kim.webp'
import { LessonCover, LessonDeck } from '../shared/LessonDeck'
import {
  GrammarActivity,
  HomeworkActivity,
  ListeningActivity,
  PronunciationActivity,
  ReviewActivity,
} from '../shared/LessonActivities'
import {
  ChoiceExercise,
  PromptExercise,
  VocabularyExercise,
} from '../shared/LessonExercises'
import type { MaterialLessonDefinition } from '../shared/LessonDeck.types'
import {
  corrections,
  furniture,
  haveRows,
  homework,
  listeningMessage,
  pets,
  positions,
  possessiveRows,
  scene,
} from './A106.data'
import {
  ExploreHome,
  FishWarmUp,
  PetConversation,
  PetDialogue,
  PetNotes,
} from './A106.sections'
import type { A106LessonProps } from './A106.types'

const goal = 'Falar do seu bicho de estimação e dizer onde as coisas estão.'

export function A106Lesson({
  initialPageId,
  learnerName = '',
  studentPortalOrigin,
}: A106LessonProps) {
  const [swapped, setSwapped] = useState(false)
  const [completed, setCompleted] = useState<readonly string[]>([])
  const markTurn = (id: string) =>
    setCompleted((old) =>
      old.includes(id)
        ? old.filter(
            (value) =>
              value !== id &&
              !(id.endsWith('-0') && value === `${id.slice(0, -1)}1`),
          )
        : [...old, id],
    )
  const vocabulary = [...pets, ...furniture, ...positions].map((item) => ({
    id: item.id,
    word: item.word,
    translation: item.translation,
    imageUrl: scene(item.id),
    imageAlt: item.translation,
  }))
  const homeworkMessage =
    'Lição de casa da aula A1.06 · My home and my pet\n' +
    homework.map((item) => `${item.line}: ${item.url}`).join('\n')
  const definition: MaterialLessonDefinition = {
    code: 'A1.06',
    title: 'My home and my pet',
    goal,
    pages: [
      {
        id: 's1',
        label: 'Review · Last class',
        eyebrow: 'Review',
        title: 'Last class',
        instruction:
          'Responda às perguntas da sua professora sobre a aula passada.',
        lead: (
          <LessonCover
            code="A1 · Lesson 06"
            title="My home and my pet"
            goal={goal}
          />
        ),
        content: (
          <PromptExercise
            items={[
              {
                id: 'r1',
                prompt: 'Do you like mangoes? Do you like green apples?',
              },
              { id: 'r2', prompt: 'Conte do que alguém da sua família gosta.' },
              { id: 'r3', prompt: 'Agora pergunte à sua professora.' },
            ]}
          />
        ),
      },
      {
        id: 's2',
        label: 'Vocabulary · Guess the pet',
        eyebrow: 'Vocabulary',
        title: 'Guess the pet',
        instruction:
          'Pet é o bicho de estimação. Olhe a imagem e tente dizer o nome em inglês. What’s this?',
        content: <VocabularyExercise items={vocabulary.slice(0, 6)} />,
      },
      {
        id: 's31',
        label: 'Warm up · Is it a cat?',
        eyebrow: 'Warm up · 1 / 3',
        title: 'Choose the correct answer.',
        instruction: 'Olhe o bicho e responda. Depois adivinhe um bicho.',
        width: 'focused',
        content: (
          <ChoiceExercise
            question="Is it a cat?"
            options={[
              'Yes, it is.',
              'No, it isn’t. It’s a bird.',
              'No, it isn’t. It’s a dog.',
            ]}
            correctIndex={1}
            image={{
              src: scene('bird'),
              alt: 'Um passarinho com penas e bico.',
            }}
            explanation="it = ele ou ela, para bicho sem nome ou coisa. A professora pensa num bicho. Adivinhe: Is it a …?"
          />
        ),
      },
      {
        id: 's32',
        label: 'Warm up · Is it a turtle?',
        eyebrow: 'Warm up · 2 / 3',
        title: 'Choose the correct answer.',
        instruction: 'Olhe o bicho e responda. Depois adivinhe um bicho.',
        width: 'focused',
        content: <FishWarmUp />,
      },
      {
        id: 's33',
        label: 'Warm up · Do you have a pet?',
        eyebrow: 'Warm up · 3 / 3',
        title: 'Choose the correct answer.',
        instruction:
          'Este é o cachorro da Ana. Complete o balão: o que a Ana responde?',
        width: 'focused',
        content: (
          <ChoiceExercise
            question="Kim asks Ana: “Do you have a pet?”"
            options={['Yes, I do.', 'No, I don’t.', 'It’s a dog.']}
            correctIndex={0}
            image={{
              src: scene('dog'),
              alt: 'Thor, o cachorro da Ana, no sofá.',
            }}
            explanation="Do you have a pet? = Você tem um bicho de estimação? Agora responda sobre você e pergunte à professora."
          />
        ),
      },
      {
        id: 's4',
        label: 'Vocabulary · Where’s the cat?',
        eyebrow: 'Vocabulary',
        title: 'Where’s the cat?',
        instruction: 'Diga o nome do móvel. Embaixo, diga onde a gata está.',
        content: (
          <Common.Stack>
            <Common.Heading>Móveis · What’s this?</Common.Heading>
            <VocabularyExercise items={vocabulary.slice(6, 9)} />
            <Common.Heading>Onde? · Where’s the cat?</Common.Heading>
            <VocabularyExercise
              items={vocabulary.slice(9)}
              note="on é em cima, encostado. in é dentro. Em português, as duas podem ser “na”: a gata está na caixa."
            />
          </Common.Stack>
        ),
      },
      {
        id: 's5',
        label: 'Explore · Ana’s home',
        eyebrow: 'Explore',
        title: 'Ana’s home',
        instruction:
          'Esta é a sala da Ana. Thor é o cachorro, e Mia é a gata. Clique num ponto e diga onde está.',
        content: <ExploreHome />,
      },
      {
        id: 's61',
        label: 'Pronunciation · have or don’t have?',
        eyebrow: 'Pronunciation',
        title: 'have or don’t have?',
        instruction: 'Ouça e diga qual você ouviu.',
        width: 'focused',
        content: (
          <PronunciationActivity
            choices={['I have a pet', 'I don’t have a pet']}
            translations={['tenho um bicho', 'não tenho um bicho']}
            tip="Em I don’t have há um “dôun” antes do have; o t quase some, mas o “dôun” fica. Sem ele, a frase diz o contrário."
          />
        ),
      },
      {
        id: 's62',
        label: 'Pronunciation · his or her?',
        eyebrow: 'Pronunciation',
        title: 'his or her?',
        instruction: 'Ouça e diga qual você ouviu.',
        width: 'focused',
        content: (
          <PronunciationActivity
            choices={['his', 'her']}
            translations={['dele', 'dela']}
            tip="Os dois começam com um sopro, h, e não com o r de “rato”. his tem i curto e termina em z: “hiz”. her tem o som de â: “hâr”."
          />
        ),
      },
      {
        id: 's7',
        label: 'Dialogue · Meet Thor (1/2)',
        eyebrow: 'Dialogue',
        title: 'Meet Thor (1/2)',
        instruction: 'A Kim chega à casa da Ana. Escute e leia junto.',
        width: 'reading',
        content: <PetDialogue part={0} />,
      },
      {
        id: 's71',
        label: 'Dialogue · Meet Thor (2/2)',
        eyebrow: 'Dialogue',
        title: 'Meet Thor (2/2)',
        instruction: 'A conversa continua. Escute e leia junto.',
        width: 'reading',
        content: <PetDialogue part={1} />,
      },
      {
        id: 's72',
        label: 'Dialogue · Yes or no?',
        eyebrow: 'Dialogue',
        title: 'Yes or no?',
        instruction:
          'As frases estão certas? Cuidado: algumas estão erradas. Se não, diga o certo. Clique para conferir.',
        content: (
          <PromptExercise
            items={[
              { id: 'd1', prompt: 'Thor is two.', answer: 'No. He’s three.' },
              {
                id: 'd2',
                prompt: 'Mia is on the sofa.',
                answer: 'No. She’s under the bed.',
              },
              {
                id: 'd3',
                prompt: 'Kim’s sister has one cat.',
                answer: 'No. She has two cats.',
              },
            ]}
          />
        ),
      },
      {
        id: 's81',
        label: 'Grammar · have and has',
        eyebrow: 'Grammar',
        title: 'have and has',
        instruction: 'Diga a palavra antes de clicar na linha.',
        content: (
          <GrammarActivity
            rows={haveRows.map((row, index) => ({
              id: String(index),
              label: row.who,
              word: row.word,
              example: row.example,
              translation: row.translation,
            }))}
            explanation={
              <>
                <Common.Heading>Ter: have ou has?</Common.Heading>
                <p>
                  Com <b>I</b> e <b>you</b>: have. Com <b>he</b>, <b>she</b> ou
                  o nome de uma pessoa: <b>has</b>. É o mesmo s de likes. No
                  negativo: I <b>don’t</b> have · She <b>doesn’t</b> have.
                </p>
              </>
            }
            afterReveal={
              <Common.Stack>
                <b>Pergunta e resposta curta</b>
                <p>
                  Do you have a pet? Yes, I do. · No, I don’t. Em português
                  dizemos “tenho”, mas a resposta curta em inglês é com do.
                </p>
                <b>Agora você</b>
                <p>
                  Diga se você tem um bicho e se alguém da sua família, ou um
                  amigo, tem.
                </p>
                <Common.Hint>
                  I have a … · I don’t have a pet. · My … has a … · My … doesn’t
                  have a pet.
                </Common.Hint>
              </Common.Stack>
            }
          />
        ),
      },
      {
        id: 's82',
        label: 'Grammar · his and her',
        eyebrow: 'Grammar',
        title: 'his and her',
        instruction: 'Diga a palavra antes de clicar na linha.',
        content: (
          <GrammarActivity
            rows={possessiveRows.map((row, index) => ({
              id: String(index),
              label: row.who,
              word: row.word,
              example: row.example,
              translation: row.translation,
            }))}
            explanation={
              <>
                <Common.Heading>Dele ou dela?</Common.Heading>
                <p>
                  <b>he → his</b> (dele) · <b>she → her</b> (dela). Em
                  português, “seu” e “sua” mudam com a coisa (o seu cachorro, a
                  sua gata). Em inglês, muda com quem tem: o nome da Mia é{' '}
                  <b>her name</b>, porque a Mia é ela.
                </p>
              </>
            }
            afterReveal={
              <Common.Stack>
                <b>Agora você</b>
                <p>
                  Diga o nome do seu bicho, ou de alguém da sua família. Depois
                  pergunte à professora.
                </p>
                <Common.Hint>
                  His name is … · Her name is … · What’s his name? · What’s her
                  name?
                </Common.Hint>
              </Common.Stack>
            }
          />
        ),
      },
      {
        id: 's91',
        label: 'Your version · Meet my pet (1/2)',
        eyebrow: 'Your version',
        title: 'Meet my pet (1/2)',
        instruction:
          'A mesma conversa, com o seu bicho. Se você não tem, fale do bicho de alguém, ou do Thor e da Mia.',
        width: 'reading',
        content: (
          <PetConversation
            part={0}
            swapped={swapped}
            onSwap={() => setSwapped(!swapped)}
            completed={completed}
            onComplete={markTurn}
          />
        ),
      },
      {
        id: 's92',
        label: 'Your version · Meet my pet (2/2)',
        eyebrow: 'Your version',
        title: 'Meet my pet (2/2)',
        instruction:
          'A conversa continua. As respostas da professora são um modelo: ela pode mudar.',
        width: 'reading',
        content: (
          <PetConversation
            part={1}
            swapped={swapped}
            onSwap={() => setSwapped(!swapped)}
            completed={completed}
            onComplete={markTurn}
          />
        ),
      },
      {
        id: 's10',
        label: 'Listening · A message from Kim',
        eyebrow: 'Listening',
        title: 'A message from Kim',
        instruction:
          'Depois da visita, a Kim manda um áudio. Leia as frases, ouça e diga se estão certas. Se não, diga o certo.',
        content: (
          <ListeningActivity
            contact="Kim"
            avatarUrl={kimAvatar}
            message={listeningMessage}
            translation="animals = bichos · young = novo"
            greeting={learnerName ? `Hi ${learnerName}! 👋` : 'Hi! 👋'}
            timestamp="18:31"
            questions={[
              { id: 'kim', text: 'Kim has a pet.', correct: 'No' },
              { id: 'jin', text: 'Jin has a cat and a dog.', correct: 'Yes' },
              { id: 'age', text: 'Jin’s cat is three.', correct: 'No' },
              { id: 'thor', text: 'Kim likes Thor.', correct: 'Yes' },
            ]}
            replyPrompt="Responda à Kim: diga se você tem um bicho, ou fale do bicho de alguém."
            support={['I have a …', 'I don’t have a pet.', 'My … has a …']}
          />
        ),
      },
      {
        id: 's11',
        label: 'Review · Right or wrong?',
        eyebrow: 'Review',
        title: 'Right or wrong?',
        instruction: 'A frase está certa? Se não, diga do jeito certo.',
        content: (
          <ReviewActivity
            items={corrections}
            ownPrompt="A professora diz uma frase sua de hoje."
          />
        ),
      },
      {
        id: 's12',
        label: 'Role play · Pet notes',
        eyebrow: 'Role play',
        title: 'Pet notes',
        instruction:
          'Você viaja na semana que vem. A Kim vai cuidar do Thor e da Mia. Explique tudo a ela.',
        content: <PetNotes />,
      },
      {
        id: 's13',
        label: 'Homework · Before next class',
        eyebrow: 'Homework',
        title: 'Before next class',
        instruction:
          'Suas três tarefas na plataforma. A professora manda os links pelo chat. A próxima aula é a Oral review 1.',
        content: (
          <HomeworkActivity
            items={homework}
            message={homeworkMessage}
            studentPortalOrigin={studentPortalOrigin}
          />
        ),
      },
    ],
  }
  return (
    <LessonDeck
      lesson={definition}
      initialPageId={initialPageId}
      learnerName={learnerName}
    />
  )
}
