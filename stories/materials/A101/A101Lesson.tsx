import { useLessonPage } from '../shared/useLessonPage'
import { MaterialTheme } from '../shared/MaterialTheme'
import { useRef, useState } from 'react'
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
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { useLessonSpeech } from './useLessonSpeech'
import voice from './assets/kim-demo.mp3'
import * as Styled from './A101.styles'
import type { A101LessonProps } from './A101.types'
function A101LessonContent({
  initialPageId,
  learnerName = '',
}: A101LessonProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, 'a1-01', order)
  const [notes, setNotes] = useState(false)
  const notesButton = useRef<HTMLButtonElement>(null)
  const closeNotes = () => {
    setNotes(false)
    notesButton.current?.focus()
  }
  const speech = useLessonSpeech()
  const pages = order.map((id) => {
    const number = Number(id.slice(1))
    if (id === 's1')
      return {
        id,
        label: 'Vocabulary · Guess the word',
        content: (
          <SlidePage
            width="expanded"
            eyebrow="A1 · Lesson 01 · Feelings"
            title="Introduce yourself"
            instruction="Observe as cenas, diga como cada pessoa está e clique para conferir."
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
            width="expanded"
            eyebrow="Warm up"
            title={itemAt(warmUps, (feeling ? 0 : 6) + slot).t}
            instruction="Diga a resposta em voz alta e escolha a opção."
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
            title="Where are you from?"
            instruction="Diga o país de cada bandeira e depois conte de onde você é."
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
            instruction="Escute e depois leia com a professora, uma personagem para cada uma."
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
            title="What did they say?"
            instruction="Responda sobre Kim, Ana e Lukas; confira a resposta se precisar."
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
            instruction="Use am, is ou are para falar de nome, origem e sentimentos."
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
            instruction="Use not para negar; comece a pergunta com am, is ou are."
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
            title="True for you?"
            instruction="Diga se a frase é verdade para você; se não for, corrija na negativa."
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
            title="Ask and answer"
            instruction="Associe cada pergunta à resposta e leia a dupla em voz alta."
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
            title="Complete the conversation"
            instruction="Diga a palavra que falta e depois leia o diálogo com a professora."
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
            instruction="Transforme a frase em pergunta; clique para conferir depois de falar."
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
          instruction="Combine com a professora como repetir estas três práticas durante a semana."
        >
          <HomeworkSection />
        </SlidePage>
      ),
    }
  })
  return (
    <Styled.Stage>
      <MaterialSlideDeck
        tabIndex={-1}
        previousPageLabel="Back"
        label="A1.01 · Introduce yourself"
        pages={pages}
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        overlay={
          <LessonNotes
            storageKey="langy-notes:a1-01"
            open={notes}
            onClose={closeNotes}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={notesButton}
            open={notes}
            onClick={() => (notes ? closeNotes() : setNotes(true))}
          />
        }
      />
      {speech.error ? (
        <Styled.AudioError role="status">{speech.error}</Styled.AudioError>
      ) : null}
    </Styled.Stage>
  )
}

export function A101Lesson(props: A101LessonProps) {
  return (
    <MaterialTheme>
      <A101LessonContent {...props} />
    </MaterialTheme>
  )
}
