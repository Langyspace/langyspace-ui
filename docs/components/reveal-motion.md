# Revealing hints and answers

Shared exercise reveals use `foundations/motion/reveal.ts`: a single 150 ms
opacity entrance with the existing fast duration and entrance easing tokens.
Apply it to content that a person deliberately reveals, not page entrances or
the whole exercise.

- Question hints and answers, dialogue support, translations and gap answers
  fade into their existing content slots.
- Keep visibility, inert content, focus and audio behavior with their canonical
  components. Motion must not delay an action or change its meaning.
- Do not animate height, width, margins or scrolling. Vocabulary labels remain
  static, as required by the material guidelines.
- `prefers-reduced-motion: reduce` disables the entrance. Revealed content is
  immediately available in both modes; there are no timers or exit delays.

This recipe changes presentation only and introduces no public prop or global
stylesheet requirement.
