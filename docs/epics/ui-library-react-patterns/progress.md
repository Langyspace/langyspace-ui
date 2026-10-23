# Progresso

## T1 — Lint e registro da dívida (22/10/2026)

Impacto renderizado: `none`. Só ferramentas de desenvolvimento, documentação e
testes das regras; nenhum arquivo de `src`, stories ou build alterado.

- Dependências de desenvolvimento fixadas em versões com pelo menos duas semanas:
  `@eslint-react/eslint-plugin@5.24.10`, `eslint-plugin-jsx-a11y@6.10.2`,
  `eslint-plugin-import-x@4.17.1`, `eslint-import-resolver-typescript@4.4.5`.
- Plugin local `eslint/langyspace.mjs` com quatro regras e testes em
  `test/eslint/langyspace.test.mjs` (RuleTester, 16 casos).
- Presets compartilhados promovidos a `error`, porque bulk suppressions só
  registram erros.
- Registro inicial: 573 violações em 190 arquivos.

| Regra                            | Violações |
| -------------------------------- | --------- |
| `langyspace/no-component-types`  | 217       |
| `langyspace/no-raw-colors`       | 144       |
| `langyspace/no-component-styles` | 76        |
| `@typescript-eslint/*` (strict)  | 59        |
| `import-x/*`                     | 32        |
| `@eslint-react/*`                | 40        |
| `langyspace/no-inline-styles`    | 4         |
| `jsx-a11y/no-autofocus`          | 1         |

Validação local:

- `vitest run --project unit test/eslint/langyspace.test.mjs`: 16 aprovados.
- `eslint .`: aprovado com o registro; um componente de prova com `forwardRef`,
  `styled` no `.tsx`, interface exportada, cor hex, `style`, import de `.css` e
  `isOpen` falhou nas oito regras esperadas e foi removido.

Commit `8e72a74` na `main`.

## T2–T8 — Refatoração da biblioteca (22/10/2026)

Branch `refactor/react-patterns`. Executadas juntas por arquivo, para que cada
componente fosse reescrito uma só vez.

- **Divisão de arquivos (T3).** Codemod com o type checker do TypeScript moveu
  tipos para `<Component>.types.ts` e estilos para `<Component>.styles.ts` em 143
  componentes; imports de stories, testes e entrada pública foram redirecionados.
  O import `* as Styled` fica por último para preservar a ordem de registro do CSS.
  Módulos internos e de fundação deixaram `index.ts`, `types.ts` e `styles.ts`
  genéricos. `calendarFixtures` saiu de `src`. `CalendarElements.tsx` continua
  agrupando a anatomia privada do calendário: não é API pública e as partes só
  existem juntas.
- **Tema (T5).** `src/foundations/theme/theme.ts` reúne o tema do Teacher, o bloco
  `semantic` do Admin e os valores que só a lib tinha (`viewportHeights`,
  `sizes.field`, `shadows.focusHalo`, `shadows.floating`, `zIndex.popover`,
  `palette.extended`). `tokens`, `tokenValues`, `authRecipe`, `quizRecipe` e o
  recipe de playback foram removidos: os caminhos eram idênticos aos do tema.
  Cada token e cada cor crua foi mapeado para um valor igual; variações
  translúcidas usam `alpha()`. `@media` e z-index globais usam o tema.
  `createTheme` cobre as diferenças dos produtos e `GlobalStyles` substitui as
  cópias locais.
- **Inlining no build.** Os componentes leem `theme.a.b`; o plugin
  `scripts/inline-theme.mjs` grava os valores no pacote. Sem isso, cada entrada
  carregava o tema inteiro (cerca de 11 KB) e 27 orçamentos de bundle estouravam.
  Caminhos inexistentes falham o build.
- **React 19 (T2).** Sem `forwardRef`, `.Provider` ou `useContext`; valores de
  contexto estáveis; props raiz com `ComponentPropsWithRef`; `focus.ts` e
  `useIsClient` substituem cópias em ModalLayer e useActionMenu;
  `noUncheckedIndexedAccess` ligado.
- **TypeScript e imports (T4).** Todas as violações registradas foram corrigidas.
  `restrict-template-expressions` aceita números.
- **Storybook (T6).** `GlobalStyles` da UI e Montserrat no lugar de
  `preview.css`/Inter; o overflow horizontal continua visível para as auditorias.
  Autodocs ligado para todos os componentes.
- **API v4 (T7).** Ver [migration-v4](../../components/migration-v4.md): `loading`
  e `submitting`, `onValueChange`/`defaultValue`, `invalid`, `render` em sete
  links, `labels` em seis componentes, `Toaster`/`ToastProvider`/`useToast`,
  `ToastViewport` como região viva, `ControlledField` em `@langyspace/ui/form` com
  react-hook-form opcional, preset `@langyspace/ui/eslint` para os produtos.
- **Entrada pública (T8).** A ordem dos exports foi mantida: o bundle registra o
  CSS nessa ordem. Um teste do jsdom provou a sensibilidade quando a entrada foi
  ordenada alfabeticamente, e a ordem original foi restaurada.

Resultado do lint: 573 violações registradas → 0. O registro de supressões foi
removido e o AGENTS.md proíbe novas supressões.

## Ajustes da lib pedidos pela adoção (23/10/2026)

A adoção nos produtos trouxe para a lib o que eles faziam por seletor interno ou
por variável CSS:

- `MetricSummary variant="tile"`, `MessageThreadHeader leadingActionDisplay="compact"`
  e `StatCard size="sm"` substituem os seletores `[data-ui-*]` de Teacher e Admin.
- `FlashcardSwiper exit={{ rotate, x, y }}` substitui `exiting` + `style` com
  `--tr`, `--tx`, `--ty` (Teacher e Student).
- `palette.extended` ganhou as cinco cores avulsas usadas por dois ou mais
  produtos; `zIndex.notice` (24) cobre o aviso de shell de Teacher e Student.
- O tipo de `createTheme` deixou de perder as chaves do tema quando a sobrescrita
  é grande (caso do Site); `test/types/createTheme.tsx` cobre o contrato.

## T9 — Adoção nos produtos (23/10/2026)

Worktrees `langyspace-<produto>-ui-v4` (Site: `langyspace-ui-v4-site`), branch
`refactor/ui-v4-adoption`, a partir de `origin/staging` (Teacher, Student, Admin) e
`main` (Cupom, Site). Cada produto:

- usa o candidato v4 e corrige a API renomeada apontada pelo typecheck;
- troca o tema local por `theme`/`createTheme` da lib. A equivalência foi provada
  caminho a caminho contra o tema anterior: Teacher, Student (2 gradientes),
  Admin (1 foco) e Site (paleta da landing) sem nenhum valor diferente;
- usa `render` com `Link`/`NavLink` nos adaptadores de link do roteador, `Toaster`
  nos toasts com store e o `ToastProvider` da lib no Admin;
- adota `@langyspace/ui/eslint`. Cores, breakpoints e z-index com equivalente no
  tema foram migrados por codemod; o resto ficou registrado em
  `eslint-suppressions.json` do produto.

| Produto | Dívida de estilo restante (bulk suppressions)                                 |
| ------- | ----------------------------------------------------------------------------- |
| Teacher | nenhuma                                                                       |
| Student | 49 cores de arte sem equivalente no tema                                      |
| Admin   | 247 `style={{}}`, 49 cores, 41 breakpoints fora da escala, 6 z-index locais   |
| Site    | 89 cores da paleta antiga da landing, 2 breakpoints em rem                    |
| Cupom   | sem ESLint no projeto; CSS migrado para `createGlobalStyle` com o mesmo texto |

Nomear cores de arte e criar novos degraus de breakpoint é decisão de design da
product owner; por isso esses valores não entraram no tema por conta própria.
Pendências que exigem desenho de API: o layout de agenda do Admin sobre
`AvailabilityCalendar` (8 regras por seletor) e a quebra do BEM do Cupom em
componentes com tema.
