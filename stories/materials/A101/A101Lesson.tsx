import { useState } from 'react'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { VoiceMessageDemo } from '../../components/VoiceMessage/VoiceMessageDemo'
import {
  feelings,
  countries,
  warmUps,
  order,
  itemAt,
  lesson,
  image,
} from './A101.data'
import {
  VocabularySection,
  WarmUpSection,
  DialogueSection,
  DialogueQuestions,
  GrammarTable,
  GrammarNegative,
  TrueForYou,
  MatchingSection,
  GuessWho,
  MakeQuestions,
  ConversationSection,
  HomeworkSection,
} from './A101.sections'
import { TeacherNotes } from './A101.notes'
import { useLessonSpeech } from './useLessonSpeech'
import voice from './assets/kim-demo.mp3'
import * as Styled from './A101.styles'
import type { A101LessonProps } from './A101.types'
export function A101Lesson({
  initialPageId = 's1',
  learnerName = '',
}: A101LessonProps) {
  const [pageId, setPageId] = useState(initialPageId)
  const speech = useLessonSpeech()
  const pages = order.map((id) => {
    const number = Number(id.slice(1))
    if (id === 's1')
      return {
        id,
        label: 'Vocabulary · Guess the word',
        content: (
          <SlidePage
            width="standard"
            lead={
              <Styled.Introduction>
                <Styled.LessonEyebrow>
                  <b>A1</b>Lesson 01
                </Styled.LessonEyebrow>
                <Styled.Hero>
                  Introduce <em>yourself</em>
                </Styled.Hero>
                <Styled.Goal>
                  <Styled.GoalStar aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M12 1.5c.5 5.6 4.9 10 10.5 10.5-5.6.5-10 4.9-10.5 10.5C11.5 16.9 7.1 12.5 1.5 12 7.1 11.5 11.5 7.1 12 1.5z"
                        fill="currentColor"
                      />
                    </svg>
                  </Styled.GoalStar>
                  <p>
                    <b>Goal</b>Dizer o seu nome, de onde você é e como você
                    está.
                  </p>
                </Styled.Goal>
              </Styled.Introduction>
            }
            eyebrow="Vocabulary"
            title="Guess the word"
            instruction="Observe a imagem e tente adivinhar a palavra."
          >
            <Styled.IntroVocabulary>
              <VocabularySection
                items={feelings}
                imageVariant="scene"
                speak={speech.speak}
              />
            </Styled.IntroVocabulary>
          </SlidePage>
        ),
      }
    if ((number >= 21 && number <= 26) || (number >= 51 && number <= 56)) {
      const feeling = number < 30
      const slot = feeling ? number - 21 : number - 51
      return {
        id,
        label: `Warm up · ${feeling ? 'Feelings' : 'Countries'} ${slot + 1}`,
        content: (
          <SlidePage
            width="focused"
            eyebrow="Warm up"
            title="Choose the correct answer."
            instruction="Escolha a resposta correta de acordo com a imagem."
          >
            <WarmUpSection
              item={itemAt(warmUps, (feeling ? 0 : 6) + slot)}
              speak={speech.speak}
            />
          </SlidePage>
        ),
      }
    }
    if (id === 's4')
      return {
        id,
        label: 'Vocabulary · Guess the country',
        content: (
          <SlidePage
            width="standard"
            eyebrow="Vocabulary"
            title="Guess the country"
            instruction="Observe a bandeira e tente adivinhar o nome do país."
          >
            <VocabularySection items={countries} speak={speech.speak} />
          </SlidePage>
        ),
      }
    if (id === 's6')
      return {
        id,
        label: 'Guided conversation · Nice to meet you',
        content: (
          <SlidePage
            width="reading"
            density="compact"
            eyebrow="Guided conversation"
            instruction="Escute o áudio e leia com a sua professora. Clique em uma fala para ver em português."
            title={
              <Styled.TitleAudio>
                Nice to meet you
                <IconButton
                  variant="brand"
                  size="md"
                  aria-label={
                    speech.playingId?.startsWith('R.')
                      ? speech.paused
                        ? 'Continuar conversa'
                        : 'Pausar conversa'
                      : 'Ouvir conversa completa'
                  }
                  aria-pressed={
                    Boolean(speech.playingId?.startsWith('R.')) &&
                    !speech.paused
                  }
                  onClick={() => {
                    if (speech.playingId?.startsWith('R.')) speech.togglePause()
                    else
                      speech.speak(
                        lesson.RT.map((line) => ({
                          id: line.id,
                          text: line.en,
                          speaker: line.who,
                        })),
                      )
                  }}
                >
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {speech.playingId?.startsWith('R.') && !speech.paused ? (
                      <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                    ) : (
                      <path d="M7 4v16l13-8z" />
                    )}
                  </svg>
                </IconButton>
              </Styled.TitleAudio>
            }
          >
            <DialogueSection
              playingId={speech.playingId}
              speak={speech.speak}
            />
          </SlidePage>
        ),
      }
    if (id === 's14')
      return {
        id,
        label: 'Guided conversation · Questions',
        content: (
          <SlidePage
            width="reading"
            eyebrow="Guided conversation"
            title="Questions"
            instruction="Responda às perguntas sobre o diálogo. Use Answer para conferir."
          >
            <DialogueQuestions />
          </SlidePage>
        ),
      }
    if (id === 's71')
      return {
        id,
        label: 'Grammar · Verb to be',
        content: (
          <SlidePage
            eyebrow="Grammar · Verb to be"
            title="I am, you are, she is…"
            instruction="Clique no exemplo para ver a tradução."
          >
            <GrammarTable />
          </SlidePage>
        ),
      }
    if (id === 's72')
      return {
        id,
        label: 'Grammar · Negative and questions',
        content: (
          <SlidePage
            width="wide"
            eyebrow="Grammar · Verb to be"
            title="Negative and questions"
            instruction="Clique na frase para ver a tradução."
          >
            <GrammarNegative />
          </SlidePage>
        ),
      }
    if (id === 's16')
      return {
        id,
        label: 'Practice · True for you',
        content: (
          <SlidePage
            width="wide"
            eyebrow="Practice · Speaking"
            title="True for you? If not, say it in the negative"
            instruction="Leia a frase. Se não for verdade para você, diga na negativa."
          >
            <TrueForYou />
          </SlidePage>
        ),
      }
    if (id === 's17')
      return {
        id,
        label: 'Practice · Match',
        content: (
          <SlidePage
            width="wide"
            eyebrow="Practice · Questions & answers"
            title="Match the questions and the answers"
            instruction="Clique numa pergunta e depois na resposta certa."
          >
            <MatchingSection />
          </SlidePage>
        ),
      }
    if (id === 's8')
      return {
        id,
        label: 'Guided conversation · Complete',
        content: (
          <SlidePage
            width="reading"
            eyebrow="Guided conversation"
            title="Nice to meet you"
            instruction="Complete os espaços e depois leia o diálogo com a sua professora."
          >
            <DialogueSection gaps speak={speech.speak} />
          </SlidePage>
        ),
      }
    if (id === 's9')
      return {
        id,
        label: 'Listening Practice',
        content: (
          <SlidePage
            width="standard"
            title="Listening Practice"
            instruction="Ouça o áudio da Kim e responda."
          >
            <VoiceMessageDemo
              contact={{
                name: 'Kim',
                status: 'online',
                avatarUrl: image('bust_kim'),
              }}
              audio={{
                id: 'a101-kim-demo',
                src: voice,
                transcript:
                  'Hi! How are you? I’m really tired, and I’m also hungry!',
                timestamp: '19:41',
              }}
              greeting={{
                text: learnerName.trim()
                  ? `Hi ${learnerName.trim().split(/\s+/)[0]}! 👋`
                  : 'Hi! 👋',
                timestamp: '19:40',
              }}
              active={pageId === 's9'}
            />
          </SlidePage>
        ),
      }
    if (id === 's10')
      return {
        id,
        label: 'Role play · Guess who',
        content: (
          <SlidePage
            width="standard"
            eyebrow="Role play"
            title="Guess who"
            instruction="A professora escolhe uma pessoa em segredo. Faça as perguntas e descubra quem é."
          >
            <GuessWho />
          </SlidePage>
        ),
      }
    if (id === 's18')
      return {
        id,
        label: 'Practice · Make it a question',
        content: (
          <SlidePage
            width="exercise"
            eyebrow="Practice · Questions"
            title="Make it a question"
            instruction="Inverta a ordem: comece a pergunta com am, is ou are. Depois clique para conferir."
          >
            <MakeQuestions />
          </SlidePage>
        ),
      }
    if (id === 's15')
      return {
        id,
        label: 'Conversation · Let’s talk',
        content: (
          <SlidePage
            width="conversation"
            eyebrow="Conversation"
            title="Let’s talk"
            instruction="Escolham as perguntas e conversem. Responda sobre você e devolva a pergunta: And you?"
          >
            <ConversationSection />
          </SlidePage>
        ),
      }
    return {
      id,
      label: 'Homework · Before next class',
      content: (
        <SlidePage
          width="standard"
          eyebrow="Homework"
          title="Before next class"
          instruction="Continue praticando no espaço do aluno."
        >
          <HomeworkSection />
        </SlidePage>
      ),
    }
  })
  return (
    <Styled.Stage>
      <MaterialSlideDeck
        previousPageLabel="Back"
        label="A1.01 · Introduce yourself"
        pages={pages}
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        actions={<TeacherNotes pageId={pageId} />}
      />
      {speech.error ? (
        <Styled.AudioError role="status">{speech.error}</Styled.AudioError>
      ) : null}
    </Styled.Stage>
  )
}
