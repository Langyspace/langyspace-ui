# Slides

## SlidePage

`cover={{src, alt}}` adds approved artwork in the same introduction column. `coverPlacement="before-heading"` preserves the default artwork-before-title order; `coverPlacement="after-heading"` places the heading and subtitle above the artwork in both DOM reading order and presentation. In split layouts the latter keeps a compact gap above the cover and removes its trailing margin. With `layout="split"`, the cover/title sit to the left and consumer-owned review content to the right; this opt-in composition uses equal columns and the existing compact stacking breakpoint. Without a cover, prior split proportions and all presets remain unchanged. Cover-only introductions use the normal stacked layout with no review content. The cover preserves its image ratio and uses contain, not cropping. All14 lesson openings and the three trial closing pages explicitly select after-heading; other SlidePage consumers retain the default.

Shared page capsule for interactive materials. It owns the eyebrow, heading, instruction, tool row, content width and vertical centering. `width="focused"` uses the reference's 600px column; `standard` uses the measured 760px listening column; `wide` uses 1040px. `tone="inverse"` provides the dark introductory slide. Content expands naturally on narrow or short viewports.

`expanded` reuses `slides.introductionWidth` (70rem) for wider stacked compositions such as a phone beside an activity board. `reading` uses 900px, `exercise` 880px and `conversation` 960px, matching the current reference's distinct compositions. `density="compact"` reduces the gap between heading and body. An optional `lead` slot precedes the exercise heading, supporting a semantic lesson introduction without turning it into the exercise title.

Material titles use Space Grotesk and the introduction's accent uses Instrument Serif italic; body text remains Montserrat. These are scoped `theme.slides` font-family tokens. The catalog self-hosts them through the pinned `@fontsource` development packages. Consumers load these font families through their normal font setup; no global stylesheet is implicitly installed by a component.

Use the existing Card (or an exercise's own panel) inside the content slot when that exercise needs a bordered capsule. The outer slide itself has no ornamental border or rounded container in the Claude reference.

The consumer supplies content and actions. Do not use this component for fetching a lesson or selecting an exercise type.

`columnAlignment="center"` vertically centers the content and its `questions` slot
within their shared row. The default remains `start` for existing lessons. Use the
centered pairing for a device/board beside a shorter live conversation; this does
not move the slide heading or change its width.

## SlideDeck

Sequence of `{ id, label, content }` pages. Give its parent an explicit available height. In default pages mode, each page occupies that viewport and SlidePageFit measures and fits its complete content. The shared controller owns wheel, touch and keyboard navigation; CSS snapping and nested reading scroll do not compete with it. Pages remain mounted to preserve exercise state. Explicit continuous mode keeps native scrolling and natural content height.

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

`onBack` supplies a product-owned exit action: when provided, the header Back button stays visible on every page and calls that action instead of stepping to the previous page. The library does not decide the destination. MaterialSlideDeck uses it to focus the original same-origin catalog tab when available, preserving its filters, with same-tab navigation when the tab closed, moved away or cannot be focused. The standalone preview uses its local catalog. Without this prop, existing previous-page behavior is preserved.

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

The legacy controlled panel remains available with the same props. Canonical material Notes now opens the separate window described below; it does not render an editor inside the presentation. The panel is360px wide/440px high at most, adapts to its material viewport and safe areas, and uses themed surface/border/editor tokens. The reference pencil/Back controls and3px scroll progress retain their measured metrics.

Active-page reporting follows 60% viewport coverage while progress follows actual scroll distance. All four arrows directly navigate pages; resize keeps the current logical page anchored. Wheel ownership covers the viewport and header, without a document listener or interception of unrelated overlay editors. A fresh vertical gesture advances on its first nonzero packet. Within a continuing trackpad stream, two renewed rising packets after decay recognize another drive without requiring the inertia to stop; no absolute delta/strength threshold is used. Inertia alone does not repeatedly advance. Explicit line/page mouse-wheel ticks and slower equal integer pixel ticks remain responsive. A page change releases focus from a departing page’s field to the viewport, retaining its value and keeping subsequent arrows useful; keyboard editing inside the current field remains native. Continuous mode stays browser-owned.

The standalone material boundary accepts a trusted `langy.material.focus` message (version1, same origin and parent window, exact material key and producer commit). It focuses the deck context after its host reveals the frame, preserving an active editor. This optional message complements the existing pinned ready protocol; untrusted or stale messages do nothing. The library itself installs no document keyboard handler. Canonical materials store separate validated page cursors and notes drafts by material key; unknown saved page ids fall back safely, and explicit initial pages take precedence.

## SlideNotesWindow

Controlled, full-window notes editor shared by materials and their hosts. It reuses the existing
SlideNotes header, textarea, actions and effective theme, with a visible context label, truthful
status/error, optional context choices and explicit save/reload/close callbacks. The component owns
only presentation and editor focus: it never opens a browser window, reads storage, resolves a
lesson, authenticates a user or saves data. `readOnly` disables editing/clearing/saving; `saving`
prevents repeat submissions while allowing continued typing. Errors are associated with the editor.
Load fonts and the existing GlobalStyles through the consumer's normal boundary.

The Teacher consumes this same component through its pinned neutral `view=notes` bundle at the
protected `/materiais/anotacoes` route. Teacher owns the correct scheduled lesson, authenticated
read/save and concurrency. Private text is exchanged only with that dedicated editor frame, never
with the presentation. Shared material Notes launch a named popup window on the actual user click;
a blocked popup displays a warning without opening an inline editor. Browser preferences may still
choose a tab. In standalone or lab previews the separate window is explicitly a browser-local
draft, not cloud saving. Legacy material-only storage keys are preserved and never imported into an
unknown teacher or lesson.

Coverage: Slide/SlideNotesWindow stories exercise controlled/read-only/saving/error and long narrow
content; focused tests cover controlled actions, native readonly/disabled/status contracts and SSR.
Native preview evidence covers eight material wrappers at desktop/mobile opener widths (sixteen
actual windows), named-window reuse, local draft recovery and keyboard isolation from the deck.
Cloud persistence requires the separate authenticated staging qualification; preview evidence does
not establish it.

### SlidePage — dialogue comprehension (feedback37)

`questions?: ReactNode` places comprehension beside the main body: dialogue left, questions right. `questionsTitle?: ReactNode` defaults to Questions. With this slot the content expands to the wide presentation width and stacks at the existing medium container breakpoint. Both columns are normal page content, without an inner scroll area. Keep the existing title/titleAudio/instruction slots, and distribute questions according to the meaningful parts of a long dialogue. Do not render a duplicate standalone question page. The A103 Storybook examples expose real content, reveal controls and narrow-container states; product-owner review remains pending.

## A shared column for presentation media

For a single bounded scene, `SlidePage width={{mediaAspectRatio: imageWidth / imageHeight}}` constrains the common header/body column to the media’s fitted width. Use intrinsic asset dimensions and `SceneExplorer imageSizing="presentation"`. Both components consume the same presentationMedia height bounds from foundations; heading and image therefore share a width before the image loads, without DOM measurements or local margin adjustments.

The column remains centered, respects available horizontal space and the existing expanded width ceiling. Invalid/zero/non-finite ratios fall back to the standard wide column. Existing width presets remain compatible. Question grids retain their full-width heading above the composition. Split introductions retain their intentionally separate heading column beside the exercise. Media fitting does not alter either layout. The TrialA1 park page is the first adoption; no unrelated page migration is implied.

`SlideAudioAction contentKind="audio"` usa Play/Pause/Continue audio para narração de leitura. O padrão dialogue preserva os rótulos existentes e os mesmos estados/controle de reprodução.

`SlideAudioAction.onRestart` adds an optional neutral restart icon beside play/pause. The consumer restarts the full recording or sequence from zero; this action never toggles pause/resume. Both controls share the same disabled state. ReviewedLesson provides it for its recorded title audio.
