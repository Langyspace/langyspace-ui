# Autorização deste lote — 2026-10-13

A owner instruiu: “aprova tudo e vamos pro próximo (faz o seguinte cria os PRs aprova eles e vai
pro próximo até terminar, mantendo esse agente rodando)”. Aprova os heads R14 UI b8385b4,
Student 37080ea e Teacher 8b5fee9 e autoriza a integração contínua das próximas unidades deste
épico, sem nova pausa por rodada. Esta instrução atual prevalece sobre a exigência anterior de
aceite individual, somente para este lote. Não modificar o padrão global de revisão humana.

Manter UI primeiro, feature branches e PRs, body somente Evidências/tabela Antes/Depois,
originais de todas as telas/estados/larguras afetadas, testes focados e custo-benefício. Usar
merge normal com match-head, sem auto-merge/bypass/review GitHub fictício. Produtos via staging;
nenhum candidato em staging, push em main de produtos ou mutação de dados/provedores. CI e
deploy assíncronos; não declarar produção verificada. Preservar analytics concorrente.
