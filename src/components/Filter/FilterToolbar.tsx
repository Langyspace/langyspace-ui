import type { FilterToolbarProps } from './FilterToolbar.types'
import * as Styled from './FilterToolbar.styles'

export function FilterToolbar(props: FilterToolbarProps) {
  return (
    <Styled.Container {...props} role="group" data-ui-filter-toolbar="true" />
  )
}
