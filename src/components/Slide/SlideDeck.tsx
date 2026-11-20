import { useSlideNavigation } from './useSlideNavigation'
import * as Styled from './SlideDeck.styles'
import type { SlideDeckProps } from './SlideDeck.types'

export function SlideDeck({
  pages,
  pageId,
  onPageChange,
  label,
  previousPageLabel = 'Voltar',
  firstPageLabel = 'Voltar à primeira página',
  navigationMode = 'pages',
  actions,
  overlay,
  onKeyDown: onRootKeyDown,
  ...props
}: SlideDeckProps) {
  const { viewportRef, index, progress, goToIndex, onKeyDown } =
    useSlideNavigation({
      pages,
      pageId,
      onPageChange,
      navigationMode,
    })
  return (
    <Styled.Root
      data-slide-deck="true"
      {...props}
      onKeyDown={(event) => {
        onRootKeyDown?.(event)
        onKeyDown(event)
      }}
    >
      <Styled.Navigation aria-label={label}>
        {navigationMode === 'pages' && index > 0 ? (
          <Styled.BackButton
            variant="secondary"
            size="sm"
            onClick={() => {
              goToIndex(index - 1)
              viewportRef.current?.focus({ preventScroll: true })
            }}
            iconStart={
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 5l-7 7 7 7" />
              </svg>
            }
          >
            {previousPageLabel}
          </Styled.BackButton>
        ) : null}
        {actions ? <Styled.Actions>{actions}</Styled.Actions> : null}
      </Styled.Navigation>
      {pages.length > 0 ? (
        <Styled.Progress aria-label={label} max={100} value={progress} />
      ) : null}
      <Styled.Viewport
        $continuous={navigationMode === 'continuous'}
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-label={label}
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
      {pages.length > 1 ? (
        <Styled.FirstPageButton
          variant="neutral"
          shape="circle"
          size="lg"
          aria-label={firstPageLabel}
          title={firstPageLabel}
          onClick={() => {
            goToIndex(0)
            viewportRef.current?.focus({ preventScroll: true })
          }}
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5m-7 7 7-7 7 7" />
          </svg>
        </Styled.FirstPageButton>
      ) : null}
      {overlay}
    </Styled.Root>
  )
}
