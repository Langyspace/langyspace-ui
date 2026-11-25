# Entrega local — 25/11/2026

- Adicionadas três páginas, uma por experimental, com 12 perguntas autorais. Fonte ativa em *.video.json; componentes canônicos VideoExercise, SlidePage e QuestionList, sem novo player ou CSS
- Typecheck concluído com exit 0. Verificação de diff sem erros. Os sete testes de interação do player da revisão102 continuam válidos: implementação, limites, replay, loop e ciclo de vida não foram alterados
- Reprodução real observada dentro do iframe local nos três casos: café em 21,43 s; avião em 42,28 s e após replay em 43,03 s; trabalho em 50,87 s. Esses são instantes observados durante os respectivos intervalos, não duração das atividades. Inicialização sem autoplay; vídeo pausado e preparado novamente ao terminar o trecho de café e de avião
- Na experimental B1/B2, a lâmpada revelou a dica da primeira pergunta no espaço da resposta. Conversa livre e fechamento continuam após o vídeo nas três composições
- O Key & Peele de hotel foi rejeitado depois do erro explícito de incorporação. A fonte de Uber foi descartada porque não tinha transcrição para curar o recorte com precisão. Ambos foram retirados da seleção ativa
- Legendas automáticas podem errar. Dificuldade, humor, linguagem informal e enquadramento do YouTube precisam de revisão humana. Não há garantia de disponibilidade futura ou em outra região
- Apenas fonte e prévia locais. CI, push, Teacher, staging e produção não foram acionados
