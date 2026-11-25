# Progresso 102

- Base local `5d8fb8df`; catálogo preservado com 66 materiais, dos quais 60 são da trilha principal
- 59 novas páginas e piloto A1.01 preservado: 240 perguntas e 33 vídeos de fontes oficiais. Intervalos e evidência com minutagem em `curation.json`
- Fontes ativas: 53 JSONs de Course e 7 de ReviewedLesson. Player, Questions, larguras, API e áudios gravados foram reutilizados sem alterações nesta expansão
- Exercícios anteriores e sua ordem preservados. Redistribuição explícita de quatro minutos por nova atividade, sem reduzir conversa livre, vocabulário, abertura ou homework
- Autoria: `node scripts/audit-material-video.mjs --compare=5d8fb8df` passou para 60 aulas e 240 perguntas. Confirma estrutura, vínculos, duração e preservação; não substitui revisão pedagógica/perceptiva
- Player: os 7 testes focados de `VideoExcerpt` passaram. Reutilizadas as provas de replay por trecho, loop opcional, ausência de autoplay e pausa ao sair; sem repetir builds ou verificações amplas
- Fonte retirada durante a conferência local: `naleynXS7yo` abria no YouTube, mas o player incorporado declarou indisponibilidade. C1.10 agora usa a animação oficial TED-Ed `gCfzeONu3Mo`, com quatro perguntas novas. Nenhum upload de terceiros foi adotado
- O HTTP 200 da oEmbed da fonte rejeitada não foi tratado como prova de reprodução
- Na conferência local, a substituta em C1.10 reproduziu dentro da aula: tempo observado de 109.734 s no intervalo 109–161 s e readyState 4. Dica progressiva e resposta completa apareceram no QuestionList
- Planos por nível contêm título, subtítulo, fonte, intervalo, objetivo e quatro perguntas com dicas/respostas
- Prévia observada na largura nativa estreita do painel, com colunas empilhadas pelo layout existente. Não há alegação de aprovação de todas as larguras nem de 60 sessões de reprodução
- CI e deploy não foram acionados; entrega local para revisão

Visual gate review: pending human
