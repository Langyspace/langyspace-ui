import type { Meta, StoryObj } from '@storybook/react-vite'
import { DocumentLayout } from '.'

const meta = {
  title: 'Molecules/Layout/DocumentLayout',
  component: DocumentLayout,
  tags: ['visual-review'],
  args: {
    title: 'Guia de participação',
    eyebrow: 'documento',
    meta: 'Atualizado em maio de 2026',
    summary: [
      'Consulte as orientações antes de participar.',
      'Guarde as informações para futuras consultas.',
    ],
    intro: [
      'Este documento apresenta as orientações para participação nas atividades.',
    ],
    sections: [
      {
        title: 'Como participar',
        body: [
          'Confira os horários e entre em contato quando precisar de ajuda.',
        ],
      },
    ],
  },
} satisfies Meta<typeof DocumentLayout>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const WithoutSummary: Story = {
  args: { summary: [], intro: [], eyebrow: undefined, meta: undefined },
}
export const LongContent: Story = {
  tags: ['layout-boundary'],
  args: {
    title: 'Orientações completas de participação e acompanhamento',
    summary: [
      'Orientações detalhadas que precisam manter a leitura confortável em telas estreitas e em documentos extensos.',
    ],
    sections: Array.from({ length: 8 }, (_, index) => ({
      title: `Seção ${index + 1}: informações para acompanhar as atividades`,
      body: Array.from(
        { length: 3 },
        () =>
          'As orientações ficam disponíveis para consulta durante toda a participação. Confira as informações e fale com a equipe quando precisar de ajuda ou quiser esclarecer alguma dúvida.',
      ),
    })),
  },
}
