import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { DialogueTitle } from '../shared/DialogueTitle'
import { DialoguePlaybackAction } from '../shared/DialoguePlaybackAction'
import { useLessonPage } from '../shared/useLessonPage'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { MaterialTheme } from '../shared/MaterialTheme'
import { useEffect, useRef } from 'react'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { useB101Audio } from './useB101Audio'
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
function B101LessonContent({ initialPageId }: B101LessonProps) {
  const [pageId, setPageId] = useLessonPage(initialPageId, 'b1-01', order)
  const notePopup = useLessonNotesPopup('langy-notes:b1-01')

  const stage = useRef<HTMLDivElement>(null)
  useEffect(() => {
    stage.current
      ?.querySelector<HTMLElement>('[data-slide-viewport]')
      ?.focus({ preventScroll: true })
  }, [])
  const speech = useB101Audio()

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
  const audioTool = (context: string, id: string, part?: number) => (
    <DialoguePlaybackAction
      context={context}
      disabled={pageId !== id}
      status={
        speech.playingId?.startsWith('D.')
          ? speech.paused
            ? 'paused'
            : 'playing'
          : speech.error
            ? 'error'
            : 'idle'
      }
      onClick={() => playDialogue(part)}
    />
  )
  const pages = order.map((id) => {
    if (id === 's1')
      return {
        id,
        label: 'Review · Last class',
        content: (
          <S.Page
            layout="split"
            title={
              <>
                What have you <em>been doing?</em>
              </>
            }
            eyebrow="B1 · Lesson 01"
            instruction="Make plans with your teacher before catching up."
          >
            <SourceQuestions
              items={[
                'Would you like to come to dinner on Friday?',
                'OK! How about Saturday?',
                'Now ask your teacher: Would you like to …?',
              ].map((question) => ({ question }))}
            />
          </S.Page>
        ),
      }
    if (id === 's2' || id === 's21')
      return {
        id,
        label:
          id === 's2'
            ? 'Vocabulary · Busy weeks'
            : 'Vocabulary · Time for yourself',
        content: (
          <S.Page
            eyebrow="Vocabulary"
            title={id === 's2' ? 'Busy weeks' : 'Time for yourself'}
            instruction={
              id === 's2'
                ? 'Name the activities. Which ones can people do at home?'
                : 'Name the activities. Which ones need good weather?'
            }
          >
            <VocabularySection group={id === 's2' ? 0 : 1} />
          </S.Page>
        ),
      }
    if (id === 's31' || id === 's32' || id === 's33')
      return {
        id,
        label: `Warm up · ${Number(id.slice(2))}`,
        content: (
          <S.Page
            eyebrow="Warm up"
            title={
              [
                'What has she been doing?',
                'What has he been doing?',
                'Catch up with Leo',
              ][Number(id.slice(2)) - 1]
            }
            instruction="Say your answer, then choose and explain."
          >
            <WarmUpSection index={Number(id.slice(2)) - 1} speech={speech} />
          </S.Page>
        ),
      }
    if (id === 's4')
      return {
        id,
        label: 'Now you · Lately',
        content: (
          <S.Page
            eyebrow="Now you"
            title="Lately"
            instruction="Talk about your week and ask a follow-up question."
          >
            <SourceQuestions
              items={[
                { question: 'What have you been doing lately?' },
                {
                  question: 'How long have you been …ing?',
                  hint: 'Há quanto tempo você …? · For two weeks. · Since 2024.',
                },
                {
                  question: 'What have you completed this week?',
                },
                {
                  question:
                    'Now ask your teacher: What have you been doing lately? How long …?',
                },
              ]}
            />
          </S.Page>
        ),
      }
    if (id === 's51' || id === 's52')
      return {
        id,
        label: `Pronunciation · ${id === 's51' ? 'Running or been running?' : 'Painted or been painting?'}`,
        content: (
          <S.Page
            width="reading"
            eyebrow="Pronunciation"
            title={
              id === 's51'
                ? 'Running or been running?'
                : 'Painted or been painting?'
            }
            instruction="Listen, choose the sentence you hear, then repeat it."
          >
            <PronunciationSection
              index={id === 's51' ? 0 : 1}
              speech={speech}
            />
          </S.Page>
        ),
      }
    if (id === 's6' || id === 's62') {
      const part = id === 's6' ? 0 : 1
      return {
        id,
        label: `Dialogue · Welcome back! (${part + 1}/2)`,
        content: (
          <S.Page
            width="reading"
            density="dense"
            eyebrow="Dialogue"
            title={
              <DialogueTitle
                title={`Welcome back! (${part + 1}/2)`}
                action={audioTool(`Welcome back! (${part + 1}/2)`, id, part)}
              />
            }
            instruction={
              part === 0
                ? 'Kim is back from Korea. Listen to her conversation with Ana.'
                : 'Listen for what Ana has finished and how Kim feels.'
            }
          >
            <DialogueSection part={part} speech={speech} />
          </S.Page>
        ),
      }
    }
    if (id === 's61')
      return {
        id,
        label: 'Dialogue · Questions',
        content: (
          <S.Page
            width="reading"
            eyebrow="Dialogue"
            title={
              <DialogueTitle
                title="What did you find out?"
                action={audioTool('What did you find out?', id)}
              />
            }
            instruction="Answer about Kim and Ana, then connect the story to your life."
          >
            <ComprehensionSection />
          </S.Page>
        ),
      }
    if (id === 's7')
      return {
        id,
        label: 'Grammar · Been doing or done?',
        content: (
          <S.Page
            density="dense"
            eyebrow="Grammar"
            title="Been doing or done?"
            instruction="Compare the activity, its duration and the finished result."
          >
            <GrammarSection />
          </S.Page>
        ),
      }
    if (id === 's8')
      return {
        id,
        label: 'Your version · Kim is back',
        content: (
          <S.Page
            density="dense"
            width="conversation"
            eyebrow="Your version"
            title="Kim is back"
            instruction="Catch up with Kim using your own news, then swap roles."
          >
            <YourVersionSection speech={speech} />
          </S.Page>
        ),
      }
    if (id === 's9')
      return {
        id,
        label: 'Listening · A message from Leo',
        content: (
          <S.Page
            density="dense"
            eyebrow="Listening"
            title="A message from Leo"
            instruction="Listen to Leo, check the statements and correct the false ones."
          >
            <ListeningSection active={pageId === 's9'} />
          </S.Page>
        ),
      }
    if (id === 's10')
      return {
        id,
        label: 'Review · Right or wrong?',
        content: (
          <S.Page
            eyebrow="Review"
            title="Right or wrong?"
            instruction="Check each sentence and explain your corrections."
          >
            <CorrectionSection />
          </S.Page>
        ),
      }
    if (id === 's11')
      return {
        id,
        label: 'Role play · What has Kim been doing?',
        content: (
          <S.Page
            density="dense"
            eyebrow="Role play"
            title="What has Kim been doing?"
            instruction="Ask and guess. Then answer Kim’s questions about your life."
          >
            <RolePlaySection />
          </S.Page>
        ),
      }
    return {
      id,
      label: 'Homework · Before next class',
      content: (
        <S.Page
          width="reading"
          eyebrow="Homework"
          title="Before next class"
          instruction="Plan three short speaking practices before your next lesson."
        >
          <HomeworkSection />
        </S.Page>
      ),
    }
  })
  return (
    <S.Stage ref={stage}>
      <SlideDeck
        tabIndex={-1}
        label="B1.01 · What have you been doing?"
        previousPageLabel="Back"
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        pages={pages}
        overlay={
          <LessonNotes
            storageKey="langy-notes:b1-01"
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
        <S.AudioError role="status">{speech.error}</S.AudioError>
      ) : null}
    </S.Stage>
  )
}

export function B101Lesson(props: B101LessonProps) {
  return (
    <MaterialTheme>
      <B101LessonContent {...props} />
    </MaterialTheme>
  )
}
