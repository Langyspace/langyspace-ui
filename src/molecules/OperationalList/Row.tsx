import type { Key, ReactNode } from 'react'
import type { NormalizedOperationalListActions } from './normalizeActions'
import { OperationalRowActions } from './RowActions'
import * as Styled from './styles'
import type {
  OperationalListColumn,
  OperationalListDensity,
  OperationalListNavigation,
  OperationalListPrimaryContent,
} from './types'

interface PreparedRow {
  actions: NormalizedOperationalListActions
  cells: readonly {
    column: Pick<
      OperationalListColumn<unknown>,
      'align' | 'id' | 'importance' | 'label'
    >
    content: ReactNode
    headerId: string
  }[]
  key: Key
  primary: OperationalListPrimaryContent
  rowHeaderId: string
}

interface RowProps {
  actionsHeaderId: string
  density: OperationalListDensity
  hasActionsColumn: boolean
  menuOpen: boolean
  onMenuOpenChange: (open: boolean) => void
  row: PreparedRow
}

function PrimaryNavigation({
  navigation,
  title,
}: {
  navigation: OperationalListNavigation
  title: ReactNode
}) {
  if ('href' in navigation) {
    return (
      <Styled.PrimaryLink
        aria-label={navigation.label}
        href={navigation.href}
        onClick={navigation.onNavigate}
      >
        {title}
      </Styled.PrimaryLink>
    )
  }

  return (
    <Styled.PrimaryButton
      aria-label={navigation.label}
      onClick={navigation.onNavigate}
    >
      {title}
    </Styled.PrimaryButton>
  )
}

export function OperationalRow({
  actionsHeaderId,
  density,
  hasActionsColumn,
  menuOpen,
  onMenuOpenChange,
  row,
}: RowProps) {
  const primary = row.primary
  const hasActions = Boolean(
    row.actions.primary ||
    row.actions.quick.length > 0 ||
    row.actions.overflow.length > 0,
  )

  return (
    <Styled.Row
      data-item-key={String(row.key)}
      data-ui-operational-list-row="true"
    >
      <Styled.PrimaryCell
        data-ui-operational-list-primary="true"
        id={row.rowHeaderId}
        scope="row"
      >
        <Styled.PrimaryLayout>
          {primary.leading ? (
            <Styled.Leading>{primary.leading}</Styled.Leading>
          ) : null}
          <Styled.PrimaryBody>
            {primary.navigation ? (
              <PrimaryNavigation
                navigation={primary.navigation}
                title={primary.title}
              />
            ) : (
              <Styled.PrimaryTitle>{primary.title}</Styled.PrimaryTitle>
            )}
            {primary.description ? (
              <Styled.PrimaryDescription>
                {primary.description}
              </Styled.PrimaryDescription>
            ) : null}
            {primary.meta ? (
              <Styled.PrimaryMeta>{primary.meta}</Styled.PrimaryMeta>
            ) : null}
          </Styled.PrimaryBody>
          {primary.navigation ? (
            <Styled.NavigationHint aria-hidden="true">›</Styled.NavigationHint>
          ) : null}
        </Styled.PrimaryLayout>
      </Styled.PrimaryCell>
      {row.cells.map(({ column, content, headerId }) => (
        <Styled.DataCell
          $align={column.align ?? 'start'}
          $importance={column.importance}
          data-align={column.align ?? 'start'}
          data-column-id={column.id}
          data-column-importance={column.importance}
          data-ui-operational-list-cell="true"
          headers={`${row.rowHeaderId} ${headerId}`}
          key={column.id}
        >
          <Styled.CompactLabel aria-hidden="true">
            {column.label}
          </Styled.CompactLabel>
          <Styled.CellValue>{content}</Styled.CellValue>
        </Styled.DataCell>
      ))}
      {hasActionsColumn ? (
        <Styled.ActionsCell
          data-has-actions={hasActions ? 'true' : 'false'}
          data-ui-operational-list-actions="true"
          headers={`${row.rowHeaderId} ${actionsHeaderId}`}
        >
          {hasActions ? (
            <OperationalRowActions
              actions={row.actions}
              density={density}
              menuOpen={menuOpen}
              onMenuOpenChange={onMenuOpenChange}
            />
          ) : null}
        </Styled.ActionsCell>
      ) : null}
    </Styled.Row>
  )
}
