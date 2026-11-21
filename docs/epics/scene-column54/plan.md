# Shared presentation-media column

The TrialA1 park header spans an expanded1120px column while its4:3 image is limited by height, leaving a narrower painted scene centered inside a wide image box. Heading and media sizing need one layout contract.

- Extend existing SlidePage.width with an optional object containing mediaAspectRatio; all preset string values remain compatible.
- Fit the common header/body column from the shared presentation height cap and intrinsic image ratio. Centralize the existing54cqh/32rem bounds in foundations and consume them in SceneExplorer and SlidePage.
- Respect available width and the existing expanded ceiling. Split and questions layouts continue to span the entire composition. Invalid geometry falls back safely.
- Adopt on TrialA1 park using its verified1200×900 asset metadata. Preserve scene, markers, audio, page IDs, identities, gestures and unrelated layouts.
- Cover valid/invalid geometry, default and multi-column compatibility in focused source tests/stories. No browser, screenshots, playback or broad suite; human visual review remains pending.
- Build the shared package/API and committed material artifact once, then one Teacher build and one verified staging publication.

State: source complete. Sixteen SlidePage layout tests passed, including all seven prior width presets. Root/header/type spacing source, the renderer and scene geometry are preserved. The adjacent SceneExplorer suite passed8/11 and exposed three pre-existing callout/audio failures; its production behavior and fixture remain byte-identical to baseline53. These findings are recorded separately without changing their assertions. Package build and deliberate API snapshot update passed; committed export and staging receipt pending. No new media or production work.
