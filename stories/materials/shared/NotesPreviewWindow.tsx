import { useState } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { SlideNotesWindow } from '../../../src/components/Slide/SlideNotesWindow'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { GlobalStyles } from '../../../src/foundations/theme/GlobalStyles'
import { FontStyles } from '../Standalone/Standalone.styles'
import type { NotesProps } from './Lesson.types'

const scratchKey = (key: string) => 'langy-preview-scratch:v1:' + key
const readScratch = (key: string) => {
  try {
    return localStorage.getItem(scratchKey(key)) ?? ''
  } catch {
    return ''
  }
}

function LocalNotesEditor({ storageKey, popupWindow, onClose }: NotesProps) {
  const [value, setValue] = useState(() => readScratch(storageKey))
  const [error, setError] = useState('')
  if (!popupWindow) return null
  return (
    <StyleSheetManager target={popupWindow.document.head}>
      <ThemeProvider theme={materialDarkTheme}>
        <GlobalStyles />
        <FontStyles />
        <SlideNotesWindow
          value={value}
          onClose={onClose}
          contextLabel="Rascunho"
          placeholder="Anote ideias, dúvidas ou lembretes…"
          error={error}
          onChange={(next) => {
            setValue(next)
            try {
              if (next) localStorage.setItem(scratchKey(storageKey), next)
              else localStorage.removeItem(scratchKey(storageKey))
              setError('')
            } catch {
              setError(
                'Não foi possível salvar o rascunho neste navegador. Copie o texto antes de fechar.',
              )
            }
          }}
        />
      </ThemeProvider>
    </StyleSheetManager>
  )
}

/** Separate React event root: typing/scrolling Notes must never reach the presentation deck. */
export function mountNotesPreview(
  popupWindow: Window,
  storageKey: string,
  onClose: () => void,
) {
  const target = popupWindow.document.getElementById('notes-root')
  if (!target) return { update: (_key: string) => {}, dispose: () => {} }
  const root = createRoot(target)
  const update = (key: string) =>
    root.render(
      <LocalNotesEditor
        key={key}
        storageKey={key}
        popupWindow={popupWindow}
        open
        onClose={onClose}
      />,
    )
  flushSync(() => update(storageKey))
  return {
    update,
    dispose: () => {
      queueMicrotask(() => root.unmount())
    },
  }
}
