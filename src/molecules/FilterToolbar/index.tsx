import * as Styled from './styles'
import type { FilterToolbarProps } from './types'

export function FilterToolbar(props: FilterToolbarProps) {
  return (
    <Styled.Container {...props} role="group" data-ui-filter-toolbar="true" />
  )
}

export type { FilterToolbarProps } from './types'
