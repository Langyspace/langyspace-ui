# Correct instructional purpose165

Baseline: 70b5fbc2cf2568ef0d59cbc066a129725fb159e1. Direct rendered impact: header copy only. Owner clarified that standard guided conversation is active paired character interpretation, role reversal and then comprehension. Listen and read was the wrong instruction; the intermediate suggestion Listen and understand was rejected before any source adoption. Owner approved Practise the conversation and requested checking other titles for similar semantic mistakes.

## Scope and findings

- Standard character models: use Practise the conversation and explicitly assign learner Ana / Teacher Kim, then swap roles and answer the existing questions. Anna/Ben keep their actual names. Titles and subtitles only; all speech text, characters and recordings stay intact. Audio remains available as support.
- Fixed model gaps: retain Complete the conversation, but make the oral role practice explicit. Only mention comprehension if the page already has it. Experimental A1/A2 retains its approved model-only page and does not gain new questions.
- Real-person supported conversation remains distinct from fictional-character practice. Hotel, food orders, shopping, plans, symptoms, hypothetical offers and information requests do not all count as talking about oneself.
- Restore the purpose-specific imperative instructions on the 32 case-reference pages that had been collapsed to Discuss the situation. The shared facts/choices/map/chart renderer alone does not imply opinion discussion; reference facts support the teacher/student exchange.
- Third-person introduction and feedback are not autobiography. A1.06 s91 concerns an animal before the listening activity, so its numeric ID must not cause Respond to the message.
- Apartment comparison ends in a choice; neighbourhood comparison describes changes; the chart task produces a calibrated prediction. TrialA1 likes classification asks whether each item is liked, not which favourite to choose or why.
- Retain accurate vocabulary identification, image multiple choice, actual audio comprehension, actual reading, video questions, covers and closing instructions.

## Checks and review

One scoped authorship check restores only recorded header fields and confirms complete original JSON equality. Three manual compositions change instruction text/source imports only. Representative local before/after states: A1.01 model, TrialA1 likes, A1.06 animal conversation, A2.10 apartment choice. Reuse unchanged controls and layout coverage; no broad suite, new media, build or deploy.

The content guide, authoring playbook and canonical title table now define the task by learner action, evidence and sequence, not by component kind or numeric IDs. Source changes use the existing feature branch/PR70; the current visual revision stays draft pending owner review. No merge or publication.

## Delivery evidence

- Corrected132 primary-course model pages/continued parts, three trial models, four routine models and two manual developer models:141 model pages in total. Nine existing gap pages retain their gap title and now describe oral character practice. Their comprehension clauses match whether questions actually exist.
- Restored32 purposeful case instructions; corrected14 scenario/narrative pages previously collapsed to personal autobiography, four legacy purpose mismatches, three picture-comparison goals, the forecast goal and the TrialA1 likes classification. These changes reuse the current exercises.
- Authorship preservation passed for65 JSON sources and three manual compositions. Only recorded header fields and explicit source imports changed; all actual utterances, speaker identities, questions, options, answer/hint text, media, recordings, destinations, order and behavior remain equal to the baseline after the header fields are restored. Scoped JSX syntax and diff checks passed.
- Browser checked the actual A1.01 role-practice header and full subtitle, TrialA1 likes, A1.06 animal practice before listening and A2.10 apartment choice. Comparable1280px dark-theme initial-state captures are under evidence/. No broad suite, playback validation, package/API build or deployment was run.
- Standard vocabulary identification, real audio comprehension, real text reading, image multiple-choice, personal information, covers and closures retain their accurate instructions. No general read/listen removal was applied to recorded content or real reading/listening tasks.

Visual gate review: pending human
