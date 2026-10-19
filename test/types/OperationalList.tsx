import {
  OperationalList,
  type OperationalListItemAction,
  type OperationalListProps,
} from '../../src'

// Compiled by typecheck; these examples are not executed as runtime tests.
export function operationalListTypeExamples({
  columns,
  items: people,
  primaryColumn,
}: OperationalListProps<{ id: string }>) {
  // @ts-expect-error quick actions require an icon
  const invalidQuick: OperationalListItemAction = {
    id: 'quick',
    label: 'Quick sem ícone',
    onSelect: () => undefined,
    placement: 'quick',
  }
  const invalidPrimary: OperationalListItemAction = {
    id: 'primary',
    label: 'Primary danger',
    onSelect: () => undefined,
    placement: 'primary',
    // @ts-expect-error primary actions do not accept danger tone
    tone: 'danger',
  }

  void invalidQuick
  void invalidPrimary

  // @ts-expect-error accessible-name sources are mutually exclusive
  ;<OperationalList
    aria-label="Uma fonte"
    aria-labelledby="outra-fonte"
    columns={columns}
    getItemKey={(person) => person.id}
    items={people}
    primaryColumn={primaryColumn}
  />
}
