import { SimulationIcon } from '../InteractiveMaterial/SimulationIcon'
import * as Phone from '../VoiceMessage/VoiceMessageExercise.styles'
import * as Styled from './MessagePhoneFrame.styles'
import type { MessagePhoneFrameProps } from './MessagePhoneFrame.types'

/** Decorative messaging chrome; never sends messages or requests device access. */
export function MessagePhoneFrame({
  contact,
  children,
  time = '9:41',
  composerPlaceholder = 'Message',
  ...props
}: MessagePhoneFrameProps) {
  return (
    <Styled.Root
      as="section"
      aria-label="Message preview"
      {...props}
      data-device-frame="message-phone"
    >
      <Phone.StatusBar aria-hidden="true">
        <span>{time}</span>
        <Phone.Island />
        <Phone.StatusIcons>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
            <rect x="0" y="8" width="3" height="4" rx="1" />
            <rect x="5" y="5" width="3" height="7" rx="1" />
            <rect x="10" y="2" width="3" height="10" rx="1" />
          </svg>
          <svg
            width="22"
            height="12"
            viewBox="0 0 22 12"
            fill="none"
            stroke="currentColor"
          >
            <rect x="1" y="1" width="17" height="10" rx="2" />
            <path d="M20 4v4" />
            <rect
              x="3"
              y="3"
              width="13"
              height="6"
              rx="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </Phone.StatusIcons>
      </Phone.StatusBar>
      <Phone.Contact>
        <Phone.Back aria-hidden="true">‹</Phone.Back>
        {contact}
      </Phone.Contact>
      <Phone.Conversation>{children}</Phone.Conversation>
      <Phone.Composer aria-hidden="true">
        <Phone.MessagePlaceholder>
          {composerPlaceholder}
        </Phone.MessagePlaceholder>
        <Phone.Microphone>
          <SimulationIcon name="mic" />
        </Phone.Microphone>
      </Phone.Composer>
      <Phone.HomeIndicator aria-hidden="true" />
    </Styled.Root>
  )
}
