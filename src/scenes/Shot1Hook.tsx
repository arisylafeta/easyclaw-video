import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
};

// Typewriter text component
const TypewriterText: React.FC<{
  text: string;
  startFrame: number;
  charDuration?: number;
  showCursor?: boolean;
  style?: React.CSSProperties;
  cursorBlink?: boolean;
}> = ({ text, startFrame, charDuration = 2, showCursor = true, style, cursorBlink = true }) => {
  const frame = useCurrentFrame();
  
  const charsToShow = Math.max(0, Math.floor((frame - startFrame) / charDuration));
  const displayText = text.slice(0, Math.min(charsToShow, text.length));
  const isTyping = charsToShow <= text.length && frame >= startFrame;
  const showCursorNow = showCursor && (isTyping || (cursorBlink && Math.floor(frame / 15) % 2 === 0));
  
  return (
    <span style={style}>
      {displayText}
      {showCursorNow && (
        <span style={{ 
          display: "inline-block", 
          width: "3px", 
          height: "1em", 
          backgroundColor: COLORS.accent,
          marginLeft: "2px",
          verticalAlign: "middle"
        }} />
      )}
    </span>
  );
};

// SHOT 1: HOOK (0:00 - 0:08)
export const Shot1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Phase 1: Logo starts centered and scales up (frames 0-30)
  const logoEntryProgress = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const logoScale = spring({ frame, fps, config: { damping: 15 } });
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  
  // Phase 2: Logo moves to right side while EasyClaw.ai types (frames 30-60)
  const logoMoveProgress = interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const logoXOffset = interpolate(logoMoveProgress, [0, 1], [0, 300]);
  
  // Phase 3: Both logo and EasyClaw.ai fade up and away (frames 60-90)
  const logoExitProgress = interpolate(frame, [60, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const logoFinalOpacity = interpolate(logoExitProgress, [0, 1], [1, 0]);
  const logoFinalY = interpolate(logoExitProgress, [0, 1], [0, -100]);
  
  // Tagline appears after logo and text fade away (frame 90+)
  const showTagline = frame >= 90;
  const taglineOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateRight: "clamp" });
  const taglineScale = spring({ frame: frame - 90, fps, config: { damping: 15 } });
  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Logo + EasyClaw.ai container - moves together */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "48px",
          opacity: logoOpacity * logoFinalOpacity,
          transform: `
            scale(${0.5 + logoScale * 0.5}) 
            translateX(${logoXOffset}px)
            translateY(${logoFinalY}px)
          `,
        }}
      >
        {/* Logo with rounded borders */}
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: "48px",
            overflow: "hidden",
            boxShadow: "0 0 90px rgba(249, 115, 22, 0.6)",
            border: "4px solid rgba(249, 115, 22, 0.3)",
            backgroundColor: "#1a1a1a",
            flexShrink: 0,
          }}
        >
          <Img
            src={staticFile("logo.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        
        {/* EasyClaw.ai text - types while logo moves */}
        <div
          style={{
            fontSize: "192px",
            fontWeight: 700,
            color: COLORS.text,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          <TypewriterText 
            text="EasyClaw.ai" 
            startFrame={30} 
            charDuration={2} 
            showCursor={frame < 120}
          />
        </div>
      </div>
      
      {/* Tagline - appears after logo and text fade away */}
      {showTagline && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: taglineOpacity,
            transform: `scale(${0.8 + taglineScale * 0.2})`,
          }}
        >
          <div
            style={{
              fontSize: "144px",
              fontWeight: 600,
              color: COLORS.text,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            <TypewriterText 
              text="Launch your assistant in one click." 
              startFrame={90} 
              charDuration={2} 
              showCursor={frame < 270}
            />
          </div>
        </div>
      )}
    </div>
  );
};
