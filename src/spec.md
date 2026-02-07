# Specification

## Summary
**Goal:** Build a single-page romantic Valentine invitation with playful “No” button dodging and looping prompts, plus a celebratory “Yes” success view with fireworks and a couple image.

**Planned changes:**
- Create a centered invitation layout with the large heading "cutey", the question "Will you be my Valentine 💖", and two boxed buttons: "Yes 💗" and "No".
- Implement "No" behavior: on each click, reposition the "No" button within visible bounds and update a fixed-position prompt box under the name with the required message sequence (first two unique messages, then a looping list).
- Implement "Yes 💗" behavior: trigger a fireworks-style animation and replace/overlay content with "Yay 🥳", "I know you'd say Yes!💖", "You've made me the Happiest ☺️", and display a couple picture.
- Apply a consistent romantic theme (light pink background, red heart/rose decorative elements, cohesive typography/spacing) across both invitation and success states.
- Add required generated images as static assets under `frontend/public/assets/generated` and render them in the invitation and success views (no backend changes).

**User-visible outcome:** Users see a romantic Valentine page where clicking “No” makes it dodge and shows cycling prompts, while clicking “Yes 💗” shows fireworks and a celebratory message with a couple picture.
