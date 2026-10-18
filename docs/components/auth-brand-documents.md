# Autenticação, marca e documentos

A apresentação Auth mantém a composição React já revisada. O produto decide passo, texto, país, código, timers, navegação e operações; a biblioteca fornece a anatomia e a interação local dos controles.

## Composição recomendada

```tsx
import type { FormEventHandler, ReactNode } from 'react'
import {
  AuthAccent,
  AuthBrandTitle,
  AuthDescription,
  AuthEyebrow,
  AuthForm,
  AuthFrame,
  AuthSubmitButton,
  AuthTitle,
  AuthTopLink,
  BrandLogo,
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
      brand={<AuthBrandTitle>Inglês para sua rotina.</AuthBrandTitle>}
      mobileLogo={<BrandLogo width={160} />}
      formAriaLabel="Acesso"
      topAction={<AuthTopLink href="/cadastro">Criar conta</AuthTopLink>}
    >
      <AuthEyebrow>Área de acesso</AuthEyebrow>
      <AuthTitle>
        Entre na <AuthAccent>Langy.space</AuthAccent>
      </AuthTitle>
      <AuthDescription>Use seu celular para continuar.</AuthDescription>
      <AuthForm onSubmit={onSubmit}>
        {children}
        <AuthSubmitButton isLoading={submitting}>Continuar</AuthSubmitButton>
      </AuthForm>
    </AuthFrame>
  )
}
```

AuthFrame posiciona regiões estáveis; AuthTitle e AuthBrandTitle têm contextos e hierarquias distintos. Uma variante não deve transformar um em qualquer heading ou substituir a composição por um objeto de configuração de tela.

## Conteúdo textual de documentos

DocumentLayout recebe arrays de parágrafos e seções que já são dados de conteúdo legal nos produtos. Essa anatomia fixa continua adequada ao uso atual; a revisão não a converte em um interpretador genérico nem publica dezenas de elementos de texto para reconstruir o mesmo documento. Para conteúdo interativo ou outra hierarquia, avaliar uma composição específica quando houver o caso real.

## AuthAccent

Destaca uma parte do título do formulário pela cor de acento.

Contrato: children e atributos/ref de span.

Cuidados: Usar dentro de texto existente; não criar outro heading só para o trecho destacado.

## AuthBackButton

Compatibilidade de Button: preserva margens e defaults das telas existentes. Novos usos preferem Button com composição contextual, sem variantes auth.

Ação de voltar com tamanho/variante e ritmo vertical de autenticação já definidos.

É um preset de compatibilidade. Para uma nova composição, usar
`Button size="sm" variant="secondary"` e manter a margem no layout do formulário.
Não criar outro componente só para esse espaçamento.

Contrato: Props de Button, exceto size/variant/fullWidth.

Cuidados: O produto fornece rótulo e callback; o componente não conhece histórico ou rotas.

## AuthBrandAccent

Marca um trecho da mensagem institucional com sublinhado de marca.

Contrato: children e atributos/ref de span.

Cuidados: A anatomia é distinta do acento colorido de AuthAccent; não unificar por uma flag decorativa.

## AuthBrandDescription

Parágrafo de apoio do painel institucional escuro.

Contrato: children e atributos/ref de p.

Cuidados: A cor translúcida e largura são próprias desse contexto; não usar como descrição do formulário claro.

## AuthBrandFooter

Rodapé institucional que ocupa o fim do painel de marca.

Contrato: children e atributos/ref de p.

Cuidados: A cópia é fornecida pelo produto; não armazenar ano, links ou políticas de negócio no componente.

## AuthBrandTitle

Heading principal da mensagem institucional, com escalas responsivas próprias.

Contrato: children e atributos/ref de h1.

Cuidados: Preservar a hierarquia da composição; não parametrizar fontes e breakpoints para cada portal.

## AuthChannelHint

Linha de apoio que explica os canais de envio disponíveis.

Contrato: children e atributos/ref de div.

Cuidados: Texto e canais disponíveis vêm do produto; o componente não descobre provedores ou inicia envio.

## AuthChannelIcon

Moldura visual de um canal sms ou whatsapp, com glyph fornecido pelo consumidor.

Contrato: channel e atributos/ref/children nativos de span.

Cuidados: Não usar a cor como única identificação; a mensagem adjacente explica o canal e a disponibilidade.

## AuthDescription

Descrição do passo atual de entrada/cadastro, com largura e ritmo de leitura constantes.

Contrato: children e atributos/ref de p.

Cuidados: O produto decide o texto do passo. Não adicionar props para cada jornada de autenticação.

## AuthEyebrow

Identificação curta do contexto de acesso, anterior ao título.

Contrato: children e atributos/ref de span.

Cuidados: Não usar para substituir o título ou comunicar um erro.

## AuthFeature

Item da lista institucional com marcador de marca decorativo.

Contrato: children e atributos/ref de li.

Cuidados: Usar em AuthFeatureList/ul. O marcador não duplica o nome acessível do conteúdo.

## AuthFeatureList

Lista de benefícios do painel institucional, com visibilidade e ritmo próprios.

Contrato: children e atributos/ref de ul.

Cuidados: Manter itens li; não absorver em um array de configuração que limite o conteúdo React de cada item.

## AuthFooterLink

Link inline no texto de rodapé de autenticação.

Contrato: children e atributos/ref de a.

Cuidados: Fornecer href e conteúdo compreensível; navegação/Router e políticas legais ficam no produto.

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

## AuthMobileFooter

Rodapé alternativo da estrutura Auth, visível no intervalo de 640 a 1023px.

Contrato: children e atributos/ref de p.

Cuidados: A visibilidade é contextual; não assumir que apareça em todo viewport de celular nem adicionar uma flag por produto.

## AuthNotice

Mensagem de retorno do fluxo Auth com intenção error ou info.

Contrato: tone, children e atributos de p; sem ref público neste contrato.

Cuidados: O consumidor define role/status apropriado e texto público. Não incluir diagnósticos, tokens ou estado de provider.

## AuthProgress

Indicador decorativo de transição da confirmação Auth.

Contrato: Atributos/ref de div, sem children/aria-hidden configuráveis.

Cuidados: Não representa percentagem real e permanece aria-hidden. Descrever o estado por texto; reduced motion desliga sua animação.

## AuthResendAction

Agrupamento visual de reenviar e informação do tempo de espera.

Contrato: children e atributos/ref de div.

Cuidados: Timer, bloqueio e envio ficam no produto. Não criar um serviço de OTP dentro da apresentação.

## AuthResendButton

Ação nativa de reenvio com ênfase textual e estado disabled.

Contrato: children e atributos/ref de button; type padrão button.

Cuidados: O produto decide quando habilitar e qual callback executar; não disparar envio como efeito de render.

## AuthSubmitButton

Compatibilidade de Button: preserva margens e defaults das telas existentes. Novos usos preferem Button com composição contextual, sem variantes auth.

Confirmação Auth com receita primary/lg/fullWidth e type submit padrão.

É um preset de compatibilidade. Novas composições usam
`Button type="submit" fullWidth size="lg" variant="primary"`; o layout do
formulário define a separação vertical. A adoção deve preservar o espaçamento
responsivo atual antes de retirar o wrapper existente.

Contrato: Props de Button exceto size/variant/fullWidth.

Cuidados: O rótulo é conteúdo. isLoading bloqueia envio repetido; o formulário continua dono da operação.

## AuthSuccessIcon

Marca decorativa de sucesso, com animação de entrada e reduced motion.

Contrato: Atributos/ref de div, sem children/aria-hidden configuráveis.

Cuidados: Texto adjacente comunica o sucesso; não tratar o svg como outro nome acessível da mesma mensagem.

## AuthSuccessState

Composição centralizada do estado de sucesso com conteúdo React aberto.

Contrato: children e atributos/ref de div.

Cuidados: A transição seguinte e seu tempo pertencem ao controlador. Não transformar o container em uma configuração de tela.

## AuthTitle

Título do passo do formulário em h2 com escala responsiva própria.

Contrato: children e atributos/ref de h2.

Cuidados: Compor trechos com AuthAccent; hierarquia e mensagem completa ficam visíveis no JSX.

## AuthTokenDigits

Entrada de código dividida em campos, com digitação contínua, paste e navegação por teclado.

Contrato: length, idPrefix, digitLabel, onTokenChange, value opcional, autoFocus, disabled, hasError e nome acessível do grupo.

Cuidados: Controlado por value ou com edição local; não valida OTP no servidor. Produto fornece cópia, duração do token e ações; mudança de length não restaura dígitos truncados.

## AuthTokenLabel

Label para o primeiro campo do código na composição de acesso.

Contrato: children e atributos/ref de label.

Cuidados: htmlFor deve apontar ao id do primeiro dígito, formado por idPrefix-0. O grupo e cada dígito mantêm seus nomes acessíveis.

## AuthTopLink

Navegação complementar de acesso/cadastro com texto composto e quebra em telas estreitas.

Contrato: children e atributos/ref de a.

Cuidados: Usar AuthTopLinkHighlight no trecho de ação; não colocar um segundo link dentro da âncora.

## AuthTopLinkHighlight

Destaque textual dentro do link complementar Auth.

Contrato: children e atributos/ref de span.

Cuidados: Não é uma segunda ação; mantém a semântica única da âncora externa.

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
