# Requisitos R16

UI recebe país/opções de apresentação (code/name/flag/dialCode/placeholder), label, erro opcional e
input nativo controlado com ref/onChange/onPaste. Sem countries default de produto, flags de
produto, layout, tone, mask, speed ou validators. Busca/toggle/seleção pertencem à UI; callbacks
retornam opção escolhida e wrappers resolvem o objeto completo de domínio e normalizam como hoje.
Buscar país usa a mesma copy atual; labels de input e erro continuam associados ao id.

Student preserva edição no meio/caret e aria-invalid/erro/disabled. Teacher preserva colagem
com seleção e nacionalPrefix. Não substituir normalizadores ou arrays locais. Dropdown permite
Tab, busca/seleção e Escape; options aria-selected. Disabled impede abertura. Não mudar inputMode,
autocomplete, placeholder, handlers extra, nomes de controles ou submit.

Evidências: default/valor, erro onde possível, seletor aberto e busca, em todas as telas afetadas
mobile/dense/desktop. Mesmas fixtures sintéticas, fonte, clock e movimento; nenhum telefone real,
OTP, email, pagamento, callable ou rede externa. Testes dos adapters preservam caret/paste.
