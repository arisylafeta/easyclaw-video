# GPU.NET Brand Showcase - Detailed Script
## Video Duration: 98 seconds (98 frames @ 1fps)
## Created: February 2026
## Agency: Spacekayak

---

## GLOBAL DESIGN SYSTEM

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Aerospace Orange** | `#F9672F` | Primary brand color, CTAs, highlights |
| **Sunset Orange** | `#F0871F` | Secondary orange, gradients |
| **Saturn Yellow** | `#F9C74E` | Accent, warning states |
| **Capella Light** | `#FFE8D6` | Light backgrounds, subtle accents |
| **Moon White** | `#F9F6F4` | Text on dark, light elements |
| **Chrome Grey** | `#CFCFCF` | Secondary text, borders |
| **Space Grey** | `#3E3E3E` | Dark UI elements |
| **Future Black** | `#0D0D0D` | Primary background |
| **Pure Black** | `#000000` | Deep background, contrast |

### Typography System

**Primary Font: LINE Seed Sans**
- Weights: Light, Regular, Bold
- Usage: Headlines, body text, UI elements
- Character set: AaBbCcDd @%&!?* (full alphanumeric)

**Secondary Font: DM Mono**
- Weights: Regular, Medium
- Usage: Code, technical text, data displays
- Character set: AaBbCcDd @%&!?* (full alphanumeric)

**Font Sizes (approximate scale):**
- Hero text: 72-96px
- Section headers: 48-64px
- Body text: 16-24px
- Caption/labels: 12-14px

### Animation Principles

- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) for standard transitions
- **Duration**: 0.3s-1.0s for micro-interactions, 1.5s-3s for scene transitions
- **Stagger**: 50-100ms between sequential elements
- **Motion**: Smooth, tech-forward, precise

---

## SCENE BREAKDOWN

### SCENE 1: LOADING SEQUENCE (00:00 - 00:06)
**Duration: 6 seconds**

#### Frame 001 (00:00)
- **Visual**: Pure black screen
- **Animation**: None (hold frame)
- **Notes**: Video starts from complete darkness

#### Frame 002 (00:01)
- **Visual**: Small pixelated orange square appears center-screen
- **Element**: 8x8 pixel grid forming a square frame
- **Color**: Aerospace Orange (#F9672F) with glow effect
- **Position**: Center (50%, 50%)
- **Size**: ~80x80px
- **Animation**: Fade in + scale up from 0.5 to 1.0
- **Duration**: 0.5s

#### Frame 003 (00:02)
- **Visual**: Pixelated square expands horizontally
- **Element**: Rectangle forming, maintaining pixel grid aesthetic
- **Animation**: Width expansion from square to rectangle
- **Interpolation**: scaleX(1) → scaleX(2.5)
- **Duration**: 0.8s
- **Easing**: ease-out

#### Frame 004 (00:03)
- **Visual**: "RENDERING 01%" text appears inside the pixel frame
- **Typography**: DM Mono, uppercase, ~24px
- **Color**: Aerospace Orange (#F9672F)
- **Position**: Centered within frame
- **Animation**: Typewriter effect, characters appearing left to right
- **Duration**: 0.3s

#### Frame 005 (00:04)
- **Visual**: Progress bar completes - "RENDERING 100%"
- **Animation**: Percentage counter animates 01% → 100%
- **Duration**: 0.5s
- **Effect**: Loading bar fill animation behind text

#### Frame 006 (00:05)
- **Visual**: Frame collapses back to small square
- **Animation**: Reverse expansion, scale down
- **Interpolation**: scale(1) → scale(0.3)
- **Duration**: 0.4s

#### Frame 007 (00:06)
- **Visual**: Transition to globe reveal
- **Animation**: Square morphs into globe starting point
- **Effect**: Pixel grid dissolves into particle system

---

### SCENE 2: GLOBE REVEAL & TAGLINE (00:07 - 00:10)
**Duration: 4 seconds**

#### Frame 007-008 (00:07)
- **Visual**: Wireframe globe with red/orange particle highlights
- **Element**: 3D sphere constructed from dots/particles
- **Color**: Dark grey wireframe (#1a1a1a), Aerospace Orange particles
- **Position**: Center-right (60%, 50%)
- **Size**: ~400px diameter
- **Animation**: Globe rotates slowly (Y-axis rotation)
- **Particles**: Random distribution, pulsing glow

#### Frame 008-009 (00:08)
- **Visual**: Tagline appears: "Next-level compute within reach"
- **Typography**: LINE Seed Sans, Bold, ~42px
- **Color**: Aerospace Orange (#F9672F)
- **Position**: Left-center (30%, 50%)
- **Animation**: Fade in + slide from left
- **Transform**: translateX(-50px) → translateX(0), opacity 0 → 1
- **Duration**: 0.6s
- **Quote marks**: Included in text, same styling

#### Frame 009-010 (00:09)
- **Visual**: Tagline fully visible, globe continues rotation
- **Animation**: Hold position, subtle particle movement
- **Effect**: Gentle pulse on text glow

---

### SCENE 3: MOSAIC GRID SHOWCASE (00:10 - 00:12)
**Duration: 2 seconds**

#### Frame 010-011 (00:10-00:11)
- **Visual**: 2x3 grid of portfolio images appears
- **Layout**:
  - Top-left: Wireframe globe (from previous scene)
  - Top-center: Login screen UI with globe
  - Top-right: Isometric 3D hardware cluster
  - Bottom-left: Product cards with GPU device
  - Bottom-center: Dark globe with particles
  - Bottom-right: Orange gradient panel
- **Animation**: Grid cells scale in with stagger
- **Stagger delay**: 100ms per cell
- **Transform**: scale(0.8) → scale(1), opacity 0 → 1
- **Duration**: 0.8s total

#### Frame 012 (00:11)
- **Visual**: Grid holds, slight zoom effect
- **Animation**: Subtle scale up on entire grid (1.0 → 1.02)
- **Transition**: Prepares for text scene

---

### SCENE 4: BRAND NARRATIVE INTRO (00:12 - 00:17)
**Duration: 5 seconds**

#### Frame 012-013 (00:12)
- **Visual**: Black screen with text appearing
- **Text**: "Groundbreaking tech"
- **Typography**: LINE Seed Sans, Bold, ~64px
- **Color**: Moon White (#F9F6F4)
- **Position**: Upper-left quadrant (20%, 30%)
- **Animation**: Slide up + fade in
- **Transform**: translateY(30px) → translateY(0)
- **Duration**: 0.4s

#### Frame 013-014 (00:13)
- **Visual**: Second line appears
- **Text**: "needs groundbreaking"
- **Color**: Aerospace Orange (#F9672F)
- **Position**: Below first line
- **Animation**: Same slide up effect, 100ms delay

#### Frame 014-015 (00:14)
- **Visual**: Third line + orange bars animate in
- **Text**: "narratives."
- **Bars**: Three horizontal orange gradient bars
  - Bar 1: Top, widest, Aerospace Orange
  - Bar 2: Middle, medium width, Sunset Orange
  - Bar 3: Bottom, shortest, gradient mix
- **Animation**: Bars slide in from left with stagger
- **Transform**: translateX(-100%) → translateX(0)
- **Duration**: 0.5s per bar, 150ms stagger

#### Frame 015-016 (00:15)
- **Visual**: Text changes to brand statement
- **Text**: "We crafted GPUNet's brand & narrative on"
- **Typography**: Same style, white color
- **Animation**: Crossfade transition
- **Duration**: 0.4s

#### Frame 016-017 (00:16)
- **Visual**: Value words appear on orange bars
- **Words** (top to bottom):
  1. "Authority" - on top bar
  2. "Responsibility" - on second bar
  3. "Vibrancy" - on third bar
  4. "Freshness" - below bars
  5. "Leadership" - below
  6. "Efficiency" - bottom
- **Typography**: LINE Seed Sans, varying weights
- **Color**: Moon White on orange, Chrome Grey on black
- **Animation**: Words slide in with bar expansion
- **Duration**: 0.6s

---

### SCENE 5: TRANSITION WIPE (00:17 - 00:18)
**Duration: 1 second**

#### Frame 017-018 (00:17)
- **Visual**: Orange gradient wipe transition
- **Effect**: Full-screen orange panel slides across
- **Direction**: Left to right
- **Color**: Gradient from Aerospace Orange to Sunset Orange
- **Animation**: translateX(-100%) → translateX(100%)
- **Duration**: 0.8s
- **Easing**: ease-in-out

---

### SCENE 6: NEW LOOK REVEAL (00:18 - 00:20)
**Duration: 2 seconds**

#### Frame 018-019 (00:18)
- **Visual**: "a new" in white, "look" in orange box
- **Text**: "a new" (white) + "look" (orange background)
- **Typography**: LINE Seed Sans, Bold, ~96px
- **Color**: Moon White, Aerospace Orange background for "look"
- **Position**: Center
- **Animation**: Text slides in from left, orange box expands
- **Duration**: 0.5s

#### Frame 019-020 (00:19)
- **Visual**: "with colors that empower"
- **Text**: Centered, smaller size
- **Typography**: LINE Seed Sans, Regular, ~32px
- **Color**: Aerospace Orange (#F9672F)
- **Position**: Center
- **Animation**: Fade in with slight scale
- **Duration**: 0.4s

---

### SCENE 7: COLOR PALETTE SHOWCASE (00:20 - 00:22)
**Duration: 2 seconds**

#### Frame 020-021 (00:20)
- **Visual**: Color swatches begin to appear
- **Layout**: Vertical color bars expanding from left
- **Colors shown**: Aerospace Orange, Sunset Orange, Saturn Yellow, Moon White
- **Animation**: Height expansion from 0 to full
- **Duration**: 0.6s

#### Frame 021-022 (00:21)
- **Visual**: Full color palette with labels
- **Layout**: 7 vertical bars, equal width
- **Colors with labels**:
  1. Aerospace Orange #F9672F
  2. Sunset Orange #F0871F
  3. Saturn Yellow #F9C74E
  4. Moon White #F9F6F4
  5. Chrome Grey #CFCFCF
  6. Space Grey #3E3E3E
  7. Future Black #0D0D0D
- **Capella Light #FFE8D6**: Shown as smaller block under Saturn Yellow
- **Typography**: DM Mono for hex codes, ~10px
- **Animation**: Labels fade in after bars settle
- **Duration**: 0.4s

---

### SCENE 8: GRADIENT SHOWCASE (00:22 - 00:24)
**Duration: 2 seconds**

#### Frame 022-023 (00:22)
- **Visual**: Color bars compress into gradient square
- **Animation**: Bars collapse and morph into gradient
- **Duration**: 0.5s

#### Frame 023-024 (00:23)
- **Visual**: Gradient square with text
- **Text**: "visually distinct," (left) + "infinitely adaptable" (right)
- **Gradient**: Smooth blend of all palette colors
- **Typography**: LINE Seed Sans, ~36px
- **Color**: Moon White
- **Position**: Text outside gradient box
- **Animation**: Text fades in with slight slide
- **Duration**: 0.5s

---

### SCENE 9: TYPOGRAPHY SHOWCASE (00:24 - 00:27)
**Duration: 3 seconds**

#### Frame 024-025 (00:24)
- **Visual**: Orange bar wipe with text
- **Text**: "Type that's versatile"
- **Effect**: Text masked by moving orange bar
- **Animation**: Bar slides horizontally across screen
- **Duration**: 0.6s

#### Frame 025-026 (00:25)
- **Visual**: Font specimens appear
- **Layout**: Split screen
- **Left**: LINE Seed Sans specimen
- **Right**: DM Mono specimen (partially visible)
- **Animation**: Characters animate in with typewriter effect
- **Duration**: 0.8s

#### Frame 026-027 (00:26)
- **Visual**: Complete typography showcase
- **Left - Primary Font**:
  - Label: "Primary Font"
  - Name: "LINE Seed Sans"
  - Specimen: "AaBbCcDd @%&!?*"
  - Full alphabet shown below
- **Right - Secondary Font**:
  - Label: "Secondary Font"
  - Name: "DM Mono"
  - Specimen: "AaBbCcDd @%&!?*"
  - Full alphabet shown below
- **Highlight boxes**: Orange behind "Sans" and "Mono"
- **Animation**: Highlight boxes pulse subtly
- **Duration**: Hold 1s

---

### SCENE 10: LOGO CONCEPT (00:27 - 00:34)
**Duration: 7 seconds**

#### Frame 027-028 (00:27)
- **Visual**: Text appears: "A symbol of global access to high-power"
- **Typography**: LINE Seed Sans, ~36px
- **Color**: Moon White + Aerospace Orange for "high-power"
- **Position**: Upper portion
- **Animation**: Fade in, word by word
- **Duration**: 0.6s

#### Frame 028-029 (00:28)
- **Visual**: "compute" completes the sentence
- **Color**: Aerospace Orange
- **Animation**: Fade in

#### Frame 029-030 (00:29)
- **Visual**: Globe icon morphs from text
- **Element**: Wireframe globe with grid pattern
- **Color**: Aerospace Orange
- **Animation**: Text dissolves into globe particles
- **Duration**: 0.8s

#### Frame 030-031 (00:30)
- **Visual**: Globe transforms into pixelated square
- **Element**: "G" logo begins to form
- **Animation**: Globe particles reorganize into square grid
- **Duration**: 0.6s

#### Frame 031-032 (00:31)
- **Visual**: Logo construction with grid lines
- **Element**: "G" inside square frame with construction guides
- **Guides**: Horizontal and vertical grid lines
- **Color**: Red/Aerospace Orange lines on black
- **Animation**: Grid lines draw in from center
- **Duration**: 0.5s

#### Frame 032-033 (00:32)
- **Visual**: Grid lines fade, logo solidifies
- **Animation**: Construction lines retract
- **Duration**: 0.4s

#### Frame 033-034 (00:33)
- **Visual**: Full logo reveal with text
- **Element**: Logo icon + "GPU.NET" text
- **Color**: White on black
- **Typography**: LINE Seed Sans Bold for "GPU.NET"
- **Animation**: Logo scales up slightly with glow
- **Duration**: 0.5s

---

### SCENE 11: SOCIAL MEDIA SHOWCASE (00:34 - 00:37)
**Duration: 3 seconds**

#### Frame 034-035 (00:34)
- **Visual**: Three social media post mockups appear
- **Layout**: Horizontal row, equal spacing
- **Posts**:
  1. Left: Dark theme with hooded figure, "Accelerated computing..."
  2. Center: Orange gradient with phone mockup, "Turn idle resources..."
  3. Right: Dark theme with coins, "Get with the next compute..."
- **Animation**: Posts slide in from bottom with stagger
- **Transform**: translateY(100px) → translateY(0)
- **Stagger**: 150ms
- **Duration**: 0.6s

#### Frame 035-036 (00:35)
- **Visual**: Posts settle, subtle float animation
- **Animation**: Gentle Y-axis oscillation (±5px)
- **Duration**: Continuous

#### Frame 036-037 (00:36)
- **Visual**: Zoom into center post (login screen UI)
- **Animation**: Scale up center element, others fade
- **Transform**: scale(1) → scale(1.5) on center
- **Duration**: 0.5s

---

### SCENE 12: SYSTEM OVERVIEW (00:37 - 00:42)
**Duration: 5 seconds**

#### Frame 037-038 (00:37)
- **Visual**: "The GPUNet system" with UI preview
- **Text**: White + Orange styling
- **Element**: Login screen UI on left, globe on right
- **Animation**: Text types in, UI fades in
- **Duration**: 0.5s

#### Frame 038-039 (00:38)
- **Visual**: "The GPUNet system builds further"
- **Text**: Updated text
- **Background**: Dark isometric grid begins to appear
- **Animation**: Text crossfade, grid fades in
- **Duration**: 0.4s

#### Frame 039-040 (00:39)
- **Visual**: "when broken down" with isometric hardware
- **Element**: 3D isometric view of GPU cluster
- **Style**: Dark blocks with orange accents
- **Animation**: Camera rotates around cluster
- **Duration**: 1.0s

#### Frame 040-041 (00:40)
- **Visual**: Hardware components animate
- **Animation**: Individual blocks lift and rotate
- **Effect**: Exploded view of the system
- **Duration**: 0.8s

#### Frame 041-042 (00:41)
- **Visual**: Components settle back
- **Animation**: Reverse exploded view
- **Duration**: 0.6s

---

### SCENE 13: COMPONENT DEEP-DIVE (00:42 - 00:58)
**Duration: 16 seconds**

#### Frame 042-043 (00:42)
- **Visual**: Close-up of UI cards
- **Element**: Glass-morphism cards with orange gradients
- **Animation**: Cards slide in from right
- **Duration**: 0.5s

#### Frame 043-044 (00:43)
- **Visual**: Progress bars animate
- **Element**: Orange progress indicators
- **Animation**: Bars fill from 0% to various percentages
- **Duration**: 0.8s

#### Frame 044-045 (00:44)
- **Visual**: Identity verification scene
- **Element**: Figure with "PERSON" label, data visualization
- **Style**: Dark silhouette with orange data points
- **Animation**: Data points pulse and connect
- **Duration**: 0.6s

#### Frame 045-046 (00:45)
- **Visual**: Server tower reveal
- **Element**: Isometric server with orange accents
- **Animation**: Tower rises from below
- **Transform**: translateY(100px) → translateY(0)
- **Duration**: 0.5s

#### Frame 046-047 (00:46)
- **Visual**: Server rotation
- **Animation**: 360-degree Y-axis rotation
- **Duration**: 1.0s

#### Frame 047-048 (00:47)
- **Visual**: GPU chip extraction
- **Element**: 3D chip pulled from server
- **Style**: Metallic with orange glow
- **Animation**: Chip lifts and rotates
- **Duration**: 0.6s

#### Frame 048-049 (00:48)
- **Visual**: Security shield scene
- **Element**: White shield with orange glow, surrounded by user icons
- **Animation**: Shield pulses, users orbit
- **Duration**: 0.7s

#### Frame 049-050 (00:49)
- **Visual**: Shield zoom
- **Animation**: Camera moves closer to shield
- **Duration**: 0.4s

#### Frame 050-051 (00:50)
- **Visual**: Battery/power module
- **Element**: Orange battery cells in transparent case
- **Animation**: Battery fills with energy
- **Duration**: 0.5s

#### Frame 051-052 (00:51)
- **Visual**: Processing units
- **Element**: CPU/GPU chips with fire icons
- **Animation**: Fire icons flicker
- **Duration**: 0.6s

#### Frame 052-053 (00:52)
- **Visual**: Cooling system
- **Element**: Dual fans with orange blades
- **Animation**: Fans begin to spin
- **Duration**: 0.5s

#### Frame 053-054 (00:53)
- **Visual**: Storage module
- **Element**: Hard drive with orange indicators
- **Animation**: Lights blink sequentially
- **Duration**: 0.5s

#### Frame 054-055 (00:54)
- **Visual**: Storage continues
- **Animation**: Hold with blinking lights
- **Duration**: 0.5s

#### Frame 055-056 (00:55)
- **Visual**: Transition to text
- **Animation**: Components fade out
- **Duration**: 0.4s

#### Frame 056-057 (00:56)
- **Visual**: "Hardware that powers" appears
- **Text**: Left side, white
- **Animation**: Slide in from left
- **Duration**: 0.4s

#### Frame 057-058 (00:57)
- **Visual**: Right side text cycles
- **Words**: "the internet" → "experiments" → "creativity" → "the future"
- **Animation**: Vertical carousel effect
- **Duration**: 0.8s for full cycle

---

### SCENE 14: HARDWARE ASSEMBLY (00:58 - 01:15)
**Duration: 17 seconds**

#### Frame 058-059 (00:58)
- **Visual**: Hardware components begin assembly
- **Element**: Base plate appears
- **Animation**: Fade in from darkness
- **Duration**: 0.4s

#### Frame 059-060 (00:59)
- **Visual**: Main chassis attaches
- **Animation**: Component snaps into place
- **Duration**: 0.3s

#### Frame 060-061 (01:00)
- **Visual**: Orange connectors appear
- **Animation**: Connectors slide in and lock
- **Duration**: 0.4s

#### Frame 061-062 (01:01)
- **Visual**: Cooling pipes attach
- **Element**: Translucent orange tubes
- **Animation**: Tubes extend and connect
- **Duration**: 0.5s

#### Frame 062-063 (01:02)
- **Visual**: Side panel attaches
- **Animation**: Panel slides on from side
- **Duration**: 0.4s

#### Frame 063-064 (01:03)
- **Visual**: GPU chip installation
- **Animation**: Chip lowers into slot
- **Duration**: 0.4s

#### Frame 064-065 (01:04)
- **Visual**: Heat sink attaches
- **Animation**: Sink drops onto chip
- **Duration**: 0.3s

#### Frame 065-066 (01:05)
- **Visual**: Final assembly complete
- **Animation**: Full device rotates
- **Duration**: 1.0s

#### Frame 066-067 (01:06)
- **Visual**: Close-up on corner detail
- **Animation**: Camera zooms in
- **Duration**: 0.4s

#### Frame 067-068 (01:07)
- **Visual**: Screw tightening
- **Animation**: Screw rotates and tightens
- **Duration**: 0.5s

#### Frame 068-069 (01:08)
- **Visual**: Side view reveal
- **Animation**: Camera orbits around device
- **Duration**: 0.6s

#### Frame 069-070 (01:09)
- **Visual**: Cooling system highlight
- **Animation**: Orange glow pulses through tubes
- **Duration**: 0.5s

#### Frame 070-071 (01:10)
- **Visual**: Front panel detail
- **Element**: "visit gpu.net" text appears
- **Animation**: Text types in
- **Duration**: 0.4s

#### Frame 071-072 (01:11)
- **Visual**: Device fades to laptop transition
- **Animation**: Morph from hardware to laptop screen
- **Duration**: 0.6s

#### Frame 072-073 (01:12)
- **Visual**: Laptop with website displayed
- **Element**: GPU.NET homepage
- **Animation**: Laptop rotates into view
- **Duration**: 0.5s

#### Frame 073-074 (01:13)
- **Visual**: Website content visible
- **Text**: "High-Performance Computing with On-Demand GPUs"
- **Animation**: Content fades in
- **Duration**: 0.4s

#### Frame 074-075 (01:14)
- **Visual**: Partner logos scroll
- **Element**: Logo carousel at bottom
- **Animation**: Infinite horizontal scroll
- **Duration**: Continuous

---

### SCENE 15: WEBSITE SHOWCASE (01:15 - 01:30)
**Duration: 15 seconds**

#### Frame 075-076 (01:15)
- **Visual**: Navigation close-up
- **Elements**: SOLUTIONS, ABOUT, GAN-CHAIN, BLOGS, DOCS
- **Animation**: Nav items highlight on hover (simulated)
- **Duration**: 0.5s

#### Frame 076-077 (01:16)
- **Visual**: CTA button focus
- **Element**: "BOOK GPU" button
- **Animation**: Button fills with orange on hover
- **Duration**: 0.3s

#### Frame 077-078 (01:17)
- **Visual**: Full laptop view
- **Element**: Mission statement section
- **Text**: "We're bridging the gap between your ambitions & the tools to realize them."
- **Animation**: Scroll effect simulated
- **Duration**: 0.5s

#### Frame 078-079 (01:18)
- **Visual**: Features section
- **Animation**: Laptop tilts to show depth
- **Duration**: 0.4s

#### Frame 079-080 (01:19)
- **Visual**: Capabilities grid
- **Element**: 2x2 grid of feature cards
- **Animation**: Cards pop in with stagger
- **Duration**: 0.6s

#### Frame 080-081 (01:20)
- **Visual**: Laptop closes slightly
- **Animation**: Screen tilts back
- **Duration**: 0.4s

#### Frame 081-082 (01:21)
- **Visual**: Laptop opens again
- **Animation**: Reverse tilt
- **Duration**: 0.4s

#### Frame 082-083 (01:22)
- **Visual**: Dual laptop showcase
- **Element**: Two laptops at angle
- **Animation**: Second laptop slides in
- **Duration**: 0.5s

#### Frame 083-084 (01:23)
- **Visual**: Blog section
- **Text**: "Stories about building the worldwide compute grid"
- **Animation**: Content scrolls up
- **Duration**: 0.5s

#### Frame 084-085 (01:24)
- **Visual**: Blog cards
- **Animation**: Cards slide in from right
- **Duration**: 0.5s

#### Frame 085-086 (01:25)
- **Visual**: Single laptop focus
- **Animation**: Merge dual laptops to one
- **Duration**: 0.5s

#### Frame 086-087 (01:26)
- **Visual**: Final homepage view
- **Animation**: Gentle float
- **Duration**: 0.5s

#### Frame 087-088 (01:27)
- **Visual**: Logo appears on laptop screen
- **Animation**: Screen content fades to logo
- **Duration**: 0.4s

#### Frame 088-089 (01:28)
- **Visual**: Laptop fades out
- **Animation**: Opacity to 0
- **Duration**: 0.5s

#### Frame 089-090 (01:29)
- **Visual**: Logo on black
- **Element**: GPU.NET logo centered
- **Animation**: Logo pulses with glow
- **Duration**: 0.5s

---

### SCENE 16: FINAL LOGO & CREDITS (01:30 - 01:38)
**Duration: 8 seconds**

#### Frame 090-091 (01:30)
- **Visual**: Logo stabilizes
- **Color**: Aerospace Orange
- **Animation**: Hold steady
- **Duration**: 0.5s

#### Frame 091-092 (01:31)
- **Visual**: Logo shrinks slightly
- **Animation**: Scale 1.0 → 0.9
- **Duration**: 0.4s

#### Frame 092-093 (01:32)
- **Visual**: Logo holds
- **Duration**: 0.5s

#### Frame 093-094 (01:33)
- **Visual**: Logo continues
- **Duration**: 0.5s

#### Frame 094-095 (01:34)
- **Visual**: Horizontal line animation
- **Element**: Orange lines extend from center
- **Animation**: Width expansion
- **Duration**: 0.4s

#### Frame 095-096 (01:35)
- **Visual**: Lines retract
- **Animation**: Reverse expansion
- **Duration**: 0.3s

#### Frame 096-097 (01:36)
- **Visual**: Logo icon only
- **Element**: "G" in square, no text
- **Animation**: Text fades out
- **Duration**: 0.4s

#### Frame 097-098 (01:37)
- **Visual**: Credits appear
- **Text**: "A creative collaboration at SPACEKAYAK"
- **Typography**: LINE Seed Sans, white
- **Animation**: Fade in
- **Duration**: 0.5s

#### Frame 098 (01:38)
- **Visual**: Hold credits
- **Duration**: End of video

---

## TECHNICAL SPECIFICATIONS

### Animation Timing Functions

```css
/* Standard transitions */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1);

/* Bounce effects */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Smooth */
--ease-smooth: cubic-bezier(0.45, 0, 0.55, 1);
```

### Common Animation Durations

- **Micro-interactions**: 150-300ms
- **Element transitions**: 400-600ms
- **Scene changes**: 800-1200ms
- **Complex sequences**: 1500-3000ms

### Transform Specifications

- **Slide in**: translateX/Y(±30-100px) → translateX/Y(0)
- **Scale**: 0.8-0.9 → 1.0 for entrances, 1.0 → 1.02-1.1 for emphasis
- **Rotation**: 5-15° for subtle, 360° for full spins
- **Opacity**: 0 → 1 for fade in, 1 → 0 for fade out

### Glow Effects

```css
/* Standard glow */
box-shadow: 0 0 20px rgba(249, 103, 47, 0.5);

/* Intense glow */
box-shadow: 0 0 40px rgba(249, 103, 47, 0.8), 
            0 0 80px rgba(249, 103, 47, 0.4);

/* Text glow */
text-shadow: 0 0 10px rgba(249, 103, 47, 0.8);
```

### Grid System

- **Base unit**: 8px
- **Margins**: 24px-48px
- **Gutters**: 16px-24px
- **Max content width**: 1200px

### 3D Specifications

- **Isometric angle**: 30° (standard isometric)
- **Perspective**: 1000px-2000px
- **Rotation speed**: 10-20 seconds per 360°

---

## SCENE TRANSITIONS SUMMARY

| Time | From | To | Transition Type |
|------|------|-----|-----------------|
| 00:06 | Loading | Globe | Particle morph |
| 00:10 | Globe | Mosaic | Grid expansion |
| 00:12 | Mosaic | Text | Fade to black |
| 00:17 | Text | Orange wipe | Horizontal slide |
| 00:20 | Colors | Gradient | Compression |
| 00:24 | Gradient | Typography | Bar wipe |
| 00:27 | Typography | Logo | Particle morph |
| 00:34 | Logo | Social | Scale down |
| 00:37 | Social | System | Zoom in |
| 00:42 | System | Components | Exploded view |
| 00:58 | Components | Assembly | Fade sequence |
| 01:15 | Assembly | Website | Morph to laptop |
| 01:30 | Website | End | Fade to logo |

---

## NOTES FOR IMPLEMENTATION

1. **Frame rate**: This video appears to be designed at 1fps for keyframes, but smooth animations should interpolate between frames at 30fps or 60fps

2. **Color consistency**: All orange elements should use the exact hex codes provided for brand consistency

3. **Typography**: LINE Seed Sans and DM Mono are essential for the authentic look

4. **3D elements**: Isometric views should maintain consistent 30° angles

5. **Glow effects**: Use sparingly for emphasis, not on all elements

6. **Timing**: Adjust durations proportionally if changing overall video length

7. **Responsive**: Design should scale proportionally while maintaining aspect ratio

---

*Document created for GPU.NET brand showcase video production*
*Agency: Spacekayak*
