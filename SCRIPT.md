# EASYCLAW DEMO VIDEO - REVISED SCRIPT
## Runtime: 30 seconds | Style: Fast-paced, High Energy, Social Media Optimized
## Inspired by: LicenseSeat (Video 1) + GPU.NET (Video 2)

---

## SCENE 1: THE PROBLEM - COMPLAINT CASCADE (0:00 - 0:04)
**Duration: 4 seconds**

**Visual:**
- Pure black background
- **20+ screenshots cascade onto screen rapidly** (tweets, Reddit posts, GitHub issues)
- All complaining about OpenClaw setup complexity
- Screenshots drop with physics - **bam bam bam** - slightly overlapping
- Each screenshot has **"OpenClaw" highlighted in red** (using text overlay or image processing)
- Screenshots fill entire canvas within 2 seconds
- Screenshots have slight rotation (-5° to +5°) for organic feel
- Drop shadows on each screenshot for depth

**Animation Sequence:**
- **0.0-0.1s:** First screenshot drops from top, bounces slightly
- **0.1-2.0s:** Screenshots cascade rapidly (one every 0.1s), overlapping, filling screen
- **2.0-3.0s:** Hold on filled screen
- **3.0-4.0s:** **WARP TRANSITION** - entire screen compresses and shrinks:
  - Scale: 1.0 → 0.3
  - Position: center → moves to reveal next scene
  - Rotation: 0° → slight 3D tilt (perspective transform)
  - Opacity: 1.0 → 0.0 (as it becomes the button)

**Technical Specs:**
- Screenshot size: ~200-300px width
- Drop shadow: `0 10px 30px rgba(0,0,0,0.5)`
- Rotation: random between -5° and +5°
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce)

**Audio:** Rapid "thud" sounds for each screenshot landing, building intensity

---

## SCENE 2: THE SOLUTION - ONE CLICK (0:04 - 0:08)
**Duration: 4 seconds**

**Visual:**
- Warm gradient background (borrow from Video 1): `#FFD54F` → `#FFB300`
- Center screen: **White rounded card** (from Video 1 frame 4 style)
  - Size: ~600px width, ~200px height
  - Border-radius: 24px
  - Box-shadow: `0 25px 80px rgba(0,0,0,0.2)`
  - Background: `#FFFFFF`
- Card contains text: **"Setup [OpenClaw] with just one click"**
  - "Setup" and "with just one click" in dark text (#1F2937)
  - "[OpenClaw]" in **white pill button** with red background (#DC2626)
  - Typography: 48px, font-weight: 700
  - Font: Inter or system-ui

**Animation Sequence:**
- **0.0-0.5s:** Card scales in from 0.8 → 1.0 with spring easing
- **0.5-1.5s:** Text types in character by character (fast: 2-3 frames per char)
- **1.5-2.5s:** Hold, subtle pulse on card
- **2.5-3.0s:** **Cursor appears**, moves to hover over "[OpenClaw]" button
- **3.0-3.2s:** **CLICK** - flash of white light from button
- **3.2-4.0s:** **EXPLOSION TRANSITION** - screen explodes outward:
  - Scale: 1.0 → 3.0
  - Opacity: 1.0 → 0.0
  - Particles burst outward (white/orange)
  - Transition to next scene

**Technical Specs:**
- Card shadow: `0 25px 80px rgba(0,0,0,0.2)`
- Spring config: `{ damping: 15, stiffness: 100 }`
- Click flash: white overlay with opacity 0.8 → 0.0 over 10 frames
- Explosion: radial blur + scale

**Audio:** Satisfying click sound, then explosive "whoosh"

---

## SCENE 3: FEATURE EXPLOSION (0:08 - 0:14)
**Duration: 6 seconds**

**Visual:**
- Background: Pure black `#0a0a0a`
- **Main Feature Showcase (first 3 seconds):**
  - Large 3D card floating center (borrow from Video 2's isometric style)
  - Card shows: **"Clear your inbox"** with envelope icon
  - Card has depth, slight rotation (isometric view)
  - Card glows with orange accent (#f97316)
  - Text animates: "Clear" in orange, "your inbox" in white
  
- **Grid Transition (3-6 seconds):**
  - Main card shrinks and moves to top-left
  - **3x2 grid of feature cards** appears (borrow from Video 2 frame 9)
  - Cards float in 3D space with depth
  - Each card shows different capability:
    - "Manage calendar" 📅
    - "Book flights" ✈️
    - "Answer emails" ✉️
    - "Control home" 🏠
    - "Research" 🔍
    - "Write code" 💻
  - Cards have subtle floating animation (sine wave, different phases)

**Animation Sequence:**
- **0.0-0.5s:** Main feature card scales in from explosion (3.0 → 1.0)
- **0.5-2.0s:** Main card floats, text highlights animate
- **2.0-3.0s:** Main card begins shrinking and moving to grid position
- **3.0-4.0s:** Grid cards fade in with stagger (0.1s delay each)
- **4.0-6.0s:** All cards float with gentle motion, subtle glow pulses

**Technical Specs:**
- Main card size: 500px width
- Grid cards: 280px width each
- Grid gap: 40px
- 3D perspective: `perspective: 1000px`
- Card rotation: `rotateX(10deg) rotateY(-10deg)`
- Floating animation: `translateY(sin(frame * 0.05) * 10px)`
- Glow: `box-shadow: 0 0 60px rgba(249, 115, 22, 0.4)`

**Audio:** Upbeat electronic beat, subtle "pop" for each card appearance

---

## SCENE 4: CHANNELS - CONNECT WITH (0:14 - 0:20)
**Duration: 6 seconds**

**Visual:**
- Dark background continues
- Text: **"Connect with"** in white, 64px, center-top
- Below: **Platform logos cycle rapidly** (borrow from Video 1 frames 12-15)
  - WhatsApp (green)
  - Telegram (blue)
  - Discord (purple)
  - iMessage (blue)
- Each platform name types out, holds for 0.8s, then transitions
- Transition style: **Slide out left, new one slides in from right**
- Each platform has its brand color glow

**Animation Sequence:**
- **0.0-0.5s:** "Connect with" text fades in
- **0.5-1.5s:** WhatsApp logo + text slides in from right
- **1.5-2.5s:** Transition to Telegram (slide out/in)
- **2.5-3.5s:** Transition to Discord
- **3.5-4.5s:** Transition to iMessage
- **4.5-5.0s:** Hold on iMessage
- **5.0-6.0s:** **PARTICLE DISSOLVE TRANSITION** - logo dissolves into particles that form next scene

**Technical Specs:**
- Platform text: 72px, font-weight: 700
- Logo size: 80px
- Glow effect: `drop-shadow(0 0 30px {brandColor})`
- Transition: `translateX(-100px)` + opacity fade
- Particle dissolve: 50 particles burst outward, fade out

**Audio:** Whoosh sound for each transition, notification sounds for each platform

---

## SCENE 5: SECURITY (0:20 - 0:26)
**Duration: 6 seconds**

**Visual:**
- Background: Dark with subtle grid (borrow from Video 2 frames 11-14)
- **Particle shield formation** (similar to Video 2 style)
  - 60+ particles start scattered
  - Particles move to form shield shape
  - Particles are orange (#f97316) and white
- **Security text appears line by line:**
  - "Your data stays yours"
  - "Bank-grade encryption"
  - "Private by design"
- Each line has checkmark icon (✓) in green
- Shield pulses with glow when complete

**Animation Sequence:**
- **0.0-1.0s:** Particles scatter, begin moving to shield positions
- **1.0-3.0s:** Particles form shield shape (spring easing)
- **2.0-2.5s:** First text line fades in with slide
- **2.5-3.0s:** Second text line
- **3.0-3.5s:** Third text line
- **3.5-5.0s:** Shield pulses with glow, particles shimmer
- **5.0-6.0s:** **ZOOM BLUR TRANSITION** - camera zooms through shield to next scene

**Technical Specs:**
- Particles: 4-6px circles
- Shield formation: `spring({ damping: 12, stiffness: 80 })`
- Text: 36px, font-weight: 600
- Checkmark: 24px, color #22C55E
- Glow pulse: `box-shadow: 0 0 ${40 + pulse}px rgba(249, 115, 22, 0.6)`
- Zoom blur: `scale(1.0 → 3.0)` + `blur(0 → 20px)`

**Audio:** Ethereal "secure" sound, particles chiming as they form shield

---

## SCENE 6: CTA - WAITLIST (0:26 - 0:30)
**Duration: 4 seconds**

**Visual:**
- Background: Warm gradient returns `#FFD54F` → `#FFB300`
- **Center: EasyClaw logo** (lobster icon)
  - Logo pulses with orange glow
  - Size: 120px
- **Text below:**
  - "Your assistant is waiting." - 48px, bold
  - "EasyClaw.ai" - 32px, orange (#f97316)
- **CTA Button:**
  - "Join the Waitlist →"
  - Orange background (#f97316)
  - White text, 24px, bold
  - Rounded corners (12px)
  - Pulsing glow animation
  - Cursor hovers over it

**Animation Sequence:**
- **0.0-0.5s:** Zoom blur resolves to clean scene
- **0.5-1.0s:** Logo scales in with spring
- **1.0-1.5s:** Main text types in
- **1.5-2.0s:** URL fades in
- **2.0-2.5s:** CTA button scales up with bounce
- **2.5-3.5s:** Button pulses invitingly, cursor hovers
- **3.5-4.0s:** Hold on final frame

**Technical Specs:**
- Logo glow: `filter: drop-shadow(0 0 ${30 + pulse}px rgba(249, 115, 22, 0.5))`
- Pulse: `scale(1.0 → 1.05 → 1.0)` over 2s loop
- Button shadow: `0 10px 40px rgba(249, 115, 22, 0.5)`
- Spring: `{ damping: 15, stiffness: 120 }`

**Audio:** Beat resolves, final inviting chime, brand sting

---

## TRANSITION SUMMARY

1. **Scene 1→2:** Screen warp/compress into button
2. **Scene 2→3:** Explosion with particles
3. **Scene 3→4:** Main card shrinks to grid
4. **Scene 4→5:** Particle dissolve
5. **Scene 5→6:** Zoom blur through shield

---

## COLOR PALETTE

- **Background Black:** `#0a0a0a`
- **Background Warm Gradient:** `#FFD54F` → `#FFB300`
- **Card White:** `#FFFFFF`
- **Text Primary:** `#1F2937` (dark gray)
- **Text White:** `#FFFFFF`
- **Accent Orange:** `#f97316`
- **Highlight Red:** `#DC2626` (for OpenClaw)
- **Success Green:** `#22C55E`
- **WhatsApp Green:** `#25D366`
- **Telegram Blue:** `#0088CC`
- **Discord Purple:** `#5865F2`

---

## TYPOGRAPHY

- **Primary Font:** Inter, system-ui, sans-serif
- **Hero Text:** 48-72px, font-weight: 700
- **Body Text:** 24-36px, font-weight: 600
- **Card Text:** 18-24px, font-weight: 500
- **Code Font:** JetBrains Mono (if needed)

---

## KEY ANIMATION PRINCIPLES

1. **Fast-paced:** Most animations complete in 0.5-1.5s
2. **Spring easing:** Use for scale animations (`damping: 12-15`)
3. **Stagger:** 0.1s delay between sequential elements
4. **Overlap:** Transitions start before previous scene fully ends
5. **3D Depth:** Cards have perspective and slight rotation
6. **Glow effects:** Orange accent glows on interactive elements
7. **Physics:** Screenshots drop with bounce, particles have momentum
