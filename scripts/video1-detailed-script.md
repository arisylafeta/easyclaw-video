# LicenseSeat Video - Detailed Technical Script

## Video Overview
- **Total Duration**: 28 seconds (28 frames at 1 second per frame)
- **Resolution**: 1920x1080 (estimated from visual proportions)
- **Frame Rate**: 1 fps (for analysis purposes)

---

## Color Palette

### Primary Colors
- **Background Gradient (Yellow Scene)**: 
  - Start: `#FFD54F` (light golden yellow)
  - End: `#FFB300` (amber/orange-yellow)
  - Angle: 135deg (diagonal from top-left to bottom-right)

- **Background Gradient (Dashboard Scene)**:
  - Start: `#F5E6D3` (warm beige/cream)
  - End: `#E8B87D` (warm tan/gold)
  - Angle: 135deg

- **Background (Dark Scenes)**: `#0D1117` (GitHub dark)

- **White Card Background**: `#FFFFFF`
- **Success Green**: `#22C55E` (for checkmarks and success messages)
- **Text Primary**: `#1F2937` (dark gray/black)
- **Text Secondary**: `#6B7280` (medium gray)
- **Text Muted**: `#9CA3AF` (light gray for placeholders)

### Code Editor Colors
- **Background**: `#161B22` (dark navy)
- **Window Controls**: 
  - Red: `#FF5F56`
  - Yellow: `#FFBD2E`
  - Green: `#27C93F`
- **Syntax Highlighting**:
  - Keywords (import, using, #include): `#FF7B72` (coral red)
  - Class Names (LicenseSeat): `#D2A8FF` (light purple)
  - Strings: `#A5D6FF` (light blue)
  - Functions: `#D2A8FF` (light purple)
  - Comments: `#8B949E` (gray)

---

## Typography Specifications

### Font Families
- **Primary Sans-Serif**: Inter or system-ui
- **Monospace (Code)**: JetBrains Mono, Fira Code, or SF Mono
- **Logo**: Custom serif (similar to Playfair Display or Georgia)

### Font Sizes & Weights
- **Card Label**: 12px, font-weight: 500, color: #6B7280
- **License Key Input**: 24px, font-weight: 600, letter-spacing: 2px
- **Success Message**: 14px, font-weight: 500, color: #22C55E
- **Hero Text "Add"**: 48px, font-weight: 700
- **Badge Text**: 14px, font-weight: 600, letter-spacing: 1px
- **Hero Text "to your app"**: 48px, font-weight: 700
- **Rotating Text**: 48px, font-weight: 700, color: #6B7280 (faded)
- **Section Title**: 42px, font-weight: 700, color: #FFFFFF
- **Code Text**: 16px, font-weight: 400
- **Dashboard Title**: 36px, font-weight: 700
- **Dashboard Subtitle**: 12px, font-weight: 600, letter-spacing: 2px, uppercase
- **Logo Text**: 42px, font-weight: 700
- **URL Text**: 18px, font-weight: 500

---

## Scene 1: License Key Input (Frames 1-4)
**Duration**: 0:00 - 0:04 (4 seconds)

### Frame 1 (0:00)
**Visual State**: Initial license key input

**Components**:
1. **Background**: Full-screen gradient #FFD54F → #FFB300
2. **Card Container**:
   - Position: Center (50%, 50%)
   - Size: ~500px width, ~180px height
   - Background: #FFFFFF
   - Border-radius: 16px
   - Box-shadow: 0 20px 60px rgba(0,0,0,0.15)
   - Padding: 24px

3. **Label Row**:
   - Icon: Lock icon, 16px, color #9CA3AF
   - Text: "Enter your license key"
   - Font: 12px, weight 500, color #6B7280
   - Margin-bottom: 12px

4. **Input Field**:
   - Background: #F3F4F6
   - Border-radius: 8px
   - Padding: 16px 20px
   - Display: flex, align-items: center
   - Content: "L1C3-N5" + 8 dots (••••••••)
   - Font: 24px, monospace, weight 600
   - Letter-spacing: 2px

5. **Submit Button**:
   - Position: Right side of input
   - Size: 48px x 48px
   - Background: #F3F4F6
   - Border-radius: 8px
   - Icon: Arrow right or check (subtle)

### Frame 2 (0:01)
**Animation**: License key reveal

**Changes from Frame 1**:
- Input field now shows: "L1C3-N53X-0K42"
- Dots replaced with actual characters
- Character reveal animation: Each character fades in sequentially
- Submit button: Now shows circular progress/arrow indicator
  - Background: Light yellow tint #FEF3C7
  - Icon: Arrow or loading state

**Animation Specs**:
```
Character Reveal:
- Duration: 800ms total
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Each character: 50ms stagger delay
- Opacity: 0 → 1
- Transform: translateY(4px) → translateY(0)
```

### Frame 3 (0:02)
**Animation**: Success confirmation

**Changes from Frame 2**:
- Submit button: 
  - Background: #DCFCE7 (light green)
  - Icon: Checkmark ✓, color #22C55E
  - Scale: Brief pulse 1 → 1.1 → 1
- Success message appears below input:
  - Text: "✓ License activated successfully"
  - Font: 14px, weight 500
  - Color: #22C55E
  - Margin-top: 16px
  - Opacity animation: 0 → 1

**Animation Specs**:
```
Success Message:
- Duration: 400ms
- Easing: cubic-bezier(0, 0, 0.2, 1)
- Opacity: 0 → 1
- Transform: translateY(-8px) → translateY(0)

Checkmark Button:
- Duration: 300ms
- Scale: 1 → 1.15 → 1
- Background color transition: 200ms
```

### Frame 4 (0:03)
**Animation**: License key morph

**Changes from Frame 3**:
- License key text morphs from "L1C3-N53X-0K42" to "29GN-18FM-07EL"
- Success message updates text
- Cross-fade transition between keys

**Animation Specs**:
```
Text Morph:
- Duration: 600ms
- Easing: ease-in-out
- Old text: Opacity 1 → 0, translateX(0) → translateX(-20px)
- New text: Opacity 0 → 1, translateX(20px) → translateX(0)
- Overlap: 100ms
```

---

## Scene 2: Hero Text Animation (Frames 5-8)
**Duration**: 0:04 - 0:08 (4 seconds)

### Frame 5 (0:04)
**Visual State**: Text entrance begins

**Layout**:
- Background: Same yellow gradient
- Text positioned center horizontally
- Elements aligned on single line

**Components**:
1. **"Add" Text**:
   - Position: Left of center
   - Font: 48px, weight 700, color #1F2937
   - Initial state: translateX(-100px), opacity 0

2. **"LICENSE KEYS" Badge**:
   - Position: Center
   - Background: #FFFFFF
   - Border-radius: 8px
   - Padding: 12px 20px
   - Box-shadow: 0 4px 12px rgba(0,0,0,0.1)
   - Font: 14px, weight 600, letter-spacing: 1px
   - Initial state: scale(0.8), opacity 0

**Animation Specs**:
```
Entrance Animation:
- Duration: 600ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1) (spring-like)
- "Add": translateX(-100px) → translateX(0), opacity 0 → 1
- Badge: scale(0.8) → scale(1), opacity 0 → 1
- Stagger: 100ms between elements
```

### Frame 6 (0:05)
**Visual State**: Full hero text revealed

**Components**:
- "Add" + Badge + "to your app" now all visible
- "to your app" text:
  - Font: 48px, weight 700
  - Color: #1F2937
  - Animation: Slides in from right

**Animation Specs**:
```
"to your app" Entrance:
- Duration: 500ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Transform: translateX(50px) → translateX(0)
- Opacity: 0 → 1
```

### Frame 7 (0:06)
**Animation**: Word rotation begins

**Visual State**:
- "app" begins to fade/slide out
- New words "games" and "plugins" appear behind, slightly faded
- Creates depth/parallax effect

**Animation Specs**:
```
Word Rotation:
- Duration: 800ms per word
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Outgoing word: translateY(0) → translateY(-30px), opacity 1 → 0
- Incoming words: 
  - "games": translateY(30px) → translateY(0), opacity 0.5 → 0.3
  - "plugins": translateY(40px) → translateY(10px), opacity 0.3 → 0.5
- Stacked appearance with different depths
```

### Frame 8 (0:07)
**Visual State**: Final word "software"

**Changes**:
- "games" and "plugins" transition out
- "software" transitions in
- Final stable state of hero section

**Animation Specs**:
```
Final Word Transition:
- Duration: 600ms
- "software": opacity 0 → 1, translateY(20px) → translateY(0)
- Settles into position aligned with "to your"
```

---

## Scene 3: Code Editor (Frames 9-13)
**Duration**: 0:08 - 0:13 (5 seconds)

### Frame 9 (0:08)
**Transition**: Background color shift

**Animation Specs**:
```
Background Transition:
- Duration: 400ms
- Yellow gradient → #0D1117
- Easing: ease-in-out
```

**Visual State**: Code window appears

**Components**:
1. **Code Window Container**:
   - Position: Center
   - Size: ~700px width, ~400px height
   - Background: #161B22
   - Border-radius: 12px
   - Border: 1px solid #30363D
   - Box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5)
   - Initial: translateY(100px), opacity 0

2. **Window Controls**:
   - Position: Top-left, 16px from edges
   - Three circles: 12px diameter each
   - Colors: #FF5F56 (red), #FFBD2E (yellow), #27C93F (green)
   - Spacing: 8px between circles

**Animation Specs**:
```
Window Entrance:
- Duration: 600ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- Transform: translateY(100px) → translateY(0)
- Opacity: 0 → 1
```

### Frame 10 (0:09)
**Visual State**: Title and first code line

**Components**:
1. **Section Title**: "Set up in 15 minutes"
   - Position: Above code window, centered
   - Font: 42px, weight 700, color #FFFFFF
   - Margin-bottom: 40px
   - Animation: Fade in from top

2. **Code Line 1**:
   - Line number: "1" (color #6E7681, width 30px)
   - Content: `import LicenseSeat from '@license'`
   - Syntax highlighting:
     - "import": #FF7B72
     - "LicenseSeat": #D2A8FF
     - "from": #FF7B72
     - "'@license'": #A5D6FF

**Animation Specs**:
```
Title Entrance:
- Duration: 500ms
- Delay: 200ms
- Transform: translateY(-30px) → translateY(0)
- Opacity: 0 → 1

Code Typing:
- Duration: 800ms
- Characters appear sequentially
- Cursor blink effect at end
```

### Frame 11 (0:10)
**Visual State**: More code and language badges

**Changes**:
- Additional code lines appear
- Language/framework badges appear at bottom

**Components**:
1. **Code Lines**:
   - Line 2: `const key = 'LS28-XXXX-XXXX'` (string: #A5D6FF)
   - Line 3: `LicenseSeat.activate(key)` (function: #D2A8FF)

2. **Badges**:
   - TypeScript badge (blue): "TS"
   - Swift badge (orange): Swift bird icon
   - Position: Bottom of code window
   - Size: 40px x 40px each
   - Animation: Slide up with stagger

**Animation Specs**:
```
Badge Entrance:
- Duration: 400ms each
- Stagger: 100ms
- Transform: translateY(20px) → translateY(0)
- Opacity: 0 → 1
```

### Frame 12 (0:11)
**Visual State**: C# code variant

**Changes**:
- Code language switches to C# style
- Additional badges appear

**Components**:
1. **Code**:
   - `using LicenseSeat;`
   - `LicenseSeat.Activate(key);`
   - Syntax: "using" in #FF7B72, "LicenseSeat" in #D2A8FF

2. **New Badges**:
   - Unity (cube icon)
   - Godot (robot icon)
   - Slide in from right

**Animation Specs**:
```
Language Switch:
- Duration: 500ms
- Cross-fade between code blocks
- Old code: opacity 1 → 0, translateX(0) → translateX(-20px)
- New code: opacity 0 → 1, translateX(20px) → translateX(0)
```

### Frame 13 (0:12)
**Visual State**: C++ code variant

**Changes**:
- Code switches to C++
- Final badge set complete

**Components**:
1. **Code**:
   - `#include "licenseseat.h"`
   - `LicenseSeat::activate(key);`
   - "#include" in #FF7B72

2. **New Badge**:
   - C++ (blue hexagon with "C++")

---

## Scene 4: Integration Partners (Frames 14-16)
**Duration**: 0:13 - 0:16 (3 seconds)

### Frame 14 (0:13)
**Visual State**: Paddle integration

**Components**:
1. **Background**: #0D1117 (continues)

2. **Text**: "Connect with paddle"
   - "Connect with": #FFFFFF, 36px, weight 600
   - "paddle": Custom styling
     - Color: #F7931A (orange) or gradient
     - Font: Custom Paddle logo font
     - Letter "p" has distinctive styling

**Animation Specs**:
```
Text Entrance:
- Duration: 600ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- "Connect with": translateX(-50px) → translateX(0), opacity 0 → 1
- "paddle": translateX(50px) → translateX(0), opacity 0 → 1
- Stagger: 150ms
```

### Frame 15 (0:14)
**Visual State**: Shopify integration

**Changes**:
- "paddle" transitions to "shopify"
- Shopify bag logo appears before text

**Components**:
- Shopify logo: Green shopping bag icon
- Text: "shopify" in #96BF48 (Shopify green)

**Animation Specs**:
```
Logo Transition:
- Duration: 500ms
- Paddle logo: scale(1) → scale(0.8) → scale(0), opacity 1 → 0
- Shopify logo: scale(0) → scale(1.1) → scale(1), opacity 0 → 1
- Text cross-fade: 300ms
```

### Frame 16 (0:15)
**Visual State**: Zapier integration

**Changes**:
- Large "zapier" text zooms in
- Takes up most of the frame

**Components**:
- Text: "zapier"
- Color: #FFFFFF
- Font: 120px+ (very large)
- Weight: 700

**Animation Specs**:
```
Zoom Effect:
- Duration: 600ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- Transform: scale(0.3) → scale(1)
- Opacity: 0 → 1
- Origin: center
```

---

## Scene 5: Dashboard Preview (Frames 17-22)
**Duration**: 0:16 - 0:22 (6 seconds)

### Frame 17 (0:16)
**Transition**: Background shift to warm gradient

**Animation Specs**:
```
Background Transition:
- Duration: 600ms
- From: #0D1117
- To: Linear gradient #F5E6D3 → #E8B87D
- Easing: ease-in-out
```

**Visual State**: Dashboard window initial

**Components**:
1. **Section Title**: "Monitor your licenses"
   - Font: 36px, weight 700, color #1F2937
   - Position: Top center, 60px from top

2. **Browser Window**:
   - Size: ~900px width, ~550px height
   - Background: #FFFFFF
   - Border-radius: 12px
   - Box-shadow: 0 25px 50px rgba(0,0,0,0.15)
   - URL bar: licenseseat.com/dashboard
   - Window controls: Same macOS style (red, yellow, green)

3. **Sidebar**:
   - Width: 64px
   - Background: #F9FAFB
   - Logo at top: LicenseSeat mascot
   - Icons: Home, Search, Link, Team, Settings

**Animation Specs**:
```
Window Entrance:
- Duration: 700ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- Transform: translateY(80px) → translateY(0), scale(0.95) → scale(1)
- Opacity: 0 → 1
```

### Frame 18 (0:17)
**Visual State**: Dashboard stats appear

**Components**:
1. **Stats Cards** (3 columns):
   - **New Today**: 
     - Icon: Lightning bolt (yellow #FBBF24)
     - Value: "+1" (green #22C55E)
     - Background: Light card
   - **Total Active**:
     - Icon: Key/link icon (gray #6B7280)
     - Value: "1,247"
   - **This Month**:
     - Icon: Dollar sign (yellow #FBBF24)
     - Value: "$4.2k"

2. **Subtitle**: "ABUSE PREVENTION"
   - Font: 12px, weight 600, letter-spacing: 2px
   - Color: #9CA3AF
   - Text-transform: uppercase

3. **Live Activations Section**:
   - Header: "Live Activations" with "Last 24 hours" label
   - First license entry appears

**Animation Specs**:
```
Stats Counter Animation:
- Duration: 800ms
- "New Today" counts from 0 to 1
- Easing: ease-out
- Cards stagger: 150ms each

Card Entrance:
- Transform: translateY(20px) → translateY(0)
- Opacity: 0 → 1
- Duration: 400ms
```

### Frame 19 (0:18)
**Visual State**: More activations

**Changes**:
- "New Today" updates: +1 → +3
- Additional license entries appear in list
- Country flags shown (US, Germany)

**Components**:
- License entries show:
  - Country flag icon
  - License key (masked)
  - Email address
  - "Active" status badge (green)

**Animation Specs**:
```
Counter Update:
- Duration: 400ms
- Number morphs from 1 to 3
- New list items slide in:
  - Transform: translateX(-20px) → translateX(0)
  - Opacity: 0 → 1
  - Stagger: 100ms
```

### Frame 20 (0:19)
**Visual State**: Device IDs feature

**Changes**:
- Subtitle changes: "ABUSE PREVENTION" → "DEVICE IDS"
- "New Today": +3 → +6
- More entries in list
- Device icons appear next to licenses

**Animation Specs**:
```
Subtitle Transition:
- Duration: 300ms
- Cross-fade with slight vertical movement
- Letter-spacing animation for emphasis
```

### Frame 21 (0:20)
**Visual State**: Multiple products

**Changes**:
- Subtitle: "DEVICE IDS" → "MULTIPLE PRODUCTS"
- "New Today": +6 → +12
- Product icons appear (different app icons)
- List continues to populate

**Animation Specs**:
```
Product Icons:
- Entrance: Scale from 0 with rotation
- Transform: scale(0) rotate(-10deg) → scale(1) rotate(0)
- Duration: 400ms
- Stagger: 80ms
```

### Frame 22 (0:21)
**Visual State**: License search

**Changes**:
- Subtitle: "MULTIPLE PRODUCTS" → "LICENSE SEARCH"
- "New Today": +12 → +18
- Cursor appears in URL bar
- Search/highlight effect on licenses

**Animation Specs**:
```
Cursor Blink:
- Animation: blink 1s infinite
- Opacity: 1 → 0 → 1

Search Highlight:
- Matching text gets yellow background highlight
- Duration: 200ms
- Easing: ease-out
```

---

## Scene 6: Logo Outro (Frames 23-28)
**Duration**: 0:22 - 0:28 (6 seconds)

### Frame 23 (0:22)
**Transition**: Dashboard slides out

**Animation Specs**:
```
Dashboard Exit:
- Duration: 500ms
- Transform: translateX(0) → translateX(100px)
- Opacity: 1 → 0
- Easing: cubic-bezier(0.4, 0, 1, 1)
```

### Frame 24 (0:23)
**Visual State**: Logo reveal

**Components**:
1. **Logo Mascot**:
   - Character: Green frog-like figure with sunglasses
   - Holding: Key and drink
   - Size: ~80px height
   - Animation: Bounces in

2. **Logo Text**: "LicenseSeat"
   - Font: Serif (Georgia/Playfair Display style)
   - Size: 42px
   - Weight: 700
   - Color: #1F2937

3. **URL**: "LicenseSeat.com"
   - Font: 18px, weight 500
   - Color: #4B5563
   - Margin-top: 12px

**Animation Specs**:
```
Logo Entrance:
- Duration: 800ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)

Mascot:
- Transform: scale(0) rotate(-20deg) → scale(1.1) rotate(5deg) → scale(1) rotate(0)
- Delay: 0ms

Text:
- Transform: translateY(20px) → translateY(0)
- Opacity: 0 → 1
- Delay: 200ms

URL:
- Transform: translateY(10px) → translateY(0)
- Opacity: 0 → 1
- Delay: 400ms
```

### Frames 25-28 (0:24 - 0:28)
**Visual State**: Hold on logo

**Animation**: Subtle breathing/pulse effect

**Animation Specs**:
```
Idle Animation:
- Duration: 4000ms (over 4 frames)
- Mascot: Subtle bounce
  - Transform: translateY(0) → translateY(-3px) → translateY(0)
  - Easing: ease-in-out

Shadow:
- Box-shadow opacity pulses slightly
- 0 10px 30px rgba(0,0,0,0.1) → 0 15px 35px rgba(0,0,0,0.15) → 0 10px 30px rgba(0,0,0,0.1)
```

---

## Technical Implementation Notes

### Frame Timing Summary
```
Frame 1:  0:00  - Scene 1 Start (License Input)
Frame 2:  0:01  - Key reveal
Frame 3:  0:02  - Success message
Frame 4:  0:03  - Key morph
Frame 5:  0:04  - Scene 2 Start (Hero Text)
Frame 6:  0:05  - Full text
Frame 7:  0:06  - Word rotation
Frame 8:  0:07  - Final word
Frame 9:  0:08  - Scene 3 Start (Code Editor)
Frame 10: 0:09  - TypeScript code
Frame 11: 0:10  - Swift code
Frame 12: 0:11  - C# code
Frame 13: 0:12  - C++ code
Frame 14: 0:13  - Scene 4 Start (Integrations)
Frame 15: 0:14  - Shopify
Frame 16: 0:15  - Zapier
Frame 17: 0:16  - Scene 5 Start (Dashboard)
Frame 18: 0:17  - Stats appear
Frame 19: 0:18  - Activations list
Frame 20: 0:19  - Device IDs
Frame 21: 0:20  - Multiple products
Frame 22: 0:21  - License search
Frame 23: 0:22  - Dashboard exit
Frame 24: 0:23  - Scene 6 Start (Logo)
Frame 25: 0:24  - Hold
Frame 26: 0:25  - Hold
Frame 27: 0:26  - Hold
Frame 28: 0:27  - End
```

### Key Animation Curves
```css
/* Spring bounce */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Smooth decelerate */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* Standard ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* Ease in-out */
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
```

### Common Animation Patterns
1. **Entrance from bottom**: translateY(30-100px) → translateY(0)
2. **Scale entrance**: scale(0.8-0.9) → scale(1)
3. **Fade**: opacity 0 → 1
4. **Stagger delay**: 80-150ms between elements
5. **Spring bounce**: Overshoot for playful feel
6. **Cross-fade**: Overlap old and new by 100-200ms

### Responsive Considerations
- All centering uses flexbox: `display: flex; justify-content: center; align-items: center`
- Container max-width: 1200px
- Padding: 24px on mobile, 48px on desktop

### Performance Notes
- Use `transform` and `opacity` for animations (GPU accelerated)
- Apply `will-change: transform, opacity` on animated elements
- Use `backface-visibility: hidden` for 3D transforms
- Implement `prefers-reduced-motion` media query support
