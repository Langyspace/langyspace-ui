import { useSlideNavigation } from './useSlideNavigation'
import { SlidePageFit } from './SlidePageFit'
import * as Styled from './SlideDeck.styles'
import type { SlideDeckProps } from './SlideDeck.types'
import { useFeedbackSounds } from '../Quiz/useFeedbackSounds'

export function SlideDeck({
  pages,
  pageId,
  onPageChange,
  label,
  previousPageLabel = 'Voltar',
  firstPageLabel = 'Voltar à primeira página',
  navigationMode = 'pages',
  actions,
  feedbackSounds = false,
  feedbackSoundsLabel = 'Answer sounds',
  overlay,
  onKeyDown: onRootKeyDown,
  ...props
}: SlideDeckProps) {
  const sound = useFeedbackSounds()
  const { viewportRef, index, progress, goToIndex, step, onKeyDown } =
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
      <Styled.Navigation aria-label={label} data-slide-navigation="true">
        {navigationMode === 'pages' && index > 0 ? (
          <Styled.BackButton
            variant="secondary"
            size="sm"
            onClick={() => {
              step(-1)
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
        {actions || feedbackSounds ? (
          <Styled.Actions>
            {feedbackSounds ? (
              <Styled.SoundButton
                variant="subtle"
                shape="circle"
                size="sm"
                aria-label={feedbackSoundsLabel}
                title={feedbackSoundsLabel}
                aria-pressed={sound.enabled}
                onClick={() => sound.setEnabled(!sound.enabled)}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 5 6 9H3v6h3l5 4z" />
                  {sound.enabled ? (
                    <path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
                  ) : (
                    <path d="m16 9 5 6m0-6-5 6" />
                  )}
                </svg>
              </Styled.SoundButton>
            ) : null}
            {actions}
          </Styled.Actions>
        ) : null}
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
            $paged={navigationMode === 'pages'}
            key={page.id}
            data-slide-id={page.id}
            data-current={pageIndex === index ? 'true' : undefined}
            aria-label={page.label}
            aria-roledescription="slide"
          >
            {navigationMode === 'pages' ? (
              <SlidePageFit>{page.content}</SlidePageFit>
            ) : (
              page.content
            )}
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
