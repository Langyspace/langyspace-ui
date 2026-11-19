# Heading contrast correction

Some material headings relied on ancestor foreground despite a host GlobalStyles heading color.
The actual native UX Lab before state rendered “No diálogo” at1.1393:1 on its dark support card.
This correction reuses TrialA1 SupportTitle, adds foreground to the shared Explanation h3 owner,
and follows the existing color:inherit pattern for TrialB1 Heading and TrialB2 Title/Hero.
No public API, media, content, audio, gesture or Notes behavior changes.

The narrowly composed owner fixture checked before/after at390/1440px in light/dark themes.
Its stylesheet insertion order does not reproduce the native before failure; its images establish
owner rendering only. All corrected headings measured at least4.636:1 in dark and5.085:1 in light.
TrialA1 sections are real section components; the other fixtures use the actual styled owners.
Full final portable and native Lab after verification follows the clean source export.

Existing functional and media evidence remains applicable where its exact inputs are unchanged.
S1 starting frames remain historical; do not claim seven identical runtimes without comparing S2.
The next export must bind the new source, all resources, exact conditional request sizes and fresh
remote revisions. No new generation, package release, merge or cloud publication occurred here.

Visual gate review: pending human
