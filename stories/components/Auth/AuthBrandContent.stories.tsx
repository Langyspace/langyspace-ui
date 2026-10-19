import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  AuthActions,
  AuthBrandContent,
  AuthForm,
  AuthFrame,
  AuthHeader,
  AuthTopLink,
  BrandLogo,
  Button,
  FieldRoot,
  TextInput,
} from '../../../src'

const meta = {
  title: 'Auth/AuthBrandContent',
  component: AuthBrandContent,
  tags: ['visual-review'],
  parameters: { layout: 'fullscreen' },
  args: {
    logo: <span>Langy.space</span>,
    title: 'Seu próximo passo ',
    highlight: 'começa aqui.',
    description: 'Acesse suas aulas e materiais.',
    features: ['Aulas ao vivo', 'Materiais organizados'],
  },
  render: (args) => (
    <AuthFrame
      brand={<AuthBrandContent {...args} />}
      brandLabel="Langy.space"
      mobileLogo={<BrandLogo width={144} />}
      formAriaLabel="Acesso"
      topAction={
        <AuthTopLink href="#login" highlight="Entrar">
          Já tem cadastro?
        </AuthTopLink>
      }
    >
      <AuthHeader
        title="Entre no seu "
        highlight="portal."
        paragraphs={['Acesse suas aulas e materiais.']}
      />
      <AuthForm onSubmit={(event) => event.preventDefault()}>
        <FieldRoot label="Celular">
          <TextInput placeholder="(11) 99999-0000" />
        </FieldRoot>
        <AuthActions>
          <Button type="submit" fullWidth size="lg">
            Continuar
          </Button>
        </AuthActions>
      </AuthForm>
    </AuthFrame>
  ),
} satisfies Meta<typeof AuthBrandContent>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
