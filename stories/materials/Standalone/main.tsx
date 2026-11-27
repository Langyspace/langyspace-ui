import { MaterialsCatalogView } from '../catalog/MaterialsCatalogView'
import { MaterialPracticeOrigin } from '../shared/MaterialPracticeContext'
import { MaterialNotesEditor } from './MaterialNotesEditor'
import { readStudentPortalOrigin } from './destinations'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from '../../../src/foundations/theme/GlobalStyles'
import { MaterialApp } from './MaterialApp'
import { FontStyles } from './Standalone.styles'
import catalog from './catalog.json'
import type { MaterialKey } from './MaterialApp.types'
const key = window.location.hash.slice(1)
const studentPortalOrigin = readStudentPortalOrigin(window.location.search)
const localMaterials = catalog.map((entry) => {
  const href = new URL('./', window.location.href)
  if (studentPortalOrigin)
    href.searchParams.set('studentPortalOrigin', studentPortalOrigin)
  href.hash = entry.key
  return {
    id: entry.key,
    code: entry.code,
    title: entry.title,
    description: entry.description,
    level: entry.kind === 'extra' ? 'EXTRA' : entry.levels[0]!,
    review: false,
    href: href.href,
  }
})
const root = document.getElementById('material-root')
if (root)
  createRoot(root).render(
    <>
      <GlobalStyles />
      <FontStyles />
      {new URLSearchParams(window.location.search).get('view') === 'notes' ? (
        <MaterialNotesEditor materialKey="notes" />
      ) : studentPortalOrigin &&
        new URLSearchParams(window.location.search).get('view') ===
          'catalog' ? (
        <MaterialsCatalogView materials={localMaterials} />
      ) : studentPortalOrigin && catalog.some((m) => m.key === key) ? (
        <MaterialPracticeOrigin.Provider value={studentPortalOrigin}>
          <MaterialApp
            materialKey={key as MaterialKey}
            studentPortalOrigin={studentPortalOrigin}
          />
        </MaterialPracticeOrigin.Provider>
      ) : (
        <p role="alert">Material não encontrado. Volte à biblioteca.</p>
      )}
    </>,
  )
