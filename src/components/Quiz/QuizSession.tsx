import { QuizSessionHeader } from './QuizSessionHeader'
import { QuizPromptHeader } from './QuizPromptHeader'
import { QuizBadge } from './QuizBadge'
import { QuizMetadata } from './QuizMetadata'
import { QuizQuestion } from './QuizQuestion'
import { QuizOption } from './QuizOption'
import { QuizFeedback } from './QuizFeedback'
import type { QuizSessionProps } from './QuizSession.types'
import * as S from './QuizSession.styles'

/** One Student quiz surface shared by the real portal, teacher simulation and lesson previews. */
export function QuizSession({
  header,
  question,
  children,
  ...props
}: QuizSessionProps) {
  return (
    <S.Root {...props} data-ui-quiz-session="true">
      <QuizSessionHeader {...header} />
      {question && (
        <S.Card>
          <QuizPromptHeader>
            <QuizBadge>{question.level}</QuizBadge>
            <QuizMetadata>
              <span>{question.counter}</span>
              <span>{question.detail}</span>
            </QuizMetadata>
          </QuizPromptHeader>
          <S.Prompt>
            <QuizQuestion
              context={question.context}
              action={question.narrationAction}
            >
              {question.prompt}
            </QuizQuestion>
          </S.Prompt>
          <S.Options>
            {question.options.map((option, index) => (
              <QuizOption
                key={option.id}
                letter={String.fromCharCode(65 + index)}
                state={option.state}
                feedbackOutcome={option.feedbackOutcome}
                disabled={option.disabled}
                onClick={() => question.onSelect(option.id)}
              >
                {option.label}
              </QuizOption>
            ))}
          </S.Options>
          {question.feedback && (
            <QuizFeedback tone={question.feedback.tone}>
              {question.feedback.content}
            </QuizFeedback>
          )}
          <S.Action>
            {question.nextAction ? (
              <S.Next
                onClick={question.nextAction.onClick}
                disabled={question.nextAction.disabled}
                type="button"
              >
                {question.nextAction.label}
              </S.Next>
            ) : (
              question.hint
            )}
          </S.Action>
        </S.Card>
      )}
      {children}
    </S.Root>
  )
}
