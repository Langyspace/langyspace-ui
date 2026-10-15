# Plano técnico

## Arquitetura e execução

UI primeiro em `refactor/ui-react-craftsmanship`, worktree isolado; canônicos publicados preservados. Toda mudança nova recebe dono e uma decisão rastreável. O catálogo atual em quality/component-manifest.ts, src/index.ts, tipos e callsites dos cinco repositórios são a fonte do inventário; seu scanner coleta fatos e não emite aprovação.

Manter React 19, TypeScript, styled-components e a estrutura index.tsx/styles.ts/types.ts existente. Componentes comuns continuam funções React, com hooks apenas para interação necessária. Reutilizar foundations, receitas, ModalLayer, manifest, histórias e testes; nenhum framework de componentes/configuração será introduzido. Dependências de build exigem benefício demonstrado e não entram no runtime dos produtos.

## Ordem por dependência

| Etapa | Responsabilidade                           | Critério de saída                                                                         |
| ----- | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 01    | Inventário e revisão nominal dos contratos | Todos os exports reconciliados; famílias, consumidores e riscos identificados             |
| 02    | Norma de leitura e baseline de exemplos    | Dez critérios aplicáveis, exemplos Auth/Result preservados, plano criticamente revisado   |
| 03    | Foundations e receitas                     | Valores/racional identificados, duplicação semântica reduzida sem mudança visual          |
| 04    | Ações e campos/formulários                 | Props/ref/eventos/labels e função React claros, nenhuma flag por produto                  |
| 05    | Auth, marca e documentos                   | Composição explícita e responsabilidades coerentes, sem regressão de formulário/SSR       |
| 06    | Estados, superfícies, dados e métricas     | Contratos de composição e nomes claros; sem inflar componentes genéricos                  |
| 07    | Navegação, overlays e mensagens            | Foco/teclado/portais/eventos preservados, slots ambíguos resolvidos                       |
| 08    | Calendário e prática                       | Dependências Frame/filhos e CSS variables explícitas; datas/áudio/regras continuam locais |
| 09    | Consumo nos cinco produtos                 | Aliases sem responsabilidade removidos; bridges e geometria legítimos preservados         |
| 10    | Catálogo de uso, package e PRs             | Documentação específica, revisão integral e evidências completas antes do aceite humano   |

As revisões de cada família podem concluir “manter” com prova; código novo não é obrigatório para demonstrar trabalho.

## Inventário e decisões

inventory.json guarda nome, owner, props, estilos, story/test, imports/reexports reais por produto e sinais observados. review.md registra por componente os dez critérios e decisão com fonte; uma família só fecha quando todos os seus componentes fecharem. decisions.md contém consolidações, exclusões e contratos de composição que exigem justificativa maior.

Sinais como literals, CSS variables, seletores de filhos, efeitos, aliases ou contagem de props não são falhas automáticas. Cada sinal é lido no contexto e no consumidor. Não usar relatório estrutural como substituto de leitura.

## Superfícies e riscos

| Família              | Produtos/rotas representativas                                                            | Estados e cuidados                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Auth/campos/ações    | Student/Teacher login e cadastro; Site formulário trial; Admin login/drawers              | submit/OTP/foco/erro/loading, ref, CPF/data, labels; não mudar backend                 |
| Navegação/identidade | shells Student/Teacher/Admin e header Site                                                | SPA/aria-current, sidebar 900/901, bottom nav, hover/foco, identidade                  |
| Overlays             | Student escolher plano/checkout; Teacher detalhes/drawers; Admin matrícula/lead           | portal, Escape/backdrop, scroll lock, hit targets, modal viewport                      |
| Dados/estados        | Student início/prática; Teacher alunos/repasses; Admin listas/financeiro; Cupom relatório | vazio/loading/erro, ações/ordem, tabelas densas, conteúdo longo, período demo          |
| Mensagens            | Student/Teacher mensagens e notificações                                                  | composer Enter/Shift+Enter, callbacks únicos, foco, status, sem envio real em produção |
| Calendário           | Teacher calendário/disponibilidades; Admin agenda                                         | mês/semana/timeline, slots/ações, container e fuso mantidos no domínio                 |
| Prática              | Student lições/vocabulário, Teacher previews, Site demos                                  | flip/quiz/resultados, seek/áudio/progresso, reduced motion, viewport curto             |

Conferir os paths atuais de cada rota na tarefa antes de editar, pois a tabela é matriz de risco. Reusar os harnesses sintéticos anteriores, apontados para baseline 1.21.1 atual e candidato novo. Mudanças globais exigem cobertura de todos os consumidores atingidos; mudanças internas sem efeito visual comprovado não exigem imagens de telas não afetadas.

## Validação e compatibilidade

- Testes de interação/tipos por família; check:api para contrato público; ComponentManifest.test quando referências mudarem.
- Mapear source->dist->tarball e validar imports ESM/SSR/browser ao preparar pacote. SemVer depende do diff real; preservar o contrato público é o padrão.
- Manter budgets e regras atuais. CI continua dono dos gates amplos; consulta única por SHA para URLs após push, sem monitoramento.
- Decisão de compatibilidade após leitura em 06: ScheduleRow passa a ter um comando principal nativo e ações irmãs, eliminando um problema real de teclado/nested interaction. A alteração de props exige candidato **2.0.0** e adoção coordenada; consulte compatibility.md. Nenhuma versão incompatível será publicada como minor/patch nem haverá flags para reter o caminho defeituoso.
- Candidato local pode alimentar worktrees de adoção; release oficial/tag e deploy somente na etapa autorizada, após as revisões aplicáveis.

## Riscos e concessões

1. Refatoração cosmética: exigir benefício verificável de leitura/manutenção, evitar renomear por preferência.
2. API excessivamente fragmentada: avaliar a responsabilidade, não perseguir um número de componentes.
3. Generalização excessiva: configurações de dados são legítimas; abstrações de páginas não pertencem à UI.
4. CSS/contexto: preservar valores e registrar dependências; nada de apagar overrides necessários indiscriminadamente.
5. Disco limitado: worktree sparse sem evidências históricas duplicadas; dependências existentes com conjuntos e lock idênticos. Nunca purgar node_modules compartilhado ou apagar artefatos/drafts alheios.
6. Aprovação: preparar todas as famílias e PRs possíveis antes de solicitar a revisão final; a nova intenção não é aceite visual de revisões futuras.

## Referências primárias

Os critérios de responsabilidades, props/children e pureza seguem a documentação React: [Thinking in React](https://react.dev/learn/thinking-in-react), [Passing props](https://react.dev/learn/passing-props-to-a-component) e [Components and Hooks must be pure](https://react.dev/reference/rules/components-and-hooks-must-be-pure). A solução concreta é decidida pelo código existente e pelos contratos aprovados, sem migração de versão motivada por essas referências.

## Refinamento de distribuição em 10.4

O primeiro pacote excedeu os budgets de campos e flashcards. Foram separados92 valores internos em exports ESM tree-shakable, mantendo o objeto público tokens com as mesmas chaves, literais e unidades (inclusive o hash da declaração pública). Uma tentativa de substituir partes Styled por divs com seletores próprios não reduziu custo e foi descartada, preservando JSX com nomes claros.

Minificação oficial de CSS no build: babel-plugin-styled-components2.3.0, @rolldown/plugin-babel0.2.4 e @babel/core7.29.7, somente devDependencies; Babel7 corresponde ao peer do plugin. Um helper compartilhado aplica a mesma transformação ao pacote e a todas as entradas medidas. Mantidos budgets/entradas, componentIds explícitos e templates modernos; pure/minify ativos, sem transpileTemplateLiterals porque arrays intermediários aumentaram o tamanho. [Documentação oficial](https://styled-components.com/docs/tooling).

O navegador provou um overflow de2px no painel de modal em390px sem reset global. box-sizing:border-box agora pertence ao painel. Com reset o layout continua equivalente. Os6 cenários (390/901/1440 com/sem reset) passaram para hit testing, áudio/flip/faces inert/foco, comandos independentes de aula/dia e Menu dentro de Dialog (Tab/Escape). Essa validação focada não substitui o gate visual humano nem a CI ampla.
