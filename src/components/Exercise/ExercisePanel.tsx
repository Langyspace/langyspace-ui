import * as Styled from './ExercisePanel.styles'
import { Button } from '../Button/Button'
import type {
  ExercisePanelProps,
  ExerciseMonitorProps,
} from './ExercisePanel.types'

function MonitorFrame({
  title,
  workstationMeta,
  children,
  form,
  screenAspectRatio,
  screenTextAlign,
  media,
}: ExerciseMonitorProps) {
  return (
    <Styled.Desktop>
      <Styled.Screen
        $aspectRatio={
          screenAspectRatio !== undefined &&
          Number.isFinite(screenAspectRatio) &&
          screenAspectRatio > 0
            ? screenAspectRatio
            : undefined
        }
      >
        <Styled.WindowBar>
          <Styled.WindowControls aria-hidden="true">
            <i />
            <i />
            <i />
          </Styled.WindowControls>
          {title ? <Styled.ScreenHeader>{title}</Styled.ScreenHeader> : null}
          {workstationMeta?.clock || workstationMeta?.date ? (
            <Styled.DesktopClock>
              {workstationMeta.clock ? (
                <time>{workstationMeta.clock}</time>
              ) : null}
              {workstationMeta.date ? (
                <span>{workstationMeta.date}</span>
              ) : null}
            </Styled.DesktopClock>
          ) : null}
        </Styled.WindowBar>
        <Styled.ScreenBody $form={form} $textAlign={screenTextAlign}>
          {media ? <Styled.ScreenMedia>{media}</Styled.ScreenMedia> : null}
          {children}
        </Styled.ScreenBody>
        {workstationMeta?.appLabel ? (
          <Styled.Taskbar>
            <Styled.DesktopMenu aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </Styled.DesktopMenu>
            <span>{workstationMeta.appLabel}</span>
          </Styled.Taskbar>
        ) : null}
      </Styled.Screen>
      <Styled.MonitorChin aria-hidden="true">
        <i />
      </Styled.MonitorChin>
      <Styled.Stand aria-hidden="true" />
    </Styled.Desktop>
  )
}
export function ExercisePanel({
  title,
  counter,
  navigation,
  workstationMeta,
  media,
  layout = 'stacked',
  mediaBadge,
  monitorLayout = 'flow',
  screenAspectRatio,
  screenTextAlign,
  warmupMediaSizing = 'natural',
  variant = 'default',
  children,
  ...props
}: ExercisePanelProps) {
  const current = navigation
    ? Math.max(0, Math.min(navigation.index, navigation.count - 1))
    : 0
  const progress =
    counter ??
    (navigation
      ? `${navigation.count ? current + 1 : 0}/${navigation.count}`
      : undefined)
  const controls = navigation ? (
    <Styled.Navigation
      aria-label={navigation.labels?.region ?? 'Exercise navigation'}
    >
      <Button
        variant="secondary"
        size="sm"
        disabled={current <= 0}
        onClick={() => navigation.onChange(current - 1)}
      >
        {navigation.labels?.previous ?? 'Previous'}
      </Button>
      {variant === 'monitor' || variant === 'workstation' ? (
        <Styled.Counter aria-live="polite">{progress}</Styled.Counter>
      ) : null}
      <Button
        variant="secondary"
        size="sm"
        disabled={current >= navigation.count - 1}
        onClick={() => navigation.onChange(current + 1)}
      >
        {navigation.labels?.next ?? 'Next'}
      </Button>
    </Styled.Navigation>
  ) : null
  if (variant === 'monitor')
    return (
      <Styled.MonitorPanel {...props}>
        <MonitorFrame
          title={title}
          workstationMeta={workstationMeta}
          form={monitorLayout === 'form'}
          screenAspectRatio={screenAspectRatio}
          screenTextAlign={screenTextAlign}
          media={media}
        >
          {children}
        </MonitorFrame>
        {controls}
      </Styled.MonitorPanel>
    )
  if (variant === 'workstation')
    return (
      <Styled.Workstation {...props} $withMedia={Boolean(media)}>
        {media ? (
          <Styled.ContextMedia data-exercise-media="true">
            {media}
          </Styled.ContextMedia>
        ) : null}
        <MonitorFrame
          title={title}
          workstationMeta={workstationMeta}
          screenAspectRatio={screenAspectRatio}
          screenTextAlign={screenTextAlign}
          form
        >
          {children}
        </MonitorFrame>
        {controls}
      </Styled.Workstation>
    )
  const counterInMedia = variant === 'warmup' && Boolean(media)
  const heading = (
    <>
      {title || (progress && !counterInMedia) ? (
        <Styled.PanelHeading $warmup={variant === 'warmup'}>
          {title ? <h3>{title}</h3> : null}
          {progress && !counterInMedia ? (
            <Styled.Counter aria-live={navigation ? 'polite' : undefined}>
              {progress}
            </Styled.Counter>
          ) : null}
        </Styled.PanelHeading>
      ) : null}
    </>
  )
  return (
    <Styled.Panel {...props} $warmup={variant === 'warmup'}>
      {variant === 'warmup' ? (
        <Styled.Warmup>
          {heading}
          {media ? (
            <Styled.WarmupMedia
              data-exercise-media="true"
              $presentation={warmupMediaSizing === 'presentation'}
            >
              {media}
              {mediaBadge ? (
                <Styled.MediaBadge
                  data-exercise-media-badge
                  src={mediaBadge.src}
                  alt={mediaBadge.alt}
                />
              ) : null}
              {progress ? (
                <Styled.MediaCounter>{progress}</Styled.MediaCounter>
              ) : null}
            </Styled.WarmupMedia>
          ) : null}
          <Styled.Stack>{children}</Styled.Stack>
        </Styled.Warmup>
      ) : layout === 'split' && media ? (
        <Styled.Split>
          {media ? <div data-exercise-media="true">{media}</div> : null}
          <Styled.Stack>
            {heading}
            {variant === 'reading' ? (
              <Styled.Prose>{children}</Styled.Prose>
            ) : (
              children
            )}
          </Styled.Stack>
        </Styled.Split>
      ) : (
        <>
          {heading}
          {media ? <Styled.Media>{media}</Styled.Media> : null}
          {variant === 'reading' ? (
            <Styled.Prose>{children}</Styled.Prose>
          ) : (
            <Styled.Stack>{children}</Styled.Stack>
          )}
        </>
      )}
      {controls}
    </Styled.Panel>
  )
}
