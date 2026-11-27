# Requirements

- Header photo/initial menu selects or clears a teacher-owned student, with loading/error/empty states. No selection is the default. Names/photos come from authenticated host.
- Next scheduled occurrence starts at or after now; include future recurring lessons, canceled overrides and ownership handovers; no arbitrary tomorrow-only cutoff. Show a clear state if none exists.
- Popup scratchpad is writable and memory-only. Never transfer its content silently into a lesson. Bound notes use the existing editor, 900ms autosave, save/conflict handling and attendance service.
- Flush a dirty lesson before changing context; preserve scratchpad across switches. Reject stale iframe messages and async responses. A failed save prevents changing the note target.
- Keep avatar sizes, menu keyboard/focus behavior, light/dark tokens and existing header controls. Inspect desktop and narrow layouts. No new backend/data permissions.
