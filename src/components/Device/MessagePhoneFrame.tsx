import * as Phone from '../VoiceMessage/VoiceMessageExercise.styles'
import * as Styled from './MessagePhoneFrame.styles'
import type { MessagePhoneFrameProps } from './MessagePhoneFrame.types'

/** Shared messaging chrome; consumers supply static content, native playback or explicit actions. */
export function MessagePhoneFrame({
  contact,
  children,
  size = 'default',
  time = '9:41',
  composerPlaceholder = 'Message',
  conversationProps,
  composerAction,
  ...props
}: MessagePhoneFrameProps) {
  return (
    <Styled.Root
      as="section"
      $size={size}
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
      <Phone.Conversation {...conversationProps}>{children}</Phone.Conversation>
      <Phone.Composer aria-hidden={composerAction ? undefined : true}>
        <Phone.MessagePlaceholder>
          {composerPlaceholder}
        </Phone.MessagePlaceholder>
        {composerAction ?? (
          <Phone.Microphone>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1A7 7 0 0 0 19 12z" />
            </svg>
          </Phone.Microphone>
        )}
      </Phone.Composer>
      <Phone.HomeIndicator aria-hidden="true" />
    </Styled.Root>
  )
}
