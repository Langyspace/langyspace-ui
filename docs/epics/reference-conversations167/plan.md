# Reference and conversation continuity167

## Scope and user goal

C1.11 still made the learner infer how two anonymous messages related to Teacher/You. The owner asked to connect the reference and the actual dialogue, then find similar disconnected activities. This is a content and presentation revision, not new audio, images or a lesson expansion.

Keep the existing Montserrat/Space Grotesk type roles, material theme, two-column layout, native reference list and canonical Teacher/You bubbles. Teacher controls a shared screen; the learner participates orally. Add no extra navigation or interaction.

## Review and findings

The Course inventory contains 140 activities across 53 maintained sources. This delivery semantically reviewed its 32 reference-based live conversations and corrected two related C1.11 application activities. It does not claim a new visual audit of every material.

- All 32 conversations now state their specific situation/participants or their discussion purpose.
- 20 personal conversation blocks were revised; 27 reference presentations or data sets were clarified.
- Five reference selectors no longer hide data needed by the question: building rules (A2.07), both accommodation offers (A2.10), three housing options (B2.08), the three school-phone uses (B2.12), and both course offers (C1.06). Selection remains for a recipient or person when it has a genuine function.
- C1.11: the learner’s sent message, intended meaning, and Teacher’s misunderstanding use the same roles as the bubbles. The first spoken question quotes “quick reply”; the remaining questions build on the offered deadline. Related mediation/reply prompts distinguish the sender from the person checking the figures.
- A2.07: the unsupported party-after-ten question is replaced by the actual pool closing rule. Grill/pool/bike rules remain visible together.
- B1.03/B1.05/B1.09: the digital ticket, repair worker, and bike-report roles/data are directly available to the questions.
- B2.01/B2.02/B2.04/B2.08: restore relevant source facts (map use and dinner time, review dependency, permitted access, and work-space/budget needs).
- B2.05/B2.06/B2.10/B2.11: the hotel charge, repair time, quiet-room offer, and late-question objection are expressed before asking for the learner’s response.
- C1.02/C1.03: keep attribution and uncertainty explicit. C1.04/C1.08/C1.12 map the opposing needs to You and Teacher instead of anonymous people.
- C1.05: the photograph already establishes the scarf was at the café before departure. Remove the false instruction to preserve ambiguity; practise the corrected narrative timeline.
- C1.07/C1.10: make the recipient’s known facts/action explicit and distinguish provisional bookings and attendance replies from receipt acknowledgements.

## Reuse and renderer correction

Only the existing Course data and canonical material components are used. Switching B2.08 to the existing comparison variant revealed an extra first-option facts block after the comparison captions. CourseActivity now suppresses only that duplicate block for comparison activities. Its metadata remains inside each caption, including the five pre-existing comparison instances. No public props, styling recipes, playback, navigation or help controls were changed.

## Validation and evidence

- Bounded authorship check passed: all changed question IDs, page IDs, order, images, recording texts and unrelated page/activity data match baseline `cd83aeedced5a6874f9b44285cd7e8a8cf566f53`. The four flattened references had no active image; B2.08 retains all three pictures and offers.
- Targeted semantic assertions passed for the pool rule, late-question concern, C1.11 message wording, and resolved scarf photograph. The renderer source differs only by the duplicate-block condition.
- Browser: C1.11 checked at the actual 572×630 preview and in a separate 1280×720 presentation tab; all three progressive hints were opened, then inspected in dark/light themes. A2.07’s simultaneous rules and B2.08’s three-image comparison were verified at 1280×720. Temporary viewport experiments were reset; temporary review tabs were closed. The owner’s C1.11 preview remains open with guidance unrevealed.
- The browser’s viewport override did not resize the visible pane and the CDP screenshot attempt failed; no screenshot or full-width claim is based on those attempts. Final desktop evidence comes from a normal hidden 1280×720 preview tab, with overrides cleared.
- Before C1.11 desktop evidence is reused unchanged from166 (same baseline source). Its narrow pair was captured live. The comparison duplicate pair records an intermediate state with the new B2.08 data before and after the renderer guard; it is not a published baseline.
- Focused checks only; no broad suite, package/API build, new media, merge or Hosting deployment. Human review remains pending.

## Delivery

- Update the existing draft PR70 with matching evidence; preserve its other pending work.
- One scoped feature-branch push; capture the exact-SHA workflow link once without inspecting status or logs.

Visual gate review: pending human
