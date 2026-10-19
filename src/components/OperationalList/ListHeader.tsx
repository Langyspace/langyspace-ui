import * as Styled from './OperationalList.styles'
import type {
  OperationalListColumn,
  OperationalListPrimaryColumn,
  OperationalListSort,
} from './OperationalList.types'

type HeaderColumn = Pick<
  OperationalListColumn<unknown>,
  'align' | 'id' | 'label' | 'sort'
>

interface HeaderProps {
  columns: readonly HeaderColumn[]
  hasActions: boolean
  hasSorting: boolean
  idPrefix: string
  primaryColumn: Pick<OperationalListPrimaryColumn<unknown>, 'label' | 'sort'>
}

function ColumnLabel({
  label,
  sort,
}: {
  label: string
  sort?: OperationalListSort
}) {
  if (!sort) return label

  return (
    <Styled.SortButton onClick={sort.onToggle}>
      <span>{label}</span>
      <Styled.SortGlyph aria-hidden="true">
        {sort.direction === 'ascending'
          ? '↑'
          : sort.direction === 'descending'
            ? '↓'
            : '↕'}
      </Styled.SortGlyph>
    </Styled.SortButton>
  )
}

export function OperationalHeader({
  columns,
  hasActions,
  hasSorting,
  idPrefix,
  primaryColumn,
}: HeaderProps) {
  return (
    <Styled.TableHead $hasSorting={hasSorting}>
      <Styled.HeaderRow>
        <Styled.ColumnHeader
          $align="start"
          $sortable={Boolean(primaryColumn.sort)}
          aria-sort={primaryColumn.sort?.direction}
          data-sortable={primaryColumn.sort ? 'true' : undefined}
          id={`${idPrefix}-column-primary`}
          scope="col"
        >
          <ColumnLabel label={primaryColumn.label} sort={primaryColumn.sort} />
        </Styled.ColumnHeader>
        {columns.map((column) => (
          <Styled.ColumnHeader
            $align={column.align ?? 'start'}
            $sortable={Boolean(column.sort)}
            aria-sort={column.sort?.direction}
            data-column-id={column.id}
            data-sortable={column.sort ? 'true' : undefined}
            id={`${idPrefix}-column-${encodeURIComponent(column.id)}`}
            key={column.id}
            scope="col"
          >
            <ColumnLabel label={column.label} sort={column.sort} />
          </Styled.ColumnHeader>
        ))}
        {hasActions ? (
          <Styled.ActionsHeader id={`${idPrefix}-column-actions`} scope="col">
            Ações
          </Styled.ActionsHeader>
        ) : null}
      </Styled.HeaderRow>
    </Styled.TableHead>
  )
}
