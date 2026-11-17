# Slides

## SlidePage

Shared page capsule for interactive materials. It owns the eyebrow, heading, instruction, tool row, content width and vertical centering. `width="focused"` uses the reference's 600px column; `standard` uses the measured 760px listening column; `wide` uses 1040px. `tone="inverse"` provides the dark introductory slide. Content expands naturally on narrow or short viewports.

`expanded` reuses `slides.introductionWidth` (70rem) for wider stacked compositions such as a phone beside an activity board. `reading` uses 900px, `exercise` 880px and `conversation` 960px, matching the current reference's distinct compositions. `density="compact"` reduces the gap between heading and body. An optional `lead` slot precedes the exercise heading, supporting a semantic lesson introduction without turning it into the exercise title.

Material titles use Space Grotesk and the introduction's accent uses Instrument Serif italic; body text remains Montserrat. These are scoped `theme.slides` font-family tokens. The catalog self-hosts them through the pinned `@fontsource` development packages. Consumers load these font families through their normal font setup; no global stylesheet is implicitly installed by a component.

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

The previous-page button returns focus to the scroll region. PageDown/PageUp, arrow keys and Home/End are handled inside the deck, including after a toolbar or exercise button receives focus; editable fields and widgets keep their native keyboard behavior. Consumer key handlers can prevent navigation. No document-level handler is installed. An initial controlled `pageId` positions directly on its target to avoid intermediate snap pages feeding back into the consumer. Later controlled changes and navigation animate smoothly unless reduced motion is requested. No document-level scroll/keyboard behavior is installed.

The 56px navigation bar overlays the deck viewport, so each page retains the complete available height. `SlidePage` reserves that header space in its own padding. The progress indicator has a transparent track, and actions remain at the right edge, including on the first page. Product-specific page counters are optional consumer content; A1.01 follows the reference with Notes and Back only.

Theme values live in `theme.slides` and can be overridden through `createTheme`. Source: [current A1.01](https://claude.ai/artifact/KX94fLxvBjhqmz8VmHpjgr), browser inspection on 2026-11-16, with local source provenance in the epic plan. New library components; teacher/student adoption is pending.

`SlidePage layout="split"` places its lead and heading beside the exercise, and stacks them below the medium breakpoint. The default remains `stacked`. The introductory width is controlled by `slides.introductionWidth`. B1.01 demonstrates a lesson title/goal and review questions without adding a product-specific page component to the package.

`density="dense"` opts into tighter block padding on short desktop containers. Existing regular and compact page padding is preserved.

## Always-dark lesson materials

`materialDarkTheme` is an opt-in theme preset for immersive materials. Wrap a deck in styled-components’ `ThemeProvider` and give its parent a height. The canonical five lesson compositions apply this boundary internally, regardless of the OS color scheme; catalog and portal themes remain owned by their consumers.

The preset provides the dark slide canvas, panels, semantic fields, choices, feedback, grammar, role tracking and notes. Shared controls read the effective provider while preserving their defaults outside it. Phone canvas, bubbles and native player remain their original colors. Optional `voiceMessage.questionSurface`, `questionForeground` and `questionBorder` theme leaves style only the adjacent questions; omitted leaves use the device recipe, preserving existing themes. Nested layout providers must merge their parent theme.

The updated Claude shared theme uses #0B0B0C canvas, #1A1A1C cards and #F7F7F7 text. Soft pink is adjusted from #3A0F1C to #350A17 so small pink text meets AA contrast. This adaptation and source hashes are recorded in `docs/epics/material-dark-theme/`.

## SlideNotes

Controlled free-form notes for an immersive slide deck. Render beside the deck inside its positioned parent. Supply `open`, `value`, `onChange` and `onClose`; the consumer owns the trigger and browser persistence. Labels are configurable. The nonmodal panel focuses its editor when opened, supports Clear/close/Escape and restores the previous connected focus target when closed. Editing does not navigate the deck. There is no global storage, document keyboard handler or implicit theme/style requirement.

The canonical lesson composition stores separate browser drafts for each lesson and uses the same pencil trigger/panel in all five materials, including A1. Storage failures retain usable in-memory editing. The panel is360px wide/440px high at most, adapts to its material viewport and safe areas, and uses themed surface/border/editor tokens. The reference pencil/Back controls and3px scroll progress retain their measured metrics.

Active-page reporting follows60% viewport coverage, including oversized pages. Progress follows actual scroll distance and reaches100% at the final bottom. Long-page content remains readable before vertical page keys advance; horizontal arrow keys explicitly navigate pages. Resize keeps the current page and reading offset anchored. Native wheel/touch snapping remains browser-owned.

The standalone material boundary accepts a trusted `langy.material.focus` message (version1, same origin and parent window, exact material key and producer commit). It focuses the deck context after its host reveals the frame, preserving an active editor. This optional message complements the existing pinned ready protocol; untrusted or stale messages do nothing. The library itself installs no document keyboard handler. Canonical materials store separate validated page cursors and notes drafts by material key; unknown saved page ids fall back safely, and explicit initial pages take precedence.
