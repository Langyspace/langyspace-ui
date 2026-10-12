# Plano técnico R14

## Solução e dependências

UI primeiro: preparar `PracticeProgressBar`, tipos, export raiz, manifest, ref/contratos, stories e API aditiva. Aproveitar tokens neutral[100], accent.default e raio pill que correspondem às cores verificadas nos produtos; não mudar tokens globais para adequar uma família. Produto passa apenas `value={progress}` e mantém cálculos, estado, cards, textos e handlers.

R12 precisa estar integrado e UI 1.11.2 oficial nos produtos antes de integrar adoções R14 em staging. R13 adiado não é dependência. R20 poderá compor a barra pronta; não antecipar seus controllers.

Arquivos de adoção: Student `src/components/features/portal/index.tsx` somente DeckPracticeCard, QuizPracticeCard e ShadowingLessonCard; Teacher `src/pages/StudentLearningPreview/components/StudentPracticeActivityCards/index.tsx` somente três branches. Os ProgressTrack/Fill dos arquivos de estilos continuam sendo usados por home/sessões/vocabulário; não removê-los nesta rodada. Mapear todos os demais callsites como adiados.

## Matriz de evidências e fixture

Antes: refs de staging já com R12 oficial; Depois: cada head R14. UI: zero/parcial/concluído, narrow e ref/atributos, mudança de valor e reduced motion; produtos: cinco abas × quatro larguras × normal/reduced, com estados relevantes de cada card na fixture. Verificar desabilitado onde existente e ativação via teclado. Usar códigos reais dos apps, dados sintéticos sem pessoas, rede externa bloqueada, fontes e clock iguais; não chamar Firestore, provedores ou progress writes. PNG original em URL imutável, exibição width400 e tabela de pares.

A fixture padrão de design mock precisa ser conferida antes de capturar. Se não incluir zero/parcial/concluído/disabled, criar caso isolado via ferramenta de captura sem introduzir backdoor de dados no produto. Comparar retângulos da trilha/fill e texto/controles; capturar novamente qualquer alteração visual posterior. Um screenshot estático não prova transição: inspecionar CSS computado e executar mudança de valor com normal/reduced.

## Checks e capacidade antes de implementação

UI: teste focado significativo do novo contrato, revisão explícita da API e smoke/bundle do novo pacote; CI executa validate:ui/full suites. Produtos: typecheck e um teste focado de nomes/keyboard/onOpen/disabled quando acrescentar evidência; reutilizar checks R12 somente se entradas não mudarem. Não monitorar CI após push.

Base UI 1.11.0: 106019 raw / 22387 gzip; capacidade existente 106500/22550. Proposta aditiva **antes de implementar**: aggregate máximo 108000 raw / 22900 gzip e entry exclusivo de progresso 5000/1800; limites de todas as famílias antigas intocados. Confirmar medição e justificar crescimento efetivo, sem aumentar orçamento após falha. Componentes antigos devem manter hashes de declarações salvo barrel; nenhuma revisão incidental de API.

## Riscos e custo-benefício

Estimativa inicial: trocar seis pares de tags por seis elementos reduz 12 linhas JSX brutas, descontando imports; estilos locais ainda ficam devido aos consumidores fora do piloto. Não vender isso como remoção de toda duplicação CSS ou ganho global de tamanho. Benefício é uma receita e um motion para composições futuras; custo é mais API, código e pacote. Não ampliar o piloto só para apresentar uma contagem melhor.

Teacher pode ganhar transição em atualizações de valor, sem alterar layout; comparar e submeter à review. Aria-hidden protege o nome acessível do botão, mas requer texto equivalente no card. Quiz tem aria-label explícito hoje; preservar esse contrato sem adicionar anúncio duplicado. Escala 0–1 é única; denominadores/caches/erros de domínio não são corrigidos junto. NaN não deve virar CSS inválido.

## Revisão crítica antes de código

Produto: preserva layout e jornada; cinco abas têm superfícies identificadas. Técnica: um valor e receita fixa; não criar layout/tone/size/max/animated props. Engenharia: styled locais ainda consumidos, domínio intocado e API aditiva. QA: evidência cobre limites, motion, nomes/keyboard, zero/parcial/completo e larguras; aceitar o pacote somente após medição e comparação. Se a custo-benefício real não sustentar este piloto, registrar adiamento antes de abrir PRs.

## Preparação local e review paralela

Before foi capturado do staging real Student 979c08e/Teacher b3bf81c, com os pacotes oficiais então declarados (1.8.0/1.10.0). Após preparar a UI, a preparação local e abertura dos drafts avançam enquanto R12 publica, sem candidatos em staging. A integração depende de R12 oficial em staging e aceite próprio R14. Conciliação futura deve provar que alterações R12 em skeleton/metadata não afetam o recorte carregado, ou recapturar. Esta revisão substitui a espera para D03/D05.

40 cenas por produto; 80 pares Student e 76 Teacher incluem scrolls que mostram todos os cards. Fixture sintética 0/4/8 de 8 em cada tipo; personalizada inclui várias seções e Palavras salvas Student, também consumidor de DeckPracticeCard. /vocabulario e SavedVocabularyPreviewCard Teacher continuam locais. Disabled sem itens é testado no card; não inventar estado de página que o filtro exclui. Driver único Playwright 1.61.1 antes/depois; driver Teacher antigo não completava inicialização e foi substituído somente na ferramenta de captura.

Geometria/texto/controles/cores/raios idênticos nas 80 cenas. Student motion igual; 112 barras Teacher nas cenas normais recebem 520ms; reduced permanece none. Custo real -5 linhas runtime por produto, já contando import; styled locais ficam devido aos demais consumidores. Testes de keyboard/nome/callback único/disabled, typechecks e locks congelados passam. Terceira verificação de produto restrita ao lock é necessária para nova dependência pública com SHA/integrity.
