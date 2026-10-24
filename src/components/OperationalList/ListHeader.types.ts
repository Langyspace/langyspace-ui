import type {
  OperationalListColumn,
  OperationalListPrimaryColumn,
  OperationalListSort,
} from './OperationalList.types'

export type HeaderColumn = Pick<
  OperationalListColumn<unknown>,
  'align' | 'id' | 'label' | 'sort'
>

export interface HeaderProps {
  actionsLabel: string
  columns: readonly HeaderColumn[]
  hasActions: boolean
  hasSorting: boolean
  idPrefix: string
  primaryColumn: Pick<OperationalListPrimaryColumn<unknown>, 'label' | 'sort'>
}

export interface ColumnLabelProps {
  label: string
  sort?: OperationalListSort
}
