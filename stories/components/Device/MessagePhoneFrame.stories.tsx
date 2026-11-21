import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'
import { MessageBubble } from '../../../src/components/Message/MessageBubble'
import { BrandLogo } from '../../../src/components/Brand/BrandLogo'

const meta = {
  component: MessagePhoneFrame,
  title: 'Device/MessagePhoneFrame',
  args: {
    contact: <BrandLogo width={96} alt="Langy" />,
    'aria-label': 'Exemplo de mensagem para a Langy',
    composerPlaceholder: 'Mensagem',
    children: (
      <MessageBubble side="outgoing" timestamp="9:41">
        Oi! Quero fechar o curso de inglês com vocês 😊
      </MessageBubble>
    ),
  },
} satisfies Meta<typeof MessagePhoneFrame>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { tags: ['visual-review'] }
export const Narrow: Story = {
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
