# Requirements

- Existing required component props and all export names remain supported. An optional `closeIcon`
  content slot preserves the canonical accessible close button and dismissal behavior.
- Existing createTheme/ThemeProvider contracts own action colors, type, padding, borders and states.
  Default values preserve existing consumers; no product-specific component or theme branch in UI.
- Dialog supports native component tokens for backdrop/panel/header/title/description/body/close
  position and mobile sizing. Consumers do not override private markup/classes.
- Canonical IconButton stays square on `sizes.control`; content-driven Button sizing uses size
  paddingY (default 0px) independently. Default control sizes must not drift.
- Preserve keyboard names, focus trap/return, Escape, blocked dismissal, loading/disabled behavior,
  reduced motion, Drawer behavior and UI 4.1 authored-style enforcement.
- Add focused default/override tests and stories, deliberately review additive declaration changes,
  and retain before/after browser evidence at 390/1440.
