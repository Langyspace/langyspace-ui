import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { useLessonPage } from '../shared/useLessonPage'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { PromptExercise } from '../shared/LessonExercises'
import * as Shell from '../shared/Lesson.styles'
import {
  ProduceVocabulary,
  MarketDialogue,
  LikeGrammar,
  Listening,
  KimsList,
  Homework,
} from './A105.sections'
import { dialogue, gaps, prompts, pageOrder } from './A105.data'
import { useLessonSpeech } from './useLessonSpeech'
import type { A105LessonProps } from './A105.types'

export function A105Lesson({
  initialPageId,
  learnerName = '',
  studentPortalOrigin,
}: A105LessonProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, 'a1-05', pageOrder)
  const speech = useLessonSpeech()
  const notes = useLessonNotesPopup('langy-material-notes-A1.05')
  const ask = (
    id: string,
    title: string,
    instruction: string,
    items: typeof prompts.warmup,
    eyebrow = 'Speaking',
  ) => ({
    id,
    label: `${eyebrow} · ${title}`,
    content: (
      <SlidePage
        width="reading"
        eyebrow={eyebrow}
        title={title}
        instruction={instruction}
      >
        <PromptExercise items={items} />
      </SlidePage>
    ),
  })
  const dialoguePage = (id: string, title: string, fillGaps = false) => {
    const lines = fillGaps ? gaps : dialogue
    const playing = lines.some((line) => line.id === speech.playingId)
    return {
      id,
      label: `Guided conversation · ${title}`,
      content: (
        <SlidePage
          width="reading"
          density="compact"
          eyebrow="Guided conversation"
          title={title}
          titleAudio={{
            context: fillGaps
              ? 'Kim and Ana: complete the conversation'
              : 'Kim and Ana at the market',
            status: playing
              ? speech.paused
                ? 'paused'
                : 'playing'
              : speech.error
                ? 'error'
                : 'idle',
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
          <MarketDialogue speech={speech} fillGaps={fillGaps} />
        </SlidePage>
      ),
    }
  }
  const pages = [
    ask(
      's1',
      'At the street market',
      'Talk about fruit and where you buy it.',
      prompts.warmup,
      'A1 LESSON 05 · Warm up',
    ),
    {
      id: 's2',
      label: 'Vocabulary · Fruit',
      content: (
        <SlidePage
          width="expanded"
          eyebrow="Vocabulary"
          title="Fruit"
          instruction="Look at the pictures. Guess the words."
        >
          <ProduceVocabulary fruit speech={speech} />
        </SlidePage>
      ),
    },
    ask(
      's3',
      'What do you like?',
      'Choose, answer and ask your teacher.',
      prompts.preferences,
    ),
    {
      id: 's4',
      label: 'Vocabulary · Vegetables',
      content: (
        <SlidePage
          width="expanded"
          eyebrow="Vocabulary"
          title="Vegetables"
          instruction="Look at the pictures. Guess the words."
        >
          <ProduceVocabulary fruit={false} speech={speech} />
        </SlidePage>
      ),
    },
    {
      id: 's5',
      label: 'Grammar · like and likes',
      content: (
        <SlidePage
          width="exercise"
          eyebrow="Grammar"
          title="Like and likes"
          instruction="Compare the forms. Make your own examples."
        >
          <LikeGrammar />
        </SlidePage>
      ),
    },
    dialoguePage('s6', 'At the street market'),
    ask(
      's61',
      'Comprehension questions',
      'Answer the questions about the text.',
      prompts.comprehension,
      'Guided conversation',
    ),
    dialoguePage('s8', 'At the market with Kim', true),
    ask(
      's81',
      'Comprehension questions',
      'Answer the questions about the text.',
      prompts.gaps,
      'Guided conversation',
    ),
    ask(
      's82',
      'Personal questions',
      'Answer about yourself. Ask your teacher too.',
      prompts.personal,
      'Guided conversation',
    ),
    {
      id: 's9',
      label: 'Listening · A message from Kim',
      content: (
        <SlidePage
          width="standard"
          density="compact"
          eyebrow="Listening"
          title="A message from Kim"
          instruction="Listen to Kim and answer the questions."
        >
          <Listening active={pageId === 's9'} />
        </SlidePage>
      ),
    },
    ask(
      's91',
      'Reply to Kim',
      'Use the prompts to make a short reply.',
      prompts.reply,
      'Speaking',
    ),
    ask(
      's10',
      'Make it correct',
      'Correct each sentence. Then make it true for you.',
      prompts.review,
      'Practice',
    ),
    {
      id: 's11',
      label: 'Role play · Kim’s list',
      content: (
        <SlidePage
          width="exercise"
          density="compact"
          eyebrow="Role play"
          title="Kim’s list"
          instruction="Choose two fruits, ask the prices and swap roles."
        >
          <KimsList />
        </SlidePage>
      ),
    },
    ask(
      's111',
      'Let’s talk!',
      'Ask and answer. Add one detail.',
      prompts.conversation,
      'Conversation',
    ),
    {
      id: 's12',
      label: 'Homework · Before next class',
      content: (
        <SlidePage
          width="standard"
          eyebrow="Homework"
          title="Before next class"
          instruction="Keep practising in your student portal."
        >
          <Homework studentPortalOrigin={studentPortalOrigin} />
        </SlidePage>
      ),
    },
  ]
  return (
    <Shell.Stage>
      <MaterialSlideDeck
        label={`A1.05 · At the street market${learnerName ? ` · ${learnerName}` : ''}`}
        pages={pages}
        pageId={pageId}
        previousPageLabel="Back"
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        overlay={
          <LessonNotes
            storageKey="langy-material-notes-A1.05"
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
