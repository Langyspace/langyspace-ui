import type { Key, ReactNode } from 'react'
import type { NormalizedOperationalListActions } from './normalizeActions'
import type {
  OperationalListColumn,
  OperationalListDensity,
  OperationalListNavigation,
  OperationalListPrimaryContent,
} from './OperationalList.types'

export interface PreparedRow {
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

export interface RowProps {
  actionsHeaderId: string
  density: OperationalListDensity
  hasActionsColumn: boolean
  menuOpen: boolean
  moreActionsLabel: string
  onMenuOpenChange: (open: boolean) => void
  row: PreparedRow
}

export interface PrimaryNavigationProps {
  navigation: OperationalListNavigation
  title: ReactNode
}
