# Experimental B2 · Work and life

30-minute teacher-led conversation. Eight continuous sections move from optional language support to learner initiative. One specific title and one functional subtitle per section. Personal choices have no correctness feedback. The seven original dialogue lines are preserved for live reading; no valid B2 recording was found, so no playback affordance is included.

Canonical content: `stories/materials/TrialB2/TrialB2.content.json`; presentation and state: `TrialB2Lesson.tsx` +`TrialB2.styles.ts`. Reuses MaterialTheme, LessonNotes and LessonNotesTrigger. The picture interaction is a documented source adaptation of UXLab index.html HS/drawScene/openHs (lines861–883, SHAfd549223bc88aff0caeb73f9e6c8f810bb61e3d97ef2e92364800246ea28b1eb), not an imported monolith.

Approved Ana-working image reused byte-for-byte from the18/11 final A2 image package. No image oraudio generated. HTML is produced in isolation with Vite SSR, React renderToString and ServerStyleSheet; no global bundle or shared source has been rewritten.

Checks: real Chrome onReact/SSR at1280×900,1280×650,390×844,320×844; all8sections, overflow/image geometry, selection, disclosures, Notes persistence/focus and native scrollkeys. Final image-marker adjustment has focused geometry/contrast verification;106text samples, minimum5.2487:1. TypeScript scope is onlyTrialB2+transitive imports with normalVite client asset declarations.

Central integration remains responsible for catalog/router patch, UXLab exp-b2.html/index patch, commits, PR evidence and staging. No commits, merges, deployments or CI were triggered by this material agent. Keep the featurebranch and unrelated changes intact.

Visual gate review: pending human
