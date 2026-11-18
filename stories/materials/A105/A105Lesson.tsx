import { LessonCover, LessonDeck } from '../shared/LessonDeck'
import {
  ChoiceExercise,
  PromptExercise,
  VocabularyExercise,
} from '../shared/LessonExercises'
import type { MaterialLessonDefinition } from '../shared/LessonDeck.types'
import { produce, scene } from './A105.data'
import {
  Homework,
  KimsList,
  LikeGrammar,
  Listening,
  MarketDialogue,
  OrangeWarmUp,
  Pronunciation,
  RightOrWrong,
  YourVersion,
} from './A105.sections'
import type { A105LessonProps } from './A105.types'

const goal =
  'Dizer do que você gosta e do que não gosta, e perguntar do que a outra pessoa gosta.'

export function A105Lesson({
  initialPageId,
  learnerName = '',
  studentPortalOrigin,
}: A105LessonProps) {
  const vocabulary = produce.map((item) => ({
    id: item.id,
    word: item.word,
    translation: item.translation,
    imageUrl: scene(item.id),
    imageAlt: `${item.translation} numa banca de feira`,
  }))
  const definition: MaterialLessonDefinition = {
    code: 'A1.05',
    title: 'At the street market',
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
            code="A1 · Lesson 05"
            title="At the street market"
            goal={goal}
          />
        ),
        content: (
          <PromptExercise
            items={[
              {
                id: 'r1',
                prompt: 'What time do you get up? Do you always get up early?',
              },
              {
                id: 'r2',
                prompt: 'Are you free on Saturday? What do you do after work?',
              },
              { id: 'r3', prompt: 'Agora pergunte à sua professora.' },
            ]}
          />
        ),
      },
      {
        id: 's2',
        label: 'Vocabulary · Guess the fruit',
        eyebrow: 'Vocabulary',
        title: 'Guess the fruit',
        instruction:
          'Olhe a fruta e tente dizer o nome em inglês. What’s this?',
        content: (
          <VocabularyExercise
            items={vocabulary.slice(0, 6)}
            note="an apple, an orange: antes de som de vogal, an. É o mesmo an de an engineer."
          />
        ),
      },
      {
        id: 's31',
        label: 'Warm up · Mango',
        eyebrow: 'Warm up · 1 / 3',
        title: 'Choose the correct answer.',
        instruction:
          'Olhe a fruta e escolha a resposta. Depois responda sobre você.',
        width: 'focused',
        content: (
          <ChoiceExercise
            question="What’s this?"
            options={['It’s an orange.', 'It’s a mango.', 'It’s a apple.']}
            correctIndex={1}
            image={{
              src: scene('mango'),
              alt: 'Uma manga com casca vermelha e verde e polpa amarela.',
            }}
            explanation="Mango é manga. Mostre uma fruta de verdade na câmera e diga: It’s a …"
          />
        ),
      },
      {
        id: 's32',
        label: 'Warm up · Orange',
        eyebrow: 'Warm up · 2 / 3',
        title: 'Choose the correct answer.',
        instruction:
          'Olhe a fruta e escolha a resposta. Depois responda sobre você.',
        width: 'focused',
        content: <OrangeWarmUp />,
      },
      {
        id: 's33',
        label: 'Warm up · Do you like pineapples?',
        eyebrow: 'Warm up · 3 / 3',
        title: 'Choose the correct answer.',
        instruction:
          'A Ana gosta de abacaxi. Complete o balão: o que a Ana responde?',
        width: 'focused',
        content: (
          <ChoiceExercise
            question="Kim asks Ana: “Do you like pineapples?”"
            options={['Yes, I do.', 'No, I don’t.', 'It’s a pineapple.']}
            correctIndex={0}
            image={{
              src: scene('pineapple'),
              alt: 'Ana sorri e faz sinal de aprovação ao abacaxi na feira.',
            }}
            explanation="Do you like = você gosta de. Agora responda sobre você: Do you like pineapples? Depois pergunte à professora."
          />
        ),
      },
      {
        id: 's4',
        label: 'Vocabulary · Guess the vegetable',
        eyebrow: 'Vocabulary',
        title: 'Guess the vegetable',
        instruction:
          'Olhe o legume e tente dizer o nome em inglês. What’s this?',
        content: (
          <VocabularyExercise
            items={vocabulary.slice(6)}
            note="lettuce e corn ficam sem a: I like corn."
          />
        ),
      },
      {
        id: 's51',
        label: 'Pronunciation · like or don’t like?',
        eyebrow: 'Pronunciation',
        title: 'like or don’t like?',
        instruction: 'Ouça e diga qual você ouviu.',
        width: 'focused',
        content: (
          <Pronunciation
            choices={['I like it.', 'I don’t like it.']}
            translations={['eu gosto', 'eu não gosto']}
            tip="Em don’t, a boca se arredonda: “dôunt”. O “t” quase some; quem avisa é o “dôun” antes do like."
          />
        ),
      },
      {
        id: 's52',
        label: 'Pronunciation · tomato or potato?',
        eyebrow: 'Pronunciation',
        title: 'tomato or potato?',
        instruction: 'Ouça e diga qual você ouviu.',
        width: 'focused',
        content: (
          <Pronunciation
            choices={['tomato', 'potato']}
            translations={['tomate', 'batata']}
            tip="tomato começa com t, a língua atrás dos dentes: “tə-MÊI-tou”. potato começa com p, os lábios juntos: “pə-TÊI-tou”."
          />
        ),
      },
      {
        id: 's6',
        label: 'Dialogue · At the street market',
        eyebrow: 'Dialogue',
        title: 'At the street market',
        instruction:
          'Sábado de manhã, a Ana leva a Kim à feira. Escute e leia junto.',
        width: 'reading',
        content: <MarketDialogue />,
      },
      {
        id: 's61',
        label: 'Dialogue · Yes or no?',
        eyebrow: 'Dialogue',
        title: 'Yes or no?',
        instruction:
          'As frases estão certas? Se não, diga o certo. Clique para conferir.',
        content: (
          <PromptExercise
            items={[
              {
                id: 'd1',
                prompt: 'The mango is five reais.',
                answer: 'No. It’s three reais.',
              },
              {
                id: 'd2',
                prompt: 'Kim likes watermelons.',
                answer: 'No. She doesn’t like watermelons.',
              },
              {
                id: 'd3',
                prompt: 'Ana’s mother loves watermelons.',
                answer: 'Yes.',
              },
            ]}
          />
        ),
      },
      {
        id: 's7',
        label: 'Grammar · like and likes',
        eyebrow: 'Grammar',
        title: 'like and likes',
        instruction: 'Diga a palavra antes de clicar na linha.',
        content: <LikeGrammar />,
      },
      {
        id: 's8',
        label: 'Your version · At the market with Kim',
        eyebrow: 'Your version',
        title: 'At the market with Kim',
        instruction: 'A mesma conversa, com o que você gosta de verdade.',
        width: 'reading',
        content: <YourVersion />,
      },
      {
        id: 's9',
        label: 'Listening · A message from Kim',
        eyebrow: 'Listening',
        title: 'A message from Kim',
        instruction:
          'Na sexta à noite, a Kim manda um áudio. Leia as frases, ouça e diga se estão certas. Se não, diga o certo.',
        content: <Listening />,
      },
      {
        id: 's10',
        label: 'Review · Right or wrong?',
        eyebrow: 'Review',
        title: 'Right or wrong?',
        instruction: 'A frase está certa? Se não, diga do jeito certo.',
        content: <RightOrWrong />,
      },
      {
        id: 's11',
        label: 'Role play · Kim’s list',
        eyebrow: 'Role play',
        title: 'Kim’s list',
        instruction:
          'Na feira com a Kim. Descubra do que ela gosta, conte à professora e ajude a Kim a comprar.',
        content: <KimsList />,
      },
      {
        id: 's12',
        label: 'Homework · Before next class',
        eyebrow: 'Homework',
        title: 'Before next class',
        instruction:
          'Suas três tarefas na plataforma. A professora manda os links pelo chat.',
        content: <Homework studentPortalOrigin={studentPortalOrigin} />,
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
