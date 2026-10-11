# Shared component quality

- Inspect the existing component, stories, tests, root exports, tokens, audit configuration, API
  snapshot, bundle budgets, and representative downstream composition before implementation.
- Design semantic, composable APIs. Keep domain labels, routes, billing states, and application data
  ownership outside the library.
- Cover meaningful variants and interaction states in Storybook: default, hover/focus where
  applicable, keyboard use, disabled, loading, invalid, selected, compact, long content, and narrow
  containers.
- Preserve accessible names, roles, focus visibility/order, hit targets, contrast, reduced-motion
  behavior, and native semantics.
- Prefer theme tokens and established primitives. Avoid duplicate controls, consumer-order CSS,
  broad global selectors, and styling contracts that require undocumented markup.
- Run one focused component test or typecheck according to the changed risk. For public API changes
  run `check:api`; update the snapshot only after deliberate compatibility review. Run bundle or
  package smoke locally only when packaging/release behavior changes. CI owns complete
  `validate:ui`, coverage, build, bundle, package, and screenshot layout checks.
- The product owner owns screenshot judgment. Never weaken an audit or budget merely to make a
  change pass; document and review intentional exceptions.
- Capture comparable before/after images for affected stories, states, and widths using the same
  sanitized fixture, viewport, and theme. Keep baseline/current SHAs in the work documents. Shared
  changes are prepared here before adoption PRs; those PRs require images of all affected product
  screens, including relevant mobile/desktop states, even when the intended layout stays the same.
- Every visual change uses a feature-branch PR to `main`. Its body contains only `# Evidências` and a table with `Antes` and `Depois` columns, with matching images side by side per screen/state/width and short labels. Each PR requires explicit
  product-owner approval of its current revision before merge. Do not enable auto-merge. Later
  visual edits require refreshed images and another review; missing evidence keeps the PR in draft.
  Follow `docs/visual-pr-review.md`; CI success does not replace human approval.

Successful local evidence remains valid while its relevant source, dependencies, fixtures, and
contracts are unchanged. After a failure, rerun only the failed check. Internal subtasks do not
generate individual pushes. Push once per coherent user delivery to the visual PR's feature branch
or the nonvisual target in `AGENTS.md`, then stop without monitoring CI or release. A feature-branch
push does not prove a merge or release; keep the human review pending.
