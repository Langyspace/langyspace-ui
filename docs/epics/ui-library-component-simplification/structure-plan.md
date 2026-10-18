# Estrutura React por responsabilidade

## Entrega autorizada em 2026-10-18

O usuário pediu para executar a melhoria e abandonar a classificação atomic
design em favor de nomes claros. Esta entrega muda a estrutura inteira da UI e
prepara composições simples para métricas, estatísticas e resultados, preservando
contratos publicados. Impacto: `indirect`, com aparência e comportamento atuais
como baseline. Branch: `refactor/react-component-structure`.

## Organização

- `src/components`: componentes públicos, agrupados por responsabilidade real.
  Button, Calendar, Auth, Form, Flashcard, Shadowing, Quiz e outras famílias usam
  arquivos nomeados pelo componente. Não há `atoms`, `molecules` ou `primitives`.
- `src/foundations`: tokens, receitas e contratos de estilo sem componentes.
- `src/internal`: infraestrutura privada, contextos, hooks e modal layer.
- `src/index.ts`: API pública compatível, com imports diretos dos arquivos reais.

Usar `Button.tsx`, `Button.styles.ts` e tipos junto da implementação quando curtos.
Evitar `index.tsx` como nome de implementação, pastas para cada span ou nova
hierarquia de rótulos abstratos. Partes da mesma composição podem compartilhar
arquivo quando isso facilitar a leitura. Interações independentes continuam em
arquivos próprios. O [lote de leitura](readability-plan.md) separa stories e
testes em diretórios próprios e mantém adaptadores transitórios em
src/compatibility, agrupados pelo owner.

## Composições

1. Agrupar as peças do calendário junto de ScheduleCalendar, mantendo os nomes
   antigos disponíveis. MonthView, WeekView e AgendaView continuam separados.
2. MetricSummary recebe `value` e `label`, preservando children legado e atributos
   dos valores/legendas usados nas extensões de Teacher/Student.
3. StatCard recebe `value`, `label` e `action`; mantém tone e composição legada.
   O caso small do Admin permanece suportado pela API legada até adoção própria.
4. PracticeResultPanel recebe título, descrição e ações; children continua sendo
   conteúdo intermediário. A lógica de exercício e áudio continua nos produtos.
5. Aliases LoadingState/EmptyState ficam junto de StatePanel, com seu spinner e
   anúncios atuais. Presets Auth ficam em src/compatibility/Button.tsx, com as mesmas margens;
   trocar o uso nas telas sem composição contextual seria uma alteração adicional.

## Tarefas em ordem

- [x] Registrar mapa exato de arquivos antes de mover e preservar checkouts.
- [x] Capturar baseline do catálogo e das novas composições equivalentes.
- [x] Mover arquivos/imports e atualizar catálogo, manifestos e auditoria.
- [x] Consolidar peças e acrescentar APIs de conteúdo sem quebrar children.
- [x] Atualizar documentação e exemplos para a estrutura recomendada.
- [x] Executar no máximo três checks locais focados, pelo risco da reorganização:
      contratos/arquitetura, comportamento dos owners/manifesto e build/API.
- [ ] Comparar imagens, preparar PR com tabela Antes/Depois e registrar gates.

A auditoria continua impedindo imports privados, botões/receitas duplicados e
dependências de foundations/internal para apresentação. Seu modelo deixa de
exigir camadas atomic; as proteções devem acompanhar responsabilidades reais.

O snapshot de declarações muda por caminhos internos e pelas props aditivas;
nomes públicos e props anteriores continuam disponíveis. Conferir os dois
aspectos separadamente antes de atualizar o snapshot.

Não alterar estilos apenas por causa da movimentação. IDs gerados pelo compilador
podem mudar com o nome do arquivo; IDs públicos explícitos e resultado renderizado
devem permanecer estáveis. Comparar o catálogo de 2.2.0 da source `914164b` com a
revisão atual usando os mesmos dados, estados, larguras e reduced-motion.

Esta entrega prepara a UI. Adoções de produtos e publicação dependem do PR e da
revisão atual, com tabelas Antes/Depois. Não declarar a biblioteca inteira
consolidada enquanto famílias condicionais continuarem no diagnóstico.
