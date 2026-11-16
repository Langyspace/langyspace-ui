# A1.03–A1.06 interactive materials

Continue the reusable material work in PR #42 with four current lessons and a navigable materials catalog. Keep lesson content in Storybook fixtures; shared package components remain product agnostic. Do not change the approved A1.01 lesson or its scenes.

## Scope and acceptance

- Preserve each current prototype's ordered pages, exercise content, answers and relevant interactions.
- Reuse SlideDeck, SlidePage and existing exercise contracts; keep catalog orchestration private to stories.
- Generate contextual exercise scenes in the A1.01 art direction. Save complete prompts, semantic targets, alt text, page use and asset provenance alongside each lesson.
- Keep responsive widths, keyboard controls, accessible feedback and theme tokens.
- Present the lesson list with explicit availability and direct access to implemented lessons.
- Root owns final focused verification, comparable visual evidence and one coherent commit/push on the isolated feature branch. Do not merge, change the original PR #42 branch, publish packages or deploy portals.

## Coordination

The orchestrator owns `stories/materials/shared`, the catalog, shared package source, API and manifests. The A103/A104 executor owns only those two lesson directories; the A105/A106 executor owns only those two. Root coordinates generated images and final validation. Dependencies are requested from their owner before editing.

## Reference boundary

The aggregate Claude artifact Langy Materiais (`ac20bc57-8c42-4611-ba9e-0bf5c49f5592`, version `1794858229-e02e`) was pulled with verified hashes for the catalog list. Its lesson files are historical fallback sources. A1.05 was obtained through the official HTML export; A1.03/A1.04/A1.06 were downloaded through a local read-only wrapper over the same CLI after normal artifact discovery returned HTTP404. Those three record `manifest_verified: false`. The wrapper's A1.05 result matched the official export after injected runtime removal; this does not confer export/manifest verification on the other downloads. A1.05 implements At the street market and A1.06 implements My home and my pet, without substituting historical aggregate content. Exact downloaded-byte hashes are retained in the technical plan.

## Delivery evidence

The implementation contains 69 pages and 44 generated contextual images. Central TypeScript, scoped ESLint and bounded browser verification passed. The browser covered both 1280px and 390px, including images/overflow, Notes, catalog filters and Pet notes Mia locations/hide. The 294-file evidence/report set contains 138 matched before/after pairs and additional state captures. Human visual review remains pending before any merge.

Visual gate review: pending human.
