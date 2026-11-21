# Feedback41 — sons de resposta

Impacto direto de interação e controle de som. Base UI640ff693 / Teacher2f1836be. Mesmas14 aulas/capas/210 páginas, publicação somente staging. A usuária revisa som/volume, sem testes, QA, browser, escuta ou screenshots nesta entrega.

## Escopo e decisão

Pesquisa primária registrada em `sound-study.md`. Adotar dois sinais breves e distintos, com volume moderado e bordas suaves; preservar feedback visual e permitir silenciar. Frequências/durações são escolhas de design, não valores neurocientificamente ótimos ou promessa de retenção.

Implementar síntese local Web Audio em dono canônico da UI Library, sem arquivos de mídia, rede, voz ou toque novos. Uma resposta avaliada toca uma vez no clique; navegação, hover, montagem e escolhas pessoais não tocam. Não acumular sons nem atrasar a interação visual. Falha/indisponibilidade de áudio preserva o exercício.

QuizOption, escolhas de listening e escolhas avaliadas de lacunas/pares recebem o resultado explícito do consumidor. A biblioteca toca o resultado, sem decidir o gabarito. Controle discreto de som no SlideDeck, ativado pelos materiais; biblioteca não liga som em consumidores que não forneceram um resultado.

## Sequência

Raiz escreve fonte/componentes/adaptação/guia. Integração aguarda SOURCEFINAL41 e reutiliza package/API/export válidos; uma adoção/build Teacher/Hosting staging com ACK. Preservar bridge38, Notes, foco, gestos, capas e todas as gravações. Uma consulta CI por SHA para URL, sem polling ou leitura de logs de CI. PR continua draft para revisão humana; sem produção/Claude/Lab remoto/npm/merge/backend.

## Implementação

QuizOption e escolhas de GapFillExercise/MinimalPairExercise/VoiceMessageExercise têm feedbackOutcome explícito. Há uma única engine local e um hook de controle na UI Library, sem novo provider/componente público ou mídia. Materiais fornecem o gabarito já existente e o deck oferece um ícone de som; escolhas pessoais e exploração sem alvo ficam silenciosas. Sinais de280ms/225ms com ataque/saída suaves, ganho limitado, substituição de som anterior e parada ao ocultar a página. Gravações de fala, capas e conteúdo das aulas preservados. Stories e UXLab demonstram som, silêncio, alternativa desativada e exercício real How is Tom. Package build terminou com exit0; API/export e publicação seguem na mesma entrega. Sem testes/QA/escuta.
