import { LessonOpening } from '../shared/LessonBookends'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { useLessonPage } from '../shared/useLessonPage'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { PromptExercise } from '../shared/LessonExercises'
import * as Shell from '../shared/Lesson.styles'
import {
  NumberVocabulary,
  AlphabetReference,
  AudioChoices,
  Dialogue,
  Grammar,
  ContactPractice,
  CallPractice,
  OutgoingCall,
  VoiceMessageChallenge,
  Homework,
} from './A102.sections'
import { dialogue, gaps, numberChecks, prompts, pageOrder } from './A102.data'
import { useLessonSpeech } from './useLessonSpeech'
import type { A102LessonProps } from './A102.types'

export function A102Lesson({
  initialPageId,
  learnerName = '',
}: A102LessonProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, 'a1-02', pageOrder)
  const speech = useLessonSpeech()
  const notes = useLessonNotesPopup('langy-material-notes-A1.02')
  const questions = (
    id: string,
    title: string,
    instruction: string,
    items: typeof prompts.review,
    eyebrow = 'Guided conversation',
  ) => ({
    id,
    label: `${eyebrow} · ${title}`,
    content: (
      <SlidePage
        eyebrow={eyebrow}
        title={title}
        instruction={instruction}
        width="reading"
      >
        <PromptExercise items={items} />
      </SlidePage>
    ),
  })
  const audioChoice = (id: string, index: 0 | 1 | 2) => {
    const line = numberChecks[index]
    const playing = speech.playingId === line.id
    return {
      id,
      label: `Listening · ${line.title}`,
      content: (
        <SlidePage
          width="focused"
          eyebrow="Listening"
          title={line.title}
          instruction="Listen, then choose the correct answer."
          titleAudio={{
            context:
              index === 2
                ? 'A last name spelled in English'
                : 'Kim says three digits',
            status: playing ? (speech.paused ? 'paused' : 'playing') : 'idle',
            disabled: pageId !== id || !speech.has(line),
            onClick: () =>
              playing ? speech.togglePause() : speech.speak([line]),
          }}
        >
          <AudioChoices index={index} />
        </SlidePage>
      ),
    }
  }
  const dialoguePage = (id: string, fillGaps = false) => {
    const lines = fillGaps ? gaps : dialogue
    const playing = lines.some((line) => line.id === speech.playingId)
    const title = fillGaps ? 'Complete the conversation' : 'A new contact'
    return {
      id,
      label: `Guided conversation · ${title}`,
      content: (
        <SlidePage
          width="reading"
          density="compact"
          questions={
            <PromptExercise
              items={fillGaps ? prompts.gaps : prompts.comprehension}
            />
          }
          eyebrow="Guided conversation"
          title={title}
          titleAudio={{
            context: 'Kim and Ana',
            status: playing ? (speech.paused ? 'paused' : 'playing') : 'idle',
            disabled: pageId !== id || !lines.every(speech.has),
            onClick: () =>
              playing ? speech.togglePause() : speech.speak(lines),
          }}
          instruction={
            fillGaps
              ? 'Say the missing words, then read with your teacher.'
              : 'Listen, then read with your teacher.'
          }
        >
          <Dialogue speech={speech} fillGaps={fillGaps} />
        </SlidePage>
      ),
    }
  }
  const pages = [
    {
      id: 's1',
      label: 'Review · Say hello',
      content: (
        <LessonOpening
          materialKey={'a1-02'}
          review={{
            title: 'Say hello',
            instruction:
              'Say your name, where you’re from and how you feel. Then ask your teacher',
            content: <PromptExercise items={prompts.review} />,
          }}
        />
      ),
    },
    {
      id: 's2',
      label: 'Vocabulary · Numbers 0–4',
      content: (
        <SlidePage
          width="standard"
          eyebrow="Vocabulary"
          title="Numbers 0–4"
          instruction="Say the numbers. Click to listen."
        >
          <NumberVocabulary speech={speech} />
        </SlidePage>
      ),
    },
    {
      id: 's3',
      label: 'Vocabulary · Numbers 5–9',
      content: (
        <SlidePage
          width="standard"
          eyebrow="Vocabulary"
          title="Numbers 5–9"
          instruction="Say the numbers. Click to listen."
        >
          <NumberVocabulary second speech={speech} />
        </SlidePage>
      ),
    },
    audioChoice('s4', 0),
    audioChoice('s5', 1),
    {
      id: 's6',
      label: 'Vocabulary · The alphabet',
      content: (
        <SlidePage
          width="wide"
          density="compact"
          eyebrow="Vocabulary"
          title="The alphabet"
          instruction="Click a letter to listen. Then spell your name."
        >
          <AlphabetReference speech={speech} />
        </SlidePage>
      ),
    },
    audioChoice('s7', 2),
    dialoguePage('s8'),
    {
      id: 's10',
      label: 'Grammar · My and your',
      content: (
        <SlidePage
          width="exercise"
          eyebrow="Grammar"
          title="My and your"
          instruction="Use my for yourself and your for the person you’re talking to."
        >
          <Grammar />
        </SlidePage>
      ),
    },
    dialoguePage('s11', true),
    {
      id: 's14',
      label: 'Phone call · Kim is calling',
      content: (
        <SlidePage
          width="standard"
          density="compact"
          eyebrow="Listening"
          title="Kim is calling"
          instruction="Answer the call. Confirm or correct Ana’s details."
        >
          <CallPractice active={pageId === 's14'} speech={speech} />
        </SlidePage>
      ),
    },
    {
      id: 's13',
      label: 'Speaking · Register for a class',
      content: (
        <SlidePage
          width="exercise"
          density="compact"
          eyebrow="Speaking"
          title="Register for a class"
          instruction="You’re joining an English class. Spell your name and give your number."
        >
          <ContactPractice />
        </SlidePage>
      ),
    },
    {
      id: 's15',
      label: 'Role play · Your turn to ask',
      content: (
        <SlidePage
          width="exercise"
          density="compact"
          eyebrow="Role play"
          title="Your turn to ask"
          instruction="Ask your teacher for their last name, spelling and phone number."
        >
          <OutgoingCall active={pageId === 's15'} />
        </SlidePage>
      ),
    },
    {
      id: 's16',
      label: 'Speaking · Leave a message',
      content: (
        <SlidePage
          width="exercise"
          density="compact"
          eyebrow="Speaking"
          title="Leave a message"
          instruction="Introduce yourself, spell your last name and give your number."
        >
          <VoiceMessageChallenge active={pageId === 's16'} />
        </SlidePage>
      ),
    },
    {
      id: 's17',
      label: 'Homework · Before next class',
      content: (
        <SlidePage
          layout="split"
          width="standard"
          eyebrow="Homework"
          title="Before next class"
          instruction="Practise a little before your next lesson."
        >
          <Homework />
        </SlidePage>
      ),
    },
  ]
  return (
    <Shell.Stage>
      <MaterialSlideDeck
        label={`A1.02 · Your name and number${learnerName ? ` · ${learnerName}` : ''}`}
        pages={pages}
        pageId={pageId}
        previousPageLabel="Back"
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        overlay={
          <LessonNotes
            storageKey="langy-material-notes-A1.02"
            open={notes.isOpen}
            popupWindow={notes.popup}
            preview={notes.preview}
            error={notes.error}
            onClose={notes.close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={(element) => notes.trigger(element)}
            open={notes.isOpen}
            onClick={notes.open}
          />
        }
      />
      {speech.error ? (
        <Shell.AudioError role="status">{speech.error}</Shell.AudioError>
      ) : null}
    </Shell.Stage>
  )
}
