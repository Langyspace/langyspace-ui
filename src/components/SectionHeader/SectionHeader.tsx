import * as Styled from './SectionHeader.styles'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type SectionHeaderLevel = 2 | 3 | 4

export type SectionHeaderSpacing = 'default' | 'flush'

export interface SectionHeaderProps extends Omit<
  ComponentPropsWithoutRef<'div'>,
  'title'
> {
  actions?: ReactNode
  headingLevel?: SectionHeaderLevel
  meta?: ReactNode
  spacing?: SectionHeaderSpacing
  title: ReactNode
}

export function SectionHeader({
  actions,
  headingLevel = 2,
  meta,
  spacing = 'default',
  title,
  ...headerProps
}: SectionHeaderProps) {
  const hasAside = meta !== undefined || actions != null

  return (
    <Styled.Header
      {...headerProps}
      $spacing={spacing}
      data-ui-section-header="true"
    >
      <Styled.Title as={`h${headingLevel}`}>{title}</Styled.Title>
      {hasAside ? (
        <Styled.Aside>
          {meta !== undefined ? <Styled.Meta>{meta}</Styled.Meta> : null}
          {actions}
        </Styled.Aside>
      ) : null}
    </Styled.Header>
  )
}
