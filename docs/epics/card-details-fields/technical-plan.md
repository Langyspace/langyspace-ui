# Plano técnico

Novo CardDetailsFields compõe FieldRoot e TextInput atuais. Estado e lookup permanecem no
produto, com dados numéricos normalizados no onChange. Formatação e caret ficam privados ao
componente. Tokens existentes, sem alterar controles globais. Nova API aditiva; registrar export,
manifesto, documentação, story e teste. Primeiro preparar biblioteca, depois adoção Student.
Revisão: sem marca de banco, sem dados persistidos, sem captura antecipada; erros do serviço não
se tornam dados de cartão. Avaliar API snapshot e testar entrada/edição e layout real em navegador.

## U4 — Telefone e cadastro existente

Corrigir a omissão da máscara de telefone sem mudar o payload numérico. Formatar BR fixo/celular e
+55; manter números internacionais legíveis. Slot opcional phoneField permite reutilizar o controle
internacional existente do produto, que conhece o país do cadastro. Sem consulta, persistência ou
regra bancária na biblioteca. API aditiva, release minor 3.2.0; snapshots privados de declarações
acompanham helpers sem adicionar export à raiz. Testar edição, colagem e unicidade do campo.
