# Material learner identity46

Direct rendered impact: shared You portraits/names and TrialA1 greeting. UI base6b4cc954, Teacher baseb7771da4. Worktree isolated outside iCloud because original files are dataless; original worktree untouched.

1. Extend LearningDialogue with an optional learner identity prop and semantic learner lines, retaining You when photo/name are absent or image fails. Avatar reports image failure through an optional callback.
2. Shared material adapter requests learner context once per material from the matching same-origin parent/source/key. All dialogue consumers use this adapter. Fictional model speakers remain authored.
3. Teacher resolves an explicitly selected owned lesson or the unique current occurrence, including recurrences. Ambiguous/group/unknown/invalid contexts remain You. No-photo learners remain You. Only firstName/avatarUrl cross into the material; never IDs, email or schedule.
4. TrialA1 greeting uses native bubbles, authenticated teacher name/photo, learner identity and existing bulb/model controls. Preserve the three questions/six turns and existing content/media.
5. Package/API/material export and Teacher staging build; no broad QA/browser/screenshots/playback/tests per current delivery policy. Add source fixtures and update guidelines. Draft visual PR, no merge/production.

Security: auth/route-bound state clears on session/search/lesson changes; context checks parent window/origin/version/key/source; pending requests cannot overwrite a newer context. Ended current lessons expire at their boundary; focus refreshes metadata. Profile image failure falls back to You. No personal data in query, logs or storage.

Acceptance: all maintained dialogue consumers gain the same opt-in identity prop; no regenerated media;14 catalog keys/covers and prior sounds/Notes/focus/gestures preserved. User owns runtime/visual review. Next: implement product resolver and shared UI.
