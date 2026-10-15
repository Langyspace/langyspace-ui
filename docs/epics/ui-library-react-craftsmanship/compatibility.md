# Compatibilidade e decisões de API

## ScheduleRow — comando principal e ações independentes

Fonte atual verificada: Teacher src/components/layout/ClassRow/index.tsx fornece role=button/tabIndex/onKeyDown ao ScheduleRow. O handler de Enter/Espaço abre a aula sem distinguir o alvo. ScheduleRow isola click das ações, mas não keydown; assim, eventos dos botões internos alcançam o comando da linha. O role button envolvendo outros controles também cria uma anatomia inadequada de interação.

Contrato proposto: uma linha não interativa agrupa um button nativo principal (tempo/participante) e o grupo de ações como irmãos. O produto fornece onOpen e openLabel; a UI fornece semântica, foco e teclado nativos. Não exigir que cada consumidor implemente um pseudo-button em div ou stopPropagation como workaround.

| Atual                                              | Novo                           | Motivo                                                              |
| -------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------- |
| onClick/onKeyDown no container                     | onOpen                         | Um comando explícito e teclado nativo; impede acionamento duplicado |
| role=button e tabIndex no container                | button principal com openLabel | Nome acessível próprio; ações não ficam aninhadas em outro comando  |
| time/participant/actions/muted                     | Mantidos                       | Apresentação e dados continuam explícitos                           |
| ref/className e attrs não interativos do container | Mantidos                       | Preserva o papel real do wrapper                                    |

Esta mudança é **incompatível**: ScheduleRowProps deixa de aceitar os handlers/role/tabIndex de comando no wrapper e exige onOpen/openLabel. O candidato cumulativo deverá ser **2.0.0**, não um patch/minor disfarçado. Os nomes dos exports continuam; não manter um segundo caminho legado/flags que perpetuem a anatomia incorreta. Adoção simultânea preparada nos cinco produtos, com a única chamada direta de ScheduleRow no Teacher adaptada na tarefa 09; os demais atualizam o artefato e são validados pelo impacto efetivo.

A intenção visual é preservar a grade, dimensões, conteúdo e ações. O foco passa a identificar o comando principal real; comparar o estado de foco antes/depois e teclado no PR atual. Restringir conteúdo participant a identidade/metadados; controles interativos pertencem a actions. Nenhuma rota, regra de presença, link de Meet ou mutação de domínio migra para a biblioteca.

Os elementos internos Time/Participant tornam-se spans, com o display preservado por CSS, para manter conteúdo phrasing válido dentro de button. A adoção Teacher também adapta os wrappers de identidade a spans com o mesmo display, em vez de manter divs ou controles dentro do comando principal. Registrar essa dependência na tarefa 09.

Revisão crítica: a mudança resolve um defeito verificável de composição/teclado e reduz código imperativo no consumidor. Duas props semânticas necessárias substituem handlers/role/tabIndex; não são variações visuais. Os testes devem reproduzir o problema antigo e verificar que Enter/Espaço abrem ou executam apenas o alvo correto. Antes de publicar, atualizar stories/snippets/tipos e todos os consumidores, revisar o diff público e obter o aceite humano atual.

## Additional major contracts in task08

FlashcardBack owns term/translation/phonetic/example; FlashcardWord owns term children/phonetic/example; FlashcardFeedback owns grade/mark/message children/next. Student and Teacher must adopt these slots and remove their duplicated classes. ShadowingTranslation owns its internal content wrapper. FlashcardFlip/Face makes the inactive face inert and aria-hidden; standalone Face remains independent. New FlashcardFlipButton is a native command inside FlashcardFront, independent from audio; consumer focus must move to ratings after flip. See flashcard-refinement.md for surfaces and risk.

CalendarDay also requires a day slot and accepts the onOpen/openLabel pair instead of a click/role handler on its container. MonthCalendar currently opens slots from a div click; its events are separate commands. The replacement stretches the native primary button across the day while event siblings remain above it. Preserve layout and click area; validate native keyboard and browser hit testing. WeekCalendar must name its empty slot buttons from the actual day/time and status; no domain rules move into UI.

## Removed ShadowingContext

The five-product source trace found only one unused Student reexport (ShadowContext). TypeScript language-service triage and an exact search across all five src trees confirmed no JSX/call consumer. Remove that dead alias and the unused public component/types/fixtures in the intentional2.0.0 major. No replacement component or mode is needed. ShadowingContextPhrase remains public and unchanged. Evidence:09-reexport-references.json in the local execution artifacts; the manifest API diff must confirm the removal in task10.

## Adaptação de conteúdo opcional

Student e Teacher normalizam a transcrição vazia para undefined ao preencher os slots phonetic. Isso preserva a condição anterior e evita um wrapper vazio acrescentar gap entre palavra e exemplo. A UI continua aceitando ReactNode para conteúdo rico, sem uma prop de produto para esconder linhas vazias. A diferença foi descoberta nas imagens e conferida novamente após a correção.
