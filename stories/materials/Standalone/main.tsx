import { createRoot } from 'react-dom/client'
import { GlobalStyles } from '../../../src/foundations/theme/GlobalStyles'
import { MaterialApp } from './MaterialApp'
import { FontStyles } from './Standalone.styles'
import catalog from './catalog.json'
import type { MaterialKey } from './MaterialApp.types'
const key = window.location.hash.slice(1)
const root = document.getElementById('material-root')
if (root)
  createRoot(root).render(
    <>
      <GlobalStyles />
      <FontStyles />
      {catalog.some((m) => m.key === key) ? (
        <MaterialApp materialKey={key as MaterialKey} />
      ) : (
        <p role="alert">Material não encontrado. Volte à biblioteca.</p>
      )}
    </>,
  )
