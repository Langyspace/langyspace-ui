# Equal-size homework devices

Homework uses one outer geometry recipe (`foundations/layout/applicationPhone`) for both Student application previews and the voice-note messaging task. Changing the application preview dimensions therefore changes all three homework frames together.

The old messaging recipe grew under `data-slide-fit`: its height became automatic and its conversation imposed its full text height. Student app previews stayed fixed. This made the third phone grow with the assignment text even though the nominal theme heights matched.

`MessagePhoneFrame contentSizing="fit"` keeps the configured phone height and fits only its conversation to the remaining space. A ResizeObserver measures content and available height; the content scale is at most 1. Every message stays mounted and selectable, no message is clipped, and no nested scroller or extra click is introduced. The contact, composer and frame keep their original geometry. This is static sizing, not an animation.

The default `natural` conversation is unchanged for listening and other phone contexts. HomeworkVoiceNote opts into fitting once for every lesson and keeps its teacher identity, wording, starters and duration. The longest current assignment contains 42 words; the change does not use a shrinking frame to hide arbitrarily long task content.

Storybook includes FittedConversation with multiple message bubbles. Focused tests cover fitting, resizing, no magnification, default compatibility and the dynamic teacher identity. Product-owner visual review remains pending; root owns the local browser check and API snapshot in the combined delivery.
