import { useMemo } from 'react'
import { CompoundControlContext } from '../../internal/CompoundControlContext'
import * as Styled from './CompoundControl.styles'
import type { CompoundControlProps } from './CompoundControl.types'

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
  const context = useMemo(
    () => ({ disabled, invalid, size }),
    [disabled, invalid, size],
  )

  return (
    <CompoundControlContext value={context}>
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
    </CompoundControlContext>
  )
}
