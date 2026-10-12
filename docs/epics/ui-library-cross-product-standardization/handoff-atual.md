# Handoff atual — R09 aceita e R10 preparada

Atualizado em 2026-10-12. Os 13 PRs anteriores continuam integrados; registros de produção da
1.8.0 permanecem em integracao-aprovada.md. R09 foi aceita explicitamente pela pessoa responsável
para UI #9, Admin #12 e Teacher #29, nos heads ee7180cc/05fb53ce/de06f73a.

UI #9 integrada em [db4cfe8d](https://github.com/MarcosLaboriosi/langyspace-ui/commit/db4cfe8d63b862270185b2d916003ca218a9fe8b).
O primeiro job de release 1.9.0 excedeu 20 minutos. Correção técnica em
[46c32e4e](https://github.com/MarcosLaboriosi/langyspace-ui/commit/46c32e4e454c7bf171911f59fe7e094cee1ce9a7):
timeout 45 minutos, dispatch da tag aprovada, HEAD/versão/ancestralidade confirmados e todos os
gates preservados. [Retomada](https://github.com/MarcosLaboriosi/langyspace-ui/actions/runs/38265767122)
iniciada; [diagnóstico](r09/release-recovery.md). Sem mover tag ou publicar candidato manualmente.

Admin #12 e Teacher #29 estão aceitas, mas não podem integrar o candidato antes de seu artefato
oficial. A publicação e suas adoções continuam dependentes dessa retomada; não declarar deploy
concluído. Os PRs/evidências R09 foram preservados.

## Próximo lote — R10

FilterToolbar com nome acessível obrigatório, children/ref/div nativos e uma recipe flex-wrap:
gap 12px, 8px/stretch até 900px. Margens Teacher e grid 1100px Admin continuam locais; superfície
Admin compõe Card e ganha apenas a sombra discreta. Sem props de produto/layout/surface.

26 imagens de stories novas; 56 pares Teacher (/alunos,/materiais, sete estados/quatro larguras),
105 pares Admin (/mensagens, sete estados/15 larguras). Total: 348 imagens. Conteúdo, controles e
geometria iguais antes/depois nos 161 pares; somente a sombra prevista muda em Admin. Imagens
públicas imutáveis, tabela Antes/Depois e width 400 nos novos drafts.

Contrato UI/ref/teclado e API/bundle passaram. UI: 41 valores/101 tipos/138 declarations,
+518 raw/+79 gzip; capacidade específica e estimativa corrigida do entry novo layout estão
no [plano](r10/technical-plan.md). Typechecks dos produtos e quatro testes Messaging passaram.
Teacher remove 15 linhas líquidas de src; Admin acrescenta nove, em parte pela formatação do
import, e não remove ainda FilterBar global. Review deve julgar se a composição Admin compensa.

Candidato 1.10.0 anexado ao branch público da UI para review, com checksum e conteúdo conferidos;
não é release oficial. Fontes/stories/imagens preparadas antes de abrir PRs de adoção. Cada PR
novo exige aceite próprio; o aceite R09 não cobre R10. CI ampla e deploy permanecem assíncronos.
Links/SHAs de entrega e consultas únicas de CI ficam no handoff local da execução contínua.

Próxima tarefa: review humana dos drafts R10; resolver artefato oficial R09 antes de integrar as
duas adoções já aceitas. R12–R24 continuam propostas; R04/R05 continuam separados pelo custo.

Visual gate review: pending human — R10.
