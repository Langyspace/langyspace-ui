# R11 — toast compartilhado

Impacto direto. ToastItem e ToastViewport serão preparados primeiro na UI. Contrato de
item clicável com message/title/actionLabel, icon, tone semântico e props/ref nativos de
button; viewport children-first, sem dados, timers, store, rotas ou prioridade.

As duas implementações usam posição, spacing, altura, sombra e tipografia iguais. Manter
sem variações de produto. Tones neutral/success/danger/warning/brand cobrem somente os
estados reais; notification Teacher é mapeado para brand no adapter. Propostas de concessão:
warning canônico mais escuro, texto de ação #cc0f45 para contraste. Sem mudança de layout.

1. Baseline real em todas as rotas do AppShell e Login/Registration Student; estados
   combinados locais, mobile/desktop e fronteira 640. Rede externa bloqueada, sem timer.
2. Componentes UI + stories/testes/API/manifest/SSR/browser smoke antes de adoção.
3. Substituir estilos e markup locais; remoção, navegação, live region e store permanecem.
4. Comparar geometria/cores e callback de remover; candidato, frozen install e typecheck.
5. Abrir drafts só com Antes/Depois; aprovação humana antes de merge/artefato oficial.

Próxima tarefa: baseline. Não executar ações de notificação/produção ou publicar release.

## Evidência preparada

Baselines em toast-baselines.json: Student 9f1057f; Teacher f588154 (staging atual).
21 pares Teacher e 41 Student, todas as rotas com viewport, estados locais reais combinados,
390/1440 e fronteira 639/640/641. Fontes carregadas e animação finita finalizada antes da
medição. Dimensões, tipografia e posição iguais; apenas CTA Teacher e borda warning Student
mudam para cores canônicas. Remover um item funcionou em cada cenário. Nenhum clique em
notificação de produção, alteração de store/timer, ação remota ou mudança de live region.

Styles.ts removidos dos dois adapters. Source local: Student 138 -> 30 linhas, Teacher 166 ->
44 antes de formatar. UI acrescenta dois owners de apresentação; medir benefício líquido
separadamente de testes/docs. Não contar todo source local removido como redução global.

UI: oito testes focados/manifest passaram; API 39 values / 99 types / 132 declarations, com
apenas seis declarações novas e entrypoint alterado. Demais contratos anteriores preservados.
Bundle cumulativo 103.503 raw / 21.933 gzip; entrada toast 7.332 / 2.410. Proposta de limite
raw agregado 101.000 -> 104.000 para dois contratos novos com dois consumidores; gzip permanece
22.000. Demais limites e medições, incluindo fields 5.564/5.600, preservados.

Candidato 1.8.0: 67508 bytes; SHA256 18f80c3a95dfe2c20ee2fdea1a23655b3a88b8bf9890057c0342efcf9568517c.
Próxima tarefa: publicar candidato, frozen install/typecheck e abrir drafts com imagens.

## Estado final desta rodada

Preparado e publicado para review. Instalação congelada e typecheck passaram nos produtos
afetados. Todos os drafts usam o candidato cumulativo b37873be72013e22e7d2fd7b624752b8bb468a52;
as medições e candidatos intermediários acima são históricos. Consultar [handoff-continuo.md](handoff-continuo.md)
para PRs, commits, validação e limites atuais. Aprovação humana antes de merge permanece pendente.
