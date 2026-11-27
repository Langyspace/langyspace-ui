import { useSlideNavigation } from './useSlideNavigation'
import { SlidePageFit } from './SlidePageFit'
import * as Styled from './SlideDeck.styles'
import type { SlideDeckProps } from './SlideDeck.types'
import { useFeedbackSounds } from '../Quiz/useFeedbackSounds'
import { setFeedbackSoundsEnabledFromControl } from '../../internal/feedbackSounds'

export function SlideDeck({
  pages,
  pageId,
  onPageChange,
  label,
  onBack,
  previousPageLabel = 'Voltar',
  firstPageLabel = 'Voltar à primeira página',
  navigationMode = 'pages',
  actions,
  feedbackSounds = false,
  feedbackSoundsLabel = 'Answer sounds',
  themeToggle,
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
        {onBack || (navigationMode === 'pages' && index > 0) ? (
          <Styled.BackButton
            variant="secondary"
            size="sm"
            onClick={() => {
              if (onBack) onBack()
              else {
                step(-1)
                viewportRef.current?.focus({ preventScroll: true })
              }
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
        {actions || feedbackSounds || themeToggle ? (
          <Styled.Actions>
            {themeToggle ? (
              <Styled.HeaderIconButton
                variant="subtle"
                shape="circle"
                size="sm"
                aria-label="Tema claro"
                aria-pressed={themeToggle.mode === 'light'}
                title={
                  themeToggle.mode === 'dark'
                    ? 'Usar tema claro'
                    : 'Voltar ao tema escuro'
                }
                onClick={themeToggle.onToggle}
                feedbackSound="hint"
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
                  {themeToggle.mode === 'dark' ? (
                    <>
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                    </>
                  ) : (
                    <path d="M20.9 13.1A9 9 0 0 1 10.9 3.1a9 9 0 1 0 10 10Z" />
                  )}
                </svg>
              </Styled.HeaderIconButton>
            ) : null}
            {feedbackSounds ? (
              <Styled.HeaderIconButton
                variant="subtle"
                shape="circle"
                size="sm"
                aria-label={feedbackSoundsLabel}
                title={feedbackSoundsLabel}
                aria-pressed={sound.enabled}
                onClick={() =>
                  setFeedbackSoundsEnabledFromControl(!sound.enabled)
                }
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
              </Styled.HeaderIconButton>
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
