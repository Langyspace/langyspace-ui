# Validação da estrutura React

## Resultado preparado

Baseline: UI 2.2.0, `914164b30767de42b5e32c11dfdbbcc4c2e176bd`.
Candidato: 2.3.0, branch `refactor/react-component-structure`.
Impacto: `indirect`; o catálogo também passa a mostrar os nomes de famílias claros.

| Medida                                                                         |     Antes |    Depois |
| ------------------------------------------------------------------------------ | --------: | --------: |
| Pastas individuais em atoms/molecules/primitives versus famílias em components |       174 |        40 |
| Arquivos em src, incluindo testes, stories e assets                            |       915 |       634 |
| Declarações emitidas e inventariadas no snapshot                               |       557 |       276 |
| Nomes públicos de componentes React                                            |       173 |       173 |
| Valores/tipos no entrypoint, incluindo tokens                                  | 174 / 243 | 174 / 243 |
| Nomes explicitamente mantidos como compatibilidade                             |         1 |        21 |

Foram colocados junto da implementação 159 arquivos curtos de tipos e 109 de
estilos simples. Vinte nomes legados foram agrupados junto de seis owners:
Button, ScheduleCalendar, MetricSummary, StatCard, PracticeResultPanel e StatePanel.
TextButton já tinha essa organização junto de Button. Assim, há 152 nomes
canônicos e 21 de compatibilidade; a API publicada não foi reduzida à força.

Não existem implementações `index.tsx` em components. Os nomes de arquivo são
Button.tsx, MonthView.tsx, AuthFrame.tsx etc. Foundations permanece com tokens e
receitas; internal permanece com infraestrutura privada. OverlayCloseButton
fica junto de IconButton, pois é apresentação que depende desse contrato.

## Comportamento e contratos

- MetricSummary recebe value/label, incluindo valor zero e conteúdo React rico.
- StatCard recebe value/label/action e continua com tone. A anatomia reserva o
  mesmo espaço da ação; o formato small do Admin continua viável no children legado.
- PracticeResultPanel recebe heading/description/actions/icon e mantém children
  entre descrição e ações. O title nativo continua sendo tooltip. Icon null omite
  a marca e um elemento React pode substituí-la.
- Owners novos não dependem dos adapters de compatibilidade para desenhar suas
  partes. As receitas são únicas nos estilos dos owners; adapters compartilham
  essas partes. A marca decorativa é compartilhada com o owner do resultado.
- LoadingState mantém spinner lg e status/busy; EmptyState mantém seu estado.
- AuthSubmitButton/AuthBackButton foram agrupados como compatibilidade de Button.
  Seus defaults, margens e breakpoints continuam intactos; novos usos preferem
  Button e a composição contextual. Retirar os nomes publicados ainda exige
  adoção nos produtos. Esta entrega não declara todas as famílias consolidadas.

Os 228 valores componentId explicitamente escritos no código foram preservados.
Classes privadas geradas pelo compilador podem mudar com os caminhos dos arquivos;
os consumidores continuam com seus IDs/atributos semânticos existentes.

## Checks locais proporcionais à reorganização

1. Arquitetura: 450 arquivos de fonte classificados pela auditoria, 12 rule IDs,
   fixtures positivas e novas fixtures da estrutura components/foundations/internal.
   A exceção de ButtonVariant é restrita ao arquivo canônico real; um consumidor
   com o mesmo caminho relativo continua rejeitado. Imports de `.styles` privados
   e dependências indevidas de foundations/internal continuam rejeitados.
2. Comportamento: 33 testes únicos em nove arquivos, cobrindo os três owners,
   aliases de estado, calendário e manifesto. Os casos novos comparam a marcação
   completa da API por props com a composição legada, além de refs, eventos, valor
   zero, ícone e atributo HTML title. Após renomear as views privadas do calendário,
   somente seus 13 testes foram repetidos; passaram novamente. Dois casos finais
   verificam slots condicionais false: action não reserva espaço vazio e o painel
   não cria regiões vazias. Após esse ajuste, apenas os dois owners afetados foram
   repetidos, com oito testes passando; suas capturas e as 24 comparações das APIs
   foram renovadas. Depois de agrupar os presets Auth com Button, seus dois testes
   nativos e o manifesto passaram; suas capturas também foram renovadas. Evidência
   das demais famílias foi preservada.
3. Build fresco e API: build de biblioteca e declarações concluído; comparação
   independente dos nomes raiz preserva os 174 valores e 243 tipos. Snapshot
   atualizado deliberadamente para os caminhos internos e props aditivas da minor
   2.3.0; check:api passa com 276 declarações.

O build do Storybook concluiu. A ferramenta de referência encontra MetricSummary
na implementação/tipos novos. Links relativos dos guias e do plano atual foram
conferidos. Formatação foi aplicada aos arquivos alterados. A CI continua sendo
responsável por lint/typecheck completo, suíte ampla, browser/a11y, budgets,
smoke do pacote e auditoria ampla de layout; não são declarados executados localmente.

## Evidência visual

| Cobertura                                           | Pares Antes/Depois | Resultado                                                                                                                    |
| --------------------------------------------------- | -----------------: | ---------------------------------------------------------------------------------------------------------------------------- |
| Todas as 398 stories existentes, em 390 e 1440 px   |                796 | Geometria, estrutura medida e 22 propriedades de estilo iguais em todos; 794 PNGs idênticos.                                 |
| APIs por props versus composição legada equivalente |                 24 | PNGs e geometria idênticos. Inclui valor zero, conteúdo longo, ação, marca omitida/customizada e extensão visual do Teacher. |
| Navegação do catálogo em mobile/desktop             |                  2 | Mostra a mudança intencional dos agrupamentos atomic para os nomes atuais.                                                   |

Não houve pageerror nas capturas dos componentes. O acesso externo foi bloqueado;
o conteúdo é sintético. Capturas com modal aberto respeitam o viewport que possui
o backdrop. O relógio das stories foi fixado e reduced-motion foi usado nos dois lados.

Há duas diferenças residuais de pixels no catálogo, conservadas para revisão:

| Story e largura                                     | Diferença medida                                                                      | Geometria/estilos |
| --------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------- |
| MessageThreadHeader / Fallback And Actions / 390 px | 94 pixels, delta máximo de 2 por canal, limitados à região do avatar, x61–90/y435–464 | Iguais.           |
| AvailabilityCalendar / Default / 1440 px            | 1 pixel, delta máximo de 3 por canal, x24/y431                                        | Iguais.           |

Esses deltas são compatíveis com variação de rasterização de bordas; essa é uma
inferência a partir das medidas. As imagens originais não foram alteradas para
apagar diferenças e a revisão visual permanece com o product owner.

Os 822 pares são apresentados em 187 linhas de evidência: uma por componente ou
fixture e uma do catálogo. Cada imagem agrupa as capturas originais, sem reescala,
com estado e largura identificados. A composição em uma folha não substitui os
pares originais; eles permanecem no diretório persistente local. O manifest
versionado registra cada folha, quantidade de pares e checksum.

Arquivos persistentes locais em
`/Users/margaridamartins/.local/langyspace-react-structure-20261018/`:

- before/manifest.json, after/manifest.json e catalog-comparison.json;
- fixtures-comparison.json, structure-map.json e structure-metrics.json;
- architecture.log, focused-tests.log, calendar-after-rename.log e build.log;
- storybook-build.log, evidence-entries.json e os PNGs originais;
- scripts pontuais de movimentação/captura usados nesta entrega, fora do runtime.

## Limites de entrega

Os cinco produtos não foram alterados, nenhum pacote foi publicado e não houve
deploy. A instalação oficial no README permanece em 2.2.0. Após revisão e gates,
a publicação da 2.3.0 e cada adoção devem ser entregas verificadas separadamente.
Nenhum aceite visual anterior cobre automaticamente esta revisão.
