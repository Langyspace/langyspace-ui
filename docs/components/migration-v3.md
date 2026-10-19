# Migração para UI 3

Candidato preparado, ainda não publicado. A major retira 40 nomes públicos substituídos, mantendo 138 componentes com responsabilidades explícitas. As versões 2 continuam disponíveis. Não atualizar produtos com um endereço de release que ainda não existe.

## Substituições

| API anterior              | Composição atual                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EmptyState                | StatePanel state="empty".                                                                                                   |
| LoadingState              | StatePanel state="loading", com Spinner lg padrão.                                                                          |
| AuthBackButton            | Button size="sm" variant="secondary" no slot backAction de AuthHeader.                                                      |
| AuthSubmitButton          | Button type="submit" fullWidth size="lg" dentro de AuthActions.                                                             |
| PracticeResultMark        | PracticeResultPanel, com marca decorativa padrão; icon={null} pode suprimi-la.                                              |
| PracticeResultTitle       | PracticeResultPanel heading={heading}.                                                                                      |
| PracticeResultDescription | PracticeResultPanel description={description}; feedback em children usa parágrafo nativo.                                   |
| PracticeResultActions     | PracticeResultPanel actions={actions}.                                                                                      |
| StatValue                 | StatCard value={value} label={label} action={action}.                                                                       |
| StatLabel                 | StatCard value={value} label={label} action={action}.                                                                       |
| StatAction                | StatCard action={action}; false/null não reserva espaço.                                                                    |
| TextButton                | Button variant="text", "text-subtle" ou "text-danger".                                                                      |
| MetricValue               | MetricSummary value={value} label={label}.                                                                                  |
| MetricLabel               | MetricSummary value={value} label={label}.                                                                                  |
| CalendarMonthGrid         | ScheduleCalendar; anatomia privada em CalendarElements, MonthView/WeekView. Datas, eventos e ações preparados pelo produto. |
| CalendarWeekGrid          | ScheduleCalendar; anatomia privada em CalendarElements, MonthView/WeekView. Datas, eventos e ações preparados pelo produto. |
| CalendarDay               | ScheduleCalendar; anatomia privada em CalendarElements, MonthView/WeekView. Datas, eventos e ações preparados pelo produto. |
| CalendarDayNumber         | ScheduleCalendar; anatomia privada em CalendarElements, MonthView/WeekView. Datas, eventos e ações preparados pelo produto. |
| CalendarEvent             | ScheduleCalendar; anatomia privada em CalendarElements, MonthView/WeekView. Datas, eventos e ações preparados pelo produto. |
| TimelineEvent             | ScheduleCalendar; anatomia privada em CalendarElements, MonthView/WeekView. Datas, eventos e ações preparados pelo produto. |
| CalendarTimeSlot          | ScheduleCalendar; anatomia privada em CalendarElements, MonthView/WeekView. Datas, eventos e ações preparados pelo produto. |
| AuthBrandTitle            | AuthBrandContent title={title}.                                                                                             |
| AuthBrandAccent           | AuthBrandContent highlight={highlight}.                                                                                     |
| AuthBrandDescription      | AuthBrandContent description={description}.                                                                                 |
| AuthFeatureList           | AuthBrandContent features={[...]} preparado pelo produto.                                                                   |
| AuthFeature               | AuthBrandContent features={[...]} com conteúdo React.                                                                       |
| AuthBrandFooter           | AuthFooter links={links} placement="brand".                                                                                 |
| AuthMobileFooter          | AuthFooter links={links} placement="mobile".                                                                                |
| AuthFooterLink            | AuthFooter links={[{ href, label }]}.                                                                                       |
| AuthTitle                 | AuthHeader title={title}; atributos/ref permanecem no h2.                                                                   |
| AuthAccent                | AuthHeader highlight={highlight}.                                                                                           |
| AuthDescription           | AuthHeader paragraphs={[...]} preserva múltiplos parágrafos ricos.                                                          |
| AuthResendButton          | AuthResendAction onResend={onResend} resendLabel={label} disabled={disabled}.                                               |
| FlashcardProgressTrack    | FlashcardProgress current={current} total={total} label={label}.                                                            |
| FlashcardProgressSegment  | FlashcardProgress possui os segmentos; revealed/complete vêm do produto.                                                    |
| FlashcardCounter          | FlashcardProgress possui contador e skeleton; loading cobre o carregamento.                                                 |
| PracticeCoverValue        | PracticeCardCover value={value}.                                                                                            |
| PracticeCoverLabel        | PracticeCardCover label={label}.                                                                                            |
| AuthSuccessIcon           | AuthSuccessState possui a marca decorativa privada.                                                                         |
| AuthTopLinkHighlight      | AuthTopLink highlight={label}; href/onClick nativos permanecem na âncora.                                                   |

O alias duplicado tokens.color.neutral[400] também é retirado; use [300], com o mesmo valor. Nenhum dos cinco produtos referencia esse alias da UI (paletas locais têm contratos próprios e permanecem intactas).

Os tipos Props desses nomes e TextButtonVariant também são retirados. MetricSummary e StatCard exigem value/label e não aceitam montagem paralela por children. AuthResendAction exige onResend/resendLabel. AuthSuccessState inclui a marca padrão. São mudanças incompatíveis deliberadas, não uma minor.

## Preservação dos produtos

Teacher/Student mantêm Router, OTP, timers, scheduler, áudio, cálculos e persistência. Button continua passando pelos boundaries aprovados dos produtos. Admin mantém a formatação financeira compacta de 18px numa extensão local de StatCard; não há prop cosmética exclusiva para isso.

A antiga LeadsPage do Admin não é montada por nenhuma rota: apenas seu próprio teste a importava. A implementação duplicada é retirada; o fixture ainda usado é preservado. A rota real LeadCohortPage continua usando OperationalList e seu ActionMenu já existente, sem uma nova concessão visual de menu. Extensões de métricas preservam os mesmos valores e componentIds; isso não substitui capturas comparáveis.

StatePanel state="loading" inclui o spinner padrão. Para preservar uma tela que deliberadamente não o exibia, use icon={null}; quatro estados já existentes no Admin mantêm essa decisão.

AuthActions preserva as margens dos botões de autenticação, inclusive após AuthLegalText. Extensões locais que dependiam de um botão irmão devem apontar para o botão dentro de AuthActions: `& + div > button` ou `> div > button`. Teacher/Student ajustam apenas essas relações, sem novos modos cosméticos.

## Validação e adoção

1. Validar a fonte/declarações e testes dos owners, guards e snapshot da major.
2. Construir um único pacote imutável e registrar SHA-256/integridade. Validar o build consumidor no browser, SSR e os cinco produtos contra esse mesmo pacote.
3. Capturar Antes/Depois das superfícies e estados afetados, em mobile e desktop.
4. Submeter os PRs atuais em tabelas para aceite humano; publicar a UI antes de adotar a dependência oficial nos produtos.
5. Após aceite e gates, integrar/adotar e verificar os alvos publicados conforme o workflow de cada repositório.

Nenhum alias é mantido como solução permanente na UI 3. Remover suporte de APIs antigas não autoriza retirar testes de comportamento, reduzir budgets ou afrouxar auditorias. Testes dos owners cobrem os contratos que continuam; testes de células/eventos de Calendar permanecem como anatomia privada.
