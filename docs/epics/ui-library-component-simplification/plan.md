# Simplificação dos componentes da UI Library

## Direção

O pedido atual corrige a granularidade excessiva da biblioteca: diferenças de
aparência devem ser props de um mesmo componente quando o comportamento e a
estrutura forem os mesmos. Extrair uma unidade exige uma responsabilidade clara,
reutilização real ou interação que justifique seu contrato.

O React usa props para personalizar componentes e não exige um componente para
cada detalhe visual. A decisão sobre extração depende da responsabilidade e da
complexidade: [Thinking in React](https://react.dev/learn/thinking-in-react) e
[Passing Props](https://react.dev/learn/passing-props-to-a-component).

## Critérios

- Mesmo elemento nativo, mesma interação e mudança de aparência: preferir
  `variant`, tamanho ou estado em um componente existente.
- Margem de uma posição na tela pertence à composição que posiciona o botão.
  Não criar variantes `auth-submit`, `auth-back` ou flags por produto.
- Links continuam âncoras; controles de ícone continuam exigindo nome acessível.
  Contratos de navegação e acessibilidade justificam componentes próprios.
- A API pública existente permanece compatível durante a adoção. Wrappers antigos
  podem encaminhar para o componente canônico, sem manter uma segunda receita.
- Reorganizar arquivos só quando reduzir navegação e duplicação. Não substituir
  componentes pequenos por factories, schemas de tela ou helpers genéricos.
- Preservar DOM relevante, eventos, refs, atributos nativos, CSS, responsividade,
  foco, hover, disabled, loading e composição com styled-components.

## Revisão das famílias

A [revisão de granularidade de 2026-10-18](granularity-review.md) complementa esta
triagem com os usos dos cinco produtos e 20 nomes candidatos à consolidação de
ownership/estrutura. Ela prioriza as peças internas do calendário, métricas e
resultado antes de autenticação, cujo espaçamento contextual exige mais cuidado.
Os nomes publicados permanecem compatíveis até a adoção e uma retirada deliberada
em versão major; menos pastas não será apresentado como menos exports públicos.

| Família                                                     | Decisão                                                                                                                                                                      | Ordem e risco                                                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Button / TextButton                                         | Um Button com variantes de ação e texto; TextButton fica como adaptação compatível, sem CSS próprio.                                                                         | Primeiro lote; aparência/DOM/foco e estilos do consumidor precisam de comparação. |
| AuthSubmitButton / AuthBackButton                           | São presets de Button com margens contextuais. Novos usos preferem Button; a remoção pública depende da adoção e preservação do espaçamento nos formulários.                 | Depois dos botões; Teacher/Student login, cadastro e acesso a pagamentos.         |
| AuthResendButton                                            | Conferir diferença entre ação inline e botão de texto antes de consolidar. O padding nativo e a cor no disabled atuais não podem mudar por aproximação.                      | Junto da composição de autenticação.                                              |
| IconButton / ActionLink                                     | Manter: nome acessível obrigatório e navegação nativa justificam contratos próprios. As variantes já são props.                                                              | Sem novo componente ou migração cosmética.                                        |
| NavigationButton / ToggleButton / ChoiceCard                | Avaliar junto de seus controles/coleções; estados current/pressed e geometria diferem. Não converter tudo em variantes do Button sem conferir essas interações.              | Após ações e autenticação.                                                        |
| LoadingState / EmptyState / StatePanel                      | StatePanel já é o dono da implementação; aliases não justificam receitas próprias. Preferir state no uso novo e revisar composição do spinner.                               | Lote pequeno independente, mantendo anúncios acessíveis.                          |
| Tipografia Auth/Practice/Stat/Metric                        | Rever microcomponentes por composição real. Elementos heading, contraste e contexto não são intercambiáveis só porque recebem children.                                      | Exige comparar usos e larguras antes de agrupar.                                  |
| Flashcard / Shadowing / Quiz / Calendar                     | Manter unidades de interação; reduzir partes exportadas que só compõem um mesmo owner após seguir usos reais. Frente/verso com conteúdo diferente não são apenas duas cores. | Lotes próprios, sem alterar fluxo ou estado de domínio.                           |
| Dialog / Drawer / ActionMenu / fields / mensagens / tabelas | Manter contratos de interação com responsabilidade clara; simplificar apenas divisões internas sem propósito e responsabilidades espalhadas.                                 | Revisão posterior por família e contrato.                                         |

Esta tabela registra a triagem e a ordem. Não declara todos os componentes
individualmente simplificados ou todas as famílias implementadas.

## Primeiro lote

Base: `7867dd7e4a17b2bf095c0a85e4913675e455fa0f`.
Branch: `refactor/consolidate-button-variants`. Impacto: `indirect`.

Button recebe `text`, `text-subtle` e `text-danger`, que correspondem exatamente
às três aparências atuais de TextButton. Os sete variants de ação existentes
permanecem. O contrato não ganha flags por produto nem outro eixo de cor.

TextButton encaminha para Button e preserva seus nomes de variants, marcador de
runtime e data-variant para os consumidores existentes. Novos exemplos mostram o
Button diretamente. Não há remoção de export público nem publicação neste lote.

O adaptador, seus tipos e o marcador legado ficam em
`src/atoms/Button/compatibility.tsx`. A pasta de implementação TextButton é
retirada; seus testes e stories ficam junto do owner Button. O manifesto registra
explicitamente essa compatibilidade e valida o owner real, sem exigir uma nova
pasta de componente para cada nome antigo.

Consumidores conferidos: Admin PortalAction, filtros de matrículas e MenuAction
em LeadsPage; wrappers de autenticação Teacher/Student. Os produtos seguem com o
pacote instalado atual até revisão e adoção posteriores. A matriz deste PR cobre
o catálogo da biblioteca; capturas de produtos serão necessárias em suas adoções.

## Tarefas e aceitação

- [x] Ler implementação, contratos, styles, stories, exports e usos representativos.
- [x] Capturar baseline dos variants e estados afetados em mobile e desktop.
- [x] Consolidar as receitas e preservar TextButton como compatibilidade.
- [x] Acrescentar exemplos canônicos e cobertura focada de eventos, refs e estilos.
- [x] Revisar a mudança aditiva da API e atualizar seu snapshot com build fresco.
- [x] Capturar Depois com a mesma fixture, viewport e estado.
- [x] Preparar a entrega do PR com tabelas Antes/Depois e registrar validação.

Executar checks focados de ações/compatibilidade e API/pacote. Validar o diff e
formatar os arquivos alterados. A CI executa os gates amplos. Nenhuma aprovação
histórica substitui a revisão do PR atual.

Estado e próxima tarefa: [progress.md](progress.md). Evidências e limites:
[validation.md](validation.md).
