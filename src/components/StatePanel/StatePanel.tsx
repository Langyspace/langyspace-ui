import * as Styled from './StatePanel.styles'
import type { StatePanelProps } from './StatePanel.types'
import { Spinner } from '../Spinner/Spinner'

const accessibility = {
  empty: {},
  error: { role: 'alert' },
  loading: { 'aria-busy': true, 'aria-live': 'polite', role: 'status' },
  partial: { 'aria-live': 'polite', role: 'status' },
} as const

export function StatePanel({
  action,
  density = 'regular',
  description,
  fill = false,
  icon,
  state,
  surface = 'outlined',
  title,
  ...props
}: StatePanelProps) {
  const stateIcon =
    state === 'loading' && icon === undefined ? <Spinner size="lg" /> : icon
  return (
    <Styled.Container
      {...props}
      {...accessibility[state]}
      $density={density}
      $fill={fill}
      $surface={surface}
      data-state={state}
      data-ui-state-panel="true"
      data-ui-loading-state={state === 'loading' ? 'true' : undefined}
    >
      {stateIcon ? (
        <Styled.Icon aria-hidden="true">{stateIcon}</Styled.Icon>
      ) : null}
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        {description ? (
          <Styled.Description $density={density}>
            {description}
          </Styled.Description>
        ) : null}
      </Styled.Content>
      {action ? (
        <Styled.Action $density={density}>{action}</Styled.Action>
      ) : null}
    </Styled.Container>
  )
}

export type {
  StatePanelDensity,
  StatePanelProps,
  StatePanelState,
  StatePanelSurface,
} from './StatePanel.types'
