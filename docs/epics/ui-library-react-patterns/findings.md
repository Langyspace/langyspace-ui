# Revisão de 22/10/2026

Base: `langyspace-ui@1ba7fc8`; produtos nas branches `staging` (Teacher, Student,
Admin) e `main` (Cupom, Site). Contagens feitas por busca no código; as violações
de lint atuais estão em `eslint-suppressions.json`.

## P0 — Fonte única de design

1. Dois sistemas de tokens: `src/foundations/tokenValues.ts` (lib) e
   `src/theme/theme.ts` em cada produto (~600 linhas; Admin e Site divergem 145 e
   186 linhas do Teacher). Nenhum produto usa `tokens` da lib. Valores divergem:
   marca `#cc0f45` x `#FF1F5C`; foco 0.72 x 0.32; a lib não tem fonte.
2. Breakpoints copiados em `authRecipe`, `playbackRecipe`, `quizRecipe` e
   `recipe`; 39 `max-width: 900px` e 18 `640px` literais.
3. z-index sem escala: Modal 800, Toast 1000, ActionMenu 1200, BottomNavigation
   200; produtos usam modal 900, toast 1000, tooltip 1100.
4. Literais: 90 hex, 52 rgb(a) e 412 px em `src/components`.
5. `GlobalStyles` repetido nos quatro produtos (Teacher = Student).

## P1 — Estilos

6. Fora do styled-components: Cupom (745 linhas de CSS), `<style>` no
   `index.html` do Teacher, `.storybook/preview.css`, `style={{}}` (4 na lib,
   ~20 nos produtos), `className` como gancho de estilo (QuizOption,
   ShadowingRepetitions, QuizResponseMark). Nenhum Sass encontrado.
7. Estilos inline em 71 `.tsx` e em 71 `.styles.ts`; variantes por props `$` e
   por `data-*`; 13 `.styles.ts` importam tipos do `.tsx` do próprio componente.
8. Produtos estilizam partes internas por `[data-ui-*]` (Teacher:
   ConversationThread, StudentLearningPreview; Admin: 29 seletores) sem
   cobertura do `check:api`.

## P1 — Contrato React

9. Tipos em `.types.ts` (17), no `.tsx` (139) e reexportados de `internal`
   (Dialog/Drawer); `ActionMenu.types.ts` mistura props públicas e de estilo.
10. `forwardRef` em 13 componentes; 15 props baseadas em `HTMLAttributes` sem
    `ref`; `ToastViewport` com `ComponentPropsWithoutRef`.
11. Contexto com `.Provider` (FieldRoot, CompoundControl) e `<Context>`
    (FlashcardFlip); valores recriados a cada render.
12. Estado controlado: só ActionMenu tem `open`/`defaultOpen`/`onOpenChange`;
    callbacks `onTokenChange`, `onCountryChange`, `onSpeedChange`,
    `onValueChange` e `onChange(value)` (SegmentedControl).
13. Booleanos `isLoading`/`isSubmitting` ao lado de `fullWidth`, `flipped`,
    `disabled`.

## P1 — Alcance nos produtos

14. Versões: Teacher, Admin e Cupom em 3.0.0; Student 3.2.1; Site 3.2.3;
    instaladas por tarball com versão exata.
15. Cópias nos produtos: `Title`, `Underlined`, `Chip`, `Item`, `List`,
    `Feature`; `PhoneField` próprio no Teacher (162 linhas) e no Student (202);
    `ToastViewport` em cada produto.
16. Toast só visual: sem região `aria-live` (apenas StudentPayment adiciona),
    `ToastItem` inteiro é um botão; fila/tempo reimplementados em cada produto.
17. Links sem polimorfismo: o Teacher reimplementa o link do router em
    `NavigationAnchor.tsx`.

## P2 — API e documentação

18. 21 textos em português fixos na lib, alguns rótulos acessíveis sem override
    (AgendaView, CardDetailsFields, ScheduleCalendar, RowActions, ListHeader,
    PracticePlaybackControls, PhoneField).
19. `react-hook-form` é peer obrigatório por causa de `ControlledField`.
20. `src/index.ts` com 540 linhas sem ordem; utilitários de foco duplicados em
    ModalLayer e useActionMenu; `calendarFixtures.ts` em `src`;
    `CalendarElements.tsx` com 7 componentes.
21. 9 blocos JSDoc em `src`; 0 de 140 stories com autodocs; 18 com `argTypes`.
