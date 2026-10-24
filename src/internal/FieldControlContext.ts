import { createContext, use } from 'react'
import { mergeIdRefs } from '../foundations/accessibility'
import type {
  FieldControlContextValue,
  FieldControlNativeAttributes,
} from './FieldControlContext.types'

export const FieldControlContext =
  createContext<FieldControlContextValue | null>(null)

export function useFieldControlAttributes(
  attributes: FieldControlNativeAttributes,
): FieldControlNativeAttributes {
  const context = use(FieldControlContext)

  if (!context) return attributes

  return {
    ...attributes,
    'aria-describedby': mergeIdRefs(
      attributes['aria-describedby'],
      context.describedBy,
    ),
    'aria-invalid':
      (attributes['aria-invalid'] ?? context.invalid) || undefined,
    id: attributes.id ?? context.controlId,
  }
}
