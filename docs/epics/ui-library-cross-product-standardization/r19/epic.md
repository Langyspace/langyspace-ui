# R19 — CalendarControls, legend mantida nos produtos

Teacher WeekCalendar/MonthCalendar e Admin TeacherWeekCalendar/TeacherMonthCalendar repetem
previous/next/today/label. Compartilhar somente navegação; grid, cursor, dados e slots são locais.
Impacto direct. Admin /agenda e calendário no detalhe da professora; Teacher /calendario, semana/mês.
UI primeiro; owners preservam callbacks/labels, incluindo legendas de três/cinco estados distintas.
Dependências reais: Button/IconButton R01. Não depende de auth; preparar UI enquanto o releaseR17
publica async, sem alterar produtos antes da unidade anterior estar integrada.
