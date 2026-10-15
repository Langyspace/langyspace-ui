# Validação da revisão preparada

O catálogo contém 171 componentes públicos: 169 contratos anteriores revisados, um retirado por ausência de uso e três componentes novos. Há 172 registros de revisão, incluindo a retirada. Esta revisão técnica foi feita pelo mesmo agente; o aceite visual pertence à product owner.

## Implementação e contratos

| Escopo                     | Evidência local                                                                                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ações e campos             | 21 testes em sete arquivos; precedência de FieldRoot/CompoundControl, labels, erro, disabled e refs; tipos aprovados                                                                                                        |
| Auth e marca               | Três testes focados e tipos; valores e unidades de AuthFrame preservados                                                                                                                                                    |
| Listas e métricas          | 13 testes de OperationalList/MetricSummary/StatCard; tipos e arquitetura; mais duas regressões de KeyValueList e duas de ScheduleRow                                                                                        |
| Menu e refs                | 17 testes iniciais; composição com modal e re-renderização tiveram regressões reproduzidas; conjunto final de 15 testes de Menu/Modal aprovado após desestruturação explícita do hook                                       |
| SSR/hidratação de overlays | Oito testes de Dialog/Drawer/hidratação; portal inicialmente aberto passou a registrar foco, inert e scroll lock                                                                                                            |
| Calendário e prática       | 14 testes em 12 arquivos de prática, dois de CalendarDay, um de áudio e dois de Word/Skeleton, nos escopos alterados                                                                                                        |
| Integração Teacher         | Quatro testes iniciais de aula/calendário/teclado; pré-carregamento preservado no teste focado; teclado de flashcard passou após normalizar a transcrição vazia                                                             |
| Integração Student         | Três testes de pronúncia, flip/foco, confirmação pendente e loading; passaram após normalizar a transcrição vazia                                                                                                           |
| Tipos dos consumidores     | Teacher, Student, Admin, Site e Cupom aprovados com o candidato; Cupom revalidado após incorporar sua entrega concorrente                                                                                                   |
| Arquitetura                | UI com 718 fontes; Teacher 487, Student 334, Admin 184, Site 104 e Cupom 24 na primeira verificação. Avisos antigos de prazo de exceções em Student/Site foram preservados e não transformados em aprovação de regras novas |
| Referências do catálogo    | 14 testes de manifest/resolução; 11 exemplos completos compilaram; 354 exemplos de fonte para os 171 componentes, com escopo lexical e composição React verificados                                                         |

Os resultados são os checks focados de cada tarefa, com evidência reaproveitada quando os inputs relevantes não mudaram. A tabela não representa uma soma de testes únicos nem uma nova execução de toda a suíte para cada componente.

## Distribuição

O artefato exato está identificado em [candidate.json](candidate.json). A API foi revisada como major 2.0.0: ScheduleRow, CalendarDay e a anatomia de flashcards têm adoção coordenada; ShadowingContext foi retirado sem consumidor JSX. São 172 valores exportados, incluindo tokens, 238 tipos e 546 declarações. O hash da declaração pública de tokens permaneceu igual ao baseline.

Todos os limites de bundle existentes passaram, sem elevar limites ou retirar os novos componentes das medições. O pacote completo mede 256.489 bytes brutos e 59.023 bytes gzip; flashcards medem 21.559/5.354 e campos 17.860/4.990. O pacote final passou instalação em consumidor separado, superfície de arquivos/peers, ESM, auditoria, SSR e build TypeScript/Vite. Os worktrees dos cinco produtos receberam o mesmo runtime; o pin por URL imutável é feito após o commit da UI.

O browser de composição passou seis combinações: 390, 901 e 1440 px, com e sem reset global. Conferiu áudio independente, flip, faces inert, foco, limites do card, comandos irmãos da aula, área clicável do dia/eventos e Tab/Escape de menu dentro do modal. Reproduziu e corrigiu overflow de borda do modal e a dependência implícita da variável de safe area; o default e um override explícito de 24 px foram verificados.

## Evidências visuais

São **188 pares de imagens originais**: 142 dos produtos, 34 do catálogo e 12 de composições da UI. O [manifest de evidências](../../../.github/evidence/ui-react-craftsmanship/manifest.json) registra hashes, dimensões, modo de captura, baselines e runtime. Modal visível usa viewport; imagens não foram recortadas, retocadas ou recompostas.

Os produtos incluem mobile e desktop, quatro notas de flashcard, conclusão, reinício, loading, áudio/foco, calendário e controles de aula. Flashcards também têm viewport curto de 390 × 568. Foram observados marcadores de 126 componentes nos cenários de produto; isso não equivale a executar todas as stories ou todas as rotas dos 171 componentes.

Na comparação final dos produtos, **121 pares têm pixels exatamente iguais**. Treze pares mostram as mudanças intencionais de foco e do comando de áudio no Site: comando nativo do flashcard, comando principal da aula, dia do calendário e o áudio independente do flip. Outros oito têm diferenças de cor abaixo de 12 níveis por canal, em menos de 0,018% dos pixels de cada imagem; continuam disponíveis para inspeção humana. A comparação inicial com tolerância foi refinada para distinguir esses casos da igualdade exata. Métrica automática não concede aceite visual.

As 17 stories antigas de flashcard agora mostram anatomia e contexto reais. Seus pares comparam o catálogo antes/depois dessa melhoria de conteúdo; as imagens de produto usam fixtures equivalentes para verificar preservação de layout. As composições extras mostram KeyValueList com StatusChip, modal sem reset e menu aberto/focado/Tab/Escape.

## Gates restantes

- `validate:ui`, cobertura completa, acessibilidade de todas as stories e E2E amplo continuam sob responsabilidade da CI. Não há alegação de execução local desses gates.
- Os PRs precisam do aceite explícito da product owner sobre suas revisões atuais. Esta revisão técnica não substitui esse aceite.
- Merge, release oficial, publicação e alinhamento dos checkouts canônicos pertencem à tarefa 11, após os gates aplicáveis. Nenhuma publicação de produção ocorreu neste épico.
