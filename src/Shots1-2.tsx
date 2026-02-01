import React, { useMemo } from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img } from "remotion";

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
  
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const logoScale = spring({ frame, fps, config: { damping: 15 } });
  
  const showEasyClaw = frame >= 20;
  const showTagline = frame >= 80;
  const showSubtitle = frame >= 180;
  
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
      
      {/* Logo */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${0.8 + logoScale * 0.2})`,
          marginBottom: "40px",
        }}
      >
        <Img
          src="/logo.png"
          style={{
            width: 120,
            height: 120,
            filter: "drop-shadow(0 0 30px rgba(249, 115, 22, 0.5))",
          }}
        />
      </div>
      
      {/* EasyClaw.ai typewriter */}
      {showEasyClaw && (
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: COLORS.text,
            letterSpacing: "-0.02em",
          }}
        >
          <TypewriterText text="EasyClaw.ai" startFrame={20} charDuration={2} showCursor={frame < 140} />
        </div>
      )}
      
      {/* Tagline */}
      {showTagline && (
        <div
          style={{
            marginTop: "24px",
            fontSize: "48px",
            fontWeight: 600,
            color: COLORS.text,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          <TypewriterText 
            text="Launch your assistant in one click." 
            startFrame={80} 
            charDuration={2} 
            showCursor={frame < 220}
          />
        </div>
      )}
      
      {/* Subtitle */}
      {showSubtitle && (
        <div
          style={{
            marginTop: "16px",
            fontSize: "24px",
            color: COLORS.textSecondary,
            opacity: interpolate(frame, [180, 200], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          Built on OpenClaw. Made for humans.
        </div>
      )}
    </div>
  );
};

// SHOT 2: THE PROBLEM (0:08 - 0:18)
export const Shot2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  
  const errorLines = [
    "$ npm install -g openclaw",
    "ERR! permission denied",
    "$ sudo npm install...",
    "ERR! dependency conflict",
    "ERR! node version incompatible",
    "$ docker-compose up",
    "ERR! container failed to start",
    "ERR! connection refused: port 8080",
    "$ ./setup.sh",
    "ERR! API key not found",
    "ERR! webhook configuration missing",
  ];
  
  const glitchOffset = Math.sin(frame * 0.5) * 2;
  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#050505",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "JetBrains Mono, monospace",
        overflow: "hidden",
      }}
    >
      {/* Terminal window */}
      <div
        style={{
          width: "80%",
          maxWidth: "800px",
          backgroundColor: "#0d0d0d",
          borderRadius: "12px",
          border: "1px solid #333",
          padding: "24px",
          boxShadow: "0 0 60px rgba(239, 68, 68, 0.2)",
          transform: `translateX(${glitchOffset}px)`,
        }}
      >
        {/* Terminal header */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ef4444" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#22c55e" }} />
        </div>
        
        {/* Scrolling errors */}
        <div style={{ fontSize: "16px", lineHeight: 1.6 }}>
          {errorLines.map((line, i) => {
            const lineFrame = frame - i * 8;
            const opacity = interpolate(lineFrame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
            const isError = line.includes("ERR!");
            
            return (
              <div
                key={i}
                style={{
                  opacity,
                  color: isError ? "#ef4444" : "#22c55e",
                  transform: isError && frame % 4 < 2 ? "translateX(2px)" : "translateX(0)",
                }}
              >
                {line}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          fontSize: "36px",
          fontWeight: 700,
          color: COLORS.accent,
          textAlign: "center",
          padding: "20px 40px",
          backgroundColor: "rgba(10, 10, 10, 0.9)",
          borderRadius: "8px",
          opacity: interpolate(frame, [100, 120], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(frame, [100, 120], [0.9, 1], { extrapolateRight: "clamp" })})`,
        }}
      >
        Setting up AI shouldn&apos;t require a CS degree.
      </div>
    </div>
  );
};
