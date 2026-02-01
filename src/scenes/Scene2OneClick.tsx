import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  textWhite: "#ffffff",
  accentOrange: "#f97316",
};

export const Scene2OneClick: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Scene 1's screenshots compress into the OpenClaw button
  // The button starts as the full screen border and shrinks to button size
  
  // Morph transition (0-0.8s = 0-24 frames)
  // Full screen container compresses into the button
  const morphProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 80 },
    durationInFrames: 24,
  });
  
  // The "border" from Scene 1 transforms into the button
  // Starts as full screen (1920x1080), ends as button size
  const containerWidth = interpolate(morphProgress, [0, 1], [1920, 280]);
  const containerHeight = interpolate(morphProgress, [0, 1], [1080, 80]);
  const borderRadius = interpolate(morphProgress, [0, 1], [0, 50]);
  
  // Border glow intensifies as it becomes the button
  const glowOpacity = interpolate(morphProgress, [0, 1], [0.1, 0.6]);
  const glowSpread = interpolate(morphProgress, [0, 1], [10, 60]);
  
  // Text "Setup" and "in one click" fade in around the button (0.5-1.0s = 15-30 frames)
  const textStartFrame = 15;
  const textProgress = interpolate(frame, [textStartFrame, textStartFrame + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // OpenClaw text types inside the button (0.5-1.2s = 15-36 frames)
  const buttonTextStart = 15;
  const buttonTextProgress = Math.max(0, frame - buttonTextStart);
  const fullButtonText = "OpenClaw";
  const charsToShow = Math.floor(buttonTextProgress / 2);
  const displayButtonText = fullButtonText.slice(0, Math.min(charsToShow, fullButtonText.length));
  
  // Cursor animation (2.5-3.0s = 75-90 frames)
  const cursorStartFrame = 75;
  const cursorProgress = interpolate(frame, [cursorStartFrame, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // Click flash (3.0-3.2s = 90-96 frames)
  const flashFrame = 90;
  const flashOpacity = interpolate(frame, [flashFrame, flashFrame + 6], [0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // Explosion transition (3.2-4.0s = 96-120 frames)
  const explosionStart = 96;
  const explosionProgress = interpolate(frame, [explosionStart, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const explosionScale = interpolate(explosionProgress, [0, 1], [1, 3], {
    easing: Easing.out(Easing.exp),
  });
  const explosionOpacity = interpolate(explosionProgress, [0, 0.7], [1, 0], {
    extrapolateRight: "clamp",
  });
  
  // Glow pulse animation for the button
  const glowPulse = 1 + Math.sin(frame * 0.1) * 0.1;
  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        transform: `scale(${explosionScale})`,
        opacity: explosionOpacity,
        position: "relative",
      }}
    >
      {/* Subtle background effect - grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          opacity: 0.5,
        }}
      />
      
      {/* Main content container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* "Setup" text - left side */}
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: COLORS.textWhite,
            opacity: textProgress,
            transform: `translateX(${(1 - textProgress) * -50}px)`,
            textShadow: `0 0 ${30 * glowPulse}px rgba(249, 115, 22, 0.5)`,
          }}
        >
          Setup
        </span>
        
        {/* OpenClaw Button - morphs from Scene 1's full screen border */}
        <div
          style={{
            width: containerWidth,
            height: containerHeight,
            backgroundColor: "transparent",
            border: `${3 * interpolate(morphProgress, [0, 1], [1, 1])}px solid ${COLORS.accentOrange}`,
            borderRadius: borderRadius,
            boxShadow: `
              0 0 ${glowSpread * glowPulse}px rgba(249, 115, 22, ${glowOpacity}),
              0 0 ${glowSpread * 2 * glowPulse}px rgba(249, 115, 22, ${glowOpacity * 0.5}),
              inset 0 0 ${30 * glowPulse}px rgba(249, 115, 22, 0.1)
            `,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* OpenClaw text inside button */}
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: COLORS.accentOrange,
              letterSpacing: "0.02em",
              textShadow: `0 0 ${20 * glowPulse}px rgba(249, 115, 22, 0.8)`,
            }}
          >
            {displayButtonText}
          </span>
          
          {/* Typing cursor inside button */}
          {frame < buttonTextStart + 20 && (
            <span
              style={{
                display: "inline-block",
                width: 3,
                height: "1em",
                backgroundColor: COLORS.accentOrange,
                marginLeft: 4,
                animation: frame % 30 < 15 ? "blink 1s infinite" : "none",
              }}
            />
          )}
          
          {/* Click Flash Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "white",
              opacity: flashOpacity,
              pointerEvents: "none",
            }}
          />
        </div>
        
        {/* "in one click" text - right side - ORANGE AND GLOWING */}
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: COLORS.accentOrange,
            opacity: textProgress,
            transform: `translateX(${(1 - textProgress) * 50}px)`,
            textShadow: `
              0 0 ${30 * glowPulse}px rgba(249, 115, 22, 0.8),
              0 0 ${60 * glowPulse}px rgba(249, 115, 22, 0.4)
            `,
          }}
        >
          in one click
        </span>
      </div>
      
      {/* Cursor that moves to click the button */}
      {frame >= cursorStartFrame && frame < flashFrame + 6 && (
        <div
          style={{
            position: "absolute",
            width: 24,
            height: 24,
            backgroundColor: "white",
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translateX(${interpolate(cursorProgress, [0, 1], [200, 0])}px)`,
            boxShadow: "0 2px 12px rgba(255,255,255,0.5)",
            pointerEvents: "none",
            zIndex: 100,
          }}
        />
      )}
    </div>
  );
};
