import * as Styled from './ExercisePanel.styles'
import type { ExercisePanelProps } from './ExercisePanel.types'
export function ExercisePanel({
  title,
  counter,
  media,
  layout = 'stacked',
  variant = 'default',
  children,
  ...props
}: ExercisePanelProps) {
  const counterInMedia = variant === 'warmup' && Boolean(media)
  const heading = (
    <>
      {title || (counter && !counterInMedia) ? (
        <Styled.PanelHeading>
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
