import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { DialogueTitle } from '../shared/DialogueTitle'
import { DialoguePlaybackAction } from '../shared/DialoguePlaybackAction'
import { useLessonPage } from '../shared/useLessonPage'
import { MaterialTheme } from '../shared/MaterialTheme'

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
  kim,
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
  const notePopup = useLessonNotesPopup('langy-notes:a1-01')

  const speech = useLessonSpeech()
  const pages = order.map((id) => {
    const number = Number(id.slice(1))
    if (id === 's1')
      return {
        id,
        label: 'Vocabulary · Guess the word',
        content: (
          <Styled.VocabularyPage
            width="expanded"
            eyebrow="A1 LESSON 01"
            title="Introduce yourself"
            instruction="Observe as imagens e tente adivinhar as palavras."
          >
            <Styled.IntroVocabulary>
              <VocabularySection
                items={feelings}
                imageVariant="scene"
                speak={speech.speak}
              />
            </Styled.IntroVocabulary>
          </Styled.VocabularyPage>
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
              <DialogueTitle
                title="Nice to meet you"
                action={
                  <DialoguePlaybackAction
                    context="Nice to meet you"
                    disabled={pageId !== id}
                    status={
                      speech.playingId?.startsWith('R.')
                        ? speech.paused
                          ? 'paused'
                          : 'playing'
                        : speech.error
                          ? 'error'
                          : 'idle'
                    }
                    onClick={() => {
                      if (speech.playingId?.startsWith('R.'))
                        speech.togglePause()
                      else
                        speech.speak(
                          lesson.RT.map((line) => ({
                            id: line.id,
                            text: line.en,
                            speaker: line.who,
                          })),
                        )
                    }}
                  />
                }
              />
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
            eyebrow="Listening"
            title="A message from Kim"
            instruction="Ouça o áudio da Kim e responda."
          >
            <VoiceMessageDemo
              contact={{
                name: 'Kim',
                status: 'online',
                avatarUrl: kim,
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
            instruction="Conversem sobre você e alguém que você conhece. Depois, comece as perguntas. Na última situação, corrija a informação."
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
            open={notePopup.isOpen}
            popupWindow={notePopup.popup}
            preview={notePopup.preview}
            error={notePopup.error}
            onClose={notePopup.close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={(element) => {
              notePopup.trigger(element)
            }}
            open={notePopup.isOpen}
            onClick={notePopup.open}
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
