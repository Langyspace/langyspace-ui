import { ThemeProvider } from 'styled-components'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'
import { MessageBubble } from '../../../src/components/Message/MessageBubble'
import { useMaterialTeacher } from './MaterialTeacherContext'
import { withVoiceMessageLayout } from './deviceTheme'
import type { HomeworkVoiceNoteProps } from './HomeworkVoiceNote.types'
import * as S from './HomeworkVoiceNote.styles'
const messageTheme = withVoiceMessageLayout({
  contentWidth: '100%',
  phoneWidth: '18rem',
  phoneHeight: 'clamp(24rem, calc(100cqh - 15.625rem), 33.75rem)',
})

export function HomeworkVoiceNote({
  prompt,
  duration,
  starters,
  closing,
}: HomeworkVoiceNoteProps) {
  const teacher = useMaterialTeacher()
  return (
    <ThemeProvider theme={messageTheme}>
      <MessagePhoneFrame
        aria-label="Voice-note assignment for your teacher"
        time="20:30"
        contact={
          <Avatar
            name={teacher.name}
            imageUrl={teacher.avatarUrl}
            initials={teacher.name.trim().slice(0, 1)}
            namePosition="beside"
            size="sm"
            textTone="inherit"
          />
        }
        composerPlaceholder="Record your voice note in WhatsApp"
      >
        <MessageBubble side="incoming" appearance="messaging" timestamp="20:30">
          {prompt}
        </MessageBubble>
        <MessageBubble side="outgoing" appearance="messaging" timestamp="">
          <S.Assignment>
            <strong>Your voice note · {duration}</strong>
            <p>
              {starters.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
            <p>{closing}</p>
          </S.Assignment>
        </MessageBubble>
      </MessagePhoneFrame>
    </ThemeProvider>
  )
}
