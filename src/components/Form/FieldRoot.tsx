import { useId, useMemo } from 'react'
import { FieldControlContext } from '../../internal/FieldControlContext'
import * as Styled from './FieldRoot.styles'
import type { FieldRootProps } from './FieldRoot.types'

const hasContent = (content: FieldRootProps['hint']) =>
  content !== undefined &&
  content !== null &&
  content !== false &&
  content !== ''

export function FieldRoot({
  children,
  controlId: requestedControlId,
  error,
  hint,
  label,
  labelVariant = 'default',
  ...rootProps
}: FieldRootProps) {
  const generatedId = useId().replaceAll(':', '')
  const controlId = requestedControlId ?? `field-${generatedId}`
  const hintId = `${controlId}-hint`
  const errorId = `${controlId}-error`
  const hasHint = hasContent(hint)
  const invalid = hasContent(error)
  const describedBy = [hasHint ? hintId : null, invalid ? errorId : null]
    .filter(Boolean)
    .join(' ')
  const context = useMemo(
    () => ({
      controlId,
      describedBy: describedBy || undefined,
      invalid,
    }),
    [controlId, describedBy, invalid],
  )

  return (
    <FieldControlContext value={context}>
      <Styled.Root {...rootProps} data-invalid={invalid || undefined}>
        <Styled.Label $variant={labelVariant} htmlFor={controlId}>
          {label}
        </Styled.Label>
        {children}
        {hasHint ? <Styled.Hint id={hintId}>{hint}</Styled.Hint> : null}
        {invalid ? (
          <Styled.Error id={errorId} role="alert">
            {error}
          </Styled.Error>
        ) : null}
      </Styled.Root>
    </FieldControlContext>
  )
}
