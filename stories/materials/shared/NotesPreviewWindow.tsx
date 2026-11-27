import { useState } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { SlideNotesWindow } from '../../../src/components/Slide/SlideNotesWindow'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { GlobalStyles } from '../../../src/foundations/theme/GlobalStyles'
import { FontStyles } from '../Standalone/Standalone.styles'
import type { NotesProps } from './Lesson.types'

const scratchpads = new Map<string, string>()

function LocalNotesEditor({ storageKey, popupWindow, onClose }: NotesProps) {
  const [value, setValue] = useState(() => scratchpads.get(storageKey) ?? '')
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
          statusLabel="Só na memória desta apresentação. Nenhuma aula vinculada."
          onChange={(next) => {
            setValue(next)
            scratchpads.set(storageKey, next)
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
