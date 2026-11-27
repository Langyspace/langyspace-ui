# TaskBoard

Read-only work evidence: status columns contain task titles and optional circular assignee avatars. The consumer supplies `columns`, each with stable `id`, `title` and `cards`; each card has `id`, `title` and optional `assignee: {name, imageUrl?}`. Native Avatar owns photo fallback. Names remain accessible and available as a tooltip without extra visible labels.

The component does not drag tasks, save work or infer status. It wraps columns on narrow containers and inherits the supplied theme. Developer-English lesson data and learner identity stay in the lesson, not the UI Library.

Stories: three columns, two columns, narrow. Tests cover status grouping, image fallback, read-only behavior and SSR. The local Developer-English daily/blocked-demo pages provide the browser fixture.
