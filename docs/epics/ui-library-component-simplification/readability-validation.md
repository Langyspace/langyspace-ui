# Validação da limpeza de leitura

## Estado e escopo

Lote implementado na feature `refactor/react-component-structure`, a partir de
`c3299a4abb33fbfbc841c639382bbacdb45fc8b3`. Integra a revisão do PR UI #33.
Não houve alteração de produto, tag, publicação, merge ou deploy.

O [plano](readability-plan.md) define as próximas migrações. As etapas 1 e 2 estão
implementadas; etapas 3 a 7 continuam pendentes. Não há retirada de exports.

## Organização resultante

- Button passa de 16 para dois arquivos: Button.tsx (inclui props) e
  Button.styles.ts (receita privada). Pressable passa a um arquivo independente.
- 174 stories e 178 testes foram retirados de src. Incluem 346 arquivos dos
  componentes e seis arquivos de foundations/internal. Dois testes de ações Auth
  foram reunidos numa tabela de casos que mantém as duas verificações originais.
- Cinco fixtures de tipos passam a test/types, compiladas por typecheck, sem
  testes de execução cujo resultado era expect(true).toBe(true).
- 120 registros repetidos de afterEach(cleanup) foram retirados. O setup global
  permanece em test/setup.ts; outros usos de afterEach foram preservados.
- Os cinco arquivos de adaptadores ficam em src/compatibility por owner. Os 21
  nomes classificados como compatibilidade continuam disponíveis: sete peças de
  Calendar permanecem perto da implementação, que ainda depende delas.
- Components passa de 595 para 242 arquivos. Isso mede navegação do código e não
  uma redução equivalente de responsabilidades ou da API pública.

## Checks locais

1. Typecheck passou após mover código, stories, testes e fixtures de tipos.
2. Contratos focados: 39 testes em seis arquivos, incluindo Button, Pressable,
   TextButton, ações Auth, manifesto e consulta de referência. Auditoria de 274
   fontes passou, com fixtures dos 12 IDs de regra e limites de dependências.
3. Build fresco e snapshot de API passaram: 174 valores, 243 tipos e 274 arquivos
   de declaração. Os nomes públicos são idênticos à baseline. As mudanças de
   declaração correspondem aos caminhos, à colocação de props e aos estilos
   privados, não à retirada de contratos.

A movimentação ampla justifica esses três grupos de validação. CI continua dona
das suítes completas, coverage, bundle, pacote e auditoria ampla de layout; seu
resultado remoto não foi consultado nem antecipado.

## Limites de ownership

A primeira execução da auditoria bloqueou três adaptadores que importavam estilos
privados depois de mudarem de pasta. O vínculo antes implícito no diretório foi
registrado em componentOwners por caminho exato para MetricSummary, StatCard e
PracticeResultPanel. Isso permite somente o módulo .styles do owner declarado,
sem acesso livre aos estilos de outra composição. Nenhuma receita foi duplicada.

Fixtures negativas continuam rejeitando estilos alheios mesmo com owner
registrado e imports de componentes canônicos para compatibilidade. Adaptadores
podem depender do owner; o caminho inverso é bloqueado. O caso que copia a união
ButtonVariant num consumidor continua falhando apesar do mesmo caminho relativo.

O manifesto permite teste compartilhado e exige import de execução do nome
registrado, caminhos válidos e título de story correspondente. AuthBackButton e
AuthSubmitButton exercitam o compartilhamento real; imports somente de tipos e
nomes alheios não contam como evidência. Limites de cobertura não foram reduzidos.

## Equivalência de renderização

- 228 componentIds explícitos e 474 templates foram comparados com a baseline e
  são exatamente os mesmos. Isso complementa, sem substituir, a comparação visual.
- Os 405 IDs, títulos, nomes e exports de stories foram preservados.
- 76 pares de capturas em 390 e 1440 px ficaram idênticos em pixels, DOM medido,
  geometria e 22 propriedades computadas. Nenhum pageerror foi observado.
- Cobertura: 20 stories de Button, Pressable e adaptadores; sete variantes de ação
  em sm/lg; estados disabled, compacto, foco e hover. As stories incluem ações de
  texto, ícones, loading e conteúdo longo.
- Capturas usam fixtures sintéticas, data fixa, reduced motion e rede externa
  bloqueada. Antes: catálogo estático da baseline c3299a4. Depois: preview local
  da source atual. Não houve nova captura de todas as telas dos cinco produtos.
- Imagens originais permanecem nos artefatos locais. As 19 folhas Antes/Depois em
  .github/evidence/s24 mostram recortes em pixels nativos dos componentes com 24px de contexto,
  sem redimensionar controles, e labels de estado/largura. As capturas completas
  continuam nos artefatos locais. A tabela do PR deve manter a evidência anterior e acrescentar este lote.

Artefatos locais: /Users/margaridamartins/.local/langyspace-readable-ui-20261018.
Incluem baseline-source.json, moves.json, logs, source-invariants.json, manifests
com medidas, comparison.json e sheets.json. Não fazem parte do pacote publicado.

## Próxima tarefa

Revisão humana da revisão atual do PR UI #33 e gates técnicos. Não reutilizar
aceites de revisões anteriores. Depois, preparar adoções nos produtos com telas
reais e os espaçamentos contextuais atuais; não remover adaptadores antes disso.

Visual gate review: pending human
