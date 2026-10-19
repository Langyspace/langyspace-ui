import { Button } from '../../src'

// Compiled by typecheck; these examples are not executed as runtime tests.
export function buttonTypeExamples() {
  // @ts-expect-error icon-only pertence a IconButton
  ;<Button iconOnly>×</Button>
  // @ts-expect-error Button rotulado possui forma pill canônica
  ;<Button shape="rounded">Continuar</Button>
  // @ts-expect-error brand é um variant, não um segundo eixo tone
  ;<Button tone="brand">Matrícula</Button>
  // @ts-expect-error cor pertence aos variants semânticos
  ;<Button color="red">Continuar</Button>
}
