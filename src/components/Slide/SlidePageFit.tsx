import { useLayoutEffect, useRef, useState } from 'react'
import * as Styled from './SlideDeck.styles'
import type { SlidePageFitProps } from './SlidePageFit.types'

/** Keep the complete authored page visible; remeasure after reveals, fonts and resize. */
export function SlidePageFit({ children }: SlidePageFitProps) {
  const content = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const element = content.current,
      frame = element?.parentElement
    if (!element || !frame) return
    const measure = () => {
      if (!frame.clientHeight || !element.scrollHeight) return
      const frameStyle = getComputedStyle(frame)
      const available =
        frame.clientHeight -
        (parseFloat(frameStyle.paddingTop) || 0) -
        (parseFloat(frameStyle.paddingBottom) || 0)
      const next = Math.min(1, available / element.scrollHeight)
      setScale((previous) =>
        Math.abs(previous - next) < 0.001 ? previous : next,
      )
    }
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    observer.observe(frame)
    measure()
    return () => observer.disconnect()
  }, [])
  return (
    <Styled.FitContent ref={content} $scale={scale} data-slide-fit>
      {children}
    </Styled.FitContent>
  )
}
