import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthFrame } from '.'
import { FieldRoot } from '../FieldRoot'
import { TextInput } from '../../atoms/TextInput'
import { Button } from '../../atoms/Button'

const meta = {
  title: 'Molecules/Auth/AuthFrame',
  component: AuthFrame,
  tags: ['visual-review', 'short-viewport', 'layout-boundary'],
  parameters: { layout: 'fullscreen' },
  args: {
    brandLabel: 'Marca de exemplo',
    brand: (
      <>
        <h1>Continue seus estudos</h1>
        <p>Uma estrutura comum para acesso.</p>
      </>
    ),
    mobileLogo: <strong>Marca de exemplo</strong>,
    formAriaLabel: 'Acesso',
    topAction: <a href="#cadastro">Criar conta</a>,
    children: (
      <form>
        <h2>Entrar</h2>
        <FieldRoot label="Celular">
          <TextInput placeholder="00 00000 0000" />
        </FieldRoot>
        <Button>Continuar</Button>
      </form>
    ),
  },
} satisfies Meta<typeof AuthFrame>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithFooter: Story = {
  args: { footer: <p>Termos e privacidade do produto</p> },
}

export const NoTopAction: Story = { args: { topAction: null } }

export const LongForm: Story = {
  args: {
    children: (
      <form>
        <h2>Complete seu cadastro</h2>
        {Array.from({ length: 12 }, (_, index) => (
          <FieldRoot key={index} label={`Campo ${index + 1}`}>
            <TextInput placeholder="Conteúdo" />
          </FieldRoot>
        ))}
        <Button>Continuar</Button>
      </form>
    ),
  },
}
