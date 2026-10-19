# Autenticação, marca e documentos

A apresentação Auth mantém a composição React já revisada. O produto decide passo, texto, país, código, timers, navegação e operações; a biblioteca fornece a anatomia e a interação local dos controles.

## Composição recomendada

```tsx
import type { FormEventHandler, ReactNode } from 'react'
import {
  AuthActions,
  AuthBrandContent,
  AuthEyebrow,
  AuthForm,
  AuthFrame,
  AuthHeader,
  AuthTopLink,
  BrandLogo,
  Button,
} from '@langyspace/ui'

interface AccessFormProps {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  submitting: boolean
}

export function AccessForm({
  children,
  onSubmit,
  submitting,
}: AccessFormProps) {
  return (
    <AuthFrame
      brandLabel="Langy.space"
      brand={
        <AuthBrandContent
          logo={<BrandLogo width={160} />}
          title="Inglês para "
          highlight="sua rotina."
          description="Entre para continuar seus estudos."
          features={['Aulas e materiais']}
        />
      }
      mobileLogo={<BrandLogo width={160} />}
      formAriaLabel="Acesso"
      topAction={<AuthTopLink href="/cadastro">Criar conta</AuthTopLink>}
    >
      <AuthEyebrow>Área de acesso</AuthEyebrow>
      <AuthHeader
        title="Entre na "
        highlight="Langy.space"
        paragraphs={['Use seu celular para continuar.']}
      />
      <AuthForm onSubmit={onSubmit}>
        {children}
        <AuthActions>
          <Button type="submit" fullWidth size="lg" isLoading={submitting}>
            Continuar
          </Button>
        </AuthActions>
      </AuthForm>
    </AuthFrame>
  )
}
```

AuthFrame posiciona as regiões; AuthBrandContent compõe a marca, AuthHeader mantém o título e os parágrafos da etapa, e AuthActions fornece o ritmo vertical dos comandos nativos. O produto controla o fluxo.

## Conteúdo textual de documentos

DocumentLayout recebe arrays de parágrafos e seções que já são dados de conteúdo legal nos produtos. Essa anatomia fixa continua adequada ao uso atual; a revisão não a converte em um interpretador genérico nem publica dezenas de elementos de texto para reconstruir o mesmo documento. Para conteúdo interativo ou outra hierarquia, avaliar uma composição específica quando houver o caso real.

## AuthChannelHint

Linha de apoio que explica os canais de envio disponíveis.

Contrato: children e atributos/ref de div.

Cuidados: Texto e canais disponíveis vêm do produto; o componente não descobre provedores ou inicia envio.

## AuthChannelIcon

Moldura visual de um canal sms ou whatsapp, com glyph fornecido pelo consumidor.

Contrato: channel e atributos/ref/children nativos de span.

Cuidados: Não usar a cor como única identificação; a mensagem adjacente explica o canal e a disponibilidade.

## AuthEyebrow

Identificação curta do contexto de acesso, anterior ao título.

Contrato: children e atributos/ref de span.

Cuidados: Não usar para substituir o título ou comunicar um erro.

## AuthForm

Formulário nativo com espaçamento responsivo entre introdução e campos.

Contrato: children e atributos/ref de form.

Cuidados: onSubmit e validação ficam no produto. Não aninhar outro form no seu conteúdo.

## AuthFrame

Estrutura responsiva de autenticação: marca, formulário, ação superior e rodapé.

Contrato: brand, brandLabel, mobileLogo, formAriaLabel, topAction, footer e children.

Cuidados: Slots representam regiões estáveis já aprovadas. A mesma topAction é posicionada conforme o viewport; não incluir ids fixos duplicados nos seus conteúdos.

## AuthLegalText

Aviso ou consentimento legal próximo à confirmação do cadastro.

Contrato: children e atributos/ref de p.

Cuidados: Links/cópia são externos. Quando seguido diretamente por button, fornece o espaçamento específico previsto nessa composição.

## AuthNotice

Mensagem de retorno do fluxo Auth com intenção error ou info.

Contrato: tone, children e atributos de p; sem ref público neste contrato.

Cuidados: O consumidor define role/status apropriado e texto público. Não incluir diagnósticos, tokens ou estado de provider.

## AuthProgress

Indicador decorativo de transição da confirmação Auth.

Contrato: Atributos/ref de div, sem children/aria-hidden configuráveis.

Cuidados: Não representa percentagem real e permanece aria-hidden. Descrever o estado por texto; reduced motion desliga sua animação.

## AuthResendAction

Children contém ajuda/countdown; onResend e resendLabel são obrigatórios e disabled é controlado pelo produto. A UI possui o botão type="button"; não envia OTP nem calcula timers.

## AuthSuccessState

Container de conclusão com marca decorativa própria e children para o conteúdo. A marca é aria-hidden e respeita reduced motion. AuthProgress permanece independente porque também aparece em transição de rota e handoff.

## AuthTokenDigits

Entrada de código dividida em campos, com digitação contínua, paste e navegação por teclado.

Contrato: length, idPrefix, digitLabel, onTokenChange, value opcional, autoFocus, disabled, hasError e nome acessível do grupo.

Cuidados: Controlado por value ou com edição local; não valida OTP no servidor. Produto fornece cópia, duração do token e ações; mudança de length não restaura dígitos truncados.

## AuthTokenLabel

Label para o primeiro campo do código na composição de acesso.

Contrato: children e atributos/ref de label.

Cuidados: htmlFor deve apontar ao id do primeiro dígito, formado por idPrefix-0. O grupo e cada dígito mantêm seus nomes acessíveis.

## AuthTopLink

Âncora nativa com children e highlight opcional na mesma ação. href/onClick/ref são encaminhados; a adaptação de Router fica no produto. Não exige um componente separado para sublinhar o destaque.

## Avatar

Identidade com iniciais, imagem opcional e fallback React quando iniciais estão vazias.

Contrato: initials, imageUrl, size, tone, children e atributos/ref de span.

Cuidados: É decorativo por padrão quando o nome adjacente identifica a pessoa. Falha de imagem volta ao fallback e uma URL nova é tentada; upload/navegação ficam externos.

## BrandLink

Âncora de identidade visual com foco visível e conteúdo de marca composto.

Contrato: children e atributos/ref de a.

Cuidados: O produto adapta Router e destino; não embutir lógica de navegação no logo.

## BrandLogo

Imagem de marca com quatro assets reais por orientação horizontal/stacked e aparência default/inverse.

Contrato: orientation, appearance, alt e atributos/ref de img, exceto src/children.

Cuidados: A seleção de asset é explícita e tipada. Definir alt vazio se texto adjacente já identifica a marca; preservar proporção.

## DocumentHeader

Cabeçalho de documento com superfície e divisória comuns.

Contrato: children e atributos/ref de header.

Cuidados: Conteúdo e navegação continuam compostos; não transformar documentos em rotas da biblioteca.

## DocumentHeaderContent

Container de marca/navegação com largura e paddings responsivos do documento.

Contrato: children e atributos/ref de div.

Cuidados: Reutilizar dentro de DocumentHeader; não expor dimensões livres para cada consumidor.

## DocumentLayout

Apresentação de documentos textuais com título, metadados, resumo e seções de parágrafos.

Contrato: title, eyebrow, meta, summary, intro, sections e atributos/ref de div.

Cuidados: Arrays representam conteúdo textual repetido de uma anatomia fixa, não um schema de página. Rotas e conteúdo legal pertencem aos produtos; não acrescentar flags de layout ou regras a cada documento.

## DocumentNavigation

Grupo semântico de links de documentos.

Contrato: children e atributos/ref de nav.

Cuidados: Fornecer nome acessível se houver mais de uma navegação; ordem e destinos ficam no produto.

## DocumentNavigationLink

Link de documento com aparência de navegação e estados de hover/foco.

Contrato: children e atributos/ref de a.

Cuidados: Preservar href, teclado e navegação SPA no bridge do consumidor, mantendo a receita visual da UI.

## AuthBrandContent

Logo, título h1 com highlight opcional, descrição, features e footer. O produto fornece conteúdo React; a UI mantém ritmo e responsividade. Não contém rotas, timers ou flags por portal.

## AuthFooter

Children contém a identificação legal; links recebe pares href/label. placement="brand" ou "mobile" é a variação responsiva existente da mesma anatomia. Atributos/ref permanecem no parágrafo.

## AuthHeader

Title e highlight compõem um h2; paragraphs recebe conteúdo React por parágrafo; backAction é o comando nativo opcional de voltar. Atributos/ref do heading são preservados, sem gerar uma tela por configuração.

## AuthActions

Container sem caixa de layout (display: contents) que posiciona os Buttons diretos com o ritmo de autenticação. Button continua nativo, type="submit" explícito, com loading/disabled controlados pelo produto.
