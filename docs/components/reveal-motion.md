# Revealing hints and answers

Shared exercise reveals use `foundations/motion/reveal.ts`: a 150 ms opacity entrance for dialogue support and a clearer 200 ms opacity/4px transform entrance for RevealCard answers. Both use the existing timing, spacing and easing tokens.
Apply it to content that a person deliberately reveals, not page entrances or
the whole exercise.

- Question hints and answers, dialogue support, translations and gap answers
  enter their existing content slots. The answer transform does not change layout geometry; there is no height animation.
- Keep visibility, inert content, focus and audio behavior with their canonical
  components. Motion must not delay an action or change its meaning.
- Do not animate height, width, margins or scrolling. Vocabulary labels remain
  static, as required by the material guidelines.
- `prefers-reduced-motion: reduce` disables the entrance. Revealed content is
  immediately available in both modes; there are no timers or exit delays. Closing remains immediate; a new opening replays the entrance.

This recipe changes presentation only and introduces no public prop or global
stylesheet requirement.
