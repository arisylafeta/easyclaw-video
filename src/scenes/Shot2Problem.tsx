import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
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
