import { styled } from 'styled-components'
import { FlashcardFrame } from '../src'
import { ShadowingPanel } from '../src'

export const BoundedFlashcardPreview = styled(FlashcardFrame)`
  &&&& {
    height: calc(100svh - 9rem);
  }
`

export const FlashcardControls = styled.footer`
  &&&& {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    padding: 1rem;
  }
`

export const FlashcardRatings = styled.div`
  &&&& {
    display: flex;
    gap: 0.5rem;
  }
`

export const BoundedShadowingPreview = styled(ShadowingPanel)`
  &&&& {
    height: calc(100svh - 9rem);
  }
`

export const ShadowingHeader = styled.header`
  &&&& {
    padding: 1rem;
  }
`
