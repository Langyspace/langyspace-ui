import {
  withLessonOpeningPages,
  withLessonOpeningPageIds,
} from '../shared/lessonOpeningPolicy'
import { LessonPracticePlan } from '../shared/LessonBookends'
import { WarmupPage } from '../shared/WarmupPage.styles'
import { DialogueTitle } from '../shared/DialogueTitle'
import { RecordedDialoguePlayback } from '../shared/RecordedDialoguePlayback'
import { MaterialTheme } from '../shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { B201Shell } from './B201Shell'
import {
  ComprehensionPractice,
  SourceQuestions,
} from '../shared/LessonPractice'
import type { LessonProps } from '../shared/Lesson.types'
import {
  VocabularySection,
  WarmUpSection,
  WordTableSection,
  CorrectionSection,
  ChronologySection,
  MissingDetailSection,
  DialogueSection,
} from './B201.practice'
import {
  YourVersionSection,
  ListeningSection,
  RolePlaySection,
} from './B201.conversation'
import { content, order, comprehension, warmUps } from './B201.data'
import * as S from './B201.styles'
const review = [
  {
    question: 'What do you usually do when you get lost on a trip?',
    hint: 'I usually… / One thing that helps is…',
  },
  {
    question: 'Describe a time a plan changed unexpectedly.',
    hint: 'I was… when… / I had planned to…',
  },
  {
    question: 'Ask your teacher about a journey that went wrong.',
    hint: 'What happened? / What did you do next?',
  },
]
function B201LessonContent({ initialPageId }: LessonProps) {
  return (
    <B201Shell
      materialKey="b2-01"
      pageIds={withLessonOpeningPageIds('b2-01', order)}
      initialPageId={initialPageId}
      label="B2.01 · Dead phone, no charger"
      pages={(activeId) =>
        withLessonOpeningPages(
          'b2-01',
          order.map((id) => {
            if (id === 's1')
              return {
                id,
                label: 'Warm up · When a journey goes wrong',
                content: (
                  <SlidePage
                    width="conversation"
                    density="compact"
                    eyebrow="Warm up"
                    title={'When a journey goes wrong'}
                    instruction={'Talk about journeys that did not go to plan.'}
                  >
                    <SourceQuestions items={review} />
                  </SlidePage>
                ),
              }
            if (id === 's2')
              return {
                id,
                label: 'Vocabulary · No battery',
                content: (
                  <SlidePage
                    eyebrow="Vocabulary"
                    width="expanded"
                    density="dense"
                    title="No battery"
                    instruction="Name the items and person. Click to listen and check."
                  >
                    <VocabularySection active={activeId === id} />
                  </SlidePage>
                ),
              }
            if (id === 's31' || id === 's32' || id === 's33')
              return {
                id,
                label: `Warm up · Choose the correct answer. (${Number(id.at(-1))}/3)`,
                content: (
                  <WarmupPage
                    eyebrow="Warm up"
                    width="expanded"
                    density="dense"
                    title={
                      [
                        'Why did it die?',
                        'Before the battery died',
                        'Borrow or lend?',
                      ][Number(id.at(-1)) - 1]
                    }
                    instruction={warmUps[Number(id.at(-1)) - 1]!.q}
                  >
                    <WarmUpSection index={Number(id.at(-1)) - 1} />
                  </WarmupPage>
                ),
              }
            if (id === 's4')
              return {
                id,
                label: 'Vocabulary · Travel expressions',
                content: (
                  <SlidePage
                    eyebrow="Vocabulary"
                    width="expanded"
                    title="Travel expressions"
                    instruction="Say the expression, then click to reveal and listen."
                  >
                    <WordTableSection active={activeId === id} />
                  </SlidePage>
                ),
              }
            if (id === 's51' || id === 's52')
              return {
                id,
                label:
                  id === 's51'
                    ? 'Practice · Reconstruct Ana’s afternoon'
                    : 'Conversation · Ask for the missing detail',
                content: (
                  <SlidePage
                    eyebrow={id === 's51' ? 'Practice' : 'Conversation'}
                    density="dense"
                    width="reading"
                    title={
                      id === 's51'
                        ? 'Reconstruct Ana’s afternoon'
                        : 'Ask for the missing detail'
                    }
                    instruction={
                      id === 's51'
                        ? 'Match each part of the story to its time point.'
                        : 'Choose a question that finds out the missing duration.'
                    }
                  >
                    {id === 's51' ? (
                      <ChronologySection />
                    ) : (
                      <MissingDetailSection />
                    )}
                  </SlidePage>
                ),
              }
            if (id === 's6' || id === 's62') {
              const part = id === 's6' ? 0 : 1
              return {
                id,
                label: `Dialogue · How was New York? (${part + 1}/2)`,
                content: (
                  <SlidePage
                    eyebrow="Dialogue"
                    width="conversation"
                    density="dense"
                    questions={
                      <ComprehensionPractice
                        items={
                          part === 0
                            ? comprehension.slice(0, 1)
                            : comprehension.slice(1)
                        }
                      />
                    }
                    title={
                      <DialogueTitle
                        title={`How was New York? (${part + 1}/2)`}
                        action={
                          <RecordedDialoguePlayback
                            conversationId={
                              id === 's6' ? 'B201:s6' : 'B201:s62'
                            }
                            active={activeId === id}
                          />
                        }
                      />
                    }
                    instruction={
                      part === 0
                        ? 'Ana is back in São Paulo. Kim asks about her trip. Read with your teacher.'
                        : 'The talk goes on. Read with your teacher.'
                    }
                  >
                    <DialogueSection
                      lines={
                        part === 0
                          ? content.dialogue.slice(0, 6)
                          : content.dialogue.slice(6)
                      }
                    />
                  </SlidePage>
                ),
              }
            }
            if (id === 's7')
              return {
                id,
                label: 'Grammar · Before a past event',
                content: (
                  <SlidePage
                    eyebrow="Grammar"
                    width="expanded"
                    title="Before a past event"
                    instruction="Compare earlier actions, ongoing activities and the event itself"
                  >
                    <WordTableSection grammar />
                  </SlidePage>
                ),
              }
            if (id === 's8')
              return {
                id,
                label: 'Your version · Your bad day',
                content: (
                  <SlidePage
                    eyebrow="Your version"
                    width="conversation"
                    title="Your bad day"
                    instruction="Tell Kim about a bad day, using your own details."
                  >
                    <YourVersionSection />
                  </SlidePage>
                ),
              }
            if (id === 's9')
              return {
                id,
                label: 'Listening · A message from Raj',
                content: (
                  <SlidePage
                    eyebrow="Listening"
                    width="expanded"
                    density="dense"
                    title="A message from Raj"
                    instruction="Listen to Raj’s message; decide what he said and correct the false statements."
                  >
                    <ListeningSection active={activeId === id} />
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
                    width="expanded"
                    title="Right or wrong?"
                    instruction="Is it right? Does it sound natural? If not, say it the right way."
                  >
                    <CorrectionSection
                      items={content.corrections.map((r) => ({
                        ...r,
                        a: r.ok ? undefined : r.a,
                      }))}
                    />
                  </SlidePage>
                ),
              }
            if (id === 's11')
              return {
                id,
                label: 'Role play · Everything went wrong',
                content: (
                  <SlidePage
                    eyebrow="Role play"
                    width="expanded"
                    density="dense"
                    title="Everything went wrong"
                    instruction="Choose a situation. Tell Kim what led to the problem and how you resolved it."
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
                  layout="split"
                  eyebrow="Homework"
                  title="Before next class"
                  instruction="Rehearse a new story and bring it to your next class."
                >
                  <LessonPracticePlan
                    tasks={[
                      {
                        title: 'Recall the words',
                        description:
                          'Look around you. Name five objects from today and explain when you might need them.',
                      },
                      {
                        title: 'Rehearse a story',
                        description:
                          'Tell a one-minute story about a journey that went wrong. Explain what had happened and what you’d been doing before the problem.',
                      },
                      {
                        title: 'Prepare to ask',
                        description:
                          'Bring two follow-up questions for your teacher. Use “How long had you been …?” in one of them.',
                      },
                    ]}
                  />
                </SlidePage>
              ),
            }
          }),
        )
      }
    />
  )
}

export function B201Lesson(props: LessonProps) {
  return (
    <MaterialTheme>
      <B201LessonContent {...props} />
    </MaterialTheme>
  )
}
