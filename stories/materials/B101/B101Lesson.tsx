import { useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { useLessonSpeech } from '../shared/useLessonSpeech'
import { order, dialogue } from './B101.data'
import {
  VocabularySection,
  WarmUpSection,
  PronunciationSection,
  CorrectionSection,
  SourceQuestions,
} from './B101.practice'
import {
  DialogueSection,
  ComprehensionSection,
  GrammarSection,
} from './B101.dialogue'
import {
  YourVersionSection,
  ListeningSection,
  RolePlaySection,
} from './B101.conversation'
import { LessonNotes, HomeworkSection } from './B101.utilities'
import type { B101LessonProps } from './B101.types'
import * as S from './B101.styles'
export function B101Lesson({
  initialPageId = 's1',
  studentPortalOrigin,
}: B101LessonProps) {
  const [pageId, setPageId] = useState(initialPageId),
    [notes, setNotes] = useState(false)
  const notesButton = useRef<HTMLButtonElement>(null),
    speech = useLessonSpeech()
  const closeNotes = () => {
    setNotes(false)
    notesButton.current?.focus()
  }
  const playDialogue = (part?: number) => {
    const lines =
      part === undefined
        ? dialogue
        : part === 0
          ? dialogue.slice(0, 6)
          : dialogue.slice(6)
    if (lines.some((line) => line.id === speech.playingId)) speech.togglePause()
    else speech.speak(lines)
  }
  const audioTool = (part?: number) => (
    <Button size="sm" variant="secondary" onClick={() => playDialogue(part)}>
      {speech.playingId?.startsWith('D.')
        ? speech.paused
          ? 'Resume'
          : 'Pause'
        : 'Listen to the dialogue'}
    </Button>
  )
  const pages = order.map((id) => {
    if (id === 's1')
      return {
        id,
        label: 'Review · Last class',
        content: (
          <SlidePage
            layout="split"
            title="Last class"
            eyebrow="Review"
            instruction={
              <>
                Answer your teacher. Then ask your teacher.
                <S.Hint>ask = perguntar</S.Hint>
              </>
            }
            lead={
              <S.Introduction>
                <S.Eyebrow>
                  <b>B1</b>Lesson 01
                </S.Eyebrow>
                <S.Hero>
                  What have you <em>been doing?</em>
                </S.Hero>
                <S.Goal>
                  <span aria-hidden="true">✦</span>
                  <p>
                    <b>Goal</b>Contar o que você tem feito ultimamente e há
                    quanto tempo, e perguntar o mesmo.
                  </p>
                </S.Goal>
              </S.Introduction>
            }
          >
            <SourceQuestions
              items={[
                'Would you like to come to dinner on Friday?',
                'OK! How about Saturday?',
                'Now ask your teacher: Would you like to …?',
              ].map((question) => ({ question }))}
            />
          </SlidePage>
        ),
      }
    if (id === 's2')
      return {
        id,
        label: 'Vocabulary · Busy weeks',
        content: (
          <SlidePage
            eyebrow="Vocabulary"
            title="Busy weeks"
            instruction="Look. What was he doing? What was she doing? Say the word."
          >
            <VocabularySection speech={speech} />
          </SlidePage>
        ),
      }
    if (id === 's31' || id === 's32' || id === 's33')
      return {
        id,
        label: `Warm up · ${Number(id.slice(2))}`,
        content: (
          <SlidePage
            eyebrow="Warm up"
            title="Choose the correct answer."
            instruction="Look. What has she been doing? Choose. Then it’s your turn."
          >
            <WarmUpSection index={Number(id.slice(2)) - 1} speech={speech} />
          </SlidePage>
        ),
      }
    if (id === 's4')
      return {
        id,
        label: 'Now you · Lately',
        content: (
          <SlidePage
            eyebrow="Now you"
            title="Lately"
            instruction="Answer about you. It can be true or not!"
          >
            <SourceQuestions
              items={[
                { question: 'What have you been doing lately?' },
                {
                  question: 'How long have you been …ing?',
                  hint: 'Há quanto tempo você …? · For two weeks. · Since 2024.',
                },
                {
                  question:
                    'Have you been working a lot this week? Even on the weekend?',
                },
                {
                  question:
                    'Now ask your teacher: What have you been doing lately? How long …?',
                },
              ]}
            />
          </SlidePage>
        ),
      }
    if (id === 's51' || id === 's52')
      return {
        id,
        label: `Pronunciation · ${id === 's51' ? 'Running or been running?' : 'Painted or been painting?'}`,
        content: (
          <SlidePage
            width="reading"
            eyebrow="Pronunciation"
            title={
              id === 's51'
                ? 'Running or been running?'
                : 'Painted or been painting?'
            }
            instruction="Listen. Which one did you hear? Say it, then click it."
          >
            <PronunciationSection
              index={id === 's51' ? 0 : 1}
              speech={speech}
            />
          </SlidePage>
        ),
      }
    if (id === 's6' || id === 's62') {
      const part = id === 's6' ? 0 : 1
      return {
        id,
        label: `Dialogue · Welcome back! (${part + 1}/2)`,
        content: (
          <SlidePage
            width="reading"
            density="dense"
            eyebrow="Dialogue"
            title={`Welcome back! (${part + 1}/2)`}
            instruction={
              part === 0
                ? 'Kim is back from Korea. She comes to Ana’s apartment. Listen and read along.'
                : 'The talk goes on. Listen and read along.'
            }
            tools={audioTool(part)}
          >
            <DialogueSection part={part} speech={speech} />
          </SlidePage>
        ),
      }
    }
    if (id === 's61')
      return {
        id,
        label: 'Dialogue · Questions',
        content: (
          <SlidePage
            width="reading"
            eyebrow="Dialogue"
            title="Questions"
            instruction="Answer the questions about Kim and Ana’s talk. If you don’t remember, listen again."
            tools={audioTool()}
          >
            <ComprehensionSection />
          </SlidePage>
        ),
      }
    if (id === 's7')
      return {
        id,
        label: 'Grammar · Been doing or done?',
        content: (
          <SlidePage
            density="dense"
            eyebrow="Grammar"
            title="Been doing or done?"
            instruction="Say it first. Then look."
          >
            <GrammarSection speech={speech} />
          </SlidePage>
        ),
      }
    if (id === 's8')
      return {
        id,
        label: 'Your version · Kim is back',
        content: (
          <SlidePage
            density="dense"
            width="conversation"
            eyebrow="Your version"
            title="Kim is back"
            instruction="Kim is back. Answer about your life."
          >
            <YourVersionSection speech={speech} />
          </SlidePage>
        ),
      }
    if (id === 's9')
      return {
        id,
        label: 'Listening · A message from Leo',
        content: (
          <SlidePage
            density="dense"
            eyebrow="Listening"
            title="A message from Leo"
            instruction="Leo has a message for Ana. Read, listen and answer: Yes or No? If No, say it right."
          >
            <ListeningSection active={pageId === 's9'} />
          </SlidePage>
        ),
      }
    if (id === 's10')
      return {
        id,
        label: 'Review · Right or wrong?',
        content: (
          <SlidePage
            eyebrow="Review"
            title="Right or wrong?"
            instruction="Right or wrong? If wrong, say it right."
          >
            <CorrectionSection speech={speech} />
          </SlidePage>
        ),
      }
    if (id === 's11')
      return {
        id,
        label: 'Role play · What has Kim been doing?',
        content: (
          <SlidePage
            density="dense"
            eyebrow="Role play"
            title="What has Kim been doing?"
            instruction="Ask and guess. Then answer Kim’s questions about your life."
          >
            <RolePlaySection />
          </SlidePage>
        ),
      }
    return {
      id,
      label: 'Homework · Before next class',
      content: (
        <SlidePage
          width="reading"
          eyebrow="Homework"
          title="Before next class"
          instruction="Three cards for you. Your teacher puts the links in the chat."
        >
          <HomeworkSection studentPortalOrigin={studentPortalOrigin} />
        </SlidePage>
      ),
    }
  })
  return (
    <S.Stage>
      <SlideDeck
        label="B1.01 · What have you been doing?"
        previousPageLabel="Back"
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        pages={pages}
        actions={
          <Button
            ref={notesButton}
            size="sm"
            variant="secondary"
            aria-expanded={notes}
            onClick={() => (notes ? closeNotes() : setNotes(true))}
          >
            Notes
          </Button>
        }
      />
      <LessonNotes open={notes} onClose={closeNotes} />
      {speech.error ? (
        <S.AudioError role="status">{speech.error}</S.AudioError>
      ) : null}
    </S.Stage>
  )
}
