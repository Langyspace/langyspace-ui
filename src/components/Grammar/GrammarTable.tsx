import { DEFAULT_COLUMNS } from './GrammarTable.constants'
import { EMPTY_LIST } from '../Exercise/Material.constants'
import * as Styled from './GrammarTable.styles'
import * as Common from '../Exercise/Material.shared.styles'
import type { GrammarTableProps } from './GrammarTable.types'
export function GrammarTable({
  title,
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
        <Styled.Table $tone={tone}>
          <caption>{title}</caption>
          <thead>
            <tr>
              <th scope="col">{columns.subject}</th>
              {columns.verb ? <th scope="col">{columns.verb}</th> : null}
              <th scope="col">{columns.example}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const open = !hiddenAnswers || revealedIds.includes(row.id)
              return (
                <tr key={row.id}>
                  <th scope="row">
                    <span>{row.subject}</span>
                  </th>
                  {columns.verb ? (
                    <td data-verb="true">{open ? row.verb : '…'}</td>
                  ) : null}
                  <td>
                    {!open ? (
                      <Styled.Example
                        type="button"
                        aria-expanded={false}
                        aria-label={`${revealLabel}: ${row.id}`}
                        disabled={!onReveal}
                        onClick={() => onReveal?.(row.id)}
                      >
                        …
                      </Styled.Example>
                    ) : onPlay ? (
                      <Styled.Example
                        type="button"
                        aria-label={row.audioLabel}
                        onPointerEnter={(event) => {
                          if (event.pointerType === 'mouse') onPlay(row.id)
                        }}
                        onClick={() => {
                          onPlay(row.id)
                        }}
                      >
                        {row.example}
                      </Styled.Example>
                    ) : (
                      row.example
                    )}
                    {open && row.translation ? (
                      <Common.Hint>{row.translation}</Common.Hint>
                    ) : null}
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
