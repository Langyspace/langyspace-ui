# A day in my life — extra A2/B1

## Autorização e entrega

Pedido de 22/11/2026: criar a aula completa e publicar somente em staging para revisão da Margarida. Impacto direto; feature/PR existentes preservadas. Sem produção, backend, mensagens externas, merge ou publicação npm.

## Plano aprovado e conteúdo exato

Quatro blocos: manhã → se arrumar para academia → treino → skincare/sono. Cada bloco contém uma única cena contextual com seis expressões, um diálogo de seis falas com compreensão ao lado e uma conversa pessoal com seis balões e uma lâmpada sequencial. A aluna formula a resposta e uma pergunta; modelos não são gabaritos pessoais. Roupas, maquiagem e atividade física são escolhas, não obrigações.

Texto integral: [InfluencerRoutine.content.json](../../../stories/materials/InfluencerRoutine/InfluencerRoutine.content.json). Sequência de18 páginas: capa; morning scene/dialogue/personal; ready scene/dialogue/personal; grammar; gym scene/dialogue/personal; night scene/dialogue/personal; WhatsApp; reply; free-conversation; homework.

A gramática fica no meio, sem quiz. A amiga Kim envia uma mensagem escrita e um áudio antes de dormir; a transcrição abre na terceira escuta. Penúltima página usa o MeetingFrame canônico. Última página usa o plano de prática em celular, sem links inventados. A capa tem ilustração própria desde o feedback75, para não se confundir com a segunda página. As quatro cenas dos exercícios continuam preservadas.

## Componentes e contratos

Reusar SlidePage/colunas, SceneExplorer, MaterialLearningDialogue/Avatar, VocabularyControls primário, GrammarTable, VoiceMessageExercise, MeetingFrame, LessonPracticePlan, MaterialSlideDeck e Notes existentes. Novos arquivos em InfluencerRoutine são adaptadores de dados/controladores; zero CSS, tokens ou componente público novo. Professor/aluna usam os contextos atuais; personagens gravados usam retratos canônicos.

Na conferência mobile, um callout no centro da imagem podia cobrir o próprio ponto. SceneExplorer recebe somente a prop aditiva opcional onDismiss para uma ação de fechar explícita no cabeçalho. Sem essa prop, todas as aulas existentes conservam o render anterior. A variação é exercitada pela story MorningScene e pelo teste focado SceneExplorerDismiss. Por essa mudança compartilhada, reconstruir pacote/API uma vez; não reutilizar o build72.

Cada objeto é uma pista contextual da ação associada, não evidência de seis ações simultâneas. Cada hotspot mostra expressão e exemplo e reproduz ambos. Os pontos são ajustados às imagens finais, não ao esboço.

Ana é personagem de exemplo nesta aula. As novas rotinas e a amizade simulada não acrescentam fatos à biografia canônica ou à identidade da influencer real.

## Mídia

Quatro chamadas built-in image_gen, sem referências. Prefixo literal Langy1.8 SHA256 fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489 preservado, só identidade/composição anexadas. Redimensionamento integral e WebP, sem recorte/edição semântica. Prompts e proveniência junto dos assets. Quarenta e nove clipes ElevenLabs:24 expressão+exemplo,24 falas e1 mensagem; vozes Jessica/Ana e Sarah/Kim, reprodução1x e credencial existente. Inventário exato pesquisado antes da geração; arquivos relativos e hashes, requests reais, sem TTS de navegador.

## Tarefas e aceite

- [x] Congelar copy e mapear os componentes existentes
- [x] Gerar quatro cenas e49 clipes com proveniência
- [x] Compor as18 páginas e registrar a nova aula extra no catálogo
- [x] Conferir tipos, conteúdo, apoios, transportes de áudio e geometria desktop/mobile
- [ ] Exportar fonte final e adotar no Teacher com preservação das14 aulas anteriores
- [ ] Build Teacher e uma publicação Hosting staging com ACK real
- [ ] Revisão visual/pronúncia pela usuária

## Limites

Não alegar naturalidade acústica, anatomia perfeita ou adequação universal com base em metadata. Revisão humana final em staging. Registros e recibos locais: /Users/margaridamartins/.codex/outputs/influencer-routine74-20261122/.

## Evidência local

64 medidas de geometria e19 capturas em1440×900 e390×844;4 cenas com24 pontos e popovers sem scrollbar;4 diálogos com respostas abertas;5 conversas com lâmpada sequencial;49 MP3s transportados por HTTP com hashes exatos; play/pause/destaque e3 passagens da escuta aceleradas por seek para conferir transcrição (não é escuta perceptiva). Três testes do close passaram, inclusive foco e omissão da prop. Tipos do consumidor:16 diagnósticos prévios, nenhum novo. Pacote/API reconstruídos pelo único contrato opcional novo. A revisão humana final continua pendente.
