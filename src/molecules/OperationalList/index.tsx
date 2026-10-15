import { useId, useState, type Key } from 'react'
import { OperationalHeader } from './Header'
import { normalizeOperationalListActions } from './normalizeActions'
import { OperationalRow } from './Row'
import * as Styled from './styles'
import type { OperationalListProps } from './types'

export function OperationalList<Item>({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  columns,
  density = 'regular',
  emptyState,
  footer,
  getActions,
  getItemKey,
  items,
  primaryColumn,
  ref,
  ...nativeProps
}: OperationalListProps<Item>) {
  const [openMenuKey, setOpenMenuKey] = useState<Key | null>(null)
  const reactId = useId().replaceAll(':', '')
  const idPrefix = `lsui-operational-list-${reactId}`
  const actionsHeaderId = `${idPrefix}-column-actions`
  const hasSorting = Boolean(
    primaryColumn.sort || columns.some((column) => column.sort),
  )
  const rows = items.map((item, index) => {
    const key = getItemKey(item)
    const encodedKey = encodeURIComponent(String(key))
    const actions = normalizeOperationalListActions(
      getActions?.(item, index) ?? [],
    )

    return {
      actions,
      cells: columns.map((column) => ({
        column,
        content: column.render(item, index),
        headerId: `${idPrefix}-column-${encodeURIComponent(column.id)}`,
      })),
      key,
      primary: primaryColumn.render(item, index),
      rowHeaderId: `${idPrefix}-row-${encodedKey}`,
    }
  })
  const hasAnyActions = rows.some(
    (row) =>
      row.actions.primary ||
      row.actions.quick.length > 0 ||
      row.actions.overflow.length > 0,
  )
  const openMenuStillExists = rows.some(
    (row) => row.key === openMenuKey && row.actions.overflow.length > 0,
  )
  const columnCount = 1 + columns.length + (hasAnyActions ? 1 : 0)

  if (openMenuKey !== null && !openMenuStillExists) {
    setOpenMenuKey(null)
  }

  return (
    <Styled.Root
      {...nativeProps}
      data-density={density}
      data-ui-operational-list="true"
      ref={ref}
    >
      <Styled.Surface data-ui-operational-list-surface="true">
        <Styled.Table
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          data-has-sorting={hasSorting ? 'true' : 'false'}
          data-ui-operational-list-table="true"
        >
          <OperationalHeader
            columns={columns}
            hasActions={hasAnyActions}
            hasSorting={hasSorting}
            idPrefix={idPrefix}
            primaryColumn={primaryColumn}
          />
          <tbody>
            {rows.length === 0 ? (
              <Styled.EmptyRow>
                <Styled.EmptyCell colSpan={columnCount}>
                  {emptyState ?? null}
                </Styled.EmptyCell>
              </Styled.EmptyRow>
            ) : (
              rows.map((row) => (
                <OperationalRow
                  actionsHeaderId={actionsHeaderId}
                  density={density}
                  hasActionsColumn={hasAnyActions}
                  key={row.key}
                  menuOpen={openMenuKey === row.key}
                  onMenuOpenChange={(open) =>
                    setOpenMenuKey(open ? row.key : null)
                  }
                  row={row}
                />
              ))
            )}
          </tbody>
        </Styled.Table>
      </Styled.Surface>
      {footer ? (
        <Styled.Footer data-ui-operational-list-footer="true">
          {footer}
        </Styled.Footer>
      ) : null}
    </Styled.Root>
  )
}

export type {
  OperationalListAlign,
  OperationalListColumn,
  OperationalListDensity,
  OperationalListImportance,
  OperationalListItemAction,
  OperationalListNavigation,
  OperationalListPrimaryColumn,
  OperationalListPrimaryContent,
  OperationalListProps,
  OperationalListSort,
  OperationalListSortDirection,
} from './types'
