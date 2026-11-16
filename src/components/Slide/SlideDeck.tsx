import { Button } from '../Button/Button'
import { useSlideNavigation } from './useSlideNavigation'
import * as Styled from './SlideDeck.styles'
import type { SlideDeckProps } from './SlideDeck.types'

export function SlideDeck({
  pages,
  pageId,
  onPageChange,
  label,
  previousPageLabel = 'Voltar',
  actions,
  ...props
}: SlideDeckProps) {
  const { viewportRef, index, progress, goToIndex, onKeyDown } =
    useSlideNavigation({
      pages,
      pageId,
      onPageChange,
    })
  return (
    <Styled.Root {...props}>
      <Styled.Navigation aria-label={label}>
        <div>
          {index > 0 ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                goToIndex(index - 1)
                viewportRef.current?.focus({ preventScroll: true })
              }}
              iconStart={
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m12 5-7 7 7 7M5 12h14" />
                </svg>
              }
            >
              {previousPageLabel}
            </Button>
          ) : null}
        </div>
        {actions ? <Styled.Actions>{actions}</Styled.Actions> : null}
      </Styled.Navigation>
      {pages.length > 0 ? (
        <Styled.Progress aria-label={label} max={100} value={progress} />
      ) : null}
      <Styled.Viewport
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-label={label}
        onKeyDown={onKeyDown}
        data-slide-viewport="true"
      >
        {pages.map((page, pageIndex) => (
          <Styled.Page
            key={page.id}
            data-slide-id={page.id}
            data-current={pageIndex === index ? 'true' : undefined}
            aria-label={page.label}
            aria-roledescription="slide"
          >
            {page.content}
          </Styled.Page>
        ))}
      </Styled.Viewport>
    </Styled.Root>
  )
}
