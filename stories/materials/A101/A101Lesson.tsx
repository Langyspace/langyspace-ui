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
  AgeSection,
  TwoTruthsAndALie,
  SpeakingTimer,
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
            instruction="Look at the pictures. Guess the words."
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
            instruction="Choose the correct answer."
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
            instruction="Name the countries. Where are you from?"
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
            instruction="Listen, then read with your teacher."
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
            title="Comprehension questions"
            instruction="Answer the questions about the text."
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
            eyebrow="Grammar"
            title="Verb to be"
            instruction="Use be to say who someone is or how they feel."
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
            eyebrow="Grammar"
            title="Verb to be"
            instruction="Negatives and questions"
          >
            <GrammarNegative />
          </SlidePage>
        ),
      }
    if (id === 's73')
      return {
        id,
        label: 'Language tip · Age',
        content: (
          <SlidePage
            width="reading"
            eyebrow="Language tip"
            title="How old are you?"
            instruction="Use be to talk about age."
          >
            <AgeSection />
          </SlidePage>
        ),
      }
    if (id === 's74')
      return {
        id,
        label: 'Speaking · Two truths and one lie',
        content: (
          <SlidePage
            width="reading"
            eyebrow="Speaking"
            title="Two truths and one lie"
            instruction="Say three facts: two true, one false. Guess the lie. Then swap roles."
          >
            <TwoTruthsAndALie />
          </SlidePage>
        ),
      }
    if (id === 's75')
      return {
        id,
        label: 'Speaking · Now you',
        content: (
          <SlidePage
            width="standard"
            eyebrow="Speaking"
            title="Now you!"
            instruction="Introduce yourself in 30 seconds."
          >
            <SpeakingTimer key={pageId} active={pageId === id} />
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
            eyebrow="Speaking"
            title="True for you?"
            instruction="Is it true for you? If not, correct it."
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
            eyebrow="Practice"
            title="Questions & answers"
            instruction="Match the questions and answers. Read aloud."
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
            instruction="Fill in the gaps. Read with your teacher."
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
            instruction="Listen to Kim’s message and answer."
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
            instruction="Your teacher chooses a person. Ask questions. Guess who."
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
            eyebrow="Practice"
            title="Questions"
            instruction="Make a question."
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
            title="Let’s talk!"
            instruction="Ask your teacher these questions, then answer them."
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
          instruction="Practise before your next lesson."
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
