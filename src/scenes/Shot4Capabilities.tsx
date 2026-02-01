import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
};

// SHOT 4: WHAT IT CAN DO (0:28 - 0:48)
export const Shot4Capabilities: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const capabilities = [
    { text: "Clear your inbox", accentWord: "Clear" },
    { text: "Manage your calendar", accentWord: "Manage" },
    { text: "Book your flights", accentWord: "Book" },
    { text: "Answer emails", accentWord: "Answer" },
    { text: "Control your home", accentWord: "Control" },
    { text: "Research anything", accentWord: "Research" },
    { text: "Write code", accentWord: "Write" },
    { text: "Deploy projects", accentWord: "Deploy" },
    { text: "Remember everything", accentWord: "Remember" },
  ];
  
  const cardDuration = 40; // frames per card
  
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
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.5 + Math.sin(frame * 0.05) * 0.2,
        }}
      />
      
      {/* Capability cards */}
      <div style={{ position: "relative", height: "120px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {capabilities.map((cap, i) => {
          const cardStart = i * cardDuration;
          const cardEnd = cardStart + cardDuration;
          const isActive = frame >= cardStart && frame < cardEnd;
          
          if (!isActive && frame < cardStart) return null;
          
          const localFrame = frame - cardStart;
          const enterProgress = spring({ frame: localFrame, fps, config: { damping: 15 } });
          const exitProgress = spring({ frame: localFrame - cardDuration + 15, fps, config: { damping: 15 } });
          
          const progress = frame >= cardEnd - 15 ? exitProgress : enterProgress;
          const yOffset = frame >= cardEnd - 15 ? (1 - exitProgress) * -50 : (1 - enterProgress) * 50;
          
          const parts = cap.text.split(cap.accentWord);
          
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                fontSize: "56px",
                fontWeight: 700,
                opacity: progress,
                transform: `translateY(${yOffset}px)`,
                textAlign: "center",
              }}
            >
              <span style={{ color: COLORS.text }}>{parts[0]}</span>
              <span style={{ color: COLORS.accent }}>{cap.accentWord}</span>
              <span style={{ color: COLORS.text }}>{parts[1]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
