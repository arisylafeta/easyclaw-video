import React, { useMemo } from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
};

// SHOT 5: THE WALL (0:48 - 0:58)
export const Shot5Wall: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  
  const logos = useMemo(() => [
    "Gmail", "Calendar", "GitHub", "WhatsApp", "Telegram", "Discord", "iMessage",
    "Notion", "Slack", "Linear", "Stripe", "AWS", "Docker", "Figma", "Spotify",
    "Zoom", "Trello", "Jira", "Postgres", "MongoDB", "Redis", "Vercel", "Netlify",
    "GitLab", "Bitbucket", "Dropbox", "Drive", "Sheets", "Docs", "Figma",
  ], []);
  
  const flyProgress = interpolate(frame, [0, 180], [0, 1], { extrapolateRight: "clamp" });
  const zPosition = interpolate(flyProgress, [0, 1], [500, -200]);
  
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
        overflow: "hidden",
        perspective: "1000px",
      }}
    >
      {/* 3D Logo wall */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          maxWidth: "1200px",
          transform: `translateZ(${zPosition}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {logos.map((logo, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          const offsetX = (col - 2.5) * 30;
          const offsetY = (row - 2) * 20;
          const depth = Math.sin(i * 0.5 + frame * 0.02) * 30;
          
          return (
            <div
              key={i}
              style={{
                width: "140px",
                height: "60px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: i % 3 === 0 ? COLORS.accent : "rgba(255, 255, 255, 0.7)",
                border: `1px solid ${i % 3 === 0 ? COLORS.accent : "rgba(255, 255, 255, 0.1)"}`,
                transform: `translateX(${offsetX}px) translateY(${offsetY}px) translateZ(${depth}px)`,
                opacity: interpolate(flyProgress, [0, 0.3], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              {logo}
            </div>
          );
        })}
      </div>
      
      {/* Center text */}
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          opacity: interpolate(frame, [100, 130], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(frame, [100, 130], [0.8, 1], { extrapolateRight: "clamp" })})`,
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: "64px", fontWeight: 700, color: COLORS.text }}>200+ Integrations</div>
        <div style={{ fontSize: "32px", fontWeight: 500, color: COLORS.accent, marginTop: "8px" }}>And growing.</div>
      </div>
    </div>
  );
};
