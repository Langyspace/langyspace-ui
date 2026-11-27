# Material framing follow-up159

Scope: pending medium/high feedback and image framing regressions like A1.07 passport. Baseline UI53d7f2f6; preparation continues in draft PR70. No Student data writes, backend changes or Hosting publication.

## Completed

- Inspected the 31 JSON-authored flashcard decks (673 cards, 300 atlas references) by source image, authored region, alpha and vocabulary target; resolved every image binding including shared maps and countries.
- The focused homework media check also resolves the three code-authored developer decks, totaling 733 flashcards, plus speaker portraits across all65 prepared homeworks. This checks bindings/content, not a browser layout matrix.
- Applied the approved vocabulary windows to24 homework bindings in A1.07/A1.10/A1.11/A2.11/B1.11 (passport included). Seven non-square legacy Frontend bindings now use their original rectangular views without square distortion.
- Exported those31 bindings to25 deduplicated whole WebP views, retaining exact decoded source-window RGBA pixels, without resize, new artwork or prompt changes. See `stories/materials/Practice/native-views159.provenance.json` for original bytes/hash/coordinates, immutable output paths and checksums. The original atlases remain unchanged.
- Whole images omit imageRegion and fit the existing write AND read Student contracts (grid<=8, no spans). No backend expansion is necessary. This resolves the adoption dependency documented in the previous passport-only follow-up.
- Corrected the confirmed small cut in A2.12 split the bill; source image and audio preserved. Stories include relevant vocabulary states.
- Reconciled high items24/28/38/41 against the adopted157 export and provenance: bag, six, All right and Great point to their corrected bytes. Item33 keeps retry restricted to before playback; A1.12 item27 keeps the responsive Quiz preview.

## Checks reused/performed

Agent:12 vocabulary bindings and A2.12 opaque bounds. Root: source-window RGBA equality for all25 exports. Focused Vitest authoring files FlashcardsMinimum124 and HomeworkMedia131:3/3 passed. The preservation test restores only recorded old media fields for the old baseline hash, verifies current immutable image bytes, and still protects all IDs/text/examples/audio; HomeworkMedia131 validates actual current bindings. Diff check passed. No broad suite, package/API build, acoustic check or browser rendering performed.

## Still open

- A2.03/A2.12 blur/glow: not confirmed; no exact card/print supplied. Native alpha previews alone are not evidence of visible halos.
- Detached browser window: not reproduced; current native links preserved, no speculative browser changes.
- Human visual review and comparable captures remain pending; PR stays draft. Local HMR is not a final-SHA deployment artifact.

No merge or staging/production deploy authorized or performed in this follow-up.
