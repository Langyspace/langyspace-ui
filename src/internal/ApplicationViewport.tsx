import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { theme } from '../foundations/theme/theme'
import * as S from './ApplicationViewport.styles'
import type { ApplicationViewportProps } from './ApplicationViewport.types'

/** Controlled local document: Student components retain their actual mobile media queries. */
export function ApplicationViewport({
  title,
  children,
}: ApplicationViewportProps) {
  const root = useRef<HTMLDivElement>(null)
  const frame = useRef<HTMLIFrameElement>(null)
  const [document, setDocument] = useState<Document>()
  const [scale, setScale] = useState(1)
  const [fontFaces, setFontFaces] = useState('')
  useEffect(() => {
    const host = root.current
    if (!host) return
    const observer = new ResizeObserver(() => {
      setScale(Math.min(host.clientWidth / 360, host.clientHeight / 640))
    })
    observer.observe(host)
    // Fonts only: no host layout, theme, user data or cross-origin stylesheet is copied.
    const faces: string[] = []
    for (const sheet of Array.from(host.ownerDocument.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules))
          if (rule.type === CSSRule.FONT_FACE_RULE) faces.push(rule.cssText)
      } catch {
        /* Cross-origin stylesheets are not needed. */
      }
    }
    setFontFaces(faces.join('\n'))
    return () => observer.disconnect()
  }, [])
  return (
    <S.Root ref={root}>
      <S.Viewport
        ref={frame}
        title={title}
        $scale={scale}
        srcDoc="<!doctype html><html lang='en'><head></head><body></body></html>"
        onLoad={() => setDocument(frame.current?.contentDocument ?? undefined)}
      />
      {document?.body &&
        createPortal(
          <StyleSheetManager target={document.head}>
            <ThemeProvider theme={theme}>
              <S.Canvas $fontFaces={fontFaces} />
              {children}
            </ThemeProvider>
          </StyleSheetManager>,
          document.body,
        )}
    </S.Root>
  )
}
