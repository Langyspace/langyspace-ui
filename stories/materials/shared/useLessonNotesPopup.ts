import { useCallback, useEffect, useRef, useState } from 'react'
import { useNotesCapability } from './NotesHostContext'
import { launchNotesWindow } from './notesWindow'
import { mountNotesPreview } from './NotesPreviewWindow'
export function useLessonNotesPopup(storageKey: string, pageId = '') {
  const draftKey = JSON.stringify([storageKey, pageId])
  const capability = useNotesCapability()
  const popupUrl =
    capability.mode === 'teacher-popup'
      ? (() => {
          const url = new URL(capability.popupUrl)
          url.searchParams.set('draftKey', draftKey)
          return url.href
        })()
      : undefined
  const popup = useRef<Window | null>(null),
    triggerRef = useRef<HTMLButtonElement>(null)
  const trigger = useCallback((element: HTMLButtonElement | null) => {
    triggerRef.current = element
  }, [])
  const previewEditor = useRef<ReturnType<typeof mountNotesPreview> | null>(
    null,
  )
  const [isOpen, setIsOpen] = useState(false),
    [error, setError] = useState('')
  const [popupWindow, setPopupWindow] = useState<Window | null>(null)
  useEffect(() => {
    if (!popupWindow || popupWindow.closed) return
    if (capability.mode === 'pending') {
      popupWindow.postMessage(
        { type: 'langy.notes.pending', version: 1 },
        window.location.origin,
      )
      return
    }
    if (capability.mode !== 'teacher-popup') return
    popupWindow.postMessage(
      { type: 'langy.notes.navigate', version: 1, url: popupUrl },
      window.location.origin,
    )
  }, [capability, popupWindow, popupUrl])
  useEffect(() => {
    previewEditor.current?.update(draftKey)
  }, [draftKey])
  const close = useCallback(() => {
    popup.current?.close()
    const remainsOpen = !!popup.current && !popup.current.closed
    setIsOpen(remainsOpen)
    if (!remainsOpen) {
      setPopupWindow(null)
      previewEditor.current?.dispose()
      previewEditor.current = null
      triggerRef.current?.focus()
    }
  }, [])
  useEffect(() => {
    if (!isOpen) return
    const timer = window.setInterval(() => {
      if (popup.current?.closed) {
        setIsOpen(false)
        setPopupWindow(null)
        previewEditor.current?.dispose()
        previewEditor.current = null
        triggerRef.current?.focus()
      }
    }, 500)
    return () => window.clearInterval(timer)
  }, [isOpen])
  const open = () => {
    setError('')
    if (capability.mode === 'pending') {
      setError('As anotações ainda estão carregando. Tente novamente.')
      return
    }
    if (capability.mode === 'teacher-popup') {
      const result = launchNotesWindow({ url: popupUrl! })
      if (result.kind !== 'opened') {
        setError(
          result.kind === 'blocked'
            ? 'Permita pop-ups para abrir as anotações.'
            : 'Feche a janela anterior de anotações e tente novamente.',
        )
        return
      }
      popup.current = result.popup
      setPopupWindow(result.popup)
      setIsOpen(true)
      return
    }
    if (popup.current && !popup.current.closed) {
      popup.current.focus()
      return
    }
    const preview = window.open(
      '',
      'langy-notes-preview-' + encodeURIComponent(storageKey),
      'popup=yes,width=480,height=720,resizable=yes,scrollbars=yes',
    )
    if (!preview) {
      setError('Permita pop-ups para abrir as anotações.')
      return
    }
    preview.document.open()
    preview.document.write(
      '<!doctype html><html lang="pt-BR"><head><title>Notes · Prévia</title></head><body><div id="notes-root"></div></body></html>',
    )
    preview.document.close()
    popup.current = preview
    setPopupWindow(preview)
    previewEditor.current = mountNotesPreview(preview, draftKey, close)
    preview.focus()
    setIsOpen(true)
  }
  return {
    isOpen,
    open,
    close,
    popup: popupWindow,
    trigger,
    error,
    preview: capability.mode === 'preview-local',
  }
}
