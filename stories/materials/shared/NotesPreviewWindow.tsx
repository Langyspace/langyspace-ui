import { useState } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { SlideNotesWindow } from '../../../src/components/Slide/SlideNotesWindow'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { GlobalStyles } from '../../../src/foundations/theme/GlobalStyles'
import { FontStyles } from '../Standalone/Standalone.styles'
import type { NotesProps } from './Lesson.types'

function LocalNotesEditor({ storageKey, popupWindow, onClose }: NotesProps) {
  const key = 'langy-preview-notes:v1:' + storageKey
  const [value, setValue] = useState(() => {
    try {
      return localStorage.getItem(key) ?? ''
    } catch {
      return ''
    }
  })
  const [localSaved, setLocalSaved] = useState(true)
  if (!popupWindow) return null
  return (
    <StyleSheetManager target={popupWindow.document.head}>
      <ThemeProvider theme={materialDarkTheme}>
        <GlobalStyles />
        <FontStyles />
        <SlideNotesWindow
          value={value}
          onClose={onClose}
          contextLabel="Prévia · rascunho local"
          statusLabel={
            localSaved
              ? 'Rascunho neste navegador. Não vinculado a uma aula.'
              : 'Rascunho só nesta janela. Copie antes de fechar.'
          }
          onChange={(next) => {
            setValue(next)
            try {
              localStorage.setItem(key, next)
              setLocalSaved(true)
            } catch {
              setLocalSaved(false)
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
  if (!target) return () => {}
  const root = createRoot(target)
  flushSync(() =>
    root.render(
      <LocalNotesEditor
        storageKey={storageKey}
        popupWindow={popupWindow}
        open
        onClose={onClose}
      />,
    ),
  )
  return () => {
    queueMicrotask(() => root.unmount())
  }
}
