import { DEFAULT_COLUMNS } from './GrammarTable.constants'
import { EMPTY_LIST } from './Material.constants'
import * as Styled from './GrammarTable.styles'
import * as Common from './Material.shared.styles'
import type { GrammarTableProps } from './GrammarTable.types'
export function GrammarTable({
  title,
  captionVisibility = 'visible',
  layout = 'columns',
  rows,
  columns = DEFAULT_COLUMNS,
  tone = 'affirmative',
  hiddenAnswers = false,
  revealedIds = EMPTY_LIST,
  onReveal,
  onPlay,
  revealLabel = 'Mostrar resposta',
  explanation,
  emptyMessage = 'Nenhum exemplo.',
  ...props
}: GrammarTableProps) {
  return (
    <Styled.Root as="section" {...props}>
      {explanation}
      <Styled.Wrap>
        <Styled.Table
          $tone={tone}
          $captionHidden={captionVisibility === 'screen-reader'}
          $patterns={layout === 'patterns'}
        >
          <caption>{title}</caption>
          <thead>
            <tr>
              <th scope="col">{columns.subject}</th>
              {columns.verb && layout === 'columns' ? (
                <th scope="col">{columns.verb}</th>
              ) : null}
              <th scope="col">{columns.example}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const open = !hiddenAnswers || revealedIds.includes(row.id)
              const answer = (
                <>
                  {layout === 'patterns' && row.verb ? (
                    <Styled.Pattern>{row.verb}</Styled.Pattern>
                  ) : null}
                  {onPlay ? (
                    <Styled.Example
                      $concealed={false}
                      type="button"
                      aria-label={row.audioLabel}
                      onClick={() => onPlay(row.id)}
                    >
                      {row.example}
                    </Styled.Example>
                  ) : (
                    row.example
                  )}
                  {row.translation ? (
                    <Common.Hint>{row.translation}</Common.Hint>
                  ) : null}
                </>
              )
              return (
                <tr key={row.id}>
                  <th scope="row">
                    <span>{row.subject}</span>
                  </th>
                  {columns.verb && layout === 'columns' ? (
                    <td data-verb="true">
                      {hiddenAnswers ? (
                        <Styled.AnswerContent
                          $concealed={!open}
                          aria-hidden={!open || undefined}
                          inert={!open || undefined}
                        >
                          {row.verb}
                        </Styled.AnswerContent>
                      ) : (
                        row.verb
                      )}
                    </td>
                  ) : null}
                  <td>
                    {hiddenAnswers ? (
                      <Styled.AnswerFrame>
                        <Styled.AnswerContent
                          $concealed={!open}
                          aria-hidden={!open || undefined}
                          inert={!open || undefined}
                        >
                          {answer}
                        </Styled.AnswerContent>
                        {!open ? (
                          <Styled.RevealControl
                            $concealed
                            type="button"
                            aria-expanded={false}
                            aria-label={`${revealLabel}: ${row.id}`}
                            disabled={!onReveal}
                            onClick={() => onReveal?.(row.id)}
                          >
                            ?
                          </Styled.RevealControl>
                        ) : null}
                      </Styled.AnswerFrame>
                    ) : (
                      answer
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Styled.Table>
      </Styled.Wrap>
      {!rows.length ? <Common.Hint>{emptyMessage}</Common.Hint> : null}
    </Styled.Root>
  )
}
