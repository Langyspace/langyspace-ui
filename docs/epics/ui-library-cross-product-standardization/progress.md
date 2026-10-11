# Progresso — execução contínua

Atualizado em 2026-10-11. R01/R02/R03/R06/R07/R11 preparados: sete componentes novos no UI,
reuso de SearchInput Teacher e de ActionMenu Admin. Total de 12 PRs: UI #8, oito drafts
visuais de produto e três PRs do padrão permanente em Site/Admin/Cupom.

Os nove corpos visuais usam somente `# Evidências` e tabela com `Antes` à esquerda e `Depois`
à direita: 340 pares de telas nos produtos, 74 pares no UI e 46 stories novas identificadas
sem versão anterior. As 874 imagens e seus arquivos originais foram preservados. Typechecks, instalações
congeladas, contratos focados, API/bundle e callbacks dos pilotos passaram nos escopos
registrados. CI ampla não foi monitorada; nenhuma execução foi visível na consulta única
de cada SHA atual. Nenhum merge, tag, release oficial ou deploy.

[Formato atualizado e validação](evidencias-em-tabela.md).

[Handoff atual](handoff-continuo.md): 12 PRs, commits, CI/CD, candidato, concessões e limites.
Student/Teacher usam o mesmo candidato UI 1.8.0 por commit b37873be; Admin conserva a versão
oficial 1.7.0 e seus locks porque ActionMenu já existe. Source desta rodada remove 675 linhas
dos produtos e acrescenta 501 à UI, redução líquida de 174 no recorte de runtime afetado;
isso exclui R01, testes/stories/documentação/configuração e não prova redução de bundle.

R04/R05 permanecem separados/condicionais pelo custo visual. Próxima unidade: R08 FilterPills
Teacher, com filtro compatível e baseline próprios. A preparação continua autorizada enquanto
as reviews estão pendentes; integração exige aprovação humana da revisão atual de cada PR.
R09/R10/R12–R24 seguem propostas, sem declarar o épico completo.

Visual gate review: pending human.
