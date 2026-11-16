import { LessonCover, LessonDeck } from '../shared/LessonDeck'
import { PromptExercise, VocabularyExercise } from '../shared/LessonExercises'
import {
  HomeworkActivity,
  ListeningActivity,
  PronunciationActivity,
  ReviewActivity,
} from '../shared/LessonActivities'
import type { MaterialLessonDefinition } from '../shared/LessonDeck.types'
import kimAvatar from '../A101/assets/bust_kim.webp'
import {
  corrections,
  homework,
  homeworkMessage,
  source,
  vocabulary,
} from './A104.data'
import {
  DaysAndTimes,
  FindATime,
  RoutineDialogue,
  RoutineGrammar,
  RoutineWarmUp,
  YouAndKim,
} from './A104.sections'
import type { A104LessonProps } from './A104.types'

const goal = 'Falar da sua rotina e combinar um dia e uma hora.'

export function A104Lesson({
  initialPageId = 's1',
  learnerName = '',
}: A104LessonProps) {
  const definition: MaterialLessonDefinition = {
    code: 'A1.04',
    title: 'My day and our time',
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
            code="A1 · Lesson 04"
            title="My day and our time"
            goal={goal}
          />
        ),
        content: (
          <PromptExercise
            items={[
              { id: 'r1', prompt: 'Apresente uma pessoa da sua vida.' },
              { id: 'r2', prompt: 'A professora erra. Corrija.' },
              {
                id: 'r3',
                prompt: 'What’s your job? Depois pergunte à sua professora.',
              },
            ]}
          />
        ),
      },
      {
        id: 's2',
        label: 'Vocabulary · Guess the word',
        eyebrow: 'Vocabulary',
        title: 'Guess the word',
        instruction:
          'Este é o dia de uma pessoa, da manhã até a noite. Olhe a imagem e tente dizer a palavra em inglês.',
        content: (
          <VocabularyExercise
            items={vocabulary()}
            note="Para gym, a frase é: I go to the gym."
          />
        ),
      },
      {
        id: 's3',
        label: 'Vocabulary · Days and times',
        eyebrow: 'Vocabulary',
        title: 'Days and times',
        instruction:
          'Leia a palavra em português ou o número e diga em inglês. Depois clique para conferir.',
        width: 'wide',
        content: <DaysAndTimes />,
      },
      {
        id: 's41',
        label: 'Warm up · Get up',
        eyebrow: 'Warm up · 1 / 3',
        title: 'Choose the correct answer.',
        instruction: 'Escolha a resposta. Depois responda sobre você.',
        width: 'focused',
        content: <RoutineWarmUp index={0} />,
      },
      {
        id: 's42',
        label: 'Warm up · Eat',
        eyebrow: 'Warm up · 2 / 3',
        title: 'Choose the correct answer.',
        instruction: 'Escolha a resposta. Depois responda sobre você.',
        width: 'focused',
        content: <RoutineWarmUp index={1} />,
      },
      {
        id: 's43',
        label: 'Warm up · Saturday',
        eyebrow: 'Warm up · 3 / 3',
        title: 'Choose the correct answer.',
        instruction: 'Escolha a resposta. Depois responda sobre você.',
        width: 'focused',
        content: <RoutineWarmUp index={2} />,
      },
      ...source.PRW.map((pair, index) => ({
        id: `s${51 + index}`,
        label: `Pronunciation · ${pair.t}`,
        eyebrow: 'Pronunciation',
        title: pair.t,
        instruction: 'Ouça e diga qual você ouviu.',
        width: 'focused' as const,
        content: (
          <PronunciationActivity
            choices={[pair.c[0][0], pair.c[1][0]]}
            translations={[pair.c[0][1], pair.c[1][1]]}
            tip={pair.tip}
          />
        ),
      })),
      {
        id: 's6',
        label: 'Dialogue · Are you free?',
        eyebrow: 'Dialogue',
        title: 'Are you free?',
        instruction:
          'A Kim e a Ana querem ir juntas à academia. Elas precisam achar um dia. Escute e leia junto.',
        width: 'reading',
        content: <RoutineDialogue />,
      },
      {
        id: 's61',
        label: 'Dialogue · Questions',
        eyebrow: 'Dialogue',
        title: 'Questions',
        instruction:
          'Responda às perguntas sobre o diálogo. Clique em Answer para conferir.',
        content: (
          <PromptExercise
            items={source.DQ6.map((item, index) => ({
              id: String(index),
              prompt: item.q,
              answer: item.a,
            }))}
          />
        ),
      },
      {
        id: 's7',
        label: 'Grammar · at, on, in the',
        eyebrow: 'Grammar',
        title: 'at, on, in the',
        instruction: 'Diga a palavra antes de clicar na linha.',
        width: 'wide',
        content: <RoutineGrammar />,
      },
      {
        id: 's8',
        label: 'Your version · You and Kim',
        eyebrow: 'Your version',
        title: 'You and Kim',
        instruction: 'A mesma conversa, com a sua semana de verdade.',
        width: 'reading',
        content: <YouAndKim />,
      },
      {
        id: 's9',
        label: 'Listening · A message from Kim',
        eyebrow: 'Listening',
        title: 'A message from Kim',
        instruction:
          'A Kim mandou um áudio contando a semana dela. Leia as frases, ouça e responda Yes ou No. Se for No, diga o certo.',
        width: 'wide',
        content: (
          <ListeningActivity
            avatarUrl={kimAvatar}
            message={source.LISTENING_TEXT}
            questions={source.LISTENING_QUESTIONS.map((item, index) => ({
              id: String(index),
              text: item.q,
              correct: item.a === 0 ? 'Yes' : 'No',
            }))}
            replyPrompt="Responda à Kim: And you?"
            support={['I work on …', 'I study on …', 'I’m free on …']}
            greeting={
              learnerName.trim()
                ? `Hi ${learnerName.trim().split(/\s+/)[0]}! 👋`
                : 'Hi! 👋'
            }
            timestamp="18:31"
          />
        ),
      },
      {
        id: 's10',
        label: 'Review · Right or wrong?',
        eyebrow: 'Review',
        title: 'Right or wrong?',
        instruction: 'A frase está certa? Se não, diga do jeito certo.',
        content: <ReviewActivity items={corrections} />,
      },
      {
        id: 's11',
        label: 'Role play · Find a time',
        eyebrow: 'Role play',
        title: 'Find a time',
        instruction:
          'Conte a sua semana. A professora marca na agenda. Depois combinem um dia e uma hora para uma aula a mais.',
        width: 'wide',
        content: <FindATime />,
      },
      {
        id: 's12',
        label: 'Homework · Before next class',
        eyebrow: 'Homework',
        title: 'Before next class',
        instruction:
          'Suas três tarefas na plataforma. A professora manda os links pelo chat.',
        content: (
          <HomeworkActivity items={homework} message={homeworkMessage} />
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
