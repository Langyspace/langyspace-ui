# Grade estrutural dos materiais

## Pedido e diagnóstico

Impacto direto: apresentação das 14 aulas mantidas. Em TrialA1, Introduce yourself usa width=conversation (960px), enquanto Do you like the park? usa focused (600px). LearningDialogue preenche a largura recebida sem um limite próprio; páginas com o mesmo componente passam a afastar os interlocutores. Header e body já têm pai comum, mas sete presets independentes permitem declarações divergentes.

## Contrato

- SlidePage declara uma extensão de 1, 2 ou 3 colunas para seu exercício. A grade e o limite envolvem o mesmo título e conteúdo; a quantidade de cartões dentro de VocabularyGrid continua propriedade do próprio componente.
- Uma coluna usa o limite focused aprovado (600px). Duas usam wide (1040px). Três usam introduction (1120px). São tokens existentes, não medidas locais por página.
- questions cria a composição de duas regiões automaticamente. O diálogo permanece limitado à coluna de 600px; perguntas ficam na região adjacente e empilham na largura compacta.
- LearningDialogue é uma unidade de uma coluna, inclusive com dicas, tradução, gaps e áudio. A raiz e os apoios compartilham o mesmo limite e eixo. Múltiplas unidades continuam possíveis dentro de uma grade maior.
- Preservar width legado para compatibilidade com consumidores externos e a geometria proporcional de cenas/capas. Novas composições de exercícios usam columns; capas/meeting mantêm ajuste pela mídia. Nenhuma alteração de tokens globais, conteúdo, áudio, identidade, navegação ou Notes.
- Migrar as composições de diálogo compartilhadas e as conversas independentes mantidas; exercícios que precisam de mais largura usam a mesma grade, sem CSS individual.

## Execução

1. Registrar inventário e baseline, implementar contrato nos donos SlidePage e LearningDialogue
2. Migrar adoções compartilhadas e materiais mantidos, documentar exemplos e guideline
3. Rodar cobertura focada da grade/interações; comparar geometria nas telas representativas sem suíte ampla
4. Revisar API aditiva, construir/exportar uma vez e adotar no Teacher staging pelo executor existente

## Aceite

Introduce yourself e Do you like the park? compartilham a largura e o alinhamento. Dicas/respostas/traduções/áudio/gaps continuam funcionais. Duas/três colunas têm regras e exemplos; diálogos com perguntas empilham sem overflow horizontal. 14 aulas/capas e mídias válidas preservadas. Somente staging; revisão visual com Margarida.

## Progresso

- Implementado o contrato canônico columns=1/2/3; LearningDialogue e apoios limitados à mesma coluna
- Adotado nas composições mantidas e nos helpers ReviewedLesson, TrialPreviewLesson, LessonDeck e WarmupPage; ConversationColumns reutiliza os mesmos tracks do SlidePage
- 49 verificações focadas passaram. Três expectativas antigas das fixtures foram atualizadas para o comportamento já aprovado: seleção preservada, áudio em cada clique e ausência do antigo s6
- Comparação por driver Playwright: 42 medidas antes/depois em 1440×900, 1024×720 e 390×844, mais uma composição Frontend pareada; sem overflow horizontal ou divergência dos diálogos alvo
- Capturas comparáveis de desktop/mobile e apoio aberto em evidence.md; revisão visual continua com a dona do curso
- Build do pacote e API de 607 declarações passaram; exports de raiz inalterados, somente columns opcional e fundação da grade
- Nenhum erro de tipos novo; os 17 diagnósticos anteriores permanecem fora da alteração
- Export final, adoção Teacher e Hosting staging pendentes; nenhum áudio/imagem da aula regenerado, nenhuma mudança em backend ou produção
