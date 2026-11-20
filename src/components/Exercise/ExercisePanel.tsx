import * as Styled from './ExercisePanel.styles'
import type { ExercisePanelProps } from './ExercisePanel.types'
export function ExercisePanel({
  title,
  counter,
  workstationMeta,
  media,
  layout = 'stacked',
  variant = 'default',
  children,
  ...props
}: ExercisePanelProps) {
  if (variant === 'workstation')
    return (
      <Styled.Workstation {...props} $withMedia={Boolean(media)}>
        {media ? (
          <Styled.ContextMedia data-exercise-media="true">
            {media}
          </Styled.ContextMedia>
        ) : null}
        <Styled.Desktop>
          <Styled.Screen>
            <Styled.WindowBar>
              <Styled.WindowControls aria-hidden="true">
                <i />
                <i />
                <i />
              </Styled.WindowControls>
              {title ? (
                <Styled.ScreenHeader>{title}</Styled.ScreenHeader>
              ) : null}
            </Styled.WindowBar>
            <Styled.ScreenBody>{children}</Styled.ScreenBody>
            <Styled.Taskbar>
              <Styled.DesktopMenu aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </Styled.DesktopMenu>
              {workstationMeta?.appLabel ? (
                <span>{workstationMeta.appLabel}</span>
              ) : null}
              {workstationMeta?.clock ? (
                <time>{workstationMeta.clock}</time>
              ) : null}
            </Styled.Taskbar>
          </Styled.Screen>
          <Styled.MonitorChin aria-hidden="true">
            <i />
          </Styled.MonitorChin>
          <Styled.Stand aria-hidden="true" />
        </Styled.Desktop>
      </Styled.Workstation>
    )
  const counterInMedia = variant === 'warmup' && Boolean(media)
  const heading = (
    <>
      {title || (counter && !counterInMedia) ? (
        <Styled.PanelHeading $warmup={variant === 'warmup'}>
          {title ? <h3>{title}</h3> : null}
          {counter && !counterInMedia ? (
            <Styled.Counter>{counter}</Styled.Counter>
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
            <Styled.WarmupMedia data-exercise-media="true">
              {media}
              {counter ? (
                <Styled.MediaCounter>{counter}</Styled.MediaCounter>
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
            {children}
          </Styled.Stack>
        </Styled.Split>
      ) : (
        <>
          {heading}
          {media ? <Styled.Media>{media}</Styled.Media> : null}
          <Styled.Stack>{children}</Styled.Stack>
        </>
      )}
    </Styled.Panel>
  )
}
