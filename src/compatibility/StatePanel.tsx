import { Spinner } from '../components/Spinner/Spinner'
import { StatePanel } from '../components/StatePanel/StatePanel'
import type { StatePanelProps } from '../components/StatePanel/StatePanel.types'

export type LoadingStateProps = Omit<StatePanelProps, 'icon' | 'state'>

/** @deprecated Prefer StatePanel; retained for existing consumers. */
export function LoadingState(props: LoadingStateProps) {
  return (
    <StatePanel
      {...props}
      data-ui-loading-state="true"
      icon={<Spinner size="lg" />}
      state="loading"
    />
  )
}

export type EmptyStateProps = Omit<StatePanelProps, 'state'>

/** @deprecated Prefer StatePanel; retained for existing consumers. */
export function EmptyState(props: EmptyStateProps) {
  return <StatePanel {...props} state="empty" />
}
