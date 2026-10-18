import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Track = styled.div.withConfig({
  componentId: 'lsui-sc-practice-progress-bar',
})`
  height: 0.375rem;
  overflow: hidden;
  border-radius: ${token.radiusPill};
  background: ${token.colorNeutral100};
`

const Fill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: ${token.colorAccentDefault};
  transition: width 0.52s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export interface PracticeProgressBarProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden' | 'role' | 'tabIndex'
> {
  /** Consumer-owned progress in the 0–1 range. Non-finite values render as zero. */
  value: number
}

export function PracticeProgressBar({
  value,
  ...props
}: PracticeProgressBarProps) {
  const progress = Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0

  return (
    <Track {...props} aria-hidden="true" data-ui-practice-progress-bar="true">
      <Fill style={{ width: `${progress * 100}%` }} />
    </Track>
  )
}
