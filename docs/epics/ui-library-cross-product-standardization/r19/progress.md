# Progresso R19

C01/C02 concluídas na UI: CalendarControls com sete props de apresentação/navegação. Label e
callbacks locais; legend/grid/data não migram. Ícones nativos equivalentes, botão Hoje sempre
typebutton, grupo nomeado. Teste de callbacks independentes e nenhum submit do form passou.
Typecheck/build/API/bundle e smokeSSR completo no tarball isolado passaram.46 values/107types/
153declarations; todos os d.ts antigos estáveis exceto barrel aditivo. Library120692/25226 e entry
15201/3541raw/gzip dentro das capacidades planejadas. Famílias antigas medidas/caps preservados.

48 PNGs originais de default/legend/label longo/container estreito, larguras390/900/901/920/921/1440,
normal/reduced. Sem overflow, três buttons e typebutton; wrappers e source reais das stories.
SSR smoke agora verifica explicitamente markerCalendarControls e miraButton de referência,
independente de quantos controles aparecem antes dele. Não alterar verificações para passar.

R16 oficial1.14.1 integrada; R17 adapters e evidências atualizadas para staging atual, ainda semPR.
Próxima tarefa: C03 — Before Admin/Teacher, medir concessões dos controles e adaptar wrappers,
somente depois de R17 integrado. Não alterar grids/callbacks/timezone/legend/regras/providers.

Visual gate review: accepted by human — integração contínua deste lote autorizada em2026-10-13,
sem alegar revisão manual das imagens futuras; manter todos os pares dos produtos no PR.
