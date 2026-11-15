# Theme-aware actions and Dialog

The landing prototype needs source-exact typography, padding, color states and dialog presentation.
The existing UI recipes embed the default singleton, and product resets/private selectors can
silently override canonical controls. This change makes their supported theme contract usable,
on top of the approved UI 4.1 authored-style migration.

Direct impact: Button, ActionLink, IconButton/Pressable focus, Dialog presentation; Drawer default
behavior must remain equivalent. Domain data, content, routing and async work stay in the product.
No package publication, tag, merge to main or deploy is in this task. Version 4.2.0-design.1 is a
review candidate, not an official release. Canonical release checkouts are preserved.
