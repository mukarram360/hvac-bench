# HVAC Bench design system

The interface is a technical reference publication: precise, calm, editorial, and fast. It must not resemble a SaaS dashboard, generic blog theme, or affiliate storefront.

## Tokens

- Canvas: cool porcelain `#f2f5f3`
- Ink: deep navy `#102a32`
- Muted text: slate teal `#53666a` (WCAG AA on the canvas)
- Signal: safety orange `#e75727`; use dark `#b93e17` behind white text
- Technical accent: teal `#0d686c`
- Rules: quiet blue-gray `#c9d3d1`
- Display type: Barlow Condensed
- Reading type: Source Sans 3
- Data labels: IBM Plex Mono

Typography and spacing create the hierarchy. Cards use thin rules and restrained backgrounds, not large shadows. Orange is reserved for high-value actions and diagnostic markers. Motion is limited to short CSS state transitions, with reduced-motion support.

## Interaction and accessibility

- Visible keyboard focus on every interactive element
- Minimum 44px practical touch targets in navigation and controls
- Semantic headings, landmarks, labels, and skip navigation
- Minimum 4.5:1 text contrast
- No content hidden behind hover or animation
- No horizontal scrolling at 360px
- Article title and direct answer precede supporting reference cards on mobile

## Page patterns

The homepage leads with identification and search, then brand, code, symptom, and equipment paths. Directory pages optimize scanning. Technical articles use a readable main column with a compact evidence rail, explicit “Safe homeowner checks,” and “When to call a technician” sections. Trust pages use the same publication shell and narrow reading measure.
