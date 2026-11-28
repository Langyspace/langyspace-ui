# Predictable exercise instructions164

Owner request: exercise titles should tell the learner what to do. The same interaction and purpose should reuse the same wording, creating recognition for teacher and learner. Covers retain lesson identity. Closing pages retain their completion/homework or enrollment purpose.

## Copy contract

The canonical vocabulary is stories/materials/shared/exerciseHeadings.json. Authored lesson JSON keeps readable literal titles; the scoped reconciliation checks those against the same registry. Hand-authored React lesson compositions consume that registry directly. No runtime title guessing, string replacement, routing, layout, player, answer or content-identity changes.

| Activity                            | Repeated instruction      |
| ----------------------------------- | ------------------------- |
| Vocabulary pictures                 | Name the pictures         |
| Vocabulary in one scene             | Name what you see         |
| Recorded conversation               | Listen and read           |
| Fixed conversation gaps             | Complete the conversation |
| Live supported exchange             | Practise the conversation |
| Personal introduction               | Introduce yourself        |
| Real personal information           | Talk about yourself       |
| Third-person introduction           | Introduce someone         |
| Received audio + comprehension      | Listen and answer         |
| Received audio + oral response      | Listen and respond        |
| Responding after a received message | Respond to the message    |
| Text + comprehension                | Read and answer           |
| Facts to consult                    | Read the situation        |
| Grammar explanation                 | Compare the examples      |
| Video + questions                   | Watch and answer          |
| Previous lesson recall              | Review the last lesson    |
| Open final conversation             | Have a free conversation  |

Specific missions keep meaningful action-led instructions (Guess who, Introduce someone, Give directions, Plan..., Explain..., Ask...). Do not treat using the same component as proof of an identical task. Identify-image multiple choice uses a repeated imperative template with the actual target, e.g. Choose how Tom feels / Choose where Ana is from. Preserve the actual question and visual evidence; do not substitute a generic title that hides the task.

Context, character, topic and constraints belong in one concise subtitle. When an old title carries useful context, preserve it there. Keep original recorded utterances, exact audio text/IDs, questions, options, answers, images, teacher/student identity, layout, timing, order and homework destinations unchanged. A continuation remains a continuation.

## Scope and order

1. Inventory all authored course JSON, maintained reviewed lessons, three trials and developer/influencer extras. Distinguish active adapters from older parallel sources.
2. Reconcile repeated families to the registry, preserving useful context and special missions. Update source data, not just one exported preview.
3. Use the same registry in shared/manual compositions. Update the central content guide and authoring playbook.
4. Run one authorship-preservation check and one focused source/render check. Inspect representative headings locally, including a longer subtitle. Reuse existing component/layout evidence because this is copy-only.
5. Commit/push once to the existing feature PR, keep it draft and do not deploy. Owner approval of previous unrelated images remains scoped to those images.

## Acceptance

- Repeated interactions and purposes have predictable action-led titles across all maintained lesson families.
- Subtitles retain the information needed to perform the task; they do not introduce a second activity.
- Covers, actual recorded text, body content and functional contracts remain unchanged.
- Existing UI Library heading and layout components are reused, without per-page styling or title heuristics.

## Delivery evidence

- Reconciled the 67-material catalog: 53 Course sources, seven maintained reviewed lesson sources, three trials and four extras. Existing active adapters A201/B101/B201 delegate to CourseLesson; C101 uses its own reviewed source. Covers/catalog identities and closing activities remain unchanged.
- Updated 659 authored title fields, plus canonical headings/navigation labels in nine manual/shared React sources. The journal contains 1186 header field edits including subtitle context and a few final copy refinements; this is not 1186 exercises. Full scope and material ownership are in coverage.json.
- Authorship preservation passed for 72 JSON content/video sources. Restoring only the explicit title/instruction fields produces the complete original content. Manual React sources equal their baseline plus reviewed header literal/import changes after project formatting. Exact IDs, word/utterance/recording text, questions, answers, options, images, links and page order are preserved.
- Scoped JSX parsing and registry-key resolution passed for all nine changed manual compositions; diff check passed. No public component/API/style, package build, new recording or generated lesson image was involved.
- Local browser checked the actual A1.01 model conversation, C1.04 vocabulary, influencer listening and experimental B1/B2 model. The heading lookup was adjusted to account for the existing audio controls contributing to a heading’s accessible name; no runtime defect was inferred from that selector mismatch. Native players and body controls are unchanged.
- Comparable 1280px dark-theme before/after screenshots for those four initial states are retained under evidence/. This is a representative copy/layout check, not an every-page viewport audit or perceptual audio verification.
- PR70 remains draft for the current visual revision. No merge, Hosting deploy or production mutation is included in this delivery.

Visual gate review: pending human
