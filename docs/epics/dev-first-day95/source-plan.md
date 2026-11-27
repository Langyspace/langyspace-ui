# Páginas — Your first day on the team

**Convenção:** português orienta produção/professora; textos em inglês são a copy proposta. Todos os enunciados, intenções e dicas estão escritos por extenso. Nas referências visuais, ID e descrição se repetem literalmente. Fatos dos ensaios não são biografia das pessoas da sessão.

**Interações guiadas:** DEV-03 usa a sequência de áudio e legenda da interview, com o comportamento descrito na própria ficha. DEV-05, DEV-06 e DEV-07 mantêm perguntas e intenções em balões canônicos e lâmpada sequencial. Os ícones de câmera/microfone/desligar do MeetingFrame são decorativos. A conversa acontece na aula; a ilustração não abre outra chamada.

## DEV-01 — Your first day on the team

**Objetivo / tempo:** Reconhecer o cenário: primeiro dia com uma equipe que usa inglês · 1 min

**Título:** Your first day on the team

**Subtítulo:** Meet your team, ask for help and take part in the work

**Imagens e apoio visual:**

- VIS-CAPA — Kim sentada diante de um notebook aberto, sorrindo e levantando uma mão em saudação; ambiente de trabalho simples em azul claro, rosa e preto; rosto e mãos inteiros; sem palavras, logos, molduras ou controles desenhados na arte

**UI/UX:** Capa com título e subtítulo fora da arte. Imagem principal: VIS-CAPA — Kim sentada diante de um notebook aberto, sorrindo e levantando uma mão em saudação; ambiente de trabalho simples em azul claro, rosa e preto; rosto e mãos inteiros; sem palavras, logos, molduras ou controles desenhados na arte. Sem exercício na capa

**Textos:**

Somente o título e o subtítulo acima

**Áudio:** Dispensável; abertura conduzida pela professora

**Critério de sucesso:** A pessoa entende que vai experimentar situações reais de trabalho

**Notes da professora / produção:** A aula acompanha um onboarding fictício. As três reuniões são ensaios de situações do ciclo de trabalho, não uma agenda obrigatória do primeiro dia

## DEV-02 — Your work toolkit

**Objetivo / tempo:** Disponibilizar seis palavras que serão usadas nas próximas tarefas · 4 min

**Título:** Your work toolkit

**Subtítulo:** Explore the six cards, then use them in the situations ahead

**Imagens e apoio visual:**

Seis visuais de trabalho especificados na tabela de textos: card, acesso, bloqueio, calendário, mensagem e comentário de feedback. Construir com texto nativo e ícones; não depender de uma metáfora ilustrada para explicar cada termo.

**UI/UX:** VocabularyGrid com seis cartões visuais em grade responsiva. Mostrar as palavras para apoiar a ação, sem exigir adivinhação de conceitos abstratos. Ouvir pelo alto-falante; tradução opcional. O exemplo permanece associado ao cartão; o visual continua legível

**Textos:**

| Palavra / áudio | Tradução opcional | Exemplo contextual / áudio | Apoio visual |
| --- | --- | --- | --- |
| task | tarefa | My first task is to test the form | Card Save a draft acompanhado de um ícone de checklist |
| access | acesso | I need access to the repository | Repositório helpdesk-web com estado Access denied e cadeado |
| blocker | impedimento | Missing access is a blocker | Tarefa Open the app na coluna Blocked, ligada ao erro de acesso |
| deadline | prazo | The deadline is Friday | Calendário semanal com Friday destacado e ícone de relógio |
| update | atualização de andamento | Here is a quick update | Mensagem Read the setup guide: done; app access: blocked acompanhada de ícone de mensagem |
| feedback | comentários para melhorar o trabalho | Thanks for the feedback | Formulário ao lado do comentário Please make the Save draft button easier to find |

**Áudio:** Seis palavras e seis exemplos, exatamente como na tabela; voz de Kim. Reprodução individual, sem autoplay. Reutilizar essas gravações nos flashcards

**Critério de sucesso:** A pessoa consegue localizar no apoio a palavra de que precisa; não exigir memorização antes de seguir

**Notes da professora / produção:** Um único grupo semântico: organização do trabalho. Se já souber as palavras, reduzir esta etapa a 2 minutos e transferir os 2 minutos para DEV-08

## DEV-03 — Join your first team call

**Objetivo / tempo:** Participar de uma primeira chamada guiada: apresentar-se e confirmar a tarefa inicial · 4 min

**Título:** Join your first team call

**Subtítulo:** Play each part, answer Kim, then move to the next part

**Imagens e apoio visual:**

- VIS-CALL — Frame de chamada no padrão da interview, com o retrato canônico de Kim no quadro principal e a participante identificada como You no quadro menor; legenda apenas da fala atual de Kim e uma barra discreta com voltar, play/pausa e avançar
- VIS-KIM — Retrato canônico de Kim, mulher asiática adulta com cabelo preto curto em bob e franja lateral, blusa preta de gola alta e fundo azul claro

**UI/UX:** Página enxuta: título e subtítulo no topo, VIS-CALL — Frame de chamada no padrão da interview, com o retrato canônico de Kim no quadro principal e a participante identificada como You no quadro menor; legenda apenas da fala atual de Kim e uma barra discreta com voltar, play/pausa e avançar. Usar VIS-KIM — Retrato canônico de Kim, mulher asiática adulta com cabelo preto curto em bob e franja lateral, blusa preta de gola alta e fundo azul claro. Somente a fala atual aparece como legenda no frame, pelo texto completo do trecho; não é sincronização palavra a palavra. A legenda permanece durante a resposta oral. Uma única barra discreta abaixo do frame reúne três botões de ícone com área de toque e foco legíveis. Nomes acessíveis: “Previous part”, “Play current part” / “Pause current part” / “Resume current part” e “Next part”. Sem balões paralelos, checklist, campos de resposta, lâmpada ou painel de notas na tela da participante.

| Controle / estado | Comportamento definido |
| --- | --- |
| Entrada na página | Parte 1 selecionada, sem autoplay; legenda aparece quando o áudio começa |
| Play / pausa | Toca a parte selecionada; durante a reprodução, pausa; depois da pausa, retoma; depois do fim, toca novamente a mesma parte |
| Fim do áudio | Mantém a legenda atual e espera a resposta oral, sem avançar sozinho e sem tempo limite |
| Avançar | Interrompe qualquer áudio, seleciona a próxima parte e a toca com a legenda correspondente |
| Voltar | Interrompe qualquer áudio, seleciona a parte anterior e a toca desde o início com sua legenda |
| Limites | Voltar desabilitado na parte 1; avançar desabilitado na parte 5; a navegação da aula continua separada |
| Falha de áudio | Mantém a legenda da parte selecionada e permite tentar novamente pelo play; não pula a fala |
| Sair da página | Interrompe o áudio; ao retornar, começa novamente na parte 1 sem autoplay |

**Textos:**

**Roteiro de produção:** cinco falas gravadas de Kim, cada uma seguida pela resposta oral da participante. Esta tabela serve para revisar o conteúdo; ela não aparece inteira na página.

| Parte / áudio | Fala de Kim = legenda literal | Resposta esperada — somente notes da professora |
| --- | --- | --- |
| CALL-01 | Hi, welcome to the team! I’m Kim. Can you hear me clearly? | Cumprimentar Kim e confirmar se consegue ouvi-la |
| CALL-02 | Let’s start with a quick introduction. What’s your name, and what do you work with? | Dizer o nome e a área em que trabalha ou estuda |
| CALL-03 | I work on the frontend. Which tools do you use most? | Citar uma ou duas ferramentas que usa no trabalho ou nos estudos |
| CALL-04 | Today, your task is to open the app and try the request form. Could you repeat that back to me? | Confirmar as duas ações: abrir o app e testar o formulário |
| CALL-05 | I’ll send you the setup guide after this call. Can you message me if you need access? | Confirmar que vai avisar Kim se precisar de acesso e encerrar a troca |

**Áudio:** CALL-01 a CALL-05: cinco arquivos separados na voz de Kim, com texto exatamente igual à coluna de legenda. Só uma faixa pode tocar por vez. A participante responde ao vivo; suas falas não são gravadas nem avaliadas automaticamente. Os novos áudios ainda serão produzidos

**Critério de sucesso:** Responde às cinco entradas: verifica a escuta, apresenta-se, cita ferramentas, confirma as duas ações e combina avisar Kim sobre acesso. A referência factual das partes 4 e 5 está no áudio; as partes 2 e 3 aceitam experiência real de trabalho ou estudo

**Notes da professora / produção:** Revisão 2, a pedido da usuária: substituir esta página pelo fluxo sequencial da interview. Cinco falas de Kim + cinco respostas orais = dez turnos. A professora controla o ritmo e ajuda oralmente se necessário; não precisa inventar novas perguntas ou interpretar Kim. Reservar cerca de 1 minuto para os áudios e 3 para respostas/replays. CALL-05 conecta à mensagem de acesso da DEV-04. A adaptação compacta do componente está especificada em 02-midias-e-reuso.md, ainda sem implementação

## DEV-04 — Ask for access

**Objetivo / tempo:** Pedir acesso com contexto suficiente para a colega agir · 5 min

**Título:** Ask for access

**Subtítulo:** Listen to Kim, then write a message that helps her unblock you

**Imagens e apoio visual:**

- VIS-KIM — Retrato canônico de Kim, mulher asiática adulta com cabelo preto curto em bob e franja lateral, blusa preta de gola alta e fundo azul claro
- VIS-ACCESS — Tela ilustrativa do repositório helpdesk-web com cadeado e estado Access denied; o nome do repositório e o erro são texto nativo legível

**UI/UX:** Mensagem de voz em MessagePhoneFrame com VIS-KIM — Retrato canônico de Kim, mulher asiática adulta com cabelo preto curto em bob e franja lateral, blusa preta de gola alta e fundo azul claro. Ao lado, VIS-ACCESS — Tela ilustrativa do repositório helpdesk-web com cadeado e estado Access denied; o nome do repositório e o erro são texto nativo legível. A pessoa escreve no MessageComposer e revisa com a professora. A ação é uma simulação local. Na terceira escuta completa, o controle nativo revela a transcrição

**Textos:**

**Mensagem inicial de Kim:** “Welcome! Here is your first setup task”

**Transcrição:** “Hi! Welcome to the team. Please open the helpdesk-web repository and follow the setup guide. If you cannot open it, tell me what you see and send me your work email”

**Tela de apoio:** “helpdesk-web” · “Access denied” · “Work email: dev@example.com”

**Missão visível:** “Tell Kim which repository you need, what error you see and which work email to use”

**Campo:** “Write your message to Kim” · **ação local:** “Review message”

**Dica opcional:** “I’m trying to… / I can’t… / Could you…? / My work email is…”

**Áudio:** AUD-ACCESS — Kim: “Hi! Welcome to the team. Please open the helpdesk-web repository and follow the setup guide. If you cannot open it, tell me what you see and send me your work email”. Gravação nova pendente; ouvir antes de responder, replay nativo. A pausa não conta como uma nova escuta

**Critério de sucesso:** A mensagem identifica helpdesk-web, Access denied, o pedido de acesso e o email de trabalho. Aceitar formas diferentes de dizer isso

**Notes da professora / produção:** Usar o endereço fictício dev@example.com, fornecido na tela. A atividade tem finalidade de resposta a mensagem; não exige seis turnos

## DEV-05 — Planning: make the task clear

**Objetivo / tempo:** Esclarecer o resultado esperado e negociar um primeiro passo viável · 7 min

**Título:** Planning: make the task clear

**Subtítulo:** Ask what needs to happen, agree on your part and check the deadline

**Imagens e apoio visual:**

- VIS-MEETING — Frame nativo de reunião com professora e participante identificados pelos nomes da sessão; fotos reais disponíveis ou iniciais; badges sobrepostos aos tiles; sem atribuir o retrato de Kim a nenhuma das pessoas
- VIS-TASK — Card de tarefa com o título Save a draft, três critérios visíveis e uma comparação entre formulário preenchido e rascunho salvo; o texto fica na interface, não dentro de uma imagem gerada

**UI/UX:** VIS-MEETING — Frame nativo de reunião com professora e participante identificados pelos nomes da sessão; fotos reais disponíveis ou iniciais; badges sobrepostos aos tiles; sem atribuir o retrato de Kim a nenhuma das pessoas. Ao lado, VIS-TASK — Card de tarefa com o título Save a draft, três critérios visíveis e uma comparação entre formulário preenchido e rascunho salvo; o texto fica na interface, não dentro de uma imagem gerada. Os três pares de balões ficam abaixo. O card fornece os fatos; a lâmpada oferece linguagem para perguntar e combinar o trabalho

**Textos:**

**Card visível:** “Save a draft” · “Goal: finish a request later” · “Save the text” · “Open the saved text again” · “Show Draft saved” · “No file uploads” · “Deadline: Friday”

| Professora: pergunta literal | Participante: intenção visível | Dica opcional da participante |
| --- | --- | --- |
| The goal is to let people finish a request later. What would you like to clarify? | Ask what Save draft must do | What should happen when…? |
| For this task, we save the text and let the user open it again. We are not adding file uploads. How would you start? | Propose a first step and check one dependency | I’d start with… / Do we already have…? |
| The mobile design is ready, and Kim can help with the API. What will you take on, and when will you update us? | Confirm your task, the deadline and your next update | I can take… / Is the deadline…? / I’ll update you… |

**Áudio:** Interação ao vivo. Sem áudio decorativo para ler todo o card

**Critério de sucesso:** Esclarece um critério, propõe um passo, verifica uma dependência e confirma prazo/atualização. Não precisa estimar em story points

**Notes da professora / produção:** Ensaio durante onboarding, não promessa de entregar a feature inteira no primeiro dia. Deadline Friday é um fato deste caso fictício. A professora conduz com os fatos do card; não avaliar conhecimento de Scrum

## DEV-06 — Daily: make your update useful

**Objetivo / tempo:** Dar uma atualização curta que permita coordenar o trabalho · 6 min

**Título:** Daily: make your update useful

**Subtítulo:** Explain where you are, what is blocking you and what happens next

**Imagens e apoio visual:**

- VIS-MEETING — Frame nativo de reunião com professora e participante identificados pelos nomes da sessão; fotos reais disponíveis ou iniciais; badges sobrepostos aos tiles; sem atribuir o retrato de Kim a nenhuma das pessoas
- VIS-BOARD — Quadro de trabalho com Read the setup guide em Done, Open the app em Blocked e Try saving a draft em Next; a coluna bloqueada tem ícone de cadeado além do rótulo

**UI/UX:** VIS-MEETING — Frame nativo de reunião com professora e participante identificados pelos nomes da sessão; fotos reais disponíveis ou iniciais; badges sobrepostos aos tiles; sem atribuir o retrato de Kim a nenhuma das pessoas. Ao lado, VIS-BOARD — Quadro de trabalho com Read the setup guide em Done, Open the app em Blocked e Try saving a draft em Next; a coluna bloqueada tem ícone de cadeado além do rótulo. Fatos visíveis; três pares de conversa com lâmpada sequencial. Depois da troca, a participante resume em até 45 segundos, sem ler uma resposta modelo

**Textos:**

**Quadro visível:** “Done: Read the setup guide” · “Blocked: Open the app” · “Next: Try saving a draft” · “Waiting for repository access”

| Professora: pergunta literal | Participante: intenção visível | Dica opcional da participante |
| --- | --- | --- |
| How is your setup going? | Use the board to give a short update | I’ve… / I’m still… |
| What is stopping you from trying the form? | Explain the blocker and ask for the help you need | I’m blocked because… / Could you…? |
| Kim can check your access after this call. What will you do next? | Agree on a next step that depends on access | Once I have access, I’ll… |

**Áudio:** Interação ao vivo; sem áudio de acerto ou cronômetro obrigatório

**Critério de sucesso:** Distingue o que fez, o que impede o próximo passo e a ajuda necessária; combina a continuação

**Notes da professora / produção:** É o primeiro dia: não exigir uma entrega “de ontem”. As perguntas são um apoio para este ensaio, não um formato obrigatório de Daily Scrum. O resumo retoma a mesma tarefa

## DEV-07 — Review: show the result and use feedback

**Objetivo / tempo:** Apresentar um resultado observável e responder a um pedido de melhoria · 7 min

**Título:** Review: show the result and use feedback

**Subtítulo:** Show what the feature does, explain its value and agree on a next step

**Imagens e apoio visual:**

- VIS-MEETING — Frame nativo de reunião com professora e participante identificados pelos nomes da sessão; fotos reais disponíveis ou iniciais; badges sobrepostos aos tiles; sem atribuir o retrato de Kim a nenhuma das pessoas
- VIS-REVIEW — Duas telas do formulário lado a lado: Before mostra uma solicitação escrita; After mostra o rascunho recuperado e a confirmação Draft saved; abaixo, uma terceira miniatura Mobile layout com o mesmo formulário em largura de celular
- VIS-KIM — Retrato canônico de Kim, mulher asiática adulta com cabelo preto curto em bob e franja lateral, blusa preta de gola alta e fundo azul claro

**UI/UX:** VIS-MEETING — Frame nativo de reunião com professora e participante identificados pelos nomes da sessão; fotos reais disponíveis ou iniciais; badges sobrepostos aos tiles; sem atribuir o retrato de Kim a nenhuma das pessoas. Painel ao lado: VIS-REVIEW — Duas telas do formulário lado a lado: Before mostra uma solicitação escrita; After mostra o rascunho recuperado e a confirmação Draft saved; abaixo, uma terceira miniatura Mobile layout com o mesmo formulário em largura de celular. A professora faz as duas primeiras perguntas; depois, a participante ouve Kim e responde à terceira. O áudio tem o retrato VIS-KIM — Retrato canônico de Kim, mulher asiática adulta com cabelo preto curto em bob e franja lateral, blusa preta de gola alta e fundo azul claro. A apresentação usa as telas preparadas do exercício

**Textos:**

**Telas:** “Before” · “After” · “Draft saved” · “Mobile layout”

**Contexto visível:** “Practice with a feature the team has already built”

| Professora: pergunta literal | Participante: intenção visível | Dica opcional da participante |
| --- | --- | --- |
| What can a user do with this feature? | Use Before and After to demonstrate the result | The user can… / First… / Then… |
| How does that help someone who cannot finish a request now? | Explain the benefit and point to the evidence on screen | They can… later / You can see… |
| You heard Kim’s feedback. What will you check or change next? | Confirm the feedback and propose a next step | Do you mean…? / I’ll… |

**Mensagem de Kim:** “Here is my feedback on the draft feature”

**Transcrição:** “Thanks for showing the draft feature. This will help people finish a request later. Could you make the Save draft button easier to find on mobile? Let’s add that to our next tasks”

**Áudio:** AUD-REVIEW — Kim: “Thanks for showing the draft feature. This will help people finish a request later. Could you make the Save draft button easier to find on mobile? Let’s add that to our next tasks”. Gravação nova pendente. Controle nativo de voice message; transcrição na terceira escuta. Uma faixa por vez

**Critério de sucesso:** Mostra salvar/recuperar o texto, explica a utilidade e confirma a melhoria de visibilidade no celular antes de definir o próximo passo

**Notes da professora / produção:** A feature já foi construída pela equipe; a participante ensaia sua apresentação. Não afirmar que ela a desenvolveu no primeiro dia. A review inclui resultado, feedback e próximos passos; não é code review

## DEV-08 — Handle the next situation

**Objetivo / tempo:** Transferir o que praticou para uma nova situação com menos apoio · 9 min

**Título:** Handle the next situation

**Subtítulo:** Send an update, ask for what is missing and agree on a next step

**Imagens e apoio visual:**

- VIS-MISSION — Card Mobile layout com prazo Friday, mobile layout em In progress e mobile design em Missing; miniatura do formulário em celular com espaço reservado ao botão Save draft
- VIS-MEETING — Frame nativo de reunião com professora e participante identificados pelos nomes da sessão; fotos reais disponíveis ou iniciais; badges sobrepostos aos tiles; sem atribuir o retrato de Kim a nenhuma das pessoas

**UI/UX:** Começar pelo VIS-MISSION — Card Mobile layout com prazo Friday, mobile layout em In progress e mobile design em Missing; miniatura do formulário em celular com espaço reservado ao botão Save draft. A pessoa escreve uma mensagem curta; depois conversa usando VIS-MEETING — Frame nativo de reunião com professora e participante identificados pelos nomes da sessão; fotos reais disponíveis ou iniciais; badges sobrepostos aos tiles; sem atribuir o retrato de Kim a nenhuma das pessoas. Mostrar a missão, sem roteiro de falas ou resposta completa. Uma dica opcional ajuda a organizar as informações

**Textos:**

**Contexto:** “New practice scenario”

**Card:** “Mobile layout” · “Deadline: Friday” · “In progress: mobile layout” · “Missing: mobile design”

**Mensagem recebida:** “Can you send an update before the end of the day?”

**Missão:** “Write a short update with the current status, the missing information and your next step. Then discuss it with your colleague”

**Dica opcional:** “Name the task, explain the problem and make one clear request”

**Informação para a professora responder ao pedido:** “Kim can send the mobile design after lunch”

**Continuação da professora:** “What can you do before the design arrives?”

**Áudio:** Conversa ao vivo. A mensagem é escrita para praticar o canal assíncrono; não acrescentar áudio à mesma entrada

**Critério de sucesso:** Mensagem com tarefa + estado + pedido claro; conversa combina o que fazer antes/depois do design. Conferir se a colega conseguiria agir sem perguntar qual é o problema

**Notes da professora / produção:** 2 min para escrever, 4 min de troca, 3 min para revisar e repetir o trecho que ficou pouco claro. Caso novo, independente do status de acesso e design dos ensaios anteriores. Não contar a missão como diálogo de seis turnos

## DEV-09 — Free conversation

**Objetivo / tempo:** Conversar livremente, com autonomia · 5 min

**Título:** Free conversation

**Subtítulo:** Talk freely with your teacher in English. Choose any topic you both want to talk about

**Imagens e apoio visual:**

- VIS-FREE — Ilustração existente de professora de camiseta azul falando no quadro principal e ilustração existente de estudante de camiseta rosa respondendo no quadro menor; fundo de vídeo azul claro e badges Teacher e Student no frame nativo

**UI/UX:** Reutilizar FreeConversationPage centralizada: VIS-FREE — Ilustração existente de professora de camiseta azul falando no quadro principal e ilustração existente de estudante de camiseta rosa respondendo no quadro menor; fundo de vídeo azul claro e badges Teacher e Student no frame nativo. Sem perguntas obrigatórias, dicas, respostas, roteiro ou segunda tarefa

**Textos:**

Somente o título e o subtítulo acima

**Áudio:** Conversa ao vivo; sem gravação

**Critério de sucesso:** Espaço protegido de conversa livre; não avaliar por checklist da missão anterior

**Notes da professora / produção:** Exatamente uma página de conversa livre, na penúltima posição. Não consumir este tempo para terminar o ensaio anterior

## DEV-10 — Class complete — your homework

**Objetivo / tempo:** Levar a prática para fora da aula com três ações claras · 2 min

**Título:** Class complete — your homework

**Subtítulo:** Practise the six words and six phrases, then send your teacher a short voice note about a work situation

**Imagens e apoio visual:**

- VIS-HOME — Galeria com três celulares canônicos: flashcards das seis palavras da aula, shadowing de seis frases úteis e mensagem de voz para a professora real da sessão; telas de exercício sobre o canvas claro do Student

**UI/UX:** VIS-HOME — Galeria com três celulares canônicos: flashcards das seis palavras da aula, shadowing de seis frases úteis e mensagem de voz para a professora real da sessão; telas de exercício sobre o canvas claro do Student. Um título e uma instrução acima da galeria. FlashcardSession e ShadowingSession dentro de MobileFrame; HomeworkVoiceNote para a tarefa oral. Em tela estreita, selecionar um celular por vez. O plano não ativa links nem envio

**Textos:**

**Celular 1:** “Your work toolkit” — os seis cartões completos abaixo

| Palavra / áudio | Tradução opcional | Exemplo contextual / áudio | Apoio visual |
| --- | --- | --- | --- |
| task | tarefa | My first task is to test the form | Card Save a draft acompanhado de um ícone de checklist |
| access | acesso | I need access to the repository | Repositório helpdesk-web com estado Access denied e cadeado |
| blocker | impedimento | Missing access is a blocker | Tarefa Open the app na coluna Blocked, ligada ao erro de acesso |
| deadline | prazo | The deadline is Friday | Calendário semanal com Friday destacado e ícone de relógio |
| update | atualização de andamento | Here is a quick update | Mensagem Read the setup guide: done; app access: blocked acompanhada de ícone de mensagem |
| feedback | comentários para melhorar o trabalho | Thanks for the feedback | Formulário ao lado do comentário Please make the Save draft button easier to find |

**Celular 2:** “Useful phrases at work”

| Frase para ouvir e repetir | Tradução opcional |
| --- | --- |
| Could you say that again? | Você pode repetir? |
| Could you give me access to the repository? | Você pode me dar acesso ao repositório? |
| What should happen when the user clicks Save draft? | O que deve acontecer quando a pessoa clica em Save draft? |
| I’m blocked because I don’t have access yet | Estou com um impedimento porque ainda não tenho acesso |
| The deadline is Friday. Is that still correct? | O prazo é sexta-feira. Continua sendo esse? |
| Thanks for the feedback. I’ll update the task | Obrigada pelos comentários. Vou atualizar a tarefa |

**Celular 3 — tarefa:** “Send your teacher a 30–45 second voice note: say what you are working on, explain one blocker and ask for the help you need”

**Áudio:** Flashcards reaproveitam os 12 áudios do vocabulário. Shadowing usa seis gravações de Kim, exatamente como as frases acima. A mensagem de voz é tarefa da participante, não áudio sintético

**Critério de sucesso:** A participante entende as duas práticas e o que deve comunicar à professora. O tempo da página é de orientação; o homework é feito depois da aula

**Notes da professora / produção:** Extra também segue o encerramento comum. Escolher flashcards + shadowing porque não houve uma lição formal de gramática. Não adicionar quiz de gramática desconectado. Publicar destinos apenas com dados e mídias conferidos no ambiente correto
