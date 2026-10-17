# Validação do primeiro lote

Base das capturas Antes: `7867dd7e4a17b2bf095c0a85e4913675e455fa0f`.
Impacto indireto, restrito à biblioteca nesta entrega. Os produtos mantêm o pacote
atualmente instalado.

## Evidência visual

Matriz em `.github/evidence/button-consolidation/`: 21 casos, nas larguras 390 e
1440 px, totalizando 42 pares. Inclui os sete variants de ação existentes, tamanhos,
ícones, loading, conteúdo longo, quatro estados do alias TextButton e os três
variants de texto canônicos, hover e foco.

Os casos canônicos text/text-subtle/text-danger usam o TextButton existente como
Antes. A fixture conserva o mesmo texto em ambos os lados; não se compara uma
copy diferente como se fosse alteração de geometria. Os rótulos mais úteis das
novas stories continuam no catálogo; apenas a fixture comparativa fornece o texto
da baseline por argumentos do Storybook.

Os 42 pares têm PNGs com SHA256 idêntico, assim como posição, dimensões, 37
propriedades computadas, filhos diretos, texto, type e disabled. O recibo está em
comparison.json. Isso não substitui o julgamento visual humano.

TextWithIcons e TextLoading são stories novas: quatro capturas, sem uma story
anterior correspondente. O PR identifica a ausência no Antes. O comportamento
com ícones e loading tem também cobertura focada.

## Checks locais

- 43 casos únicos aprovados nas execuções focadas: Button, compatibilidade
  TextButton, manifesto, AuthBackButton/AuthSubmitButton, IconButton/ActionLink,
  interop de refs/SSR e contratos públicos de tipos.
- Typecheck aprovado; build fresco aprovado.
- Snapshot de API revisado e check:api aprovado: 174 valores, 243 tipos e 557
  declarações. Nenhum nome público foi removido. A alteração de contrato é aditiva:
  três variants de Button. As declarações privadas da antiga pasta TextButton
  foram substituídas pelo módulo de compatibilidade do owner.
- Budgets existentes preservados: actions 9.975 bytes / 2.871 gzip;
  dataPresentation 13.285 / 3.657 gzip; auth 1.096 / 526 gzip.
- ESLint dos arquivos TypeScript alterados e Prettier aprovados.

As primeiras verificações detectaram uma união de enums que impedia o Storybook
de aceitar variants via URL e a redundância de font:inherit na receita de texto,
que interferia na leitura de font-weight no JSDOM. O enum público ficou explícito,
o controle de stories foi declarado, e Pressable permanece dono da herança de
fonte. Os casos que falharam foram corrigidos e reexecutados; as capturas finais
preservam todos os pixels da baseline.

Não foram executados os gates amplos locais. CI, merge, publicação do pacote e
adoções nos produtos não são apresentados como concluídos por estes checks.

## Correção de CI sem impacto renderizado

A execução 39071735865 rejeitou a definição canônica de Button como uma cópia.
A exclusão é restrita ao arquivo absoluto pertencente ao módulo do auditor; não
aceita diretórios de consumidores por nome. O teste negativo usa exatamente
src/atoms/Button/types.ts em outro projeto e exige LSUI007. test:button-system
aprovado após a correção, incluindo os 12 IDs de regra. Componentes e capturas
permanecem iguais à revisão aprovada.

## Contratos da auditoria de layout

A execução 39072212345 aplicou a altura mínima de botões com caixa aos variants
de texto e exigiu seu wrapper de spinner. Button agora expõe somente um marcador
DOM interno de aparência; não muda CSS, árvore de filhos, props ou interação.
A auditoria distingue a altura de linha dos textos dos mínimos 32/40/48 px das
ações com caixa e aceita spinner direto somente na aparência de texto.

Fixtures negativas continuam rejeitando ação com caixa de 19 px, texto cortado
e spinner direto de ação com caixa. As fixtures e a auditoria focada das 11 stories
(66 cenários) passam. As 42 comparações visuais foram renovadas após o marcador: PNGs, geometria e
37 propriedades computadas continuam idênticos à baseline aprovada. Nenhuma exigência de altura dos botões
com caixa foi reduzida.
