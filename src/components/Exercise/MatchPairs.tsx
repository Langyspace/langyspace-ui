import * as Styled from './MatchPairs.styles'
import type { MatchPairsProps } from './MatchPairs.types'
export function MatchPairs({
  questions,
  answers,
  matches,
  selectedQuestionId,
  incorrectAnswerId,
  onQuestionSelect,
  onAnswerSelect,
  questionLabel,
  answerLabel,
  status,
  ...props
}: MatchPairsProps) {
  return (
    <Styled.MatchRoot {...props}>
      <Styled.MatchColumns>
        <Styled.Stack role="group" aria-label={questionLabel}>
          {questions.map((item) => (
            <Styled.Match
              key={item.id}
              type="button"
              disabled={Boolean(matches[item.id])}
              aria-pressed={selectedQuestionId === item.id}
              $matched={Boolean(matches[item.id])}
              $incorrect={false}
              onClick={() => {
                onQuestionSelect(item.id)
              }}
            >
              <Styled.Marker>{item.marker}</Styled.Marker>
              <Styled.MatchLabel as="strong">{item.label}</Styled.MatchLabel>
              {matches[item.id] ? (
                <Styled.MatchMark>
                  {
                    answers.find((answer) => answer.id === matches[item.id])
                      ?.marker
                  }{' '}
                  ✓
                </Styled.MatchMark>
              ) : null}
            </Styled.Match>
          ))}
        </Styled.Stack>
        <Styled.Stack role="group" aria-label={answerLabel}>
          {answers.map((item) => (
            <Styled.Match
              key={item.id}
              type="button"
              disabled={Object.values(matches).includes(item.id)}
              $matched={Object.values(matches).includes(item.id)}
              $incorrect={incorrectAnswerId === item.id}
              onClick={() => {
                onAnswerSelect(item.id)
              }}
            >
              <Styled.Marker>{item.marker}</Styled.Marker>
              <Styled.MatchLabel>{item.label}</Styled.MatchLabel>
              {Object.values(matches).includes(item.id) ? (
                <Styled.MatchMark>✓</Styled.MatchMark>
              ) : incorrectAnswerId === item.id ? (
                <Styled.MatchMark>×</Styled.MatchMark>
              ) : null}
            </Styled.Match>
          ))}
        </Styled.Stack>
      </Styled.MatchColumns>
      <Styled.Status role="status">{status}</Styled.Status>
    </Styled.MatchRoot>
  )
}
