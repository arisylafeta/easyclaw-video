import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const COLORS = {
  bgGradient: "linear-gradient(135deg, #FFD54F 0%, #FFB300 100%)",
  textPrimary: "#1F2937",
  accentOrange: "#f97316",
  textWhite: "#FFFFFF",
};

export const Scene6CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Zoom blur resolves (0-0.5s = 0-15 frames)
  const blurResolve = interpolate(frame, [0, 15], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // Logo scales in (0.5-1.0s = 15-30 frames)
  const logoProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 15, stiffness: 120 },
    durationInFrames: 15,
  });
  const logoScale = interpolate(logoProgress, [0, 1], [0, 1]);
  
  // Logo pulse glow
  const pulseFrame = frame - 30;
  const pulseProgress = Math.sin(pulseFrame * 0.1) * 0.5 + 0.5;
  const glowSize = 30 + pulseProgress * 20;
  
  // Main text types in (1.0-1.5s = 30-45 frames)
  const textStartFrame = 30;
  const textProgress = Math.max(0, frame - textStartFrame);
  const mainText = "Your assistant is waiting.";
  const charsToShow = Math.floor(textProgress / 2);
  const displayText = mainText.slice(0, Math.min(charsToShow, mainText.length));
  
  // URL fades in (1.5-2.0s = 45-60 frames)
  const urlOpacity = interpolate(frame, [45, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // CTA Button scales up (2.0-2.5s = 60-75 frames)
  const buttonProgress = spring({
    frame: frame - 60,
    fps,
    config: { damping: 15, stiffness: 120 },
    durationInFrames: 15,
  });
  const buttonScale = interpolate(buttonProgress, [0, 1], [0.8, 1]);
  
  // Button pulse (2.5-3.5s = 75-105 frames)
  const buttonPulseFrame = frame - 75;
  const buttonPulse = Math.sin(buttonPulseFrame * 0.15) * 0.05 + 1;
  
  // Cursor hover (2.5-3.5s)
  const cursorVisible = frame >= 75 && frame < 120;
  const cursorX = interpolate(frame, [75, 90], [300, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorY = interpolate(frame, [75, 90], [200, 50], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: COLORS.bgGradient,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        filter: `blur(${blurResolve}px)`,
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: 24,
          backgroundColor: COLORS.accentOrange,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `scale(${logoScale})`,
          marginBottom: 40,
          boxShadow: `0 0 ${glowSize}px rgba(249, 115, 22, 0.5)`,
        }}
      >
        <span style={{ fontSize: 60 }}>🦞</span>
      </div>
      
      {/* Main Text */}
      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: COLORS.textPrimary,
          marginBottom: 16,
        }}
      >
        {displayText}
      </div>
      
      {/* URL */}
      <div
        style={{
          fontSize: 32,
          fontWeight: 600,
          color: COLORS.accentOrange,
          marginBottom: 48,
          opacity: urlOpacity,
        }}
      >
        EasyClaw.ai
      </div>
      
      {/* CTA Button */}
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            backgroundColor: COLORS.accentOrange,
            borderRadius: 12,
            fontSize: 24,
            fontWeight: 700,
            color: COLORS.textWhite,
            transform: `scale(${buttonScale * buttonPulse})`,
            boxShadow: "0 10px 40px rgba(249, 115, 22, 0.5)",
            cursor: "pointer",
          }}
        >
          Join the Waitlist →
        </div>
        
        {/* Cursor */}
        {cursorVisible && (
          <div
            style={{
              position: "absolute",
              width: 24,
              height: 24,
              backgroundColor: "#000",
              borderRadius: "50%",
              transform: `translate(${cursorX}px, ${cursorY}px)`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  );
};
