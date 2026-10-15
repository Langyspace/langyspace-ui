# Progresso cumulativo

2026-10-15: migração do inventário atual concluída e publicada nos cinco produtos. UI primeiro, oito PRs integrados após aprovação humana das revisões atuais (seis originais e os dois ajustes de Sidebar). [Entrega e evidências de publicação](entrega.md).

Os 38 grupos foram classificados como migrados, já compartilhados ou locais por responsabilidade/experiência concreta. Os 49 grupos residuais de CSS têm justificativa em residuos.md; não há candidato elegível pendente nesse inventário. Composição React explícita, sem páginas/controllers na UI nem flags por produto.

Oficial `@langyspace/ui@1.21.1`, fixada por URL imutável e SHA512 nos cinco consumidores. O runtime é idêntico ao 1.21.0 aprovado; o patch corrige o parser do auditor. Instalações frozen, guards e builds por ambiente passaram. As receitas de botões laterais usam `neutral` existente, com concessão visual aprovada em Student #21/Teacher #47.

449 pares originais mais 38 dos ajustes: 487 pares/974 PNGs. A recaptura de modais usa o viewport real (6 pares, 10 PNGs alterados no conjunto original); não exigiu mudança no backdrop ou runtime.

Staging e produção dos cinco produtos têm recibos e comparação dos bytes servidos. Student passou 3 testes nativos em staging e 2 em produção; Teacher 3 por ambiente. Admin validou 4 rotas, 13 callables e aula sintética em dupla com limpeza; Site/Cupom validaram 390/1440. A promoção dos portais foi protegida pelo SHA anterior exato; branches locais/remotas alinhadas. Modo manual por cobrança, sem execução CI disponível ou status fabricado.

As evidências de preparação de API, tipos, pacote, Storybook, budgets e testes focados continuam válidas para os inputs preservados; limites e dívidas anteriores em validation.md. Todos os worktrees históricos e drafts alheios foram mantidos.

Próximo trabalho: apenas nova demanda ou candidato identificado após este inventário; não repetir a migração nem publicar novamente o que já foi conferido.
