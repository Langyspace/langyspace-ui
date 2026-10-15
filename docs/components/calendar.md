# Calendário e disponibilidade

A biblioteca apresenta datas/horários já preparados. Regras de agenda, fuso, disponibilidade e recorrência continuam nos produtos. Os componentes de grade são layout; não prometem o padrão ARIA grid e sua navegação completa.

## Composição do dia

```tsx
import {
  CalendarDay,
  CalendarDayNumber,
  CalendarEvent,
  CalendarMonthGrid,
  CalendarScroller,
} from '@langyspace/ui'

interface MonthExampleProps {
  onOpenDay: () => void
  onOpenLesson: () => void
}

export function MonthExample({ onOpenDay, onOpenLesson }: MonthExampleProps) {
  return (
    <CalendarScroller aria-label="Calendário mensal">
      <CalendarMonthGrid>
        <CalendarDay
          day={<CalendarDayNumber aria-current="date">15</CalendarDayNumber>}
          openLabel="Abrir horários de 15 de outubro"
          onOpen={onOpenDay}
        >
          <CalendarEvent onClick={onOpenLesson}>
            09:00 · Aula de inglês
          </CalendarEvent>
        </CalendarDay>
      </CalendarMonthGrid>
    </CalendarScroller>
  )
}
```

O exemplo usa o candidato 2.0.0. Comando do dia e evento são irmãos nativos; a área estendida mantém o clique no dia sem englobar o evento. O produto fornece todos os dias de sua grade e nomes com data/hora. Capturas de mês/semana e hit testing no Teacher são requisitos da adoção.

## AvailabilityCalendar

Seleção controlada de horários disponíveis.

Contrato: days, selectedSlotIds/onToggleSlot, label; helper/selectionLabel e status/action.

Cuidados: O produto calcula compatibilidade/fuso. Um slot indisponível exige motivo; se já estiver selecionado, continua removível. Container query de 56rem organiza dias sem colunas por projeto.

## CalendarControls

Comandos de navegação e identificação do período.

Contrato: label, previousLabel/nextLabel e onPrevious/onNext/onToday; children para legenda.

Cuidados: O produto calcula datas/fuso e fornece callbacks. Hoje é a copy comum atual; não criar flags mensais/semanais para regras de data.

## CalendarDay

Dia do calendário mensal com comando primário opcional e eventos independentes.

Contrato: day e children; muted; par onOpen/openLabel quando acionável.

Cuidados: Comando nativo cobre a célula, eventos irmãos permanecem acima. O produto prepara data, estado e horário. Validar hit testing e teclado no MonthCalendar; nunca envolver eventos em outro botão.

## CalendarDayNumber

Número do dia com destaque para a data atual.

Contrato: children e atributos/ref de span; aria-current=date.

Cuidados: Não calcula hoje nem fuso. Compor no slot day de CalendarDay; o comando pertence ao dia e o número continua conteúdo.

## CalendarEvent

Comando compacto de abertura de um evento.

Contrato: children, tone neutral/success/muted e atributos/ref de button.

Cuidados: Não interpreta status de aula. Produto converte domínio para tom e fornece nome compreensível. Marcador interno permite preservar clique sobre o comando da célula.

## CalendarMonthGrid

Grade visual de sete colunas mensais.

Contrato: children e atributos/ref de div.

Cuidados: Compor em CalendarScroller; largura mínima de52.5rem é intencional. Não declarar grid ARIA sem implementar sua navegação completa; eventos são comandos nativos.

## CalendarScroller

Área rolável e superfície do calendário.

Contrato: children e atributos/ref de div.

Cuidados: Contém as grades largas, preserva overscroll e limites do shell. O produto escolhe nome/tabulação se a região precisar de acesso direto por teclado.

## CalendarTimeSlot

Comando de horário na grade semanal.

Contrato: children, tone, selected e atributos/ref de button.

Cuidados: selected representa preview visual da seleção, não um toggle de regra. Produto deve nomear botões vazios com dia/hora/estado e bloquear ações indisponíveis; aria-disabled não substitui a guarda do callback.

## CalendarWeekGrid

Grade visual semanal com coluna de horas e sete dias.

Contrato: children e atributos/ref de div.

Cuidados: Preservar largura mínima53rem em CalendarScroller. Produto calcula posicionamento de eventos e seleção retangular; não transformar geometria em motor de agendas.

## TimelineEvent

Comando de evento posicionado na linha do tempo.

Contrato: children, tone e atributos/ref/style de button.

Cuidados: Produto fornece top/height a partir de horários/duração; UI fornece aparência. Validar eventos curtos/longos, sobreposição, nome completo e fuso.

## ScheduleCalendar

Calendário composto com semana, mês e agenda compacta para telas estreitas. A navegação e os corpos são componentes React privados explícitos.

Contrato: view, days, events, slots, navigation e onOpenEvent; onSlotClick/onSlotSelection e timeRange quando há seleção de horários. Datas e IDs já vêm preparados pelo produto.

Cuidados: o produto mantém fuso, disponibilidade, regras de duração, consultas e persistência. A UI mantém expansão, foco e seleção por ponteiro/teclado. A agenda compacta usa os mesmos dados. Preserve eventos sobre o comando do dia, datas fora do mês, slot indisponível e seleção em intervalos de meia hora. O novo contrato entrou da entrega paralela de calendário já adotada no staging do Teacher; não substituir por cópias antigas ao atualizar a dependência.
