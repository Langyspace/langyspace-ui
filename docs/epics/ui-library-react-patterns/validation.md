# Validação

## Biblioteca

Baseline `8e72a74` (`main`) contra o branch `refactor/react-patterns`, com Chromium,
movimento reduzido e captura de página inteira de todas as stories.

| Comparação                                 | 390 px               | 1440 px              |
| ------------------------------------------ | -------------------- | -------------------- |
| Componentes (mesmo `preview.css` nos dois) | 361 de 363 idênticas | 362 de 363 idênticas |
| Diferenças restantes                       | ≤ 40 px, até 2/255   | ≤ 60 px, até 4/255   |

As diferenças são antialiasing em bordas arredondadas e no ponto animado de
`ShadowingRepetitions`. A troca para o `GlobalStyles` da UI e a fonte Montserrat
altera as 368 stories do catálogo, como pretendido; as imagens do PR mostram
exemplos de cada família e as variantes novas.

Checagens locais: typecheck, ESLint sem supressões, 362+ testes unitários,
370 testes de stories no navegador, `check:api`, `test:bundle`, `test:package` e
`test:button-system`.

## Exceções de orçamento revisadas

- `library.gzipBytes` 65.000 → 68.000. A entrada completa passou de 63.638 para
  66.928 bytes porque passa a exportar o `theme` (4.068 bytes gzip sozinho); sem
  ele o restante da v4 é menor que a `main`. Os produtos deixam de embarcar a
  própria cópia do tema.
- `flashcardPresentation.rawBytes` 22.000 → 22.500: o vetor de saída tipado do
  `FlashcardSwiper` (`exit`) acrescenta 125 bytes.

## Produtos

Cada produto foi capturado com os dados simulados do próprio `audit-layout`
(`VITE_*_DESIGN_MOCK`), em 390 e 1440 px, antes e depois da adoção.

| Produto | Casos | Resultado                                                                                         |
| ------- | ----- | ------------------------------------------------------------------------------------------------- |
| Teacher | 17    | idênticos, exceto saudação por horário e marcador de "hoje"                                       |
| Student | 55    | idênticos, exceto saudação por horário; anéis de stories variam entre execuções do próprio branch |
| Admin   | 118   | idênticos, exceto horários relativos em leads e agenda                                            |
| Site    | 13    | idênticos (≤ 41 px de antialiasing)                                                               |
| Cupom   | 3     | idênticos quando capturados no mesmo momento (relatório depende da data)                          |

Os casos que diferiam por data ou hora foram recapturados ao mesmo tempo a partir
do checkout canônico e do worktree: nenhuma diferença restou além de horários.
O toast do Admin muda de aparência por adotar o `Toaster` compartilhado; ele não
aparece nos casos estáticos e está registrado para a revisão visual.

Testes dos produtos: Teacher e Student têm falhas preexistentes no `staging`
(`StudentLearningPreview` e `studentPortal`), reproduzidas no checkout canônico;
Admin 455/455; Site `test:button-system` e `test:trial-form`; Cupom 31/31,
`test:button-system` e `test:payout-report`.
