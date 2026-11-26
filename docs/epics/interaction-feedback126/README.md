# Som nos controles e resposta com transição perceptível

Base: 8e01481dc14395ae42ecc74bd389d3290136a1a3. Pedido: som no olho, no mute/unmute, na troca de tema e ao clicar em perguntas; tornar a animação da resposta perceptível.

## Implementação

- VocabularyControls opta o olho no mesmo earcon neutro já usado pela lâmpada. LearningDialogue, cenas, vocabulários e modelos que compõem esse controle recebem a mudança sem handlers por aula
- RevealCard confirma o clique na pergunta, a abertura/ocultação da resposta e as etapas da ajuda progressiva. O consumidor continua dono da resposta e da avaliação. Disabled/loading/preventDefault continuam respeitados
- SlideDeck dá feedback ao mudar tema. O mute/unmute aplica a preferência imediatamente e confirma apenas seu próprio clique com um som breve; não é um desmute temporário nem uma segunda engine. Depois de mutar, perguntas/olho/tema permanecem silenciosos
- Reutiliza o som neutro de 150 ms nos controles. Após nova revisão de escuta da usuária, perguntas usam um toque abafado de 90 ms: senoide única de 220 Hz, sem segundo harmônico, ataque arredondado de 18 ms e ganho 0.10 contra 0.38 da dica. A tentativa intermediária de 120 ms/587 Hz/ganho 0.18 foi substituída; demais controles não mudam. Repetições substituem o som anterior; áudio nativo tem prioridade; não há fila, downloads, timers de estado ou modificação das gravações
- Na prévia anterior, a resposta tinha animation de 0.15s e movimento reduzido estava desligado. Era um fade pouco perceptível, não ausência de CSS. RevealCard agora usa entrada de 200 ms, opacidade e transformação vertical de 4px, com tokens existentes. Não anima altura, margem, scroll ou a pergunta. Ocultação continua imediata; a entrada reinicia ao reabrir. Movimento reduzido remove a animação

## Verificação

- 16 testes passaram nos três arquivos focados de sons, QuestionList e aparência: olho/pergunta, preferência de mute, confirmação do próprio switch, cancelamento, prioridade de mídia e preservação do tema/estado
- TypeScript e declarações passaram. Snapshot atualizado somente para os helpers internos adicionados; 184 values, 307 types, 651 declarations, sem novos exports públicos
- Prévia local: clique real na pergunta abriu a resposta e o CSS computado confirmou 0.2s, movimento reduzido false. Mute=false e unmute=true refletidos no botão; tema claro=true e retorno ao escuro sem perder a resposta. Capturas antes/depois em evidence/
- Testes de síntese e estados não estabelecem preferência perceptiva de volume/timbre em todos os dispositivos. Revisão da usuária na prévia local. Sem geração de novos áudios ou publicação em staging/produção
- Dois arquivos A101 já alterados antes desta tarefa foram preservados e ficam fora do commit

Visual gate review: pending human

Refino do timbre: nove testes focados passaram, incluindo frequência, oscilador único, ataque, duração e mute. Sem alteração visual ou nas respostas/animações.
