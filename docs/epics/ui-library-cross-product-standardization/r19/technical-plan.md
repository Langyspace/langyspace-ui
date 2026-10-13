# Plano técnico R19

Sources: Teacher src/components/layout/CalendarControls/{index,styles,types}, WeekCalendar e
MonthCalendar; Admin src/pages/AdminPortal/index.tsx TeacherCalendarControls e styles.ts classes
teacher-cal-controls/label. Gap/label/margem equivalentes. PortalAction já aponta para UI, mas
classes globais alteram o tamanho dos ícones; trocar essa composição por componente compartilhado.

UI molecules/CalendarControls, 1 export value+1 props type. Versão1.15.0 sobre1.14.1, sem nova
dependência. Capacidade planejada antes de código: library126000raw/26600gzip; entry calendarControls
25000raw/6000gzip incluindo Button/IconButton dependentes. Famílias antigas/caps intactos.
Reusar API/artefato anterior; teste focado callbacks e submit nativo + API. Build/bundle/package
mínimo para superfície nova. CI owns gates amplos; sem polling/deploylogs depois de push.

Legend adiada nesta unidade: Teacher tem Agendada/Aula dada/Falta, Admin acrescenta Livre e
Fora da grade e swatch livre contornado. Semantic states/paleta/feedback não migram para lib.
Compartilhar a navegação sem esconder informação e sem adicionar prop cosmética de borda/tone.

Provar Before/After nos dois produtos semana/mês (datas iniciais/nav anteriores/próximas/hoje),
mobile, larguras dos wraps atuais (900/920) e desktop/container estreito. Conferir texto/datas,
callbacks, foco, bounds/overflow, row do header e altura/scroll do grid. Se o crescimento no Admin
exigir redesign do calendário, registrar custo-benefício e não forçar adoção. Concessão de tamanho
dos controles aceitável somente sem perda de dados/alvos/scroll. Não tocar provider/bookings.

Revisão crítica: sete props de composição/ações são domínio neutro; conteúdos variáveis por dados
não são variantes. Valor principal é eliminar markup/CSS e classes legadas que competem com UI.
Nunca transportar views completas de Calendar nesta task; hipótese de equivalência visual precisa
das matrizes reais antes de merge dos produtos. API não terá flags por quantidade de legendas.
