# Progress

Implemented private guarded native playback recovery and source ownership cleanup in the UI Library. All prepared scene/recording adapters share it; VoiceMessage DOM audio and the ringtone engine are outside this change. Public presentation/API, recordings and copy are unchanged.

Validation: 16 focused unit tests passed; TypeScript noEmit passed. Actual Chromium 1440x900 and WebKit 390x844 passed all six clips, page reentry (6 live source owners after 60 allocations), actual playback after injected first HTTP503, persistent failure (exactly two native play attempts), pending replacement and exit cancellation. WebKit media requests report a different resourceType than Chromium; the fixture intercepts actual .mp3 requests, excluding Vite ?url modules. Earlier fixture failures were corrected without weakening actual playback/retry assertions. No client runtime exceptions were observed.

Cold baseline clips also play, so the exact user-session trigger is not proven. Confirmed shared weaknesses are unrecovered transient loading errors and inactive prepared buffers retained until unmount. No audio was regenerated. Next: qualified neutral export, exact Teacher-only staging adoption, receipt and live verification.

Library bundle/declarations also built. The compatibility report adds only the two new private transport declarations; all 181 public values and 299 public types remain unchanged. No candidate is packed or adopted by a product; Teacher keeps the previously verified practice89 package. Neutral material publication compiles the corrected source directly.
