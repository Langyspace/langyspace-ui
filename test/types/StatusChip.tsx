import { StatusChip } from '../../src'

// Compiled by typecheck; these examples are not executed as runtime tests.
export function statusChipTypeExamples() {
  // @ts-expect-error cores locais devem ser mapeadas para significado no callsite
  ;<StatusChip tone="pink">Status</StatusChip>
  // @ts-expect-error color não é um segundo eixo visual
  ;<StatusChip color="red">Status</StatusChip>
}
