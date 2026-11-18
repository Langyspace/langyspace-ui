import { useState } from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonIntro, LessonShell } from '../shared/LessonShell'
import { LessonHomework } from '../shared/LessonHomework'
import { AnswerDisclosure } from '../shared/AnswerDisclosure'
import {
  PronunciationPractice,
  SourceQuestions,
} from '../shared/LessonPractice'
import { toggleId } from '../shared/lessonState'
import type { LessonProps } from '../shared/Lesson.types'
import {
  AirportDialogue,
  AirportListening,
  AirportReview,
  AirportWarmUp,
  ArrivalNotes,
  PlayDialogue,
  QuestionWords,
  Vocabulary,
  YourTrip,
} from './A107.sections'
import content from './A107.content.json'
import passport from './assets/ap_passport.svg'
import * as S from '../shared/Lesson.styles'

const groups = [
  ['s31', 's32'],
  ['s51', 's52'],
  ['s61', 's62'],
  ['s81', 's82'],
] as const
const order = [
  's1',
  's2',
  ...groups[0],
  's4',
  ...groups[1],
  ...groups[2],
  's63',
  's7',
  ...groups[3],
  's9',
  's10',
  's11',
  's12',
]
const homework = content.homework.map((item) => [
  item.t,
  item.d,
  item.url,
  item.line.split('(')[1]?.replace(')', '') ?? '',
])
const introductoryQuestions = [
  'Do you have a pet? What’s his name? And his age?',
  'Where’s your phone now?',
  'Agora pergunte à sua professora.',
].map((question) => ({ question }))

function page(
  id: string,
  eyebrow: string,
  title: string,
  instruction: string,
  children: ReactNode,
  extras?: Pick<ComponentProps<typeof SlidePage>, 'lead' | 'tools' | 'width'>,
) {
  return {
    id,
    label: `${eyebrow} · ${title}`,
    content: (
      <SlidePage
        width="reading"
        eyebrow={eyebrow}
        title={title}
        instruction={instruction}
        {...extras}
      >
        {children}
      </SlidePage>
    ),
  }
}

export function A107Lesson({
  initialPageId,
  studentPortalOrigin,
}: LessonProps) {
  const [swapped, setSwapped] = useState(false)
  const [done, setDone] = useState<string[]>([])
  return (
    <LessonShell
      materialKey="a1-07"
      initialPageId={initialPageId}
      pageIds={order}
      themeSwitch
      exerciseGroups={groups}
      label="A1.07 · At the airport"
      pages={(speech) => [
        page(
          's1',
          'Review',
          'Last class',
          'Responda às perguntas da sua professora sobre a aula passada.',
          <SourceQuestions items={introductoryQuestions} />,
          {
            lead: (
              <LessonIntro
                level="A1"
                lesson="Lesson 07"
                before="At the "
                accent="airport"
                goal={content.goal}
                compact
              />
            ),
          },
        ),
        page(
          's2',
          'Vocabulary',
          'Guess the word',
          'No aeroporto. Olhe a imagem e tente dizer o nome em inglês.',
          <Vocabulary speech={speech} />,
        ),
        ...content.warmUps.map((item, i) =>
          page(
            's3' + (i + 1),
            'Warm up',
            'Choose the correct answer.',
            'Olhe a imagem e responda. Depois adivinhe.',
            <AirportWarmUp speech={speech} index={i} key={item.id} />,
            { width: 'focused' },
          ),
        ),
        page(
          's4',
          'Vocabulary',
          'Numbers 13 to 50',
          'Olhe o número e tente dizer em inglês.',
          <Vocabulary speech={speech} isNumbers />,
        ),
        ...content.pronunciation.map((pair, i) =>
          page(
            's5' + (i + 1),
            'Pronunciation',
            pair.t,
            'Ouça e diga qual número você ouviu.',
            <PronunciationPractice
              pair={pair}
              index={i}
              speech={speech}
              useSpokenWord
            />,
            { width: 'focused' },
          ),
        ),
        ...[0, 1].map((part) =>
          page(
            's6' + (part + 1),
            'Dialogue',
            `Immigration (${part + 1}/2)`,
            part === 0
              ? 'A Ana chega ao aeroporto de Nova York. Escute a imigração e leia junto.'
              : 'A conversa continua. Escute e leia junto.',
            <AirportDialogue speech={speech} part={part} />,
            { tools: <PlayDialogue speech={speech} part={part} /> },
          ),
        ),
        page(
          's63',
          'Dialogue',
          'Questions',
          'As frases estão certas? Diga Yes ou No e, se não, o certo. Clique em Answer para conferir.',
          <S.Questions>
            {content.comprehension.map((item, i) => (
              <S.Question key={item.q}>
                <S.Number>{i + 1}</S.Number>
                <S.Stack>
                  <strong>{item.q}</strong>
                  <AnswerDisclosure question={item.q} answer={item.a} />
                </S.Stack>
              </S.Question>
            ))}
          </S.Questions>,
        ),
        page(
          's7',
          'Grammar',
          'Question words',
          'Diga a palavra de pergunta antes de clicar na linha.',
          <QuestionWords speech={speech} />,
        ),
        ...[0, 1].map((part) =>
          page(
            's8' + (part + 1),
            'Your version',
            `Your trip (${part + 1}/2)`,
            swapped
              ? 'Agora você é o agente e faz as perguntas.'
              : 'Você chega a Nova York. Responda com a sua viagem: férias ou trabalho, quantos dias, qual hotel. Pode inventar.',
            <YourTrip
              speech={speech}
              part={part}
              swapped={swapped}
              done={done}
              onSwap={() => setSwapped(!swapped)}
              onMark={(id) => setDone((old) => toggleId(old, id))}
            />,
          ),
        ),
        page(
          's9',
          'Listening',
          'A message from Kim',
          'A Ana liga o celular no aeroporto. Tem um áudio da Kim. Leia as frases, ouça e diga se estão certas. Se não, diga o certo.',
          <AirportListening speech={speech} />,
          { width: 'exercise' },
        ),
        page(
          's10',
          'Review',
          'Right or wrong?',
          'A frase está certa? Se não, diga do jeito certo.',
          <AirportReview speech={speech} />,
        ),
        page(
          's11',
          'Role play',
          'At immigration',
          'Você chega aos Estados Unidos com uma viagem nova. Responda ao agente, pegue um táxi e, no fim, seja o agente.',
          <ArrivalNotes />,
          { width: 'exercise' },
        ),
        page(
          's12',
          'Homework',
          'Before next class',
          'Suas três tarefas na plataforma. A professora manda os links pelo chat.',
          <LessonHomework
            lesson="A1.07 · At the airport"
            items={homework}
            image={passport}
            studentPortalOrigin={studentPortalOrigin}
          />,
        ),
      ]}
    />
  )
}
