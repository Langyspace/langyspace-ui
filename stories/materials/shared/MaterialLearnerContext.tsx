import { createContext, useContext, useEffect, useState } from 'react'
import type {
  MaterialLearnerIdentity,
  MaterialLearnerProviderProps,
} from './MaterialLearnerContext.types'
const Context = createContext<MaterialLearnerIdentity | undefined>(undefined)
export const useMaterialLearner = () => useContext(Context)

/** Only this material's trusted parent can supply the current lesson's learner. */
export function MaterialLearnerProvider({
  materialKey,
  children,
}: MaterialLearnerProviderProps) {
  const [value, setValue] = useState<{
    key: string
    learner?: MaterialLearnerIdentity
  }>()
  useEffect(() => {
    if (window.parent === window) return
    const receive = (event: MessageEvent<unknown>) => {
      const data = event.data
      if (
        event.source !== window.parent ||
        event.origin !== window.location.origin ||
        !data ||
        typeof data !== 'object' ||
        Array.isArray(data) ||
        !('type' in data) ||
        data.type !== 'langy.material.learner-context' ||
        !('version' in data) ||
        data.version !== 1 ||
        !('materialKey' in data) ||
        data.materialKey !== materialKey ||
        !('sourceCommit' in data) ||
        data.sourceCommit !== __MATERIAL_SOURCE_COMMIT__ ||
        !('learner' in data)
      )
        return
      if (data.learner === null) {
        setValue({ key: materialKey })
        return
      }
      const learner = data.learner
      if (
        !learner ||
        typeof learner !== 'object' ||
        Array.isArray(learner) ||
        !('firstName' in learner) ||
        typeof learner.firstName !== 'string' ||
        !('avatarUrl' in learner) ||
        typeof learner.avatarUrl !== 'string'
      ) {
        setValue({ key: materialKey })
        return
      }
      const firstName = learner.firstName.trim().split(/\s+/u)[0]?.slice(0, 80)
      try {
        const avatar = new URL(learner.avatarUrl)
        if (
          !firstName ||
          avatar.protocol !== 'https:' ||
          avatar.username ||
          avatar.password
        ) {
          setValue({ key: materialKey })
          return
        }
        setValue({
          key: materialKey,
          learner: { firstName, avatarUrl: avatar.href },
        })
      } catch {
        setValue({ key: materialKey })
      }
    }
    window.addEventListener('message', receive)
    window.parent.postMessage(
      {
        type: 'langy.material.request-learner-context',
        version: 1,
        materialKey,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
      },
      window.location.origin,
    )
    return () => window.removeEventListener('message', receive)
  }, [materialKey])
  return (
    <Context.Provider
      value={value?.key === materialKey ? value.learner : undefined}
    >
      {children}
    </Context.Provider>
  )
}
