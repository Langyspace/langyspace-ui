import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'
import { MessageBubble } from '../../../src/components/Message/MessageBubble'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import langyProfile from '../../../src/assets/brand/profile.png'

const meta = {
  component: MessagePhoneFrame,
  title: 'Device/MessagePhoneFrame',
  args: {
    contact: (
      <Avatar
        imageUrl={langyProfile}
        initials="L"
        name="Langy"
        namePosition="beside"
        textTone="inherit"
        size="sm"
      />
    ),
    'aria-label': 'Exemplo de mensagem para a Langy',
    composerPlaceholder: 'Mensagem',
    children: (
      <MessageBubble side="outgoing" appearance="messaging" timestamp="9:41">
        Oi! Quero fechar o curso de inglês com vocês 😊
      </MessageBubble>
    ),
  },
} satisfies Meta<typeof MessagePhoneFrame>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { tags: ['visual-review'] }
export const Large: Story = { args: { size: 'large' }, tags: ['visual-review'] }
export const Narrow: Story = {
  args: { size: 'large' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review', 'layout-boundary'],
}
export const LongMessage: Story = {
  args: {
    contact: 'School admissions team',
    children: (
      <MessageBubble side="outgoing" timestamp="10:30">
        I enjoyed the trial lesson and I’d like to join the English course.
        Could you help me with the next steps?
      </MessageBubble>
    ),
  },
  tags: ['visual-review', 'layout-boundary'],
}
export const FittedConversation: Story = {
  args: {
    contentSizing: 'fit',
    contact: 'Teacher',
    children: (
      <>
        <MessageBubble side="incoming" appearance="messaging" timestamp="20:30">
          Send me a voice note comparing your neighbourhood’s past and present
        </MessageBubble>
        <MessageBubble side="outgoing" appearance="messaging" timestamp="">
          <strong>Your voice note · 60–90 seconds</strong>
          <p>I used to…</p>
          <p>There used to be…</p>
          <p>Did you use to…?</p>
          <p>Finish with a question for your teacher</p>
        </MessageBubble>
      </>
    ),
  },
  tags: ['visual-review', 'layout-boundary'],
}
