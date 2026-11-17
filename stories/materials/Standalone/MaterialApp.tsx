import { MaterialTheme } from '../shared/MaterialTheme'
import { Suspense, useEffect } from 'react'
import { MaterialView } from './MaterialViews'
import type { MaterialViewProps, MaterialReadyProps } from './MaterialApp.types'
function Ready({ materialKey }: MaterialReadyProps) {
  useEffect(() => {
    document.title = `${materialKey === 'trial-a1-a2' ? 'Experimental A1 e A2' : materialKey.toUpperCase().replace('-', '.')} · Langy`
    window.parent.postMessage(
      {
        type: 'langy.material.ready',
        version: 1,
        materialKey,
        sourceCommit: __MATERIAL_SOURCE_COMMIT__,
      },
      window.location.origin,
    )
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
        <MaterialView
          materialKey={materialKey}
          studentPortalOrigin={studentPortalOrigin}
        />
        <Ready materialKey={materialKey} />
      </Suspense>
    </MaterialTheme>
  )
}
