# Revisão B2.01 / C1.01 — fonte final44

As33 páginas renderizadas foram revistas na fonte, com inventário em page-inventory.json:16 B201 e17 C101. Mantidos os IDs existentes; s52 foi reposicionada em cada aula. O antigo C101 s61 já não era renderizado e saiu também da ordem do conteúdo, sem exclusão de página em uso. Tema, capas e mídias válidas foram preservados; não houve geração de imagem nem alteração do prompt canônico1.8.

## B2.01

O vocabulário usa o componente direto, sem regras locais que transformavam recortes em imagens de altura natural e reposicionavam labels. Os seis objetos transparentes e a cena do porteiro foram reutilizados. Os warm-ups têm contexto no cabeçalho, contador na mídia e só a escolha atual; as ilustrações isoladas usam a escala limitada de apresentação, sem cortar a figura. A terceira escolha agora pede explicitamente um empréstimo, em vez de julgar uma preferência pessoal como resposta única.

Expressions tem dois grupos, mantém as revelações ao navegar e toca o áudio exato da expressão no clique. Foram preparados7labels ElevenLabs na voz/configuração existente de Kim; nenhuma versão exata reutilizável foi encontrada pelo dono na busca dirigida. E.3 é lend; lent aparece no exemplo passado. Referências, IDs/request-ids e hashes reais estão no manifesto de áudio. As outras gravações permanecem intactas.

As duas páginas de pronunciation artificiais foram substituídas por associação entre momento e acontecimento e escolha de uma pergunta que descubra duração ainda não informada. A gramática parte do telefone descarregado às quatro e distingue atividade anterior, ação anterior concluída, ação em progresso e evento principal. Não há quiz misturado à explicação, revelação de tabela que acrescente outro painel ou Now you no rodapé.

O diálogo de12falas segue em6+6, com play preparado no título e compreensão ao lado. Your bad day passou a seis turnos completos e ajuda canônica; a navegação antiga que mostrava só dois/quatro turnos, rótulos duplicados, strip de sete imagens e conclusão marcável foram removidos. Os players nativos de diálogo, palavras e listening são responsáveis por sua própria ativação, sem pré-carregar os antigos pares de pronúncia no shell.

A message from Raj usa o celular adaptável do B1 revisado, foto canônica e terceira escuta; sai a tarefa extra Kim asks. Correções factuais negativas continuam disponíveis, sem repetir confirmação positiva para cada resposta. Right or wrong é uma frase por vez, com contexto e explicação em inglês. Everything went wrong usa dois cenários visíveis (missed train / locked out), três fatos e seis turnos guiados; saem formulário/checklist/troca de papéis. As três tarefas independentes de homework continuam válidas.

## C1.01

O review está ligado a feedback, sem pressupor que uma discussão de proibição de celulares tenha sido a aula anterior. Os contextos de expressões ocultam o trecho-alvo em vez de já exibir a resposta. Definições de learning curve, take it on board, constructive e harsh ficaram mais precisas, sem regravar labels válidos nem inventar promoção de Ana.

As três escolhas iniciais agora usam alternativas gramaticais plausíveis para decidir sobre especificidade, espaço para resposta e reconhecimento de restrições. Os gabaritos variam de posição. Nenhuma tarefa pessoal extra fica abaixo. O email original de Laura e suas perguntas usam a composição canônica lado a lado, com parágrafos sem margens acumuladas e sem tarefa adicional.

Uma comparação de prosódia permanece: duas versões das mesmas palavras na mesma voz, com intenção contrastante registrada na proveniência. A atividade é aberta e pede evidência da escuta; não declara que o contraste foi perceptivamente validado, não tem gabarito universal soft/harsh e não exige concordar com uma interpretação. A segunda comparação virou Respond to Raj após o listening, equilibrando a independência que ele pede com a presença de Ana solicitada por Laura. Os dois arquivos antigos dessa comparação continuam preservados, mas saíram do preload.

As14 falas gravadas do diálogo seguem em7+7 com nomes/fotos e compreensão ao lado. Softer, please apresenta duas funções de explicação, três formas por vez, sem quiz. Explicita que tend to pressupõe recorrência e que suavizar não deve apagar o conteúdo. Talk to Raj tem seis turnos claros com proposta negociada, sem marcação de resposta/troca de papéis. A escuta mantém o áudio existente, perguntas sobre aceitação parcial e responsabilidade e um horário de mensagem anterior ao áudio. O footer foi retirado.

Does it fit this conversation? avalia um contexto explícito entre pares; não classifica toda linguagem direta como erro gramatical. Your feedback usa dois cenários de transferência, observação/impacto/mudança e seis turnos com resistência e acordo, sem formulário. Homework permanece independente de destinos do portal.

## Biblioteca e adoção

- ExercisePanel.navigation centraliza índice, progresso e limites; o consumidor mantém conteúdo e tentativas. B1/B2/C1 usam StatementReview sobre os donos canônicos ExercisePanel/QuizOption.
- KeyValueList.layout stacked acomoda fatos descritivos longos. ExercisePanel.warmupMediaSizing presentation limita recortes ao token de mídia já existente; natural permanece o padrão.
- GuidedScenario é um adaptador de dados compartilhado pelas três aulas, compondo RolePlayExercise, ChoiceCard, KeyValueList e LearningDialogue, sem nova receita visual. A mudança de caso restaura ajuda inicial.
- B1/B2/C1 usam o mesmo preset de proporção do celular; a fonte de áudio e os nomes/fotos permanecem dos componentes revisados. O B1 mantém seus dados/modelos de43 ao adotar os adaptadores.
- Guideline e documento de personagens foram atualizados. Casos de treino não passam a ser história permanente dos personagens.

## Evidência e publicação

Package build e API write são etapas de compilação/contrato; o export final vem da fonte commitada. Não foram executados suíte, render, browser, screenshots, playback, ASR ou auditoria ampla. A remoção de reservas/overrides e a composição menor são evidências de fonte, não medição de ausência de rolagem num dispositivo. A qualidade perceptiva das novas gravações e os estados visuais finais são revisados pela usuária.

Entrega somente em staging, por uma adoção/build Teacher/Hosting com recibo separado. Sem produção, Claude/Lab remoto, npm, merge ou backend. Mesmo catálogo14/capas; preservados bridge38, Notes/foco/gestos e sons41.

Visual gate review: pending human
