import { createContext, useContext, useEffect, useState } from 'react'
import type {
  NotesCapability,
  NotesHostProviderProps,
} from './NotesHostContext.types'
const Context = createContext<NotesCapability>({ mode: 'preview-local' })
export const useNotesCapability = () => useContext(Context)
export function NotesHostProvider({
  materialKey,
  children,
}: NotesHostProviderProps) {
  const [capability, setCapability] = useState<NotesCapability>(() => {
    try {
      if (
        window.parent !== window &&
        window.parent.location.origin === window.location.origin
      )
        return { mode: 'pending' }
    } catch {
      /* A different-origin preview has no Teacher capability. */
    }
    return { mode: 'preview-local' }
  })
  useEffect(() => {
    const receive = (event: MessageEvent<unknown>) => {
      if (
        event.source !== window.parent ||
        event.origin !== window.location.origin
      )
        return
      const value = event.data
      if (
        !value ||
        typeof value !== 'object' ||
        !('type' in value) ||
        value.type !== 'langy.material.notes.capability' ||
        !('version' in value) ||
        value.version !== 1 ||
        !('materialKey' in value) ||
        value.materialKey !== materialKey ||
        !('sourceCommit' in value) ||
        value.sourceCommit !== __MATERIAL_SOURCE_COMMIT__
      )
        return
      if ('mode' in value && value.mode === 'preview-local')
        setCapability({ mode: 'preview-local' })
      if (
        'mode' in value &&
        value.mode === 'teacher-popup' &&
        'popupUrl' in value &&
        typeof value.popupUrl === 'string'
      ) {
        let url: URL
        try {
          url = new URL(value.popupUrl, window.location.href)
        } catch {
          return
        }
        if (
          url.origin === window.location.origin &&
          url.pathname === '/materiais/anotacoes'
        )
          setCapability({ mode: 'teacher-popup', popupUrl: url.href })
      }
    }
    window.addEventListener('message', receive)
    window.parent.postMessage(
      {
        type: 'langy.material.notes.request-capability',
        version: 1,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
        materialKey,
      },
      window.location.origin,
    )
    return () => window.removeEventListener('message', receive)
  }, [materialKey])
  return <Context.Provider value={capability}>{children}</Context.Provider>
}
