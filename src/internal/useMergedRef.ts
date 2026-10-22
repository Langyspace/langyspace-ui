import { useCallback } from 'react'
import type { Ref } from 'react'

function attachRef<Element>(
  ref: Ref<Element> | undefined,
  node: Element | null,
) {
  if (typeof ref === 'function') {
    const cleanup = ref(node)

    return typeof cleanup === 'function' ? cleanup : () => ref(null)
  }

  if (ref) {
    ref.current = node

    return () => {
      ref.current = null
    }
  }
}

export function useMergedRef<Element>(
  internalRef: Ref<Element>,
  consumerRef: Ref<Element> | undefined,
) {
  return useCallback(
    (node: Element | null) => {
      const detachInternal = attachRef(internalRef, node)
      const detachConsumer = attachRef(consumerRef, node)

      return () => {
        detachInternal?.()
        detachConsumer?.()
      }
    },
    [internalRef, consumerRef],
  )
}
