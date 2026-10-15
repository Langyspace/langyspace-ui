# Revisão crítica do plano

Revisão realizada pelo mesmo agente sob as perspectivas abaixo; não é aprovação humana nem execução de agentes separados.

## Produto

O catálogo contém **169 componentes públicos**, além do export tokens. O objetivo é revisar cada um nos dez critérios, inclusive quando a decisão correta for manter. A migração anterior não prova a qualidade deste refinamento. Não existe meta de reduzir número de componentes ou inventar variações. As composições React Auth/Result aprovadas são a referência.

## Tech Lead

Preservar os imports e a semântica atuais é o padrão. Props/slots de dados legítimos em tabela/menu não são proibidos por dogma; um schema genérico de tela é que precisa ser evitado. CSS variables não viram props automaticamente. Consolidar receitas exige ler os usos e preservar significado/valores/unidades. A pasta atoms/molecules permanece; a descoberta por família pode melhorar sem uma mudança mecânica da estrutura pública.

## Engenharia

Há 641 imports/reexports diretos observados, não 641 usos ativos comprovados. A revisão segue os aliases/bridges pertinentes e lê implementação, tipos, estilos e exemplos de cada componente. O scanner não aprova critérios. Cada refatoração precisa simplificar a leitura ou reduzir uma responsabilidade duplicada demonstrável; wrappers React pequenos e legíveis podem ser mantidos.

Exemplos de uso completos e documentação específica são entregáveis obrigatórios, mas não substituem alterações de código quando um contrato estiver confuso. O disco está limitado: não duplicar dependências, evidence trees ou storybook estático anterior; só remover arquivos gerados por esta execução se forem dispensáveis ou preservados com integridade verificável.

## QA

Evidência visual parte do estado atual pós-migração/sidebar, não das capturas legadas anteriores. Revisões novas exigem novo aceite humano. A matriz é o escopo afetado real por família, com mesmo baseline/fixture/viewport e testes de interação pertinentes. Full gates permanecem no CI e evidências bem sucedidas são reutilizadas apenas com inputs pertinentes iguais. Nenhuma comparação estrutural será apresentada como prova completa de comportamento visual.

## Decisão

Plano coerente para execução. A etapa 01 está concluída: exports/manifest reconciliados, paths verificados e todos os 169 componentes registrados como ainda pendentes de julgamento. A etapa 02 fecha esta revisão e fixa os dez critérios dos documentos epic/requirements. Próxima tarefa única: 03 — foundations, tokens e receitas.

## Revisão crítica da entrega preparada

Esta é uma revisão pelos quatro pontos de vista do mesmo agente, sem alegar aprovação independente ou humana.

- PM: o escopo termina nos dez critérios do catálogo atual. Não houve redesign, migração de framework ou tentativa de mover domínio para a UI. As mudanças visíveis de foco são explícitas e precisam do aceite atual.
- Tech lead: a major 2.0.0 assume os contratos incompatíveis; não conserva modos legados ou flags por produto. Tokens públicos mantêm seus valores e declaração. Três dependências de compilação são privadas do build e reduzem custo real sem elevar budgets.
- SWE: as entradas são funções React com JSX e props tipadas; helpers têm responsabilidades concretas. A desestruturação do menu separa refs e valores de render sem desabilitar a regra de pureza. Os produtos conservam contexto de domínio e geometria de página.
- QA: regressões de cor, teclado, hidratação, foco, borda e safe area foram reproduzidas e corrigidas. Há 188 pares originais, pacote/API rastreáveis e limites de prova declarados em validation.md. CI ampla, aceite visual e produção permanecem gates separados.
