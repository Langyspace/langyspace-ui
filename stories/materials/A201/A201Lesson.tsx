import { useState } from 'react'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { useLessonPage } from '../shared/useLessonPage'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { PromptExercise } from '../shared/LessonExercises'
import * as Shell from '../shared/Lesson.styles'
import {
  VocabularySection,
  TimeExpressions,
  WarmupSection,
  GrammarSection,
  PictureTalk,
  MimeSection,
  ConversationSection,
  HomeworkSection,
} from './A201.practice'
import { DialoguePage } from './A201.conversation'
import { ListeningSection } from './A201.listening'
import { content, order, prompts, toggleId } from './A201.data'
import { useLessonSpeech } from './useLessonSpeech'
import * as S from './A201.styles'
import type { A201LessonProps } from './A201.types'

export function A201Lesson({ initialPageId }: A201LessonProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, 'a2-01', order)
  const notePopup = useLessonNotesPopup('langy-notes:a2-01')
  const speech = useLessonSpeech()
  const [gaps, setGaps] = useState<string[]>([])
  const onGapToggle = (id: string) => setGaps((ids) => toggleId(ids, id))
  const pages = order.map((id) => {
    const number = Number(id.slice(1))
    if (id === 's1')
      return {
        id,
        label: 'Vocabulary · What Are You Doing?',
        content: (
          <S.VocabularyPage
            width="expanded"
            eyebrow="A2 LESSON 01"
            title={content.title}
            instruction="Look at the pictures. Guess the actions."
          >
            <S.VocabularyBody>
              <VocabularySection speech={speech} />
            </S.VocabularyBody>
          </S.VocabularyPage>
        ),
      }
    if (id === 's2')
      return {
        id,
        label: 'Vocabulary · Time expressions',
        content: (
          <SlidePage
            width="standard"
            eyebrow="Vocabulary"
            title="Time Expressions"
            instruction="How do you say that in English?"
          >
            <TimeExpressions speech={speech} />
          </SlidePage>
        ),
      }
    if (number >= 3 && number <= 8)
      return {
        id,
        label: `Warm up · Actions ${number - 2}`,
        content: (
          <S.WarmupPage
            width="expanded"
            eyebrow="Warm up"
            title={content.warmups[number - 3]!.question}
            instruction="Choose the correct answer."
          >
            <WarmupSection index={number - 3} />
          </S.WarmupPage>
        ),
      }
    if (id === 's9')
      return {
        id,
        label: 'Grammar · Now vs. Usually',
        content: (
          <SlidePage
            width="exercise"
            eyebrow="Grammar"
            title="Now vs. Usually"
            instruction="Compare what is happening now with a routine."
          >
            <GrammarSection />
          </SlidePage>
        ),
      }
    if (id === 's10')
      return {
        id,
        label: 'Picture talk · What Is Everyone Doing?',
        content: (
          <SlidePage
            width="exercise"
            eyebrow="Picture talk"
            title="What Is Everyone Doing?"
            instruction="Look at the park. Describe what each person is doing."
          >
            <PictureTalk speech={speech} />
          </SlidePage>
        ),
      }
    if (id === 's11')
      return {
        id,
        label: 'Guided conversation · Now vs. Usually',
        content: (
          <DialoguePage
            title="Now vs. Usually"
            context="Anna and Ben"
            active={pageId === id}
            lines={content.dialogue}
            speech={speech}
            emphasis
            questions={
              <PromptExercise
                items={prompts(
                  content.firstComprehension,
                  'anna-ben.questions',
                )}
              />
            }
          />
        ),
      }
    if (id === 's12')
      return {
        id,
        label: 'Guided conversation · Fill in the Blanks',
        content: (
          <DialoguePage
            title="Fill in the Blanks"
            context="Emma and Lucas"
            active={pageId === id}
            lines={content.gaps}
            speech={speech}
            gaps={gaps}
            onGapToggle={onGapToggle}
            questions={
              <PromptExercise
                items={prompts(
                  content.gapComprehension,
                  'emma-lucas.questions',
                )}
              />
            }
          />
        ),
      }
    if (id === 's14')
      return {
        id,
        label: 'Guided conversation · Personal Questions',
        content: (
          <SlidePage
            width="reading"
            eyebrow="Guided conversation"
            title="Personal questions"
            instruction="Answer the questions about yourself."
          >
            <PromptExercise
              items={prompts(content.personal, 'emma-lucas.personal')}
            />
          </SlidePage>
        ),
      }
    if (id === 's15')
      return {
        id,
        label: "Roleplay · Guess What I'm Doing!",
        content: (
          <SlidePage
            width="exercise"
            eyebrow="Roleplay"
            title="Guess What I'm Doing!"
            instruction={content.mimeInstructions.join(' ')}
          >
            <MimeSection />
          </SlidePage>
        ),
      }
    if (id === 's151')
      return {
        id,
        label: 'Listening Practice · A message from Anna',
        content: (
          <SlidePage
            width="standard"
            eyebrow="Listening"
            title="A message from Anna"
            instruction="Listen to Anna's message and answer the questions."
          >
            <ListeningSection active={pageId === id} />
          </SlidePage>
        ),
      }
    if (number >= 16 && number <= 19)
      return {
        id,
        label: `Conversation · Questions ${(number - 16) * 5 + 1}–${(number - 15) * 5}`,
        content: (
          <SlidePage
            width="conversation"
            eyebrow="Conversation"
            title="Let's Talk!"
            instruction={`Questions ${(number - 16) * 5 + 1}–${(number - 15) * 5}. Ask and answer. Give details.`}
          >
            <ConversationSection index={number - 16} />
          </SlidePage>
        ),
      }
    return {
      id,
      label: 'Homework · Real-Life Observation',
      content: (
        <SlidePage
          width="standard"
          eyebrow="Homework"
          title={content.homework.title}
          instruction="Describe what people are doing in a short audio."
        >
          <HomeworkSection />
        </SlidePage>
      ),
    }
  })
  return (
    <Shell.Stage>
      <MaterialSlideDeck
        label="A2.01 · What Are You Doing?"
        previousPageLabel="Back"
        pages={pages}
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        overlay={
          <LessonNotes
            storageKey="langy-notes:a2-01"
            open={notePopup.isOpen}
            popupWindow={notePopup.popup}
            preview={notePopup.preview}
            error={notePopup.error}
            onClose={notePopup.close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={(element) => notePopup.trigger(element)}
            open={notePopup.isOpen}
            onClick={notePopup.open}
          />
        }
      />
      {speech.error ? (
        <Shell.AudioError role="status">{speech.error}</Shell.AudioError>
      ) : null}
    </Shell.Stage>
  )
}
