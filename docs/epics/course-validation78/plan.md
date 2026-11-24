# Validação de conteúdo e apresentação · 78

Pedido de 23/11/2026: verificar os 60 planos quanto a suficiência de conteúdo, imagens, adequação ao nível, clareza e poluição antes de começar a implementação de todos. Manter 12 aulas por nível e o padrão de perguntas em balões com intenção e dica.

## Escopo e evidência

Continuar o planejamento77, base 2cc694af43e6ed92dd14d8cd1131deb57060e78e, na branch de documentação. Corrigir os planos no escopo de autoria já autorizado; não implementar componentes nem publicar materiais neste passo. A skill open-claude-ui-review informa a avaliação de apresentação e os limites de evidência. Revisão textual não equivale a aprovação visual de uma tela ainda inexistente.

Validar cada código em cinco aspectos: tarefa e produto comunicativo, dependências e nível, resposta com fonte ou possibilidade pessoal, mídia que ensina algo e densidade/interação. Conferir os estados abertos em pilotos dos componentes existentes com dados reais de planejamento. Artefatos de revisão ficam em outputs privados; não alterar os componentes usados como baseline.

## Tarefas

- [x] Rever os 60 planos e registrar observação específica por aula
- [x] Corrigir perguntas condicionais, apoios difíceis e sobrecarga de conteúdos
- [x] Especificar suporte visual, campos de dados, estado inicial e resultado de cada missão
- [x] Definir tamanho e progressão dos insumos sem confundir redução de texto com menor nível
- [x] Conferir pilotos de balões, composição pareada e apoio visual em alturas de apresentação
- [x] Documentar prontidão para autoria/implementação e o que só poderá ser validado nas aulas prontas

## Critério de saída

Não aprovar pelo número de itens ou pelo resultado de uma suíte. O plano precisa sustentar uma conversa com finalidade, informação suficiente e apoio adequado. Toda atividade tem uma instrução que permite começar e um resultado observável. Não alegar qualidade visual de assets ainda não produzidos nem conferência acústica de áudio não escutado. As verificações são focadas no pedido atual; CI e testes amplos não são acionados por documentação.

Os novos textos e briefs de mídia são proposta; o prompt canônico de ilustração, os personagens e as gravações válidas permanecem preservados. A implementação posterior começa por composições compartilhadas e pilotos e segue os 60 códigos, reaproveitando evidência válida.


## Resultado e evidências

- Os 60 roteiros mantêm doze códigos por nível. Cada um ganhou foco, dados do caso, instrução literal da missão, resultado e briefing visual. Corrigidos caminhos condicionais A1.06/A2.08, linguagem fora da progressão e a dependência entre pedido e escuta na A1.10.
- Fontes densas, vocabulário e missão não foram fundidos numa tela. A escuta fornece a atualização da missão; extensões têm prioridade inferior à conversa livre.
- Pilotos privados com componentes reais: quatro composições × três dimensões, estados inicial/apoio aberto e popover aberto/fechado. A composição C1 mais densa excedeu a altura no celular; a versão dividida coube. Os pilotos não são as sessenta aulas finais.
- [Relatório e matriz de 60 aulas](../../materials/planos-a1-c1/VALIDACAO.md). Dados e Markdown sincronizados; 180 exemplos pergunta/intenção/dica e 389 links locais válidos no check focado.
- Evidência privada: /Users/margaridamartins/Documents/Codex/2026-11-18/new-chat-3/outputs/course-validation78-20261123/ (fixture-review.json, fixture-a11y-sample.json, consistency78.json e capturas). Falhas iniciais de configuração/medição do harness foram corrigidas somente no output privado; não são atribuídas à UI do produto.
- Prompt canônico SHA256 fb257d5a454e97e9e811d1b9f714b8e6f1c1a462058fe3962af01ec0d3d72489 preservado. Nenhum componente, mídia ou material publicado foi alterado. CI e deploy não acionados; nenhum push.

## Próximo passo

Implementar o padrão de pergunta/intenção/lâmpada no dono canônico e montar A1.04/C1.01 como pilotos completos antes da adoção em lote. A copy final, os bindings, a mídia e a escuta de cada aula serão conferidos na implementação, sem afirmar que já estão prontos. Não foi iniciada publicação nesta revisão.

Visual gate review: not applicable — alteração de planejamento; a evidência parcial dos pilotos não aprova as telas finais
