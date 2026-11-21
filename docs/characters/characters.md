# Personagens Langy

Documento inicial de continuidade · fonte-base `c771184` · 14 aulas ativas. Campos sem confirmação: **a definir**. Exemplos de aula e reuso de arte não estabelecem identidade nem cronologia.

| Pessoa           | Profissão / papel explícito                                    | Origem    | Relações e preferências                                                                            |
| ---------------- | -------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------- |
| Ana Souza        | a definir; exemplos de trabalho não fixam profissão            | Brasil    | Irmã de Leo/Bia; Thor e Mia são seus pets. Futebol/parque; não gosta de livros na Experimental A1. |
| Kim              | Frontend developer                                             | Coreia    | Irmã de Jin; música/livros/academia; não tem pet.                                                  |
| Leo              | Estudante A103; tech lead no Frontend — continuidade a definir | a definir | Irmão de Ana; vai se casar com Carla; gosta de churrasco no parque.                                |
| Bia              | Cook                                                           | Recife    | Irmã de Ana; hobbies a definir.                                                                    |
| Mãe / pai de Ana | Mãe: doctor; pai: a definir                                    | Recife    | Nomes/idades: a definir. Mãe gosta de melancia/cenoura; não de cebola.                             |
| Jin              | Doctor                                                         | Coreia    | Irmã de Kim; ama manga; tem gato e cachorro na escuta A106.                                        |
| Carla            | a definir                                                      | a definir | Vai se casar com Leo; gosta de festas grandes.                                                     |
| Raj              | Cargo a definir; apresenta o projeto                           | a definir | Contexto de trabalho com Ana; recebe feedback C1.                                                  |
| Jun (Tech)       | Cargo a definir; entrevistador CloudNest                       | a definir | Cartão coreano e imagem de engineer são exemplos, não biografia confirmada.                        |
| Laura Hughes     | Profissão a definir; cliente                                   | a definir | Escreve para Ana sobre a apresentação de Raj.                                                      |
| Sarah            | a definir                                                      | a definir | Jantar B2 / slides C1; união das identidades a definir.                                            |
| Tom (A103)       | Young cook; idade numérica a definir                           | a definir | Amigo de Kim; não fundir automaticamente com Tom A101.                                             |

**Idades humanas:** a definir. “I’m 32” é exemplo gramatical, não idade de Ana. Corrida, bolos e pintura em B101 são acontecimentos, não profissões fixas.

| Elenco de exercícios                          | Informação localizada                                                                                                                                              |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A101: Julia, Josh, Mia pessoa                 | Estados cold/sad/happy; demais campos a definir.                                                                                                                   |
| A101: Ji-woo, Hiro, Lucía, Lukas, Chloé, Jake | Coreia, Japão, Espanha, Alemanha, França, EUA, respectivamente. Lukas é amigo de Ana no diálogo. Idade/profissão/hobbies: a definir.                               |
| A101: Tom, Emma, Yuki, Ken, Jun               | Cartões: Alemanha, Alemanha, Japão, Japão, Coreia. Não promover o cartão a biografia de um homônimo.                                                               |
| A201: Anna, Ben, Emma, Lucas, Sophie, Daniel  | Anna lê antes de dormir; Emma lê e passeia com seu cachorro; Lucas cozinha diariamente. As ações do parque não fixam hobbies/profissões. Demais campos: a definir. |
| A102: Emma                                    | Contato de roleplay; sobrenome/idade/profissão/origem/hobbies: a definir. “Gray” não está na fonte ativa.                                                          |

**Pets:** Thor, cachorro de Ana, tem 3. Mia é sua gata, idade a definir. Max/Luna são gatos de uma irmã **não nomeada** de Kim. O gato de Jin tem 10, nome a definir; não assumir que seja Max/Luna. Mia pessoa ≠ Mia gata; Ana/Anna e Lukas/Lucas ficam separados. As três Emma também.

**Retratos existentes:** Ana/Kim/Leo/Raj em `stories/materials/shared/characterPortraits.ts`; Jun em `Frontend/assets/meet_jun.webp`. Pais e Jin/Tom têm cenas conjuntas A103; Bia, Carla e Laura não têm retrato individual identificado. Referências completas e afirmações por contexto em `character-inventory.json`; nenhuma nova aprovação visual foi feita.

**Antes de fixar história:** decidir os papéis de Leo, cargo de Ana, horários 6/7 de A104 e identidade da irmã com Max/Luna. Nenhum fato novo foi criado para resolver essas diferenças.

## Manutenção

Ao criar/revisar uma aula, ler esta ficha e atualizar apenas o fato novo confirmado, com a fonte e o contexto. Preferir a mesma identidade/retrato já aprovado; manter homônimos separados até existir decisão de continuidade. Uma hipótese para idade, profissão ou hobby pode ser proposta como nova definição, nunca apresentada como um fato anterior. O inventário JSON preserva as evidências da fonte-base; correções posteriores devem indicar a revisão que as introduziu.

**Feedback37:** a cena nova de família estabelece visualmente mãe/pai/Leo/Bia/Kim no mesmo contexto de Ana, sem acrescentar idade, nome dos pais ou profissão do pai. A foto no celular é um modelo de ação; o homem na tela não recebe identidade canônica por isso. `LearningDialogue` mantém nome visível na densidade compacta; os adaptadores reutilizam os retratos canônicos conhecidos.

**Feedback38:** a ligação de saída da A102 passa a usar a professora autenticada do portal, não a personagem Emma. O fallback de prévia é Your teacher. Nome/foto da professora não entram na biografia do elenco nem são persistidos pelo material. As identidades de WhatsApp usam os retratos canônicos já existentes; mensagens curtas de contexto não criam novos fatos de vida.

**Feedback39:** a atividade Introduce Ana’s family usa apenas os fatos já documentados: Leo irmão/estudante; Bia irmã/cozinheira/de Recife; pais de Recife. Esses fatos ficam visíveis na atividade. Foto+nome são compostos pelo Avatar nomeado canônico, sem gerar novos retratos ou estabelecer nova biografia.

**Feedback40:** as fichas têm três informações confirmadas cada: Leo (nome, irmão de Ana, estudante); Bia (irmã de Ana, cook, Recife); pais (pais de Ana, mãe médica, Recife). Não deduzir a cidade de Leo nem a profissão do pai para preencher o layout. A foto enviada por Kim representa Jin e Tom do contexto A103 e não unifica homônimos. Capas sintetizam situações da aula, sem transformar a ação ilustrada em profissão, hobby ou relação nova. A interlocução com a professora usa apenas seu primeiro nome e mantém a foto recebida pela ponte autenticada.

**Feedback42 — direção visual de Jin:** irmã coreana de Kim, com características familiares de rosto e olhos. Cabelo preto liso comprido com franja reta cheia distingue seu corte do bob curto com risca lateral de Kim. Essa descrição orienta a nova foto com Tom em A103, sem acrescentar idade, romance ou origem de Tom. As três cenas de Ana em períodos do dia são exemplos pedagógicos; não estabelecem horários ou hábitos fixos novos. O prompt de estilo1.8 permanece literal e inalterado.

**Feedback43 — B1.01:** a pintura da sala/cozinha e a viagem de Kim continuam os fatos do diálogo existente. Os cartões Monday/Wednesday/Saturday do role-play são uma simulação temporária de atividades, duração e companhia. Não deduzir deles uma rotina fixa, novo parentesco ou preferência de Kim. As imagens de pistas são ilustrativas; não identificam a pessoa retratada como Kim.

**Feedback44 — B2/C1:** a viagem de Ana a Nova York e os fatos do jantar/áudio de Raj foram preservados. Missed train / Locked out são cenários hipotéticos da aluna, não eventos biográficos de Ana. Project updates / Meeting discussions são simulações de feedback, não novos hábitos atribuídos a Raj. A frase de learning curve agora se refere a um novo papel genérico, sem estabelecer promoção de Ana. A preferência de Raj por falar sozinho e o convite de Laura para Ana são informações distintas; emoções permanecem interpretações, não diagnósticos.


## Cena hipotética — quadrinhos do experimental A1 (feedback60)

Ana (à esquerda, camiseta rosa e bola) e Kim (à direita, blusa azul e fones) se encontram no parque, se apresentam, conversam sobre interesses e se despedem. São atores visuais para uma conversa criada pela aluna e pela professora. Os exemplos opcionais não fixam preferências, nomes dos participantes reais ou novos fatos biográficos. Reutilizar as identidades documentadas; não inferir uma amizade permanente a partir do título do exercício.


## Mensagens da Ana no experimental A1 (feedback62)

As duas gravações aprovadas são da mesma Ana e têm uma única saudação escrita antes da primeira. Ela está feliz, no parque com Kim, gosta de jogar futebol com os amigos, está de tênis e levou a bola. Kim está num banco com fones. As duas gostam de música; Ana não gosta de livros. Na continuação, Ana gosta de filmes em casa e de cachorros; Kim gosta de gatos. Ana está com fome, quer pizza e não gosta de salada. Esses fatos estão vinculados a esta atividade; não inferir preferências adicionais ou uma biografia fixa de outros contextos. O quadrinho ficou suspenso e não integra mais a aula.


## Representação da conversa livre (feedback63)

Kim e Ana aparecem como figuras ilustrativas de professora e aluna em uma conversa leve e divertida. Os rótulos Teacher/Student descrevem os papéis da cena, sem fixar profissão ou representar a identidade de usuárias reais. Assets e prompts ficam vinculados em shared/free-conversation63-image-provenance.json.
