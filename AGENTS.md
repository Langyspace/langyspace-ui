# langyspace-ui agent guide

## Project

- Shared React, TypeScript, Vite, styled-components, and Storybook component library; use `pnpm`.
- Keep components product-agnostic. Teacher, Student, Admin, and Cupom own their business behavior
  and compose this library's semantic primitives.
- Public source exports, generated package output, README examples, and the API snapshot form one
  compatibility contract.

## Always-on workflow

- Preserve unrelated worktree changes and public API stability. Inspect current stories, tests,
  exports, tokens, and downstream usage before changing a component.
- Classify rendered impact before acting: `direct` changes UI/copy/layout/interaction; `indirect`
  changes component contracts or behavior that can alter rendering; `none` has no plausible
  rendered effect.
- Direct/indirect work identifies component variants, states, content extremes, and widths and adds
  focused story/test coverage. Run the smallest local check that adds evidence; CI owns
  `pnpm run validate:ui`, broad Storybook/layout audits, and full suites. The product owner performs
  visual review.
- Every direct/indirect change uses a feature branch and a PR targeting `main`, never a direct
  push to the target branch. Prepare shared components here before opening adoption PRs in the
  products. Keep product routing, services, and domain behavior in their consumer repositories.
- Visual PR bodies use `.github/pull_request_template.md`: only `# Evidências`, `## Antes`, and
  `## Depois`, with matching before/after images of affected stories/states/widths. Product PRs
  additionally require every affected screen and relevant mobile/desktop state. Keep technical
  notes and validation in the work documents/CI. See [visual PR review](docs/visual-pr-review.md).
- Each visual PR requires explicit product-owner approval of its current revision before merge.
  Do not enable auto-merge or substitute CI for human review. Further visual edits require updated
  images and another review. Incomplete evidence keeps the PR in draft and the gate blocked.
- Every final handoff contains exactly one verdict: `Visual gate review: pending human` for rendered
  changes, `accepted by human`, `not applicable` with a concrete reason, or `blocked` with the
  failing surface.
- Medium/large work uses reviewed, resumable `docs/epics/<name>/` documents and one small task at a
  time. Tiny isolated changes still require inspection, focused validation, and diff review.
- Internal subtasks do not require individual pushes. Finish the smallest coherent user delivery,
  run at most two focused local checks (three only for high-risk changes), create a scoped commit,
  and push once to the feature branch for a visual PR, or to `main` for `none` impact. Reuse
  successful evidence while relevant inputs are unchanged; after a failure, rerun only the failed
  check. After pushing, do not poll, watch, or inspect CI/release logs
  unless the user explicitly asks or a failure is reported. Report the commit and that delivery was
  initiated without claiming publication completion.
- After a push, make at most one non-blocking lookup filtered by the exact commit SHA to capture
  workflow URLs. The final handoff must link the commit, test CI, and deploy CI/CD; reuse one URL
  when a workflow covers both. If a run is not visible on that first lookup, link the workflow or
  commit checks page and mark the run unavailable. Do not wait, poll, inspect
  status/conclusion/logs, or retry. For work without a push, state that CI and deploy were not
  triggered.
- Use one agent by default. For explicitly parallel work, give each subagent a bounded,
  self-contained brief with minimal history; subagents do not run full gates or monitor CI. Collect
  each result once instead of polling.
- After an approved PR merge or a direct nonvisual delivery, update the canonical local checkout:
  finish with `HEAD == main == origin/main` and a clean worktree. If it contains unrelated work, first
  preserve that exact state in a named recovery branch and persistent worktree, verify the snapshot,
  then align the local main. Never leave a completed delivery with a silently stale local main.
- While a visual PR awaits review, preserve its feature branch/worktree. Do not merge it merely
  to align the canonical checkout; a branch push is not a completed merge or release.

## Library contracts

- Product route-level pages, screens, views, and containers stay in their consumer repositories.
  Public components may be small or large: accept them when they express a stable visual or
  interaction contract reusable across products, including compound units such as `Chat` or
  `Calendar`. Consumers keep routing, fetching, domain state, business rules, and orchestration and
  inject data and actions through semantic props, slots, or callbacks. Judge ownership and reuse,
  not line count or atomic-design labels.
- Prefer semantic props and tokens over application-specific conditionals or one-off CSS.
- Preserve accessibility across interaction states, keyboard/focus behavior, labels, and disabled or
  loading variants.
- Update root exports intentionally. Never bypass `pnpm run check:api`; use `write:api` only after
  reviewing and accepting the compatibility change.
- Component changes normally require focused tests and Storybook variants. Public releases also
  require bundle and package smoke checks.
- Do not add an implicit global stylesheet requirement or rely on consumer import order.

## Progressive guidance

Use `.agents/skills/langyspace-ui-workflow/SKILL.md` for component/API implementation, visual or
interaction work, tokens/theming, Storybook/layout auditing, packaging, or release changes. Do not
load it for simple read-only answers or isolated documentation.

## Common commands

- Focused checks: `pnpm run typecheck`, `pnpm run test:unit`, `pnpm run test:storybook`
- API/package: `pnpm run check:api`, `pnpm run test:bundle`, `pnpm run test:package`
- CI-owned direct/indirect UI gate: `pnpm run validate:ui`
- Storybook: `pnpm run storybook`, `pnpm run build:storybook`
