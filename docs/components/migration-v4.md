# Migração para UI 4

Candidato preparado, ainda não publicado. A v4 alinha a biblioteca aos contratos do
React 19, adota um tema styled-components único e padroniza nomes de props. Nenhum
componente público é retirado; os nomes abaixo mudam. Os produtos migram nos PRs de
adoção do epic [ui-library-react-patterns](../epics/ui-library-react-patterns/plan.md).

## Tema

| Antes                                    | Depois                                                                                                          |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `tokens` e `DesignTokens`                | `theme` e `LangyTheme`, com paleta, `semantic`, escalas de layout, `breakpoints`, `viewportHeights` e `zIndex`. |
| `src/theme/theme.ts` de cada produto     | `theme` da UI; diferenças do produto com `createTheme(overrides)`.                                              |
| `GlobalStyles` de cada produto           | `GlobalStyles` da UI.                                                                                           |
| `rgba(...)` derivado de uma cor da marca | `alpha(theme.colors.palette.accent.pink, 0.3)`.                                                                 |

Os componentes leem o tema estaticamente e continuam funcionando sem
`ThemeProvider`. Os produtos montam `<ThemeProvider theme={theme}>` para o próprio
código e declaram `DefaultTheme` com o tipo exportado:

```ts
import type { LangyTheme } from '@langyspace/ui'

declare module 'styled-components' {
  export interface DefaultTheme extends LangyTheme {}
}
```

## Props

| Componente                                                                                                                                                                                 | Antes                                          | Depois                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------ |
| Button, IconButton                                                                                                                                                                         | `isLoading`                                    | `loading`                                                    |
| ActionMenu (`items`)                                                                                                                                                                       | `isLoading`                                    | `loading`                                                    |
| OperationalList (ações dos itens)                                                                                                                                                          | `isLoading`                                    | `loading`                                                    |
| MessageComposer                                                                                                                                                                            | `isSubmitting`                                 | `submitting`                                                 |
| FlashcardSwiper                                                                                                                                                                            | `exiting` + `style` com `--tr`, `--tx`, `--ty` | `exit={{ rotate, x, y }}`                                    |
| SegmentedControl, FilterPills                                                                                                                                                              | `onChange(value)`, `value`                     | `onValueChange(value)`; `value` ou `defaultValue`            |
| AuthTokenDigits                                                                                                                                                                            | `onTokenChange`, `hasError`                    | `onValueChange`, `invalid`; `defaultValue` opcional          |
| TextInput, SelectInput, TextareaInput, SearchInput, PhoneField, ToastViewport, ToastItem, MessageThread, MessageThreadHeader, MessageComposer, MessageBubble, DocumentLayout, NoticeBanner | `forwardRef`                                   | `ref` como prop comum do React 19; mesmo elemento de destino |
| FieldRoot, CompoundControl, SegmentedControl, FilterPills, AuthTokenDigits                                                                                                                 | sem `ref` tipado                               | aceitam `ref` do elemento raiz                               |

## Links e roteador

ActionLink, NavigationLink, BottomNavigationLink, CardLink, DocumentNavigationLink,
BrandLink e AuthTopLink recebem `href` ou `render`. Com `render`, o produto usa o
link do roteador e mantém estilos, classe ativa e semântica:

```tsx
<NavigationLink render={(props) => <NavLink {...props} to="/alunos" />}>
  Alunos
</NavigationLink>
```

Adaptadores que repetiam `useHref`, `useLinkClickHandler` e `useMatch` deixam de ser
necessários. Um link sem `href` e sem `render` deixa de compilar.

## Toasts

`ToastViewport` passa a ser uma região `role="status"` com `aria-live="polite"`.
`Toaster` renderiza a lista de qualquer store; `ToastProvider` e `useToast` atendem
produtos sem store. Os mapeamentos locais de `ToastItem` podem ser removidos.

## Textos

ScheduleCalendar, OperationalList, CardDetailsFields, CalendarControls, PhoneField e
PracticePlaybackControls aceitam `labels` ou props de rótulo, com os textos atuais em
português como padrão.

## Entradas do pacote

`ControlledField` sai da entrada principal e passa a ser importado de
`@langyspace/ui/form`. `react-hook-form` vira peer opcional: produtos sem formulários
controlados não precisam instalá-lo.

## Seletores internos

Os atributos `data-ui-*` continuam para testes e diagnósticos, mas não são contrato
de estilo. Variações visuais pedidas pelos produtos entram como props:

| Seletor anterior no produto                             | Prop                                                 |
| ------------------------------------------------------- | ---------------------------------------------------- |
| `[data-ui-message-thread-header-part='leading-action']` | `MessageThreadHeader leadingActionDisplay="compact"` |
| `[data-ui-metric-value]`, `[data-ui-metric-label]`      | `MetricSummary variant="tile"`                       |
| `[data-ui-stat-value]` (valor compacto)                 | `StatCard size="sm"`                                 |
