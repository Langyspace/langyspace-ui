# Padrões React da UI Library

## Objetivo

Refatoração completa, do início ao fim, pedida pela product owner em 22/10/2026:
levar a `@langyspace/ui` e a forma como os cinco produtos a consomem a um padrão
único e verificável de biblioteca React 19:
contratos de props e refs nativos do React, tipos e estilos em arquivos próprios,
styled-components como única ferramenta de estilo, um tema compartilhado como fonte
única de design e regras de ESLint que impedem regressões.

A revisão de 22/10/2026 (lib + Teacher, Student, Admin, Cupom e Site) encontrou
convenções concorrentes em cada eixo. A lista priorizada está em
[findings.md](findings.md).

## Decisões

| #   | Decisão                                                               | Estado                        |
| --- | --------------------------------------------------------------------- | ----------------------------- |
| D1  | Tipos de componente em `<Component>.types.ts`; nenhum tipo no `.tsx`  | Pedida pela product owner     |
| D2  | styled-components é a única ferramenta de estilo dos projetos Langy   | Pedida pela product owner     |
| D3  | Tokens viram um tema styled-components fornecido pela lib             | Pedida pela product owner     |
| D4  | Lib primeiro; adoção nos produtos por PRs próprios sobre um candidato | Padrão do AGENTS.md           |
| D5  | Todos os produtos passam para a mesma versão na adoção                | Assumida na execução (abaixo) |
| D6  | Mudanças incompatíveis entram em um major v4, sem adapters            | Assumida na execução (abaixo) |
| D7  | O tema preserva os valores renderizados hoje                          | Assumida na execução (abaixo) |

A product owner pediu execução sem interrupções; D5–D7 foram assumidas para não
bloquear e ficam visíveis na revisão dos PRs:

- **D5.** A adoção leva Teacher, Student, Admin, Cupom e Site à mesma versão.
  Automatizar atualizações (Renovate ou registry) exige instalar app/serviço
  externo e fica como acompanhamento.
- **D6.** Sem adapters em `src/compatibility`: o próprio epic atualiza os cinco
  consumidores, então o v4 sai junto com os PRs de adoção.
- **D7.** Cores, fonte e foco divergentes entre lib e produtos viram tokens
  semânticos distintos, cada um com o valor que já renderiza. Unificar marca
  (`#cc0f45` x `#FF1F5C`) e anel de foco (0.72 x 0.32) é mudança visual e fica
  para uma revisão explícita. A fonte do Storybook passa a ser Montserrat, a
  mesma dos produtos.

## Regras de lint e catraca

`eslint.config.js` aplica a `src/`: `typescript-eslint` strict type-checked,
`@eslint-react` strict type-checked, `jsx-a11y`, `import-x` (ciclos, fronteiras
entre camadas, estilo de import de tipos) e o plugin local
[`eslint/langyspace.mjs`](../../../eslint/langyspace.mjs):

- `langyspace/no-component-types`: nenhum tipo, reexport de tipo ou tipo literal
  em `src/components/**/*.tsx` e `src/internal/**/*.tsx`.
- `langyspace/no-component-styles`: `styled`, `css`, `keyframes` e
  `createGlobalStyle` apenas em `<Component>.styles.ts`.
- `langyspace/no-raw-colors`: cores hex/rgb/hsl apenas em `src/foundations`.
- `langyspace/no-inline-styles`: sem prop `style`.
- `no-restricted-imports`: sem CSS/Sass/Less, Emotion, vanilla-extract, Tailwind,
  `clsx`/`classnames`.

A dívida existente está registrada em `eslint-suppressions.json` (bulk
suppressions do ESLint 9). Código novo não pode introduzir violações. Cada tarefa
que corrige uma família executa `pnpm run lint:prune` no mesmo commit; o ESLint
falha se sobrar supressão sem uso. Não editar o arquivo à mão nem ampliar o
registro para aprovar código novo.

## Riscos

- **Ordem de injeção do CSS.** O styled-components registra cada componente na
  ordem de avaliação dos módulos. Reordenar imports ou exports (inclusive no
  `src/index.ts`) ou mover definições entre arquivos pode alterar a precedência
  entre regras de mesma especificidade. Essas mudanças são `indirect` e exigem a
  auditoria de layout/visual, nunca autofix em massa como entrega `none`.
- **API pública.** Tipos movidos para `.types.ts` mantêm nomes e exports; o
  `check:api` deve continuar idêntico. Renomear props entra só em T7/v4.
- **Seletores `[data-ui-*]` nos produtos.** Teacher e Admin estilizam partes
  internas por esses atributos; T3/T5 preservam os atributos e T9 substitui os
  seletores por props ou partes documentadas.
- **Publicação.** O merge e o release dependem da aprovação da product owner.
  Os PRs de adoção ficam em draft sobre um candidato imutável até lá.

## Tarefas

Ordem por dependência; executar uma por vez. Estado em [progress.md](progress.md).

| Tarefa | Escopo                                                                                                                                                                                              | Impacto     | Depende |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------- |
| T1     | Lint: plugins, plugin local, testes das regras, registro da dívida, AGENTS.md                                                                                                                       | none        | —       |
| T2     | Contrato React 19: `forwardRef` → `ref` como prop (13), `<Context>`/`use` (3), valores de contexto estáveis, refs em props (`HTMLAttributes` → `ComponentPropsWithRef`), utilitários de foco únicos | indirect    | T1      |
| T3     | Arquivos por convenção, por família: tipos em `.types.ts`, estilos em `.styles.ts`, fixture fora de `src`, `CalendarElements` dividido                                                              | indirect    | T1      |
| T4     | Correções de TypeScript/imports apontadas pelo strict (tipos, duplicados, condições)                                                                                                                | indirect    | T3      |
| T5     | Tema: paleta → semântica → componente, `DefaultTheme` tipado, `ThemeProvider` + `GlobalStyles`, `media`, escalas de z-index, motion e tipografia; regras para breakpoints/z-index crus              | direct      | D3, D7  |
| T6     | Storybook com o tema e o `GlobalStyles` da lib no lugar de `preview.css`                                                                                                                            | direct      | T5      |
| T7     | API v4: `value`/`defaultValue`/`onValueChange`, booleanos sem `is`, `render` nos links, `labels` no lugar de textos fixos, `Toaster`/`useToast`, `react-hook-form` opcional                         | direct      | T3, D6  |
| T8     | Entrada pública ordenada (com auditoria de CSS), JSDoc e autodocs                                                                                                                                   | indirect    | T3      |
| T9     | `@langyspace/eslint-config` para os produtos e epics de adoção (tema, CSS do Cupom, componentes `base` duplicados, `[data-ui-*]`)                                                                   | por produto | T5, D5  |

## Critérios de aceite do epic

- `eslint-suppressions.json` vazio para as regras `langyspace/*`, React e imports.
- Nenhum `forwardRef`, `.Provider` ou `useContext` em `src`.
- Componentes públicos com props, tipos e estilos em arquivos separados.
- Um único tema importado por lib, Storybook e produtos; nenhuma cor crua fora dele.
- `check:api` alterado somente por decisões registradas (T7).
