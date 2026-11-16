# Slides

## SlidePage

Shared page capsule for interactive materials. It owns the eyebrow, heading, instruction, tool row, content width and vertical centering. `width="focused"` uses the reference's 600px column; `standard` uses the measured 760px listening column; `wide` uses 1040px. `tone="inverse"` provides the dark introductory slide. Content expands naturally on narrow or short viewports.

Use the existing Card (or an exercise's own panel) inside the content slot when that exercise needs a bordered capsule. The outer slide itself has no ornamental border or rounded container in the Claude reference.

The consumer supplies content and actions. Do not use this component for fetching a lesson or selecting an exercise type.

## SlideDeck

Scrollable sequence of `{ id, label, content }` pages. Give its parent an explicit available height; the deck fills that height and keeps the portal's surrounding shell stationary. Every page occupies at least its viewport and can grow to fit long content. Native scroll snapping supports mouse, touch and keyboard, while mounted pages preserve exercise state.

```tsx
<SlideDeck
  label="Aula A1.01"
  onPageChange={(id) => stopAudioForPreviousPage(id)}
  pages={[
    {
      id: 'listening',
      label: 'Listening Practice',
      content: (
        <SlidePage
          title="Listening Practice"
          instruction="Ouça o áudio da Kim e responda."
        >
          {listeningExercise}
        </SlidePage>
      ),
    },
  ]}
/>
```

`pageId` requests navigation to an existing id; `onPageChange` reports the page reached by navigation or native scrolling. Stable ids are required and must be unique. Products own URL state, persistence and media cleanup; there is no implicit storage or autoplay.

The previous-page button returns focus to the scroll region. PageDown/PageUp and Home/End are handled only when that region is focused; child form controls keep their native keyboard behavior. Reduced motion is respected. No document-level scroll/keyboard behavior is installed.

Theme values live in `theme.slides` and can be overridden through `createTheme`. Source: [current A1.01](https://claude.ai/artifact/KX94fLxvBjhqmz8VmHpjgr), browser inspection on 2026-11-16, with local source provenance in the epic plan. New library components; teacher/student adoption is pending.
