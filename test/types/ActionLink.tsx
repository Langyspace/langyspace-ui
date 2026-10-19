import { ActionLink } from '../../src'

// Compiled by typecheck; these examples are not executed as runtime tests.
export function actionLinkTypeExamples() {
  // @ts-expect-error href é obrigatório
  ;<ActionLink>Sem destino</ActionLink>
  // @ts-expect-error links canônicos não possuem disabled
  ;<ActionLink disabled href="/destino">
    Desabilitado
  </ActionLink>
  // @ts-expect-error links canônicos não possuem loading
  ;<ActionLink href="/destino" isLoading>
    Carregando
  </ActionLink>
  // @ts-expect-error links canônicos não possuem icon-only
  ;<ActionLink href="/destino" iconOnly aria-label="Abrir">
    <svg />
  </ActionLink>
  // @ts-expect-error ActionLink não é polimórfico
  ;<ActionLink as="button" href="/destino">
    Polimórfico
  </ActionLink>
  // @ts-expect-error links não expõem ações destrutivas
  ;<ActionLink href="/destino" variant="danger">
    Excluir
  </ActionLink>
  // @ts-expect-error links canônicos usam forma pill
  ;<ActionLink href="/destino" shape="rounded">
    Forma local
  </ActionLink>
  // @ts-expect-error brand é um variant, não um segundo eixo tone
  ;<ActionLink href="/destino" tone="brand">
    Marca
  </ActionLink>
  // @ts-expect-error cor pertence aos variants semânticos
  ;<ActionLink color="red" href="/destino">
    Destino
  </ActionLink>
}
