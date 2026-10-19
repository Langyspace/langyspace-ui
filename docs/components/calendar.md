# Calendário e disponibilidade

A biblioteca apresenta datas/horários já preparados. Regras de agenda, fuso, disponibilidade e recorrência continuam nos produtos. Os componentes de grade são layout; não prometem o padrão ARIA grid e sua navegação completa.

## Composição recomendada

```tsx
import { ScheduleCalendar, type ScheduleCalendarProps } from '@langyspace/ui'

export function PreparedSchedule(props: ScheduleCalendarProps) {
  return <ScheduleCalendar {...props} />
}
```

O produto prepara days/events/slots e callbacks; a UI possui a anatomia privada de mês, semana e agenda compacta. Dias, números e eventos não são exports separados. AvailabilityCalendar continua independente: seleciona disponibilidade, em vez de apresentar uma agenda de aulas.

## AvailabilityCalendar

Seleção controlada de horários disponíveis.

Contrato: days, selectedSlotIds/onToggleSlot, label; helper/selectionLabel e status/action.

Cuidados: O produto calcula compatibilidade/fuso. Um slot indisponível exige motivo; se já estiver selecionado, continua removível. Container query de 56rem organiza dias sem colunas por projeto.

## CalendarControls

Comandos de navegação e identificação do período.

Contrato: label, previousLabel/nextLabel e onPrevious/onNext/onToday; children para legenda.

Cuidados: O produto calcula datas/fuso e fornece callbacks. Hoje é a copy comum atual; não criar flags mensais/semanais para regras de data.

## CalendarScroller

Área rolável e superfície do calendário.

Contrato: children e atributos/ref de div.

Cuidados: Contém as grades largas, preserva overscroll e limites do shell. O produto escolhe nome/tabulação se a região precisar de acesso direto por teclado.

## ScheduleCalendar

Calendário composto com semana, mês e agenda compacta para telas estreitas. A navegação e os corpos são componentes React privados explícitos.

Contrato: view, days, events, slots, navigation e onOpenEvent; onSlotClick/onSlotSelection e timeRange quando há seleção de horários. Datas e IDs já vêm preparados pelo produto.

Cuidados: o produto mantém fuso, disponibilidade, regras de duração, consultas e persistência. A UI mantém expansão, foco e seleção por ponteiro/teclado. A agenda compacta usa os mesmos dados. Preserve eventos sobre o comando do dia, datas fora do mês, slot indisponível e seleção em intervalos de meia hora. O novo contrato entrou da entrega paralela de calendário já adotada no staging do Teacher; não substituir por cópias antigas ao atualizar a dependência.
