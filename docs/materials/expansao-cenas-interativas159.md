# Expansão das cenas interativas — proposta159

Revisão da estrutura e dos objetivos das 60 aulas A1–C1, com os sete extras/experimentais considerados para reaproveitamento. Fonte local após a revisão158; não é auditoria de render nem comprovação de publicação. As propostas abaixo ainda precisam de autoria de mídia e revisão na implementação. Inventário por aula em `outputs/scene-opportunities159/inventory.json` do chat.

## Dinâmica comum

Uma imagem principal, título/subtítulo com a missão e poucos controles. A aluna observa e fala; a professora clica apenas para destacar uma pessoa/objeto, consultar um fato relevante ou abrir ajuda. A imagem já precisa oferecer assunto sem depender de abrir todos os pontos. A cena permanece do mesmo tamanho em todos os estados; ficha flutuante acima do alvo, base/largura fixas e crescimento para cima. Dica → modelo → esconder substitui o apoio anterior. Não exigir digitação, arrastar ou resolver um jogo de interface.

A densidade aumenta pelas relações entre os elementos, não pela quantidade de etiquetas. Não transformar os números abaixo em metas obrigatórias: o mínimo de seis itens continua valendo para introdução de vocabulário, não para toda tarefa visual.

| Faixa | Composição a experimentar                                              | O que muda na fala                                                                 |
| ----- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| A1    | Um ambiente, produtos/pessoas bem separados e evidências diretas       | Nomear, escolher, localizar, pedir e confirmar                                     |
| A2    | Um ambiente com ações simultâneas ou duas alternativas visuais         | Oferecer ajuda, explicar uma sequência, combinar e propor um plano B               |
| B1    | Mais pessoas/relações ou duas cenas comparáveis, com detalhes legíveis | Descrever precisamente, contar, comparar e justificar uma decisão                  |
| B2    | Pistas relacionadas, alternativas plausíveis e uma restrição prática   | Formular hipóteses, verificar informações, negociar e rever a proposta             |
| C1    | Dois ou três interesses legítimos em conflito na mesma situação        | Distinguir fato e interpretação, mediar perspectivas e defender condições/exceções |

Em B2/C1, a dificuldade não vem de objetos minúsculos, texto abundante ou adivinhar intenções pelo rosto. A cena fornece evidências; fatos que a imagem não comprova vêm de fala, áudio ou informação nativa curta. Opiniões e hipóteses não recebem gabarito arbitrário.

## Nove oportunidades prioritárias

### 1. B1.11 — Find the person I mean

- **Encaixe:** `s_mission`, hoje “Introduce us”, apoiada em duas fichas textuais de pessoas.
- **Cena:** festa com um grupo legível de convidados, mesa de bebidas, pista de dança e alguém fazendo um discurso. Preservar Alex de camisa verde junto às bebidas e Nina perto da pista; os demais convidados precisam de ações/roupas distinguíveis, sem criar profissões ou parentescos por aparência.
- **Subtítulo:** “Help me find the right person, describe them clearly, then introduce us when it’s a good moment”
- **Aluna:** “Do you mean the person who’s standing by the drinks table?”; descreve, confirma e faz a apresentação. A organização da música vem do conteúdo existente, não de uma inferência visual.
- **Interação:** a professora seleciona a pessoa descrita para conferir a ficha curta. Conversa primeiro, clique opcional depois; nenhuma roleta ou seleção aleatória adicional.
- **Mídia:** uma nova cena de festa, reutilizada na resposta à mensagem sobre Alex. Fonte: `Course/lessons/b1-11.json`.

### 2. B2.04 — What might have happened here?

- **Encaixe:** enriquecer `s_mission`, “Find the most plausible explanation”. Já existe `b2-04-flat-evidence123`; conferir a arte antes de pedir outra geração.
- **Cena:** apartamento com pistas conectadas: planta deslocada, janela fechada, recibo e registro de acesso consultáveis. Detalhes grandes, não uma caça a pixels. Reutilizar o horário da chave às 5 e do recibo às 5:20.
- **Subtítulo:** “Compare the clues, suggest two possible explanations and tell me what you would check next”
- **Aluna:** formula hipóteses com graus de certeza diferentes e explica que dado confirmaria ou enfraqueceria cada uma. Não há culpado secreto nem uma solução que dependa de informação ausente.
- **Interação:** clicar em uma pista amplia sua evidência; a mensagem já existente fornece a atualização. Não criar outro botão de imprevisto com a mesma função.
- **Mídia:** reaproveitamento ou ajuste dirigido da cena existente; fatos permanecem nativos. Fonte: `Course/lessons/b2-04.json`.

### 3. C1.12 — Make this checkout work for everyone

- **Encaixe:** `s_mission`, hoje critérios em três linhas de texto. As duas fontes de leitura permanecem disponíveis.
- **Cena:** um caixa com atendente e clientes em situações diferentes: pagamento disponível, telefone sem bateria e conexão de pagamento indisponível. Dinheiro/cartão e uma alternativa de atendimento são referências concretas para discutir o processo.
- **Subtítulo:** “Recommend a payment policy that keeps the queue moving and gives each customer a workable fallback”
- **Aluna:** defende uma proposta, atende a uma objeção, explicita a alternativa e diz que resultado levaria a rever o teste. Exemplo de apoio: “I’d support a digital-first trial, provided that …”. Não existe uma única política correta.
- **Interação:** consultar no máximo um caso de cada vez. Circunstâncias de acesso, taxas e privacidade são informadas explicitamente, nunca inferidas por idade, aparência ou roupa. A atualização do áudio continua sendo uma experiência adicional, não prova geral contra um meio de pagamento.
- **Mídia:** uma nova cena de caixa; não redesenhar textos das fontes dentro da imagem. Fonte: `Course/lessons/c1-12.json`.

### 4. B2.06 — Get your phone ready for the trip

- **Encaixe:** `s_mission`, hoje “Get the service sorted” com acordo textual.
- **Cena:** balcão de assistência, atendente visível, telefone em reparo e telefone temporário. Peça recebida, instalação e teste precisam de estados nativos consultáveis, não de uma imagem que finja comprovar conclusão técnica.
- **Subtítulo:** “Explain what you need before your trip, check the repair status and agree on a backup”
- **Aluna:** diferencia prazo estimado de confirmado, pergunta o que já foi feito e negocia o aparelho temporário sem presumir disponibilidade.
- **Interação:** clicar no aparelho ou no registro abre somente o estado relevante. Depois da mensagem existente, atualizar os fatos da mesma cena: instalação concluída, teste pendente, retirada sábado às 5 e empréstimo disponível sexta às 4. Manter $80.
- **Mídia:** uma cena nova; atualização por dados nativos. Fonte: `Course/lessons/b2-06.json`.

### 5. C1.04 — Make the shared space work for both of you

- **Encaixe:** `s_mission`, hoje “Agree on a boundary” com três fatos textuais.
- **Cena:** casa compartilhada: uma pessoa precisa se concentrar e outra conversa com a família; cômodo menor e fones são alternativas visíveis. O horário e o fuso da família vêm de informação curta, não de estereótipos visuais.
- **Subtítulo:** “Protect quiet working time while keeping family calls possible, then agree on an exception”
- **Aluna:** descreve o impacto sem julgar a outra pessoa, propõe um acordo e testa uma urgência. A professora interpreta o outro interesse, em vez de apenas fazer perguntas de compreensão.
- **Interação:** consultar uma necessidade ou alternativa; a cena continua visível. A mensagem existente atualiza o horário e a exceção, sem criar uma segunda atualização concorrente.
- **Mídia:** uma cena nova com duas pessoas e alternativas espaciais legíveis. Fonte: `Course/lessons/c1-04.json`.

### 6. A1.08 / B2.10 — Resolve the room problem

- **Encaixe A1.08:** “Can you help me?” já possui imagens de problemas do quarto; ampliar esse apoio para uma situação de atendimento com a recepcionista visível. Não tratar as imagens atuais como ausentes.
- **Encaixe B2.10:** `s_mission`, “Reach a workable solution”, hoje apoiada em fatos textuais.
- **Cena:** quarto com o problema e recepção com atendente; poucas áreas grandes. Em B2, localização em relação ao elevador, alternativa de quarto e horário de disponibilidade são informações consultáveis. Não afirmar que uma foto comprova silêncio.
- **A1 fala:** informa o quarto, o que não funciona e o que precisa. **B2 fala:** explica o impacto, rejeita uma solução que não atende à necessidade e negocia condições, mantendo a verificação de manutenção pendente.
- **Interação:** mesma família visual/componente, dados e exigência diferentes. Preservar a mensagem do B2: quarto disponível às 9, sem custo extra, ajuda com malas e manutenção ainda a confirmar.
- **Mídia:** cena de atendimento e variantes de problema; reaproveitar arte adequada entre os níveis sem repetir a mesma tarefa. Fontes: `Course/lessons/a1-08.json` e `b2-10.json`.

### 7. A1.10 — Place your order

- **Encaixe:** prática pessoal hoje em balões e missão com menu/fichas. Preservar a utilidade do menu; incorporar a escolha em uma cena de balcão.
- **Cena:** café com barista, vitrine e bandeja. Tea $2, coffee $3, cake $4 e sandwich $5 correspondem ao menu atual. Não colocar preços gerados no bitmap.
- **Subtítulo:** “Choose a drink and something to eat, place your order and check your tray”
- **Aluna:** faz o pedido, pergunta o total e corrige um item entregue errado. Escolher a peça visual serve à fala, não a um carrinho de compras.
- **Interação:** um clique na escolha ou na bandeja abre a informação relevante. A professora confirma o que a aluna realmente pediu; a troca errada deve ficar evidente por dois itens visuais comparáveis.
- **Mídia:** uma cena nova de café; alimentos existentes podem ser reutilizados se tiverem enquadramento adequado. Fonte: `Course/lessons/a1-10.json`.

### 8. A2.05 — Help us move in

- **Encaixe:** `s_mission`, “Help with the move”, hoje alterna fichas/vinhetas de caixa, porta e cadeira.
- **Cena:** mudança com uma pessoa segurando caixa pesada, porta fechada e cadeira bloqueando o caminho. A imagem mostra relações que justificam a oferta de ajuda.
- **Subtítulo:** “Look at what needs doing, offer to help and tell me what you will do next”
- **Aluna:** escolhe uma necessidade, oferece ajuda e combina a próxima ação. Distingue a decisão tomada agora do plano anterior de pintar amanhã; esse plano precisa estar informado, não deduzido pela cena.
- **Interação:** a professora destaca a ação proposta com um clique; a aluna pode sugerir outra sequência justificável.
- **Mídia:** uma cena integrada, evitando três recortes desconexos. Fonte: `Course/lessons/a2-05.json`.

### 9. C1.09 — Does the extra service solve the problem?

- **Encaixe:** `s_mission`, “Forecast without overstating”. Preservar o gráfico com os dados simulados de 100/120/140 viagens diárias.
- **Cena:** o mesmo terminal em dois horários, com demanda e capacidade visíveis. A informação nativa distingue o serviço extra da manhã da necessidade da tarde.
- **Subtítulo:** “Compare the two time slots, test the capacity assumption and recommend what to monitor”
- **Aluna:** identifica a limitação do plano, qualifica a previsão e define um critério para intervir. Uma fila numa ilustração não demonstra tendência nem causa; o gráfico e a informação de horário continuam necessários.
- **Interação:** duas imagens ficam simultaneamente visíveis, sem arrastar ou procurar diferenças escondidas. Uma consulta curta mostra o detalhe do serviço; a atualização chega pelo áudio existente.
- **Mídia:** par coerente de cenas do terminal. Fonte: `Course/lessons/c1-09.json`.

## Segunda rodada

| Aula               | Oportunidade                                                                   | Reaproveitamento e cuidado                                                                                     |
| ------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| A2.03              | Três quadros grandes do atraso para narrar o que acontecia e o que interrompeu | Já há imagens/ordenação; privilegiar narrativa oral e manter a professora como única operadora                 |
| A2.07              | Área comum de condomínio para planejar convidados e explicar regras            | Horários, reserva e permissões vêm dos dados atuais, não de proibições deduzidas pela imagem                   |
| A2.10 / B2.08      | Visitas visuais aos apartamentos, comparando necessidades diferentes por nível | Já há imagens comparáveis; ampliar função comunicativa antes de gerar outras e manter custos/condições nativos |
| A2.11              | Passeio com alternativa para chuva e transporte                                | A mudança vem do áudio já existente; não somar um botão com outro imprevisto                                   |
| B1.09              | Comparar a foto da bicicleta com detalhes de uma possível correspondência      | A foto atual já é útil; sem afirmar que foi encontrada e sem gerar um número de série ilegível                 |
| B1.12              | Dois ambientes de trabalho e uma rotina híbrida para negociar necessidades     | Evitar rotular casa/escritório como melhor por princípio; os fatos específicos orientam a escolha              |
| B2.09              | Cena da casa antes de sair, relacionando ações lembradas e tarefas pendentes   | Distinguir o que se vê do que só a pessoa pode confirmar; não transformar a tarefa em checklist clicável       |
| Experimental C1/C2 | Ambiente de trabalho com limites e necessidades concorrentes                   | Reaproveitar a dinâmica da C1.04 com linguagem e papel adequados; o vocabulário visual já existe               |

## Bases que já têm função visual e não precisam ser refeitas

- **A1.03:** família e relações; **A1.09:** mapa; **A1.11:** loja recém-criada. Consolidar os mesmos controles e a estabilidade da imagem.
- **B1.02:** já há duas imagens de bairro antes/agora, `b1-02-neighbourhood123`; é uma base para ampliar o formato, não uma ausência a corrigir.
- **Experimental A1/A2:** parque explorável; **experimental B1/B2:** cena da viagem; **influencer:** quatro cenas de rotina. Evitar repetir a mesma identificação de objetos na prática mais livre.
- **Dev:** reuniões, apresentação de trabalho, monitor e board já fornecem contexto concreto. Manter essas referências quando forem mais claras que uma ilustração de escritório.
- **C1.03 e C1.10:** atribuição da informação e adaptação de tom exigem consultar as palavras/fontes. Uma cena pode dar contexto, mas não substituir a evidência verbal.

## Ordem sugerida de implementação

Começar por **B1.11, B2.04 e C1.12**: identificação/descritivo, investigação com incerteza e decisão entre interesses. São três usos distintos da imagem, em vez de reproduzir a loja em todos os níveis. Em cada piloto, validar a missão oral e as evidências disponíveis antes de ampliar a geração. Reusar áudio e imagens válidos; novos personagens de apoio não recebem biografias permanentes por conveniência da cena.

Status: proposta de expansão e guideline; nenhuma nova cena gerada ou exercício alterado nesta revisão.
