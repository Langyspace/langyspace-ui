import { MaterialLearnerProvider } from '../shared/MaterialLearnerContext'
import { MaterialStudentSelectionProvider } from '../shared/MaterialStudentSelection'
import { MaterialTeacherProvider } from '../shared/MaterialTeacherContext'
import { NotesHostProvider } from '../shared/NotesHostContext'
import { MaterialTheme } from '../shared/MaterialTheme'
import { Suspense, useEffect } from 'react'
import { MaterialView } from './MaterialViews'
import type { MaterialViewProps, MaterialReadyProps } from './MaterialApp.types'
function Ready({ materialKey }: MaterialReadyProps) {
  useEffect(() => {
    document.title = `${materialKey === 'trial-a1-a2' ? 'Experimental A1 e A2' : materialKey.toUpperCase().replace('-', '.')} · Langy`
    const focusMaterial = () => {
      const active = document.activeElement
      if (
        active instanceof Element &&
        active.matches('input,textarea,select,[contenteditable="true"]')
      )
        return
      document
        .querySelector<HTMLElement>('[data-slide-deck]')
        ?.focus({ preventScroll: true })
    }
    const focusRequest = (event: MessageEvent<unknown>) => {
      const data = event.data
      if (
        event.source !== window.parent ||
        event.origin !== window.location.origin ||
        typeof data !== 'object' ||
        data === null
      )
        return
      if (
        'type' in data &&
        data.type === 'langy.material.focus' &&
        'version' in data &&
        data.version === 1 &&
        'materialKey' in data &&
        data.materialKey === materialKey &&
        'sourceCommit' in data &&
        data.sourceCommit === __MATERIAL_SOURCE_COMMIT__
      )
        focusMaterial()
    }
    window.addEventListener('message', focusRequest)
    window.parent.postMessage(
      {
        type: 'langy.material.ready',
        version: 1,
        materialKey,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
      },
      window.location.origin,
    )
    if (window.parent === window) focusMaterial()
    return () => window.removeEventListener('message', focusRequest)
  }, [materialKey])
  return null
}
export function MaterialApp({
  materialKey,
  studentPortalOrigin,
}: MaterialViewProps) {
  return (
    <MaterialTheme>
      <Suspense fallback={<p role="status">Carregando material…</p>}>
        <NotesHostProvider materialKey={materialKey}>
          <MaterialTeacherProvider materialKey={materialKey}>
            <MaterialLearnerProvider
              key={materialKey}
              materialKey={materialKey}
            >
              <MaterialStudentSelectionProvider materialKey={materialKey}>
                <MaterialView
                  materialKey={materialKey}
                  studentPortalOrigin={studentPortalOrigin}
                />
              </MaterialStudentSelectionProvider>
            </MaterialLearnerProvider>
          </MaterialTeacherProvider>
        </NotesHostProvider>
        <Ready materialKey={materialKey} />
      </Suspense>
    </MaterialTheme>
  )
}
