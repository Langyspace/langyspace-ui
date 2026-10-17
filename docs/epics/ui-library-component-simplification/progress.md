# Progresso

O primeiro lote está preparado na branch `refactor/consolidate-button-variants`.
A revisão geral continua organizada pelas famílias do plano; as famílias restantes
não estão declaradas como migradas.

## Entrega preparada

- Button concentra ações com caixa e ações de texto através de variant.
- A pasta TextButton foi retirada. Seu adaptador público, tipos e marcador legado
  ficam em Button/compatibility.tsx; testes e stories ficam junto do owner.
- Os seis arquivos de implementação anteriores de Button/TextButton passam a
  quatro. Há uma única receita e um único caminho de renderização por aparência.
- Os exports públicos antigos continuam disponíveis. O manifesto distingue uma
  implementação canônica de um nome mantido por compatibilidade, com os mesmos
  requisitos de teste, story, documentação e smoke.
- A próxima minor está preparada como 2.2.0. Nenhum pacote ou tag foi publicado,
  nenhum produto foi atualizado e nenhum deploy de produto foi iniciado.
- AGENTS.md e a referência nativa de qualidade agora explicitam o uso de props
  para variações e a exigência de propósito claro para extrair componentes.

## Validação e revisão

As 42 comparações mobile/desktop são idênticas em pixels e no contrato renderizado
medido. Há quatro capturas adicionais das stories novas de texto com ícones e
loading. Testes focados, tipos, build, API e budgets dos grupos pertinentes estão
registrados em validation.md. A CI ampla permanece a cargo do PR.

## Próxima tarefa única

Revisar o PR atual antes de integrar ou publicar esta minor. Depois do aceite e
dos gates, preparar a adoção no Admin: trocar TextButton por Button e mapear
emphasized/subtle/danger para text/text-subtle/text-danger, incluindo MenuAction.
Esse PR de produto deve mostrar suas telas reais em tabelas Antes/Depois.

Em seguida, revisar AuthSubmitButton/AuthBackButton junto da composição dos
formulários Teacher/Student. Retirar as margens contextuais da API de botões exige
preservar o espaçamento responsivo de login/cadastro/acesso a pagamentos, sem
acrescentar variantes auth ao Button.

Visual gate review: pending human
