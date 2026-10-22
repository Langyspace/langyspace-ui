import * as Styled from './MessageThread.styles'
import type { MessageThreadProps } from './MessageThread.types'

export function MessageThread({
  children,
  footer,
  header,
  onViewportScroll,
  viewportLabel,
  viewportRef,
  ref,
  ...sectionProps
}: MessageThreadProps) {
  return (
    <Styled.Panel {...sectionProps} ref={ref} data-ui-message-thread="true">
      <Styled.Header data-ui-message-thread-part="header">
        {header}
      </Styled.Header>
      <Styled.Viewport
        ref={viewportRef}
        aria-label={viewportLabel}
        aria-live="polite"
        data-ui-message-thread-part="viewport"
        role="region"
        tabIndex={0}
        onScroll={onViewportScroll}
      >
        {children}
      </Styled.Viewport>
      {footer != null ? (
        <Styled.Footer data-ui-message-thread-part="footer">
          {footer}
        </Styled.Footer>
      ) : null}
    </Styled.Panel>
  )
}
