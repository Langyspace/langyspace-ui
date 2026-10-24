import type { NormalizedOperationalListActions } from './normalizeActions'
import type { OperationalListDensity } from './OperationalList.types'

export interface RowActionsProps {
  actions: NormalizedOperationalListActions
  density: OperationalListDensity
  menuOpen: boolean
  moreActionsLabel: string
  onMenuOpenChange: (open: boolean) => void
}
