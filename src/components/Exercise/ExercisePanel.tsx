import * as Styled from './ExercisePanel.styles'
import type { ExercisePanelProps } from './ExercisePanel.types'
export function ExercisePanel({
  title,
  counter,
  media,
  children,
  ...props
}: ExercisePanelProps) {
  return (
    <Styled.Panel {...props}>
      {title || counter ? (
        <Styled.PanelHeading>
          {title ? <h3>{title}</h3> : null}
          {counter ? <Styled.Counter>{counter}</Styled.Counter> : null}
        </Styled.PanelHeading>
      ) : null}
      {media ? <Styled.Media>{media}</Styled.Media> : null}
      <Styled.Stack>{children}</Styled.Stack>
    </Styled.Panel>
  )
}
