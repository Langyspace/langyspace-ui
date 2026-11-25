# Personal guided conversations — A1.01

Base: 0652da93a04bfca6bae6f9cc9d7042a593b98d44. Direct rendered impact; feature branch feat/personal-conversations111. Local preview and draft source PR only. Inherits the existing draft source work; no product/package publication or deployment.

## Changes

- Insert Let's talk about you! after the fixed-gap model and Introducing someone immediately after it. Preserve the supplied nine/seven alternating turns, questions and open personal content. Terminal periods in bubbles follow the existing authored-copy convention; internal punctuation remains.
- LearningDialogue.parts accepts optional kind:open fields alongside the original fixed reveals. gapValues/onGapChange keep open text controlled, independently editable and ungraded. The same compact bubbles, Avatar namePosition=below and existing default/fixed-gap behavior remain. The fields compose TextInput and native keyboard semantics, with no fabricated correct answers or participant recordings.
- MaterialPersonalDialogue consumes the existing Teacher and learner contexts. Teacher uses the shared first-name/photo resolver; the learner uses the existing photo+first-name contract or You. Values are in memory only and cleared on participant replacement. The product remains responsible for authenticated profile/lesson resolution; standalone localhost has the expected Teacher/You fallback.
- The new custom pages declare one semantic column through ReviewedPage.columns. Defaults for every existing page stay unchanged; there is no page-specific width override.
- Free conversation instruction: Get to know each other: introduce yourself.
- Third homework prompt: Send me a voice note introducing yourself. The existing Student exercise previews and assignments otherwise remain.

## Opening correction

The previous final answer omitted studentPortalOrigin from its localhost link. Standalone deliberately requires an allowlisted Student origin as well as a valid material key; no material was removed. Keep the guard intact. Correct local link:

http://127.0.0.1:8832/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space&page=s_personal111#a1-01

## Verification

Eight focused tests passed: open/fixed gaps coexist, arbitrary personal values are accepted, two context identities are bound, participant replacement clears answers, and existing learner fallbacks/sequential support remain. Source TypeScript and declaration/API checks passed (184 values,307 types); additive nested open-part/controlled-value contract only. No new media/provider calls. Browser verified the corrected link reaches the authored page and native fields accept morning/Brazil without an invalid state. These were demonstration inputs, not claims about real participant data; final preview resets them.

Product-host authenticated identity runtime and human visual review remain pending. Pre-existing README107 and A101.stories.tsx changes stay untouched and unstaged.
