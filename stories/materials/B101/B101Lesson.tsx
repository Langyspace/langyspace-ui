import { LessonOpening } from '../shared/LessonBookends'
import { WarmupPage } from '../shared/WarmupPage.styles'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { DialogueTitle } from '../shared/DialogueTitle'
import { DialoguePlaybackAction } from '../shared/DialoguePlaybackAction'
import { useLessonPage } from '../shared/useLessonPage'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { MaterialTheme } from '../shared/MaterialTheme'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { withFreeConversationEnding } from '../shared/freeConversationEnding'
import { useB101Audio } from './useB101Audio'
import { order, dialogue } from './B101.data'
import {
  VocabularySection,
  WarmUpSection,
  ContextPracticeSection,
  contextPractice,
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
  const [conversationSwapped, setConversationSwapped] = useState(false)
  const [conversationSupport, setConversationSupport] = useState(false)

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
        label: 'Review · Make plans',
        content: (
          <LessonOpening
            materialKey={'b1-01'}
            review={{
              title: 'Make plans',
              instruction:
                'Invite your teacher to do something and agree on a day',
              content: (
                <SourceQuestions
                  items={[
                    'Would you like to come to dinner on Friday?',
                    'OK! How about Saturday?',
                    'Now ask your teacher: Would you like to …?',
                  ].map((question) => ({ question }))}
                />
              ),
            }}
          />
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
            <VocabularySection
              group={id === 's2' ? 0 : 1}
              active={pageId === id}
            />
          </S.Page>
        ),
      }
    if (id === 's31' || id === 's32' || id === 's33')
      return {
        id,
        label:
          id === 's33'
            ? 'Conversation · Catch up with Leo'
            : `Warm up · ${Number(id.slice(2))}`,
        content: (
          <WarmupPage
            as={S.Page}
            eyebrow={id === 's33' ? 'Conversation' : 'Warm up'}
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
          </WarmupPage>
        ),
      }
    if (id === 's4')
      return {
        id,
        label: 'Now you · Your recent activities',
        content: (
          <S.Page
            eyebrow="Now you"
            title="Your recent activities"
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
    if (id === 's51' || id === 's52') {
      const index = id === 's51' ? 0 : 1
      const scenario = contextPractice[index]!
      return {
        id,
        label:
          id === 's51'
            ? 'Conversation · Keep the conversation going'
            : 'Practice · What have you finished?',
        content: (
          <WarmupPage
            as={S.Page}
            density="dense"
            eyebrow={id === 's51' ? 'Conversation' : 'Practice'}
            title={scenario.title}
            instruction={scenario.instruction}
          >
            <ContextPracticeSection index={index} />
          </WarmupPage>
        ),
      }
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
            questions={<ComprehensionSection part={part} />}
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
    if (id === 's7')
      return {
        id,
        label: 'Grammar · Activity or finished result?',
        content: (
          <S.Page
            density="dense"
            eyebrow="Grammar"
            title="Activity or finished result?"
            instruction="Compare a recent activity with a finished result"
          >
            <GrammarSection />
          </S.Page>
        ),
      }
    if (id === 's8')
      return {
        id,
        label: 'Your version · Catch up with Kim',
        content: (
          <S.Page
            density="dense"
            columns={1}
            eyebrow="Your version"
            title={
              conversationSwapped
                ? 'You’re back: ask your teacher'
                : 'Tell Kim about your week'
            }
            instruction={
              conversationSwapped
                ? 'You ask; your teacher answers. Ask about recent activities and duration, then share news from your trip.'
                : 'You answer; your teacher plays Kim. Talk about recent activities, duration and finished work. Swap roles to become the traveller and ask the questions.'
            }
            tools={
              <S.Row $justify="end">
                <Button
                  variant="secondary"
                  size="sm"
                  aria-pressed={conversationSwapped}
                  onClick={() => {
                    speech.stop()
                    setConversationSwapped(!conversationSwapped)
                    setConversationSupport(false)
                  }}
                >
                  {conversationSwapped ? '⇄ Swap back' : '⇄ Swap roles'}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  aria-pressed={conversationSupport}
                  onClick={() => setConversationSupport(!conversationSupport)}
                >
                  {conversationSupport ? 'Hide support' : 'Show support'}
                </Button>
              </S.Row>
            }
          >
            <YourVersionSection
              swapped={conversationSwapped}
              support={conversationSupport}
            />
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
            density="dense"
            columns={3}
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
            instruction="Choose a day. Ask Kim three questions; your teacher answers from the card."
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
          layout="split"
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
        feedbackSounds
        tabIndex={-1}
        label="B1.01 · What have you been doing?"
        previousPageLabel="Back"
        pageId={pageId}
        onPageChange={(id) => {
          if (id !== pageId) speech.stop()
          setPageId(id)
        }}
        pages={withFreeConversationEnding(pages)}
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
