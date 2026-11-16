import * as Styled from './ExercisePanel.styles'
import type { ExercisePanelProps } from './ExercisePanel.types'
export function ExercisePanel({
  title,
  counter,
  media,
  layout = 'stacked',
  children,
  ...props
}: ExercisePanelProps) {
  const heading = (
    <>
      {title || counter ? (
        <Styled.PanelHeading>
          {title ? <h3>{title}</h3> : null}
          {counter ? <Styled.Counter>{counter}</Styled.Counter> : null}
        </Styled.PanelHeading>
      ) : null}
    </>
  )
  return (
    <Styled.Panel {...props}>
      {layout === 'split' && media ? (
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
