# Criar e lançar um material Langy

Roteiro consolidado em 25/11/2026, a partir da revisão de Your first day on the team e dos materiais anteriores. Usar junto da [guideline central](content-planning-guidelines.md). Este documento registra as decisões atuais; relatos de tentativas intermediárias ficam nos históricos de revisão.

## 1. Definir a situação antes das páginas

Escolher nível, duração, tema e o que a aluna precisa conseguir comunicar no final. A história precisa de fatos concretos: quem participa, o que está acontecendo, qual informação a aluna tem e o que precisa perguntar ou explicar. Conhecimento técnico fornece contexto; a avaliação é da comunicação em inglês.

Na trilha dev, nomear o produto e o trabalho de cada pessoa antes de pedir uma apresentação. Exemplo: portal do cliente; cadastro, Login, recuperação de senha e APIs. Um nome como “Save draft” sozinho não explica a tarefa. Personagens diferentes precisam de retratos reconhecivelmente diferentes; atribuições de uma simulação não viram biografia permanente.

A aluna acompanha a tela compartilhada da professora. Durante a aula, ela fala, escuta, explica, pede ações e negocia. A professora opera os exemplos visuais; não planejar uma tarefa que dependa de a aluna digitar no computador compartilhado.

Antes de aprovar o roteiro, [ensaie a conversa com duas respostas diferentes](content-planning-guidelines.md#revisar-a-conversa-com-a-tela-compartilhada), incluindo uma negativa. Confira se a professora consegue continuar a partir do que vê naquela página.

## 2. Escrever um plano que dê para imaginar

Planejar página por página, com o texto exato e a interação, antes de gerar mídia. Usar este formato curto:

| Campo          | Exemplo de uma tarefa oral                                                                                     |
| -------------- | -------------------------------------------------------------------------------------------------------------- |
| Título         | Get access to the project                                                                                      |
| Subtítulo      | You’ve joined the team, but the repository is private. Ask your teammate (your teacher) for access             |
| Visual         | Monitor claro com cadeado, Access denied, customer-portal e e-mail de trabalho                                 |
| Professora     | Can you open the customer-portal repository?                                                                   |
| Aluna          | Explain the error and ask for access using your work email                                                     |
| Dica           | I can’t open… / Could you give…?                                                                               |
| Segundo clique | I can’t open the customer-portal repository — could you give dev@example.com access?                           |
| Ação           | Uma lâmpada no rodapé da coluna: dica → exemplo completo → orientação inicial                                  |
| Composição     | Monitor à esquerda; conversa no topo da coluna direita; ajuda fora dos balões, centralizada no final da coluna |

Para cada página, declarar também o componente/variação, os arquivos de imagem/áudio necessários e o tempo previsto. Em pergunta factual, indicar de onde vem a resposta. Em conversa pessoal, registrar a intenção esperada, sem inventar uma resposta correta para a aluna.

Cada bloco de perguntas tem no mínimo três perguntas pertinentes. Na compreensão, usar `QuestionList`: rótulo Questions com estrela, lista numerada com borda e respostas em frases completas. Uma lâmpada fora da lista, centralizada no fim da coluna, libera dicas em ordem; dica e resposta ocupam a mesma área, alternando sem deslocar o layout. Não usar balões de participantes para perguntas factuais. Conversas pessoais mantêm seus balões e pelo menos três trocas, com apoio opcional. Um comando isolado não vira um bloco de perguntas por conveniência.

Revisões pessoais e réplicas orais também usam Teacher/You com ajuda progressiva no primeiro clique. Listas ficam para compreender ou analisar uma fonte. Planejar o avanço de cada conversa para não repetir apenas nome, país e sentimentos. Preservar exercícios visuais e lacunas úteis quando mudar o renderer; manter seletores junto à ficha que alteram.

A sequência acompanha a progressão da prática: capa ou revisão anterior → vocabulário contextual → modelo/guiada → prática apoiada → aplicação mais livre → conversa livre sobre o tema → dever de casa. Não impor a mesma quantidade de páginas ou cada tipo de exercício a todas as aulas. Gramática e prática avaliada ficam em páginas diferentes; tabelas entram depois de haver contexto.

## 3. Escolher o componente existente

A UI Library revisada tem prioridade sobre cópias antigas e protótipos do Claude. Procurar o dono canônico antes de desenhar outra interface. Variações semânticas entram como props; a aula fornece conteúdo, estado e ações. Não criar CSS, moldura, player ou balão exclusivo por material.

| Necessidade                                      | Dono e composição atuais                                                                                                                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Título, instrução e conteúdo com a mesma largura | `SlidePage`; uma coluna para um conteúdo, composição pareada para visual + conversa, grade maior apenas quando o conteúdo exigir                                                     |
| Uma cena                                         | `SlidePage.width={{ mediaAspectRatio: largura / altura }}` + `SceneExplorer imageSizing="presentation"`; imagem inteira e cabeçalho com os mesmos limites                            |
| Vocabulário de um mesmo ambiente                 | `SceneExplorer presentation="vocabulary"`; pontos sobre evidências relevantes, palavra retida após o clique, exemplo e áudio no callout                                              |
| Balões                                           | `LearningDialogue` / adaptador `MaterialLearningDialogue`; manter densidade, largura natural e estados de áudio, tradução e lacunas                                                  |
| Conversa ao lado de imagem, monitor ou board     | `SlidePage columnAlignment="stretch"` + `LearningDialogue.footerAction`; balões no topo, lâmpada fora deles e centralizada no rodapé da coluna                                       |
| Áudio recebido + resposta oral                   | `VoiceMessageExercise layout="balanced"`; usar `columnAlignment="stretch"` quando a resposta tiver o mesmo rodapé de ajuda                                                           |
| Computador                                       | `ExercisePanel variant="monitor"`; aplicação clara no fundo escuro, proporção legível e conteúdo sem cortes. `screenTextAlign` alinha o conteúdo interno sem mover a barra da janela |
| Board                                            | `TaskBoard` dentro do monitor; apenas colunas de status, títulos de tarefas e avatar circular do responsável                                                                         |
| Chamada guiada                                   | `InterviewSimulation` / `MeetingFrame` + `AudioSequenceControls`; legenda do participante e intenção silenciosa da aluna dentro do frame                                             |
| Apresentação de uma tela                         | `MeetingFrame.sharedContent` e `sharedContentLabel`; apresentador identificado, aplicação legível e retratos na coluna lateral                                                       |
| Encerramento com dever                           | `LessonHomeworkGallery`; sessões canônicas do Student, duas práticas reais e orientação de áudio para a professora                                                                   |

As props acima foram conferidas na fonte atual. Antes da adoção em outro produto, confirmar que a versão consumida contém o contrato e seguir o fluxo do repositório. A existência de uma prop nesta branch não comprova publicação de pacote ou Hosting.

## 4. Manter a conversa simples e apoiada

Escolher o título pela dinâmica e pelo objetivo em [exercise-title-patterns.md](exercise-title-patterns.md), usando as expressões de `stories/materials/shared/exerciseHeadings.json`. O mesmo tipo de tarefa repete a mesma instrução, para que a professora e a aluna reconheçam o formato. Na guided conversation padrão, ambas interpretam os personagens, praticam entre si, trocam os papéis e depois respondem às perguntas: Practise the conversation. O áudio é apoio opcional, não a tarefa principal. Lacunas com respostas do modelo = Complete the conversation; áudio recebido com compreensão = Listen and answer; vídeo com perguntas = Watch and answer. Personagens e assunto entram no subtítulo. Não confundir uso do mesmo componente com a mesma tarefa: apresentar alguém, dar direções e adivinhar uma identidade mantêm ações próprias. Não mudar transcrições nem o nome original de vídeos para adequar um cabeçalho.

- O título diz a ação e o contexto; o subtítulo explica a dinâmica em uma instrução. Não repetir “Team call / First team call”, “Now you”, papéis já visíveis ou “Listen, then reply aloud” abaixo do conteúdo.
- A professora recebe sua pergunta completa. A aluna vê uma intenção curta; uma lâmpada revela dica e, no segundo clique, uma frase completa de exemplo. A etapa substitui o texto anterior. Com várias respostas, concluir dica/modelo de uma antes de seguir à próxima; ao repetir ou trocar a fala, reiniciar o apoio.
- Em colunas pareadas, manter os balões no topo e a lâmpada centralizada no fim da coluna. Em reuniões, a lâmpada fica ao lado de Next, com o mesmo ícone preenchido e fundo cinza dos controles. Não colocar o controle dentro do balão.
- Manter simultaneamente a fala do participante e a intenção da aluna, em posições distintas dentro da reunião. O texto não deve aumentar a imagem nem aparecer como uma conversa destacada abaixo dela.
- A resposta da aluna é ao vivo, sem gravação dela, temporizador obrigatório ou avanço automático. O áudio seguinte não pode fingir saber qual foi a resposta livre anterior.
- Modelos de diálogo e conversação guiada completos têm pelo menos seis falas significativas. Prática pessoal completa tem pelo menos três pares pertinentes. Não inflar uma apresentação ou uma tarefa aberta para cumprir uma contagem de diálogo.
- Perguntas de compreensão usam lista numerada/revelação factual, não uma segunda conversa de balões. Modelo, compreensão e transferência não competem na mesma tela quando isso deixa a tarefa confusa.
- Nome e foto usam a identidade canônica. Professora: usar `useMaterialTeacher()` diretamente; o contexto já resolve primeiro nome/foto ou `Teacher`, sem cortar nomes nem repetir fallbacks na aula. `identified` permite apresentar somente um nome real. Aluna: primeiro nome/foto válidos vindos do produto; na ausência de ambos, You. Não presumir aula, pessoa ou foto por um nome no roteiro.
- Textos autorados em balões não terminam com ponto final; manter pontuação interna e interrogações. Preservar separadamente o texto exato da gravação. Não remover pontuação em tempo de renderização.

## 5. Usar imagens que expliquem a tarefa

No vocabulário de objetos e lugares, ilustrar primeiro a palavra, não a frase de exemplo. O alvo deve ser reconhecível sem ler a legenda. Não adicionar uma personagem pensando, olhando a hora ou segurando outro objeto quando isso transformar “grill”, “pool” ou “bike” numa ação ambígua. Pessoas entram quando a relação ou a ação for o alvo real. Preservar o prompt canônico literal; mudar apenas o brief de assunto/composição.

Priorizar uma cena contextual a ícones abstratos quando as palavras pertencerem a um mesmo ambiente. Um POV de mesa pode reunir tarefa, acesso, bloqueio, prazo, atualização e feedback; o exemplo explica o conceito de trabalho, sem transformar “laptop” em sinônimo de “blocker”. Cada ponto deve ter uma evidência reconhecível, não uma posição arbitrária.

Simplificar preservando o suporte necessário: moldura de computador, fatos consultáveis, pergunta inicial e dica quando forem úteis. Tirar rótulos repetidos e metadados não significa remover tudo que permite entender a tarefa. Um erro pode usar uma única imagem de cadeado e texto curto. Um feedback recebido pode usar só o áudio e uma resposta oral, sem repetir o protótipo da página anterior.

Planning sem apresentação de trabalho é uma reunião de pessoas; não mostrar uma tela compartilhada sem função. Na review, mostrar trabalhos concretos dos colegas e depois dar a apresentação à aluna. Nome do apresentador na barra; legendas em uma área livre dentro da janela, sem cobrir campos/ações. Manter retratos inteiros e centralizados, com o badge de nome original; conferir que janelas maiores não mostram só os olhos.

Usar o [prompt canônico de imagem](prompts/langy-illustration-v1.8.txt) integralmente, sem reescrever ou “melhorar” cabelo/rosto. Acrescentar apenas identidade factual e composição necessária. Guardar prompt exato, origem, hash, original e asset utilizado. A ilustração fornece a cena; textos e controles funcionais pertencem à UI. Objetos isolados de vocabulário usam transparência; cenas contextuais têm ambiente ou fundo apropriado. Preservar proporções, rostos, anatomia e alvos importantes, evitando cortes e pontos em regiões íntimas.

## 6. Preparar os deveres junto com a aula

Cada aula regular/extra termina com duas práticas ligadas ao conteúdo e uma orientação de áudio à professora. Usar a galeria de três celulares e os mesmos renderizadores do Student e da simulação. O título informa que a aula acabou; uma instrução explica os próximos passos. Experimentais mantêm seu encerramento de matrícula.

- **Flashcards:** pelo menos 20 palavras ou expressões distintas e úteis; tradução, exemplo natural e mídia correspondente. Quando houver áudio de frente/verso, a frente toca a palavra e o verso o exemplo, não o mesmo arquivo de palavra nos dois lados. Não aumentar a quantidade com plurais, flexões ou exemplos quase iguais. A introdução de vocabulário da aula mantém seu mínimo próprio de 6 itens.
- **Reuso:** procurar primeiro conjuntos temáticos de TI, países, frutas, roupas e outros já existentes. Reutilizar apenas quando significado, nível, imagem e áudio corresponderem. Não vincular um deck B2 como substituto de uma prática B1 removendo a trava de nível.
- **Shadowing:** frases úteis para a situação, tradução e personagem com nome, retrato e sotaque real da gravação. Preservar a distribuição 70% americano / 30% outros sotaques do curso regular, por atividade; extras podem reutilizar gravações válidas sem forçar uma porcentagem artificial em cada aula.
- **Quiz, quando pertinente:** praticar a gramática ensinada, variar lacunas/julgamentos/escolhas e narrar os enunciados relevantes. Explicação em português claro. Não oferecer a resposta pronta no enunciado nem fazer todas as questões com a mesma mecânica.
- **Áudio à professora:** pedir uma produção útil sobre o tema; orientar duração e começos de fala. A tela de WhatsApp é uma orientação, não um envio ou uma terceira atividade salva no portal.

Planejar os IDs e os destinos antes da entrega. Escrever `homeworkCopy` com três tarefas curtas em português; o encerramento usa uma única ação Copy homework, com dois links resolvidos desses IDs e a orientação de áudio para a teacher. Uma prévia funcionando localmente não significa atividade cadastrada. O [plano de ampliação dos conjuntos antigos](../epics/dev-first-day95/homework/expansion-plan20.md) registra separadamente o que ainda falta cumprir no mínimo de 20.

## 7. Reutilizar e conferir a mídia certa

Congelar texto exibido, texto exato de áudio, personagem e ID antes de gerar. Procurar reuso por texto, provider, voz e arquivo válido. Preservar gravações boas; não regenerar para ajustar pontuação, layout ou quantidade de páginas. Nova geração registra parâmetros reais e proveniência; montagens registram suas fontes, sem request-id fictício.

No clique do vocabulário, tocar palavra e exemplo com espaço natural. Manter um único playback por atividade, destaque na fala certa, interrupção ao sair e erro útil. Para um defeito repetido de pronúncia, comparar o arquivo servido e o binding com a fonte; investigar o trecho antes de gerar a mesma sequência outra vez. Hash comprova identidade, não qualidade perceptiva; não declarar pronúncia ou recorte perfeitos sem a revisão correspondente.

## 8. Revisar localmente e lançar uma entrega coerente

Durante a revisão página por página, aplicar o feedback e manter um resumo atual do resultado, separado do histórico de tentativas. Não repetir build, export, publicação ou auditoria de todo o catálogo a cada comentário.

Antes de lançar, verificar o escopo alterado: instrução compreensível, fonte da resposta disponível, conteúdo suficiente para o nível, estados de dica/modelo abertos, imagem inteira, nomes/retratos corretos, áudio certo e ausência de scroll excedente. Corrigir o conteúdo/composição antes de reduzir a fonte. Usar testes focados que cubram o risco e reaproveitar evidências válidas; a dona do produto faz a revisão visual. Falhas concretas ficam registradas, sem enfraquecer a verificação para obter um resultado verde.

Para cadastrar exercícios, usar a API oficial, preservar IDs e progressos e confirmar o payload salvo e as mídias exatas. Considerar normalizações documentadas do backend no payload esperado; diante de uma escrita incerta, reconciliar por leitura antes de repetir. Só habilitar o link do ambiente confirmado. Staging não habilita produção.

Para o material, seguir o export/adoção e o coordenador de publicação do repositório, preservando o catálogo e as capas existentes. Uma entrega consolidada evita publicar versões intermediárias. Separar os estados:

| Estado               | Evidência necessária                                          |
| -------------------- | ------------------------------------------------------------- |
| Planejado            | Páginas, textos, interação, componentes e mídia especificados |
| Prévia local         | Fonte renderizada e revisão do escopo alterado                |
| Exercício no Student | ID, payload e mídia confirmados no ambiente correto           |
| Material em staging  | Export/adoção e recibo real da publicação                     |
| Produção             | Autorização e evidência próprias; não inferir de staging      |

Entregar um resumo curto com o que mudou, o link correto, verificações relevantes e pendências reais. Nunca confundir proposta, mídia pronta, preview, cadastro de atividade e material publicado.
