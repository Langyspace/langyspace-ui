import { DialogueTitle } from '../shared/DialogueTitle'
import { RecordedDialoguePlayback } from '../shared/RecordedDialoguePlayback'
import { MaterialTheme } from '../shared/MaterialTheme'
import { LessonShell } from '../shared/LessonShell'
import { SourceQuestions } from '../shared/LessonPractice'
import type { LessonProps } from '../shared/Lesson.types'
import {
  VocabularySection,
  GrammarSection,
  DialogueSection,
  ComprehensionSection,
  GapSection,
} from './A201.practice'
import {
  PersonalSection,
  ListeningSection,
  RolePlaySection,
} from './A201.conversation'
import { content, order } from './A201.data'
import * as S from '../shared/Lesson.styles'
import * as A from './A201.styles'
export function A201Lesson({ initialPageId }: LessonProps) {
  return (
    <MaterialTheme>
      <LessonShell
        navigationMode="continuous"
        materialKey="a2-01"
        initialPageId={initialPageId}
        pageIds={order}
        label="A2.01 · This week I’m working in Porto"
        pages={(_, activeId) =>
          content.sections.map((section, index) => {
            const page = index + 1
            const body =
              page === 1 ? (
                <SourceQuestions
                  items={content.opening.questions.map((question) => ({
                    question,
                  }))}
                />
              ) : page === 2 || page === 3 ? (
                <VocabularySection group={page - 2} />
              ) : page === 4 || page === 5 ? (
                <GrammarSection questions={page === 5} />
              ) : page === 6 ? (
                <DialogueSection />
              ) : page === 7 || page === 9 ? (
                <ComprehensionSection second={page === 9} />
              ) : page === 8 ? (
                <GapSection />
              ) : page === 10 ? (
                <PersonalSection />
              ) : page === 11 ? (
                <ListeningSection active={activeId === 's11'} />
              ) : page === 12 ? (
                <RolePlaySection />
              ) : (
                <S.Stack>
                  {content.homework.tasks.map((task) => (
                    <A.Info key={task.title}>
                      <b>{task.title}</b>
                      <p>{task.text}</p>
                    </A.Info>
                  ))}
                  <S.Hint>{content.homework.exitPrompt}</S.Hint>
                </S.Stack>
              )
            const instruction =
              page === 2
                ? content.vocabulary1.instruction
                : page === 3
                  ? content.vocabulary2.instruction
                  : page === 6
                    ? content.dialogue.instruction
                    : page === 7
                      ? content.comprehension1.instruction
                      : page === 8
                        ? content.gaps.instruction
                        : page === 9
                          ? content.comprehension2.instruction
                          : page === 10
                            ? content.personal.instruction
                            : page === 11
                              ? content.listening.instruction
                              : page === 13
                                ? content.homework.instruction
                                : undefined
            return {
              id: section.id,
              label:
                page === 1
                  ? content.opening.lessonTitle
                  : section.stage + ' · ' + section.title,
              content: (
                <A.Page
                  data-opening={page === 1 ? 'true' : undefined}
                  width={
                    page === 2 || page === 3
                      ? 'exercise'
                      : page === 6 || page === 8
                        ? 'reading'
                        : 'standard'
                  }
                  eyebrow={page === 1 ? content.opening.lesson : section.stage}
                  title={
                    page === 1 ? (
                      <>
                        This week I’m <em>working in Porto</em>
                      </>
                    ) : page === 6 ? (
                      <DialogueTitle
                        title={section.title}
                        action={
                          <RecordedDialoguePlayback
                            conversationId="A201:s6"
                            active={activeId === section.id}
                          />
                        }
                      />
                    ) : (
                      section.title
                    )
                  }
                  instruction={instruction}
                >
                  {body}
                </A.Page>
              ),
            }
          })
        }
      />
    </MaterialTheme>
  )
}
