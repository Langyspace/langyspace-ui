import { CompoundControlContext } from '../../internal/CompoundControlContext'
import * as Styled from './CompoundControl.styles'

import type { HTMLAttributes, ReactNode } from 'react'
import type { FieldControlSize } from '../../foundations/fields'

export type CompoundControlSurface = 'surface' | 'muted'

export interface CompoundControlProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  disabled?: boolean
  invalid?: boolean
  leading?: ReactNode
  size?: FieldControlSize
  surface?: CompoundControlSurface
  trailing?: ReactNode
}

export function CompoundControl({
  children,
  disabled = false,
  invalid = false,
  leading,
  size = 'md',
  surface = 'surface',
  trailing,
  ...props
}: CompoundControlProps) {
  return (
    <CompoundControlContext.Provider value={{ disabled, invalid, size }}>
      <Styled.Root
        {...props}
        $disabled={disabled}
        $invalid={invalid}
        $size={size}
        $surface={surface}
        aria-disabled={disabled || undefined}
        data-disabled={disabled || undefined}
        data-invalid={invalid || undefined}
        data-ui-compound-control="single-surface"
      >
        {leading ? (
          <Styled.Slot aria-hidden="true">{leading}</Styled.Slot>
        ) : null}
        {children}
        {trailing ? <Styled.Slot>{trailing}</Styled.Slot> : null}
      </Styled.Root>
    </CompoundControlContext.Provider>
  )
}
