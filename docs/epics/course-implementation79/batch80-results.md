# A1.01–A1.03 · segundo lote

23/11/2026. Três aulas replanejadas e implementadas sobre o primeiro lote 79. São prévias locais; não foram publicadas no portal. Progresso acumulado: **5/60 aulas autoradas, 55 ainda no planejamento**.

| Aula                         | Estrutura final                                                                                   | Finalidade                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| A1.01 · Introduce yourself   | 11 páginas; 6 alvos em dois grupos; diálogo de 6 falas; 12 min de conversa livre                  | Apresentar nome, origem e sentimento; conhecer outra pessoa e reagir |
| A1.02 · Your name and number | 11 páginas; 10 dígitos e alfabeto de consulta; diálogo de 6 falas; 10 min de conversa livre       | Ditar, soletrar, conferir e corrigir um contato                      |
| A1.03 · People in my life    | 12 páginas; 6 relações e 3 profissões de apoio; dois modelos de 6 falas; 10 min de conversa livre | Apresentar uma pessoa e um grupo usando fatos conhecidos             |

O orçamento é de 50 min por aula, não uma medição de uma aula real. A conversa temática livre é penúltima e a prática independente é última. Capa/revisão usa conteúdo anterior, sem antecipar o exercício seguinte. A sequência, os títulos e as falas principais estão nos três arquivos `<código>.review.json`; fichas e consultas usam `MeetSomeoneActivity`, `A102.sections` e `A102.data`, com textos de gravação nas respectivas proveniências.

## Mudanças de conteúdo

- **A1.01:** seis palavras/expressões, uma apresentação utilizável e uma missão com fichas de três fatos substituem a bateria de identificações. Os quatro primeiros turnos gravados permanecem; os dois finais acolhem Ana e encerram o encontro, sem exigir he/she. Na nova mensagem, Kim apresenta Mia no café; a aluna depois a cumprimenta e fala de si.
- **A1.02:** números e letras são consultas com play e uma lâmpada, sem marcadores de pergunta. A soletração L-I-M-A continua acessível no título. A recepção/monitor mantém três campos. A ligação confirma o sobrenome e apresenta apenas um dado errado: 508 no lugar de 507. O curso deixa de repetir uma nova rodada de respostas em várias ligações; as composições antigas ficam como referências opcionais nos arquivos/stories.
- **A1.03:** a cena de família aparece antes dos empregos. Student/doctor/cook são apoio, não outra lista obrigatória de seis palavras. As perguntas de compreensão/pessoais usam intenção e dica no mesmo balão. A apresentação da família conserva três fatos por ficha; a transferência aceita foto própria ou personagens. Não há pergunta factual sobre a origem desconhecida de Tom.

## Composição compartilhada

Não foi criada outra aparência de diálogo, telefone, monitor ou popup. O adaptador `ReviewedLesson` compõe os donos existentes e aceita atividades que recebem `active`/`speech`; isso preserva um único player por aula. Perguntas com áudio no título usam a mesma coluna de perguntas. A cena de família declara a proporção real do asset e compartilha o limite do cabeçalho por `SlidePage.width.mediaAspectRatio`, em vez de usar um título mais largo que a imagem.

A ligação conserva o componente `CallSimulation`, com dimensões responsivas da receita de dispositivo. A ficha de contato usa a densidade compacta existente. As chaves locais de Notes da A1.01 e da C1.01 original foram explicitadas no adaptador, incluindo a correção da migração do primeiro lote; não mudou o contrato do Teacher.

## Mídia e preservação

- 13 novas respostas de síntese ElevenLabs: 12 itens da A1.01 e uma atualização numérica da A1.02;0 reuso exato encontrado no inventário consultado,0 retentativas/falhas. Mesmas vozes Jessica/Ana e Sarah/Kim, configuração aprovada. Números são enviados por extenso à síntese, separados do texto de exibição.
- 6 compostos de palavra+exemplo, com fontes/frames/pausa de separação registrados. Os labels de sentimentos anteriores foram reutilizados; derivados não recebem request-id fictício.
- 179 arquivos de mídia anteriores das três aulas permaneceram byte a byte iguais, incluindo as 55 falas da A1.02, S.1, letras, Souza e ringtone. O S.1 da fonte e o servido na prévia têm SHA256 `d5df9cda72cb120e13a9886eb0631c9aa3cf674f9b090ceba00c1f8717d090fa`.
- Nenhuma ilustração foi regenerada. A bandeira do Brasil é o SVG não editado de flag-icons 7.5.0, da família/licença já utilizada. O prompt de estilo 1.8 permanece inalterado.

## Conferência e limites

- 34 páginas reais em 1280×620 e 390×844, totalizando 68 casos e 126 estados capturados, incluindo dicas, palavras/pronúncias, fichas, formulário e ligação. Sem erros de execução, imagens ausentes ou rolagem excedente nos casos finais. A chamada estreita inicialmente excedia a altura; a receita de dimensão e a ficha compacta resolveram os casos afetados.
- Áudio nativo confirmado nos vocabulários, seis falas de cada diálogo principal, letras A/M/W, S.1, três turnos da ligação e revelação da lacuna G.2. A fala para quando a ligação sai da página. As duas escutas WhatsApp revelam a transcrição no terceiro play.
- A conclusão foi acelerada por seek para verificar estados, sem substituir `play`. Isso não é aprovação perceptiva de pronúncia, ritmo ou naturalidade.
- Dois fluxos de Notes em prévia local verificam leitura de um rascunho na chave anterior e edição persistida. Nenhuma nota real ou backend Teacher foi acessado.
- O typecheck global tem 29 erros anteriores contra 30 na base, sem novos erros. Não foi declarado limpo. As provas de pacote/API do lote 79 continuam aplicáveis aos componentes públicos, que não mudaram neste lote; não houve novo build/publicação de pacote ou CI.
- Identidade da sessão, uso real com aluna/professora, navegador/dispositivo da usuária e deploy não foram verificados. As referências opcionais do Storybook não foram apresentadas como uma auditoria completa de todos os stories.

Evidências privadas no chat: `outputs/course-implementation80-20261123/verification.final80.json`, `audio-review80.json`, `notes80.json`, `typecheck80.final.json`, `before/` e `captures/`. As primeiras falhas de seletores do roteiro de verificação foram corrigidas no roteiro, sem afrouxar o comportamento do produto.

Esta etapa não cria PR cumulativo do histórico anterior, nem faz push, merge, deploy, publicação npm ou alteração em produção. A base de autoria mantém o mesmo histórico separado do `main` registrado no primeiro lote. Os 55 planos restantes não são aulas executáveis entregues.

Visual gate review: pending human
