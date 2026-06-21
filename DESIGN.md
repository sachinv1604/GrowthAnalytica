---
name: Executive Analysis
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#06182b'
  on-tertiary-container: '#728299'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system is engineered for high-level business intelligence and educational storytelling. The brand personality is intellectual and authoritative, designed to evoke a sense of deep-dive rigor and strategic insight. It targets a professional audience seeking data-driven narratives rather than surface-level content.

The design style is **Modern Professional**. It leverages a high-fidelity, structured aesthetic that mirrors the precision of management consulting and financial journalism. Key visual traits include:
- **Analytical Precision:** Use of subtle grid overlays and technical flourishes (e.g., coordinate markers) to ground the UI in data.
- **Architectural Clarity:** Strong alignment and generous whitespace to ensure complex business concepts remain digestible.
- **Trusted Sophistication:** A blend of technical utility with premium editorial flourishes, creating an environment of "Educational Authority."

## Colors

The palette is anchored in a dark, professional environment to minimize eye strain during long-form analysis and to provide a "command center" feel.

- **Primary (Deep Navy):** `#0F172A`. Used for main surfaces and structural backgrounds to establish trust and depth.
- **Secondary (Growth Green):** `#10B981`. Reserved strictly for progress indicators, call-to-actions, and positive growth metrics.
- **Tertiary (Charcoal/Slate):** `#64748B`. Used for secondary text, borders, and inactive states to provide subtle contrast.
- **Neutral (Off-White):** `#F8FAFC`. Primarily used for high-contrast body text and primary labels to ensure maximum legibility against the dark background.
- **Data Accents:** Utilize a "Teal" (`#06B6D4`) for secondary data streams or comparative analysis to maintain the professional cool-toned spectrum.

## Typography

The typographic hierarchy prioritizes rapid scanning and structural clarity. 

**Headlines:** Use **Hanken Grotesk**. Its sharp, contemporary geometry conveys modern professionalism and looks impactful in bold weights for video thumbnails and section headers.
**Body:** Use **Inter**. Chosen for its exceptional legibility in dense case study text. The variable weight support allows for subtle emphasis without breaking the layout's rhythm.
**Technical Labels:** Use **Geist**. This monospaced-influenced sans-serif is used for data points, timestamps, and metadata to reinforce the analytical, developer-grade precision of the brand.

Scale font sizes conservatively to maintain a "serious" tone; avoid oversized "marketing" styles in favor of a structured, information-dense layout.

## Layout & Spacing

This design system employs a **Fixed Grid** logic for desktop to ensure data visualizations remain proportional and legible.

- **Grid System:** A 12-column grid with a 24px gutter. Elements should align to the grid to maintain an "engineered" appearance.
- **Rhythm:** An 8px base unit (derived from the 4px micro-unit) governs all padding and margin decisions. 
- **Analytical Backgrounds:** In large empty states or hero sections, a subtle 32px square grid pattern should be applied to the background at 5% opacity to reinforce the "growth analysis" theme.
- **Responsive Behavior:** On mobile, the layout collapses to a single column with 20px side margins. Complex data tables should transition to card-based summaries or horizontal scroll views to preserve data integrity.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows.

1.  **Level 0 (Base):** Deep Navy (`#0F172A`). The fundamental canvas.
2.  **Level 1 (Surfaces):** A slightly lighter navy/slate (`#1E293B`). Used for cards and content containers.
3.  **Level 2 (Interaction):** Borders using a 1px solid Slate (`#334155`). No shadow. This creates a "blueprint" feel.
4.  **Floating Elements:** Only modals and tooltips use a shadow. Use a sharp, high-diffusion shadow: `0 20px 25px -5px rgba(0, 0, 0, 0.5)`.

Backgrounds may feature faint, non-interactive line-chart silhouettes to add depth without distracting from the primary content.

## Shapes

The shape language is disciplined and professional. 

- **Corners:** Elements use a "Soft" (0.25rem) corner radius. This is enough to feel modern and accessible without losing the serious, "square" authority of a professional document.
- **Iconography:** Use geometric, stroke-based icons with a 2px weight. Icons should be sharp-edged rather than rounded to match the analytical tone.
- **Data Viz:** Graphs and charts should use 0px border-radii for bars to emphasize precision, while line charts should use "natural" smoothing for a high-end financial report feel.

## Components

**Buttons:**
- **Primary:** Growth Green (`#10B981`) with Navy text. High contrast, reserved for primary conversion (e.g., "Get Analysis").
- **Secondary:** Ghost style. Transparent background with a 1px Slate border and White text.

**Data Cards:**
- Use the Level 1 Surface (`#1E293B`). Include a `label-sm` header for the category and a `title-md` for the metric. Always include a 1px border.

**Input Fields:**
- Darker than the surface (`#020617`) with a 1px Slate border. On focus, the border transitions to Growth Green. Use `Geist` for input text to maintain the "data entry" feel.

**Progress Bars:**
- Use a 4px height. The track should be Slate (`#334155`) and the indicator Growth Green (`#10B981`).

**Charts & Graphs:**
- Backgrounds within charts should use horizontal dashed lines (Slate, 10% opacity) as y-axis guides. All labels should be `label-sm` using the `Geist` font.