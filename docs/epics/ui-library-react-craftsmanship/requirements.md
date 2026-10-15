# Requisitos e critérios de aceite

## Leitura do componente

- A entrada pública recebe props tipadas e retorna uma árvore React que revela sua anatomia.
- Desestruturação, defaults e propagação de atributos são previsíveis. Uma variante semântica não vira coleção de flags de layout ou de produto.
- Um helper ou hook é extraído quando tem uma responsabilidade própria; tamanho de arquivo apenas provoca inspeção.
- Props de slots existentes continuam válidas quando representam regiões estáveis. JSX em children é preferido para conteúdo aberto; arrays de itens/colunas continuam legítimos para listas e tabelas, sem construir um interpretador genérico de páginas.
- Componentes pequenos mantêm nomes úteis. Internalizar/remover/unificar exige evidência e avaliação de compatibilidade, nunca apenas “tem poucas linhas”.

## Contratos React e composição

- Tipos nativos, eventos, refs, type de botão e nomes acessíveis continuam corretos.
- Mantêm-se os padrões Auth/PracticeResult já aprovados; alterações requerem um problema demonstrado.
- Relações como MetricSummary/Value/Label e FlashcardFrame/Stage/Face precisam de exemplo integrado, contexto documentado e comportamento previsível.
- CSS variables contextuais existentes são inventariadas com defaults, owner e consumidores. Não convertê-las automaticamente em dezenas de props nem criar novas exigências de tema/global CSS.
- Renomear uma prop ambígua exige provar o problema, preparar todos os consumidores e classificar SemVer. Preferir melhoria interna compatível; não acumular aliases de compatibilidade sem finalidade.

## Estilos e organização

- Reutilizar tokens/receitas nativos. Dois valores próximos não são equivalentes; valores iguais só compartilham um token quando têm o mesmo significado.
- Preservar unidades/dimensões quando a substituição puder alterar zoom/root font-size. Tokens não autorizam arredondar cores, tamanhos ou breakpoints.
- Família pública e anatomia de pastas podem ser documentadas sem mover todos os arquivos ou mudar os imports estáveis.
- Eliminar duplicação mecânica e wrappers vazios confirmados; conservar bridges de Router, regras de dados e geometria de página.
- Nenhuma regra de auditoria, orçamento, semântica ou proteção é afrouxada para aprovar uma refatoração.

## Usabilidade da biblioteca

- Para cada componente, documentar propósito, quando escolher, composição, props próprias, estados, responsividade, acessibilidade, origem de estilo e uso indevido relevante.
- Para cada família, disponibilizar um exemplo real completo e curto, além das stories de estados.
- Corrigir instalação/documentação obsoleta. A versão da instrução é a release oficial disponível, sem promover um candidato local como publicado.
- A ficha individual registra fontes lidas e decisão: manter, simplificar, consolidar receita, ajustar contrato ou internalizar. “Revisado” não é produzido por contagem automática.

## Preservação e validação

Os produtos mantêm rotas, dados, conteúdo, regras e ações. Verificar estados vazios/loading/error/selected, teclado/foco, labels longos, formulários, portais/scroll lock, containers estreitos, 390px e desktop, com breakpoint limítrofe pertinente.

Reutilizar evidência bem sucedida enquanto os inputs relevantes forem idênticos. Por tarefa, usar no máximo dois checks focados (terceiro apenas com risco alto justificado); full suite/validate:ui/matriz ampla permanecem no CI. Testes novos devem detectar regressão de contrato ou interação, não repetir a implementação.

Capturas Antes/Depois precisam usar baseline atual versus revisão nova, mesmas fixtures/fontes/tema/viewport e fonte/pacote identificados. Modal visível usa captura de viewport. Publicar somente fixtures sanitizadas, sem storageState, tokens ou dados de produção.

## Gate de aceite

Uma tarefa só é concluída com decisão, diff revisado e evidência aplicável. O catálogo só é concluído quando todas as fichas têm os dez critérios avaliados, sem pendência obrigatória genérica. Evidência ausente mantém o PR em draft; revisão humana atual é indispensável antes de merge. Release/deploy precisam da autorização aplicável e do fluxo do repositório.
