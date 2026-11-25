# Video101 — A1.01 local review

Request: update the materials guideline and implement the first YouTube activity in A1.01 for local review. Direct impact: new video page and canonical VideoExercise inline/source variation. No hosting, package publication or Student data writes.

Use the existing SlidePage two-column questions slot and QuestionList, four authored questions, ordered hint footer and full answers. Teacher controls the shared screen; student responds orally. Reuse VideoExercise rather than a lesson-specific frame. Preserve existing staged demos and all earlier pages/IDs/media. Maintain 50 minutes, including opening and free conversation. New page follows Introduce yourself and precedes Meet someone new.

Source: British Council | English, Meeting new people — what to say in English, https://www.youtube.com/watch?v=HooNbcbgi9U ; corresponding publisher transcript https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people . Author captions observed through the browser, 25Nov2026: dialogue begins0:59, Yuna welcomes Vanya1:30, presenter returns1:33. Excerpt59–93seconds. No downloaded video or copied full transcript. Spoken clip identities stay distinct from Langy characters. Last question is explicitly an example, not a factual answer.

Canonical player uses official YouTube IFrame API with origin/referrer, native controls, no autoplay, cue/load object with both excerpt bounds, replay and an optional loop toggle. Stop/destroy on inactive/unmount; errors offer the original source. Never hide ads/branding or advance via wall-clock timers. Provider keyframe timing is approximate. New optional VideoExercise props are additive; existing media/page/onPageChange call sites remain valid. Player implementation stays a private companion of VideoExercise.

Checks: focused player lifecycle/bounds/errors + A101 questions/timing test; source/declaration build and deliberate API snapshot review. One representative local browser interaction/layout check, including four revealed answers. No catalog-wide render/audit loop. Save local screenshot and leave the new page open. Product owner reviews visual/playback suitability; CI and deployment are not requested.

Tasks: [x] guideline and shared player; [x] lesson adoption; [x] focused checks/API; [x] browser and handoff.
