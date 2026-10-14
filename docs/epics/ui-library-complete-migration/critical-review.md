# Revisão crítica antes do código

PM: abrangência medida pelo inventário atual inteiro, não LOC ou quantidade de exports. Exclusões exigem motivo verificável e não podem ocultar candidatos caros. Preservar experiência pesa mais que mover CSS.

TL: JSX explícito é critério de contrato. Um componente pode ser grande se coeso; vários slots/flags não tornam API pequena. Reutilizar contratos existentes; lógica de produto não migra.

SWE: worktrees existentes e SHAs preservados. Nenhuma publicação parcial entre subtarefas; pacote coerente ao final. Capacidade de expansão definida antes de medir e famílias antigas protegidas. Evitar aliases para código de outra revisão.

QA: baseline das fontes e do pacote por produto; capturas finais correspondem à revisão exata. Matriz focada por risco e todas as telas atingidas, sem produto cartesiano desnecessário. Dívidas anteriores não são checks verdes. Review humana final permanece por PR.

Plano apto à execução contínua. Revisão interna não constitui aprovação visual nem autorização de produção.

## Revisão do tamanho por responsabilidade

A primeira medição bloqueou authPresentation:27866 raw, limite20000, gzip5781/6000. A entrada juntava os23 owners de autenticação, incluindo as duas ações e conteúdo de marca já medido em brand. A correção preserva os limites existentes: ações AuthBackButton/AuthSubmitButton passam a ser medidas também na família actions (limite15000/3500), com dependência apenas do espaçamento necessário, sem importar toda a receita de conteúdo Auth. authPresentation mede conteúdo/estado, brand continua medindo toda a identidade. authComplete acrescenta um cheque explícito de composição dos23 owners+BrandLogo, limitado à soma da capacidade Auth/brand previamente planejada (76000/20000). Nenhum export fica fora das entradas e o limite total320000/65000 permanece; a medição anterior com falha continua registrada. Não reduzir escopo visual nem alterar CSS para esconder tamanho.

## CardLink e orçamento de superfícies

O novo CardLink delega a moldura existente de Card e fornece link/foco nativos; MaterialCard Teacher conserva Router, imagens/metadados e geometria. Adicionar esta nova apresentação à entrada legacy layout bloqueou4384/4000 bytes brutos e1660/1600 gzip. A família dataPresentation, planejada antes da implementação para novas superfícies/listas, passa a medir CardLink junto com StatCard/DefinitionItem/DetailRow. O antigo contrato layout e seus limites4000/1600 permanecem intactos, assim como o limite global320000/65000. Não retirar CardLink da medição; manter failure/retry na validação.

O auditor bloqueou CardLink por importar styles privados de Card (LSUI010). A correção extrai cardRecipe em foundations/surfaces, usada por ambos, mantendo as propriedades da superfície. Auditor697 fontes passou; dois testes Card/CardLink passaram; pacote/SSR/budgets passaram. Não foi criada exceção para o import.

A inspeção final encontrou requisito implícito de spans com classes on/said em ShadowingActivePhrase. ShadowingWord substitui esse markup por state current/spoken/pending nos três consumidores e mantém índice/timers fora da UI. Teste real de música/seek/palavras passou sem alterar os tempos ou expectativas de áudio. Site adota o microdestaque comum; essa concessão consta da comparação em estado playing. Labels de Repasses passam a ser label/for associados ao input/file, sem alterar submit/upload.

Comparação geométrica capturada encontrou FileInput56px versus48px anterior, FilterSelect Teacher38 versus32 e CPF52 versus50. Foram corrigidos: FileInput tem contrato único de48px, sem prop size; ordenação Teacher usa size sm já existente; CPF mantém50px contextuais. Cadastro Student390 capturado durante splash foi substituído por imagem após heading/form prontos; isso era coleta transitória, não aprovação de uma tela vazia. Evidências afetadas devem ser atualizadas antes dos PRs.
