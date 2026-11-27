import * as Styled from './MobileFrame.styles'
import { ApplicationViewport } from '../../internal/ApplicationViewport'
import type { MobileFrameProps } from './MobileFrame.types'

/** A content-sized phone preview: no simulated controls, fixed clipping or inner scrolling. */
export function MobileFrame({
  title,
  children,
  screenMode = 'content',
  illustration,
  ...props
}: MobileFrameProps) {
  const application = screenMode !== 'content'
  if (illustration)
    return (
      <Styled.IllustratedRoot
        {...props}
        $aspectRatio={illustration.aspectRatio}
        data-device-frame="mobile"
        data-device-illustration="true"
      >
        <Styled.Illustration src={illustration.src} alt={illustration.alt} />
        <Styled.IllustratedScreen
          $screen={illustration.screen}
          $hasTitle={Boolean(title)}
        >
          {title ? <Styled.Title>{title}</Styled.Title> : null}
          {children}
        </Styled.IllustratedScreen>
      </Styled.IllustratedRoot>
    )
  return (
    <Styled.Root
      {...props}
      $application={application}
      data-device-frame="mobile"
    >
      <Styled.Camera aria-hidden="true" />
      {title ? <Styled.Title>{title}</Styled.Title> : null}
      <Styled.Content $application={application}>
        {application ? (
          <ApplicationViewport
            sizing={
              screenMode === 'application-responsive' ? 'responsive' : 'scaled'
            }
            title={
              typeof title === 'string'
                ? title
                : (props['aria-label'] ?? 'Application preview')
            }
          >
            {children}
          </ApplicationViewport>
        ) : (
          children
        )}
      </Styled.Content>
      <Styled.HomeIndicator aria-hidden="true" />
    </Styled.Root>
  )
}
