import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Track = styled.div.withConfig({
  componentId: 'lsui-sc-practice-progress-bar',
})`
  height: 0.375rem;
  overflow: hidden;
  border-radius: ${token.radiusPill};
  background: ${token.colorNeutral100};
`

export const Fill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: ${token.colorAccentDefault};
  transition: width 0.52s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
