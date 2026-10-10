# Execução contínua — estado atual

Autorização ampliada: continuar preparando lotes sem aguardar reviews anteriores, mantendo
aprovação humana por PR antes de merge. R01 permanece preparado; R03 e R02 implementados
no UI, com adoções em worktrees independentes dos produtos. Nove testes UI e API/bundle
passaram. Evidências: 28 pares legais + 110 pares de avisos + 14 stories novas.
Próxima tarefa única: publicar candidato e finalizar os novos drafts de adoção e seus locks.
Depois: avaliar R04/R05 Cupom com prova do custo visual, sem forçar adoção.

Detalhes: execucao-continua.md e r02-r03.md. Não houve merge/release/deploy nem review aceita.
O registro abaixo é histórico do R01, não um bloqueio à preparação dos demais lotes.

# Progresso — execução R01

Execução autorizada em 2026-10-10. T01–T05 concluídas: contrato preparado no UI, candidato
materializado, adoção isolada em Login PhoneStep/TokenStep de Student e Teacher, checks focados e
capturas reais de Antes/Depois. Próxima tarefa única: T06, publicar branches de trabalho e abrir
PR do UI / drafts de adoção. Nenhum merge automático, tag ou deploy direto.

Componentes: AuthTitle, AuthDescription e AuthAccent. API sem variantes e sem props de produto;
layout pretendido V0. Trinta pares de telas e dezoito capturas de stories, com viewports reais
conferidos. Resultado: zero diferença na geometria e CSS dos três componentes. A aprovação humana
é independente para cada PR e ainda está pendente.

Consultar evidencias-r01.md para comandos, limites, hashes e decisões de bundle. Candidato imutável
nos drafts não substitui release oficial. A finalização da adoção depende de UI aprovada, artefato
oficial e aprovação humana da revisão final de cada produto.

R02–R24 continuam no backlog de unidades do planejamento. A cópia local dos três componentes nas
outras rotas permanece até expansão própria; este piloto não declara a migração completa da família.

Sem CI/release/deploy acionados neste ponto. Visual gate review: pending human.
