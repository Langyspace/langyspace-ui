import { createContext, useContext, useEffect, useState } from 'react'
import { resolveMaterialTeacherIdentity } from './materialTeacherIdentity'
import type {
  MaterialTeacherIdentity,
  MaterialTeacherProviderProps,
} from './MaterialTeacherContext.types'

const fallback = resolveMaterialTeacherIdentity()
const Context = createContext<MaterialTeacherIdentity>(fallback)
export const useMaterialTeacher = () =>
  resolveMaterialTeacherIdentity(useContext(Context))

/** Only the matching same-origin product frame can supply its current signed-in teacher. */
export function MaterialTeacherProvider({
  materialKey,
  children,
}: MaterialTeacherProviderProps) {
  const [teacher, setTeacher] = useState<MaterialTeacherIdentity>(fallback)
  useEffect(() => {
    setTeacher(fallback)
    if (window.parent === window) return
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
        value.type !== 'langy.material.teacher-context' ||
        !('version' in value) ||
        value.version !== 1 ||
        !('materialKey' in value) ||
        value.materialKey !== materialKey ||
        !('sourceCommit' in value) ||
        value.sourceCommit !== __MATERIAL_SOURCE_COMMIT__ ||
        !('teacher' in value) ||
        !value.teacher ||
        typeof value.teacher !== 'object'
      )
        return
      const identity = value.teacher
      if (
        !('name' in identity) ||
        typeof identity.name !== 'string' ||
        !identity.name.trim()
      )
        return
      let avatarUrl: string | undefined
      if ('avatarUrl' in identity && typeof identity.avatarUrl === 'string') {
        try {
          const url = new URL(identity.avatarUrl)
          if (url.protocol === 'https:' && !url.username && !url.password)
            avatarUrl = url.href
        } catch {
          /* The name remains usable without an image. */
        }
      }
      setTeacher({
        name: identity.name.trim().slice(0, 120),
        avatarUrl,
        timeZone:
          'timeZone' in identity && typeof identity.timeZone === 'string'
            ? identity.timeZone
            : undefined,
        countryCode:
          'countryCode' in identity && typeof identity.countryCode === 'string'
            ? identity.countryCode
            : undefined,
      })
    }
    window.addEventListener('message', receive)
    window.parent.postMessage(
      {
        type: 'langy.material.request-teacher-context',
        version: 1,
        materialKey,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
      },
      window.location.origin,
    )
    return () => window.removeEventListener('message', receive)
  }, [materialKey])
  return <Context.Provider value={teacher}>{children}</Context.Provider>
}
