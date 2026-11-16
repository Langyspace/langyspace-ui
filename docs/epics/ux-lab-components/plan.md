# Componentes do UX Lab

Entrega direta no PR #42, sobre `557b2b51240e74aff0c42dedfab0bd4d14f1703a`. Preservar a A1.01 e suas 15 cenas aprovadas. Professor e aluno compõem os mesmos contratos; dados, avaliação, gravação, geração e persistência pertencem aos produtos.

## Fonte

[Langy UX Lab](https://claude.ai/artifact/4JSNcRAHm4yHsyN89SXKwN), publicação `1794646326-5b98`, lida pelo CLI em 16/11/2026. Os quatro arquivos foram baixados e seus hashes verificados: index.html `872dbfa4ed77bfc184cafbdea31296eb884a5bb6b08fc98ada2d6bb6ce2d8d50`; a1-componentes.html `c0619b33e9d84ef468e93199566537c1e1630e296e3fd5f5139cdebdb43c4943`; oral-review.html `6389ff5b5a9de60b10f63a305eb21c41b04bf03244df282bd0c7cdb30942089a`; a1-01.html `d7e17588a18c6362515675fffe59e4ae9c4d736a6f7096b4235e5d94b93adb3c`. Originais em `.local/ux-lab/originals`, fora do pacote. Não modificar o Lab remoto.

## Contratos e cobertura

| Padrão observado                                    | Implementação compartilhada                                                                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Review, compreensão, criar exemplos                 | RevealCard e composição de perguntas                                                             |
| Múltipla escolha, Quick check, Right or wrong       | ExercisePanel, QuizOption, QuizFeedback                                                          |
| Vocabulário / fale o nome / Guess who               | VocabularyGrid, ChoiceCard                                                                       |
| Guided conversation / Your turn / role play em chat | LearningDialogue com conteúdo e callbacks injetados                                              |
| Tabela e tabela com respostas escondidas            | GrammarTable: colunas, exemplos, áudio e revelação por linha                                     |
| Fill in the blanks                                  | GapFillExercise: uma lacuna ativa, opções reveláveis e resultado controlado                      |
| Role play e Challenge                               | RolePlayExercise: situação, papéis, apoios e checklist controlado                                |
| Áudio no WhatsApp e sim/não                         | VoiceMessageExercise existente                                                                   |
| Ligação                                             | CallSimulation: discagem, menu, teclado, atendente, apoio e encerramento                         |
| Entrevista                                          | InterviewSimulation: videochamada, legenda, papéis, transporte e progresso                       |
| Vídeo e vídeo recebido no chat                      | VideoExercise com mídia injetada, capítulos e compreensão; BranchingConversation para o chat     |
| Cena explorável                                     | SceneExplorer: imagem, hotspots, pergunta/apoio e objetos visitados                              |
| Shadowing                                           | Primitivos Shadowing existentes e sequência/controles de entrevista                              |
| Conversa com caminhos                               | BranchingConversation: histórico, escolhas ou texto livre; avaliação de tom externa              |
| Ouvi qual?                                          | MinimalPairExercise: escuta/fala, dois cartões, placar e dica                                    |
| Desafio 4-3-2                                       | FluencyTimer: duração/rodada/apoios controlados; relógio real no consumidor                      |
| Oral review e resultado                             | OralReview: estrelas por resposta; OralReviewResult: resultado e barras, exportação por callback |
| Título e casa ligada à plataforma                   | SlidePage/SlideDeck, PracticeCard e ações do consumidor                                          |

Os dados de demonstração vêm dos próprios arquivos do Lab. Não embutir conteúdo da aula nem lógica de gabarito nos componentes. Não usar iframe de protótipo como implementação de produção. A mídia do Lab é demonstrativa; o componente não solicita câmera/microfone, não inicia ligação externa nem apresenta gravação simulada como gravação real.

## Execução

- [x] Ler e verificar os originais; inventariar padrões e contratos existentes.
- [x] Implementar contratos ausentes sem duplicar os existentes; registrar exportações, docs e manifesto.
- [x] Montar catálogo com os exemplos originais, estados, teclado, temas e mobile; manter dados fora do pacote.
- [x] Verificar tipos/API, SSR/contratos e interações/acessibilidade direcionadas; capturar referência/React.
- [x] Preparar commit único e tabela de evidências para o PR #42; revisão visual humana pendente.

Validação local em até três grupos direcionados: contratos/tipos/API/manifesto; stories afetadas e acessibilidade; renderização/comparações/interações. CI mantém as suítes completas. Não publicar pacote nem fazer merge/deploy nesta entrega.

## Estado da implementação

Foram adicionados 13 contratos públicos, documentados e registrados no manifesto/API. O catálogo tem 44 stories e cobre os 34 padrões inventariados com componentes novos ou composições existentes. As variações incluem A1/C2, tabela negativa/interrogativa, resposta escondida, tema escuro, largura estreita, vazio e loading. Nenhum arquivo de aula A1.01 nem suas 15 cenas aprovadas foi alterado nesta revisão.

- Tipos e ESLint direcionados passaram; API: 166 valores, 265 tipos, 553 declarações, sem remoção de exportações anteriores.
- Contratos/SSR/manifesto: 17 casos distintos passaram. Um nome acessível de teste foi corrigido e apenas esse caso foi repetido.
- Stories: o lote inicial passou em 37/37 após correção de contraste; os casos adicionados/alterados passaram em reruns direcionados. Os testes não desabilitam regras de acessibilidade.
- Navegador: 34 jornadas passaram, 17 em cada largura. Incluem teclado, limites da entrevista, legenda, ligação com opção errada e cancelamento de timers, lacunas, checklist, hotspots, pares, caminhos/texto livre, vídeo/capítulos, estrelas, campos/exportação e as três rodadas com relógio real.
- Capturas e matriz: `.github/evidence/ux-lab/results.json` e `interactions.json`; 1280×800 e 390×844, com fontes carregadas, imagens decodificadas e checagem de overflow. Os originais foram renderizados sem alterar HTML/scripts/mídias; apenas o transporte de Google Fonts foi atendido com os mesmos WOFF2 locais para eliminar falhas de rede.

O catálogo mantém a mídia demonstrativa do Lab. Integração de gravação, vídeo real, arquivos de áudio, PDF, serviços e persistência continua sob responsabilidade do professor/aluno consumidores. Os callbacks e slots estão preparados; esta entrega não publica o pacote nem altera os portais.

## Evidência e revisão

A baseline desta entrega é `557b2b51240e74aff0c42dedfab0bd4d14f1703a`. As evidências anteriores da A1.01 continuam válidas porque seu código/assets e seus tokens existentes ficaram intactos. As imagens novas incluem referência do Lab e stories React com o mesmo viewport; estados sem story anterior são identificados como novos. O PR mantém somente a tabela Antes/Depois. Aliases de caminho curto podem apontar para cópias byte a byte das imagens, com hash e origem registrados, para respeitar o limite do corpo do GitHub sem editar/omitir as capturas.

A entrega usa um único push para o PR #42. A tabela contém 274 linhas: mantém as 132 comparações anteriores e acrescenta 142 capturas de stories/estados do UX Lab. Os aliases foram verificados por SHA-256 e usam URLs imutáveis do commit. O merge exige revisão visual humana da revisão atual; não iniciar release/deploy.
