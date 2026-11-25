# Teacher identity96

## Outcome and source findings

Direct rendered impact: participant labels in personal conversations, calls, role-play and homework phones across the material catalog. All use canonical presentation, but six adapters independently split names/check the literal Your teacher. DevOralPractice already substitutes Teacher locally, demonstrating the drift. The product transport also uses the old fallback. No redesign or recorded-character change is needed.

## Contract

MaterialTeacherContext owns the display identity once: real profile → first name and usable supplied photo; absent/legacy placeholder → Teacher. An explicit identified flag determines whether a sentence can introduce a real name. Consumers do not split names or compare fallback strings. The product bridge retains its source/origin/session validation and sends Teacher when no profile exists. Learner resolution and natural instructions such as Ask your teacher stay unchanged.

## Tasks and acceptance

- [x] Normalize identity at the shared context and migrate every current label consumer, including library story fixtures and the A101 legacy heading.
- [x] Align the Teacher bridge fallback, preserving its wire protocol and authorization boundaries.
- [x] Check real/absent/legacy identities, profiles arriving/changing and representative conversation/phone use; review the current local preview.
- [x] Update authorship guidance and record focused validation/delivery status.

## Focused verification and review

One UI test command covers the identity contract and existing conversation adapters; one focused Teacher mapper test covers the unchanged bridge shape and fallback. No broad catalog rebuild or publication for this feedback. Render the local A101 live-practice and homework labels; text lengths shrink, layout/themes/styles remain unchanged. A longer full name must become the first name; unknown participants must never be introduced as I’m Teacher. The unauthenticated preview uses Teacher, real profile behavior is covered with deterministic fixture data. PRs remain draft pending product-owner review; CI owns full suites.

Critical plan review: reuse the existing context, add no visual wrapper or public API; preserve instructional English and recorded dialogue identities. This fixes duplicated participant decisions rather than substituting strings in every lesson.

## Result

20 focused UI tests passed across four files, including real same-origin host profile arrival/change, rejection of an unrelated source, legacy placeholder normalization, missing profile without an invented introduction, first-name/photo consistency across conversation and homework phone, learner fallback and progressive help. Teacher mapper: two focused tests passed. The existing A101 local preview visibly shows Teacher on all three live-practice speaker labels; no authenticated production session or full visual matrix was exercised. No changes to CSS, theme tokens, recorded audio, question layout or public package API. Source scan finds no hardcoded Your teacher label or per-lesson teacher-name split in maintained TS/TSX.

Publication state: local preview updated; no export/adoption/Hosting/registry publication. This branch builds on the previously reviewed95 source (UI PR54 / Teacher PR173), which remains a separate draft merge gate.

Visual gate review: pending human
