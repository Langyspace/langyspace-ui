import type { FieldControlSize } from '../foundations/fields'
import { useCompoundControlContext } from './CompoundControlContext'
import { useFieldControlAttributes } from './FieldControlContext'
import type { FieldControlNativeAttributes } from './FieldControlContext.types'

type NativeControlAttributes = FieldControlNativeAttributes & {
  disabled?: boolean
}

// FieldRoot supplies naming/feedback; CompoundControl owns the shared surface.
// Keep their precedence identical for input, select and textarea.
export function useFieldControl(
  nativeAttributes: NativeControlAttributes,
  requestedSize: FieldControlSize,
) {
  const compound = useCompoundControlContext()
  const attributes = useFieldControlAttributes(nativeAttributes)
  const invalid =
    attributes['aria-invalid'] === true ||
    attributes['aria-invalid'] === 'true' ||
    Boolean(compound?.invalid)

  return {
    attributes,
    disabled: nativeAttributes.disabled || compound?.disabled,
    invalid,
    size: compound?.size ?? requestedSize,
  }
}
