# R18 — ConversationItem/List: migração adiada

Fonte lida em 2026-10-13; nenhuma alteração de runtime nesta unidade. Admin
src/pages/AdminPortal/MessagingPage/{index,styles}; Teacher
src/pages/Messages/components/ConversationList/{index,styles}; demais produtos sem segundo inbox.

| Aspecto                 | Admin                                                                                    | Teacher                                                                                                | Concessão/custo                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Informação da row       | Aluna + professor + ativo/arquivado/denunciada + data + soma de unread                   | Aluna + timestamp superior + última mensagem e badge individual                                        | Unificar conteúdo perderia informação de moderação ou tornaria inbox maior.           |
| Layout                  | Grid avatar md, alinhamento inicial, gap16/copy8, padding16, nomes com wrap              | Flex avatar sm, alinhamento centro, padding12/16, duas linhas com ellipsis                             | Padrão único muda alturas, densidade, alinhamento e quantidade de conversas visíveis. |
| Seleção                 | Fundo de marca e barra inset3px                                                          | Fundo neutro, hover e foco inset                                                                       | Cor sozinha admite concessão; conjunto de conteúdo/layout não é equivalente.          |
| Lista                   | div scrollável no workspace, paginação dentro da lista, painel mobile oculta por seleção | section/ul/li com header unread agregado, viewport/fixed footer, loading/erro/empty preservando resumo | Wrapper genérico deixa quase todos os containers/CSS locais ou exige muitas flags.    |
| Primitives reutilizadas | Pressable, Avatar, StatusChip, LoadingState, StatePanel, Button                          | Pressable, Avatar, LoadingState, EmptyState, StatePanel, Button                                        | Reuso já existe para controles, identidade e feedback.                                |

Custo-benefício: extrair só leading/children/selected/onSelect remove principalmente um wrapper
Pressable já padronizado; preservar layout atual exigiria receitas/padding/placement/wrap próprias.
Uma view com teacherName/moderation/status/preview/unread também mistura responsabilidades de
moderação e inbox. Não adicionar esse contrato para pequena economia de markup.

Decisão: adiar row/list completos. Manter os layouts e controllers; não abrir PR de produto sem
benefício concreto. Pré-requisito futuro: decisão de UX sobre hierarchy/densidade de uma mesma
row para os dois inboxes, mantendo todos os dados de moderação e preview. Só depois validar
mobile/desktop, nomes longos/fotos quebradas/sem última mensagem/unread>99/erro/paginação,
alvo de seleção e acessibilidade. Queries, permissões, reads e transporte continuam nos owners.

Visual gate review: not applicable — discovery documentado; nenhuma superfície alterada.
