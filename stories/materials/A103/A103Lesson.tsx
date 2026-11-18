import { LessonCover, LessonDeck } from '../shared/LessonDeck'
import { PromptExercise, VocabularyExercise } from '../shared/LessonExercises'
import {
  HomeworkActivity,
  ListeningActivity,
  PronunciationActivity,
  ReviewActivity,
} from '../shared/LessonActivities'
import type { MaterialLessonDefinition } from '../shared/LessonDeck.types'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import kimAvatar from '../A101/assets/bust_kim.webp'
import {
  corrections,
  homework,
  homeworkMessage,
  source,
  vocabulary,
} from './A103.data'
import {
  FamilyWords,
  JobWarmUp,
  KimsPhoto,
  PeopleGrammar,
  PhotoDialogue,
  PhotosRolePlay,
  YourPhotos,
} from './A103.sections'
import type { A103LessonProps } from './A103.types'

const goal = 'Apresentar as pessoas da sua vida e dizer o que elas fazem.'

export function A103Lesson({
  initialPageId,
  learnerName = '',
  studentPortalOrigin,
}: A103LessonProps) {
  const definition: MaterialLessonDefinition = {
    code: 'A1.03',
    title: 'People in my life',
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
            code="A1 · Lesson 03"
            title="People in my life"
            goal={goal}
          />
        ),
        content: (
          <PromptExercise
            items={[
              {
                id: 'r1',
                prompt: 'What’s your name? How do you spell your last name?',
              },
              {
                id: 'r2',
                prompt: 'What’s your phone number? Do you use WhatsApp?',
              },
              { id: 'r3', prompt: 'Agora pergunte à sua professora.' },
            ]}
          />
        ),
      },
      {
        id: 's2',
        label: 'Vocabulary · Guess the job',
        eyebrow: 'Vocabulary',
        title: 'Guess the job',
        instruction:
          'Job é a profissão. Olhe a imagem e tente dizer a profissão em inglês.',
        content: (
          <VocabularyExercise
            items={vocabulary()}
            note="Em inglês a profissão vem com a ou an: She’s a doctor. He’s an engineer."
          />
        ),
      },
      {
        id: 's31',
        label: 'Warm up · Is he a teacher?',
        eyebrow: 'Warm up · 1 / 2',
        title: 'Choose the correct answer.',
        instruction:
          'Olhe a imagem e responda à pergunta. Depois responda sobre você.',
        width: 'focused',
        content: <JobWarmUp index={0} />,
      },
      {
        id: 's32',
        label: 'Warm up · Is she a doctor?',
        eyebrow: 'Warm up · 2 / 2',
        title: 'Choose the correct answer.',
        instruction:
          'Olhe a imagem e responda à pergunta. Depois responda sobre você.',
        width: 'focused',
        content: <JobWarmUp index={1} />,
      },
      {
        id: 's4',
        label: 'Vocabulary · Family words',
        eyebrow: 'Vocabulary',
        title: 'Family words',
        instruction:
          'Leia a palavra em português e diga em inglês. Depois clique para conferir.',
        width: 'wide',
        content: <FamilyWords />,
      },
      {
        id: 's5',
        label: 'Now you · Your family',
        eyebrow: 'Now you',
        title: 'Your family',
        instruction:
          'Responda sobre a sua família. Se precisar, a professora abre a ajuda.',
        width: 'reading',
        content: (
          <PromptExercise
            items={source.NF.map((item, index) => ({
              id: String(index),
              prompt: item.q + ('s' in item ? ` ${item.s}` : ''),
              answer: item.a,
            }))}
          />
        ),
      },
      ...source.PRW.map((pair, index) => ({
        id: `s${61 + index}`,
        label: `Pronunciation · ${pair.t}`,
        eyebrow: 'Pronunciation',
        title: pair.t,
        instruction: 'Ouça e diga qual palavra você ouviu.',
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
        id: 's71',
        label: 'Dialogue · Who’s this? (1/2)',
        eyebrow: 'Dialogue',
        title: 'Who’s this? (1/2)',
        instruction:
          'A Ana mostra à Kim as fotos do celular. Escute e leia junto.',
        width: 'reading',
        content: <PhotoDialogue part={1} />,
      },
      {
        id: 's72',
        label: 'Dialogue · Who’s this? (2/2)',
        eyebrow: 'Dialogue',
        title: 'Who’s this? (2/2)',
        instruction: 'A conversa continua. Escute e leia junto.',
        width: 'reading',
        content: <PhotoDialogue part={2} />,
      },
      {
        id: 's73',
        label: 'Dialogue · Questions',
        eyebrow: 'Dialogue',
        title: 'Questions',
        instruction:
          'Responda às perguntas sobre o diálogo. Clique em Answer para conferir.',
        content: (
          <PromptExercise
            items={source.DQ.map((item, index) => ({
              id: String(index),
              prompt: item.q,
              answer: item.a,
            }))}
          />
        ),
      },
      {
        id: 's8',
        label: 'Grammar · this and these',
        eyebrow: 'Grammar',
        title: 'this and these',
        instruction: 'Diga a palavra antes de clicar na linha.',
        width: 'wide',
        content: <PeopleGrammar />,
      },
      {
        id: 's9',
        label: 'Your version · Your photos',
        eyebrow: 'Your version',
        title: 'Your photos',
        instruction:
          'A mesma conversa, com as pessoas da sua vida. Se quiser, mostre uma foto na câmera.',
        width: 'reading',
        content: <YourPhotos />,
      },
      {
        id: 's10',
        label: 'Listening · A photo from Kim',
        eyebrow: 'Listening',
        title: 'A photo from Kim',
        instruction:
          'Leia as perguntas, ouça o áudio da Kim e responda. Se a resposta for No, diga o certo.',
        width: 'wide',
        content: (
          <Common.Stack>
            <KimsPhoto />
            <ListeningActivity
              avatarUrl={kimAvatar}
              message={source.LISTENING_TEXT}
              questions={source.LISTENING_QUESTIONS.map((item, index) => ({
                id: String(index),
                text: item.q,
                correct: item.a === 0 ? 'Yes' : 'No',
              }))}
              replyPrompt="Responda à Kim: fale de uma pessoa da sua vida."
              support={[
                'This is my …',
                'He’s a … / She’s a …',
                'He’s from … / She’s from …',
              ]}
              greeting={
                learnerName.trim()
                  ? `Hi ${learnerName.trim().split(/\s+/)[0]}! 👋`
                  : 'Hi! 👋'
              }
              timestamp="20:16"
            />
          </Common.Stack>
        ),
      },
      {
        id: 's11',
        label: 'Review · Right or wrong?',
        eyebrow: 'Review',
        title: 'Right or wrong?',
        instruction: 'A frase está certa? Se não, diga do jeito certo.',
        content: <ReviewActivity items={corrections} />,
      },
      {
        id: 's12',
        label: 'Role play · Photos on my phone',
        eyebrow: 'Role play',
        title: 'Photos on my phone',
        instruction:
          'Apresente três pessoas da sua vida. A professora anota. Depois ela erra, e você corrige. No fim, vocês trocam.',
        width: 'wide',
        content: <PhotosRolePlay />,
      },
      {
        id: 's13',
        label: 'Homework · Before next class',
        eyebrow: 'Homework',
        title: 'Before next class',
        instruction:
          'Suas três tarefas na plataforma. A professora manda os links pelo chat.',
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
