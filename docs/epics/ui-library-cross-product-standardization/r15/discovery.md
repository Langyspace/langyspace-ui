# R15 — CopyAction: discovery e decisão

2026-10-13. Impacto none: nenhuma implementação migrada. Fonte real conferida em Admin,
Student, Site; Teacher/Cupom sem consumidor equivalente no lote. Ação de copiar permanece local.

| Candidato           | Projetos / fontes                                                                      | Variações atuais                                                                                                                | Concessão possível                                                            | Proposta                                                         | Impacto / risco                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Copiar acesso       | Admin StudentPaymentAccessActions                                                      | URL só existe após emissão, busy da emissão, status e erro externos permanentes, Button secondary                               | Ícone comum é possível; não harmonizar emissão com copiar                     | Manter Button existente; não extrair panel                       | Shared view sem estado não remove lógica; callback errado pode emitir/enviar em vez de copiar      |
| Copiar Pix          | Admin EnrollmentSchedulePage; Student StudentPayment, CheckoutDialog, PixAutomaticStep | Admin status separado permanente; Student pagamento texto/ícone e expiração; checkout label reset 1800ms; cadastro ignora falha | Reset idêntico poderia ser adotado em duas telas Student, sem segundo produto | Adiar contrato cross-product; nenhuma prop por regra de feedback | UI que move clipboard/payload/expiry altera comportamento financeiro; manter guards e erros atuais |
| Copiar contato/link | Site Footer / TrialLessonForm                                                          | Email fixo versus URL atual, icon-only versus botão, fallback e feedback próprios                                               | Usar Button/IconButton já existentes                                          | Sem novo CopyField / CopyAction                                  | Roteamento e URL não podem ser movidos à UI                                                        |

Há compartilhamento de Button/IconButton; adicionar CopyAction controlado economizaria apenas
markup de botão, enquanto handlers e feedback continuam locais. Adicionar lifecycle exigiria
callbacks/reset/labels/erro que não convergem. Não uniformizar painéis, valores, falhas ou cadastros
para justificar a biblioteca. Sem versão/API/PR visual nesta unidade. Problemas preexistentes de
feedback em cadastro são fora deste lote e não foram corrigidos incidentalmente.

Próxima unidade: R16 PhoneField, com apresentação comum e formato/identidade locais.
Visual gate review: not applicable — discovery sem alteração de código/renderização.
