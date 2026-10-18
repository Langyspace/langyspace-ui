import type { ComponentPropsWithRef } from 'react'
import type { CompatibleAccessibleName } from '../../foundations/accessibility'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Container = styled.div.withConfig({
  componentId: 'lsui-sc-filter-toolbar',
})`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: ${token.spacing3};

  @media (max-width: 900px) {
    align-items: stretch;
    gap: ${token.spacing2};
  }
`

export type FilterToolbarProps = Omit<
  ComponentPropsWithRef<'div'>,
  'role' | 'aria-label' | 'aria-labelledby'
> &
  CompatibleAccessibleName

export function FilterToolbar(props: FilterToolbarProps) {
  return <Container {...props} role="group" data-ui-filter-toolbar="true" />
}
