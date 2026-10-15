# Audit import boundary fix - 2026-10-15

The manual architecture gate exposed LSUI005 false positives in Student, Teacher, Site and Admin. Its named-import regex crossed closing braces and included a local Button import in a later @langyspace/ui match. The binding clause is now bounded by braces and statement separators; real direct Button imports remain rejected. A regression fixture proves a local Button followed by a later Card import passes. Existing12 rule contracts and positive/configuration cases pass. No exception or rule was disabled.

Patch1.21.1 changes only audit/index.mjs and package version in the distributed payload. Reuses the exact reviewed1.21.0 browser dist, types and runtime files. No runtime/API/visual change. The separate Sidebar IconButton recipe overrides are real findings and remain blocked until corrected and reviewed; this parser fix does not suppress them.
