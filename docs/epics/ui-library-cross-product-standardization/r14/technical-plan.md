# Plano técnico R14

## Solução e dependências

UI primeiro: preparar `PracticeProgressBar`, tipos, export raiz, manifest, ref/contratos, stories e API aditiva. Aproveitar tokens neutral[100], accent.default e raio pill que correspondem às cores verificadas nos produtos; não mudar tokens globais para adequar uma família. Produto passa apenas `value={progress}` e mantém cálculos, estado, cards, textos e handlers.

R12 precisa estar integrado e UI 1.11.0 oficial nos produtos antes de abrir adoções R14 contra staging. R13 adiado não é dependência. R20 poderá compor a barra pronta; não antecipar seus controllers.

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
