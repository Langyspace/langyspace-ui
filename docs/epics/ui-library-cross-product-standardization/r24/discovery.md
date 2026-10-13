# R24 — Assinaturas permanece local neste lote

Inspeção: Admin src/pages/AdminPortal/index.tsx SubscriptionsView, tabela
subscription-operations-table e responsive-data-table; styles.ts regras6736–6848 e mobile720;
UI src/molecules/OperationalList/{types,index,styles}. Não executar ações financeiras.

| Aspecto      | Assinaturas atual                                                                  | OperationalList atual                                                     | Balança / decisão                                                                                 |
| ------------ | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Anatomia     | Seis colunas: contrato, aluno, plano/troca, cobrança, operação, ações              | Uma primaryColumn mais colunas/actions padronizados                       | Conteúdo multiline/condicional continuaria quase todo em render callbacks; pouco markup eliminado |
| Layout       | Card/tabela com widths próprios; cards2colunas na faixa intermediária e1 no mobile | Container71.99rem vira cards e primary/action reorganizados               | Muda transição e hierarquia em desktops médios; ultrapassa concessão de pixels                    |
| Densidade    | Padding16, labels10px uppercase/800, gap12×16, ações rodapé                        | Regular/compact12/16, labels/tipos e action placements próprios           | Adaptar todos para novahierarquia exigiria redesign ou overrides incompatíveis com API simples    |
| Navegação    | Toda linha abre drawer, ações Whats/Aluno isolam propagação                        | Título navega; quick/primary/overflow com contratos semanticamente claros | Ganho de teclado válido, mas altera alvo principal e posição das ações visíveis                   |
| Dependências | Styles responsive-table usados por outras tabelas                                  | Owner já adotado no cadastro de alunos Admin                              | Migração não elimina CSS global existente; benefício menor que número de linhas sugere            |
| Domínio      | Planos agendados, recorrência, pagamentos/reviewReasons e drawers locais           | Dados/render/actions injetados                                            | Nenhum cálculo ou provider pertence à biblioteca, mesmo em futura adoção                          |

Decisão: adiar a tabela de Assinaturas, manter OperationalList já compartilhada onde há contrato
compatível. Não adicionar wholeRowClickable, breakpoint, columnWidths, gridMobile, rowSkin ou
variantes de produto para imitar esta tabela. Sem PR/runtime/dependência/teste/deploy deste recorte.
Retomar quando houver proposta explícita de UX para hierarchy/alvos/breakpoints de Assinaturas,
com antes/depois e keyboard/sorting(empty atualmente semsort)/drawer/empty/filter nas larguras
390/720/721/1080/1280/1440. Bulk/cobranças não entram automaticamente. Discovery concluído.
