# Migração para o contrato 2.0.0

Esta revisão é major porque corrige anatomias interativas e retira um export sem uso. Ainda é um candidato; os cinco produtos devem adotar o mesmo artefato imutável antes de integrar. Uma mudança de dependência sem verificar seus usos não conclui a migração.

## ScheduleRow

O wrapper deixa de receber role, tabIndex, onClick e onKeyDown para simular um botão. Passe onOpen e openLabel. Time e participant compõem o comando principal nativo; actions é uma região irmã independente.

```diff
- role="button"
- tabIndex={0}
- onClick={openLesson}
- onKeyDown={handleRowKey}
+ onOpen={openLesson}
+ openLabel="Abrir aula de exemplo"
```

Use conteúdo phrasing na identidade do botão, como spans, Avatar e StatusChip. Mantenha display/gaps necessários no produto. Os callbacks de aula, anotação e ausência continuam no dono do domínio.

## CalendarDay

O número/conteúdo de identificação vai no slot day. Um dia acionável recebe o par onOpen/openLabel; eventos continuam em children. O comando se estende pela célula sem envolver os botões dos eventos.

```tsx
import { CalendarDay, CalendarDayNumber, CalendarEvent } from '@langyspace/ui'

export function DayExample({
  onOpen,
  onLesson,
}: {
  onOpen: () => void
  onLesson: () => void
}) {
  return (
    <CalendarDay
      day={<CalendarDayNumber>15</CalendarDayNumber>}
      onOpen={onOpen}
      openLabel="Abrir horários de 15 de outubro"
    >
      <CalendarEvent onClick={onLesson}>09:00 · Aula</CalendarEvent>
    </CalendarDay>
  )
}
```

No calendário semanal, nomeie os botões de horário vazios com data/hora. A aparência selected é preview de seleção; não significa que o componente decide disponibilidade.

## Flashcards

| Antes                                                   | Contrato da revisão                                                    |
| ------------------------------------------------------- | ---------------------------------------------------------------------- |
| Classes word/rule/phonetic/exampleHint em FlashcardWord | children é o termo; phonetic e example são slots opcionais             |
| Classes en/divider/translation/example em FlashcardBack | term e translation; phonetic e example opcionais                       |
| Cor/glow/classes de feedback nos dois produtos          | FlashcardFeedback recebe grade, mark, children como mensagem e next    |
| span.emoji no ImagePanel                                | Prop emoji para a ilustração de fallback                               |
| Swiper com role/click/keydown e áudio aninhado          | FlashcardFlipButton dentro de Front; FlashcardAudioButton independente |
| Três blocos de loading montados nos produtos            | FlashcardWordSkeleton, decorativo e sem estado                         |

FlashcardFlip/Face compartilham somente o lado ativo em contexto privado. A face inativa recebe inert/aria-hidden; Face standalone continua independente para demos. O produto controla estado, áudio, preload, transições, intervalos, salvamento e retorno de foco. Após virar, o foco segue para uma avaliação; após concluir, para o resultado.

Retire o handler genérico de clique/teclado do Swiper. Atalhos globais devem respeitar composição IME, defaultPrevented, campos editáveis e o Espaço de comandos nativos. Não bloquear o botão de áudio com o alvo de clique do card.

A composição usa a mesma receita de Skeleton já consumida pelos dois produtos na versão 1.21.1. As dimensões e as cores dos blocos são preservadas; o estado de carregamento continua no produto, sem uma prop loading em FlashcardWord.

Veja o [exemplo completo](practice.md#flashcard-com-composição-explícita).

## ShadowingTranslation

Passe o conteúdo diretamente. O componente agora possui o elemento de tradução; um div externo não é necessário. A visibilidade e o texto continuam no produto. Descendentes de conteúdo rico não recebem estilos genéricos de todo div.

## Export retirado

ShadowingContext/ShadowingContextProps saem da API. A verificação dos cinco projetos encontrou apenas um reexport sem uso JSX, ShadowContext no Student; ele foi removido. Não é necessário um substituto. ShadowingContextPhrase permanece.

## O que conferir na adoção

Verifique teclado, callbacks únicos, foco após transições, áudio independente, faces ocultas, estados de salvamento/loading/erro, viewport curto e mobile/desktop. A evidência usa a mesma fixture e interação antes/depois. Aprovação histórica não aprova a nova revisão.
