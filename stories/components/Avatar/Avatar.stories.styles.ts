import { styled } from 'styled-components'
import { StoryRow } from '../../../.storybook/fixtures'

export const AvatarIdentityRow = styled(StoryRow)`
  &&&& {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`

export const AvatarLongName = styled.span`
  &&&& {
    min-width: 0;
    overflow-wrap: anywhere;
  }
`
