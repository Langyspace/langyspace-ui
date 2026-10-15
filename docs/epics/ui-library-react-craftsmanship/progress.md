# Progresso atual

Estado: execucao continua; 01-09 concluidas na preparacao. 169/169 contratos baseline revisados,1 retirado sem uso e3 owners novos:171 componentes publicos atuais. Nenhuma declaracao de conclusao do objetivo: indexacao, pacote/API, capturas, PRs e aceite humano atual continuam pendentes.

Tarefa unica em execucao: **10 - qualidade cumulativa, catalogo, pacote e PRs com evidencias**.

Próxima ação única:10.7 enviar o commit/PR da UI com artefato e188 pares, fixar sua URL imutável nos5produtos, verificar os bytes instalados e abrir seus PRs. Os checks focados, pacote final e capturas estão registrados em validation.md. CI ampla e aceite humano continuam pendentes; nenhum merge/release/deploy desta etapa.

Concluido:

- 01/02: plano robusto, revisao critica,169 componentes e641 imports/reexports diretos reconciliados.
- 03: precedencia e proveniencia dos tokens/receitas; aplicacao semantica por familia e conferencia cumulativa em10.
- 04:23 contratos, useFieldControl privado e CSS PhoneField mais direto;21 testes/7 arquivos e typecheck passaram. Fixture antiga NavigationLink corrigida sem afrouxar href.
- 05:37 contratos, valores exatos AuthFrame via authRecipe, imports BrandLogo e JSX AuthProgress;3 testes/3 arquivos e typecheck passaram.
- 06:27 contratos, OperationalList com Header/Row/RowActions privados, composicao de metricas explicita;13 testes, typecheck e arquitetura705fontes passaram. KeyValueList teve vazamento de cor reproduzido/corrigido,2 testes passaram. ScheduleRow teve defeito de teclado reproduzido/corrigido por anatomia nativa,2 testes e typecheck passaram.
- 4 exemplos tipados de guias compilaram contra o entrypoint atual; prova em guide-examples-validation.json.

Candidato major **2.0.0 nao publicado**: ScheduleRow exige onOpen/openLabel e nao aceita pseudo-button no wrapper. Teacher ClassRow precisa da adocao especificada em compatibility.md/tarefa09, inclusive identidade com conteudo phrasing sem alterar regras de dominio. Os demais consumidores continuam na1.21.1 oficial enquanto as adocoes sao preparadas.

Build/declarations frescos e snapshot major revisado; tarball de revisão ainda não congelado. Não confundir smoke local de pacote com publicação oficial.

Operacao: LOCAL_EXECUTION_ROOT/active-state.json e workspaces.json. UI em ui/, feature refactor/ui-react-craftsmanship, baseline8cdd415562db7f9aa060218ff00727aec7289dcb. A antiga symlink de dependências UI foi preservada em receipt e removida apenas no worktree próprio; UI agora usa instalação isolada/frozen e3dependências dev de compilação. Nenhum alvo compartilhado foi alterado. Todos os canonicos/drafts preservados. Nenhum commit/push/PR/CI/deploy desta etapa. Disco inicial530MiB, ultima leitura54GiB livre por mudanca externa.

Continuar10->11. O gate visual atual sera solicitado somente com os PRs concretos e suas evidencias completos; nenhuma aprovacao historica vale para revisoes futuras.

## 11 — Aceite original recebido; reparos reais antes da integração

Os seis heads foram aprovados pelo produto. A leitura dos gates revelou contraste insuficiente e fixture responsiva oculta na UI; corrigidos sem dispensar as regras. A entrega paralela de calendário já entrou nos stagings Teacher/Admin e foi reconciliada nesta feature.172 públicos/173 registros, com referências reais para a composição interna do calendário. Tipos UI e27 testes de calendário/referências passaram;60 cenários de layout focado passaram. Pacote, evidências e revisão dos pixels alterados estão em preparação. A aprovação original é preservada, sem atribuí-la à revisão ainda alterada. Publicação major permanece pendente.

### Candidato e consumidores corrigidos preparados

Candidato2bd56b8057155560c5c8814e19ee03525091d75d5d7d4fb03ffbf1b516532932 publicado como artefato imutável de revisão no commit9b8199d; não é release oficial. As cinco instalações frozen passaram:1.126 arquivos conferidos por consumidor, peers únicos, locks sem alterações fora da UI. Tipos e arquitetura passaram nos cinco projetos; ClassRow e calendário têm três testes de interação aprovados. A fixture antiga de calendário foi ajustada aos nomes acessíveis da agenda já integrada, mantendo os asserts de teclado, independência de ações e callbacks.

213 pares preparados:142 produtos,34 catálogo,12 composições e25 do delta desde o aceite original. Os cinco PRs de adoção receberam novos heads e tabelas completas. A aprovação dos heads antigos é preservada, sem atribuí-la aos pixels corrigidos.

CI38776364996 passou arquitetura e pacote e completou os stories; um teste de referência excedeu5s ao recriar ambientes TypeScript sem configuração. A correção limita a análise sem tsconfig a binding de símbolos sem tipos globais; projetos reais com tsconfig mantêm suas opções. Os nove testes de referências passaram, incluindo alias, shadowing, reexports e styled; o caso antes lento concluiu em39ms localmente. Nenhum timeout global foi ampliado e o pacote/rendering não mudou. Nova execução ampla permanece a cargo da CI.

### Reconciliação final com main e stagings atualizados

Main UIadcbc31 integrou WeeklyCountChart70e23a7: min-height:0 na coluna evita exceder a altura da grade. Teacher32109d35 e Admin6f6c08b adotaram seu pacote final1.22.0; esta feature preserva essas ancestrais. Os conflitos eram somente o CSS tokenizado do gráfico e pins de pacote, sem alteração adicional de domínio.

Prova de runtime: o bundle2.0.0 compilado difere do candidato anterior apenas pela inserção literal de13 caracteres min-height:0; dentro desse styled component. No pacote, apenas dist/index.js e o mapa de declarações de WeeklyCountChart/styles.ts mudaram; todas as declarações efetivas permanecem idênticas e o check de API passou. Build e33 budgets passaram; layout focado do gráfico passou em seis cenários. A evidência existente é reutilizada nas superfícies que não contêm o gráfico, conservando os hashes e baselines efetivamente capturados e registrando separadamente a validação contra o novo candidato. Os12 pares Today/drawers/foco do Teacher são renovados; há dois pares adicionais do gráfico isolado. Nenhuma imagem é editada.

O pedido anterior de reviewfb2dd1e foi superado por essa atualização do target antes do aceite. Os novos heads e215 pares precisam ser preparados e conferidos antes do pedido atual; não aplicar eventual resposta ao head antigo a pixels posteriores. Nenhum merge/publicação desta major ocorreu.
