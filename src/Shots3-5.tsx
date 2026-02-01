import React, { useMemo } from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
  success: "#22c55e",
};

// SHOT 3: THE SOLUTION - ONE CLICK (0:18 - 0:28)
export const Shot3Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const buttonScale = spring({ frame, fps, config: { damping: 15 } });
  const clickFrame = 80;
  const flashProgress = interpolate(frame - clickFrame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const showDashboard = frame > clickFrame + 10;
  
  const statusItems = [
    { label: "Agent Online", icon: "✓" },
    { label: "Connected to WhatsApp", icon: "✓" },
    { label: "Memory Initialized", icon: "✓" },
    { label: "Skills Loaded", icon: "✓" },
  ];
  
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
      {/* Flash effect */}
      {frame > clickFrame && frame < clickFrame + 20 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: COLORS.accent,
            opacity: interpolate(frame - clickFrame, [0, 10, 20], [0, 0.8, 0]),
            zIndex: 50,
          }}
        />
      )}
      
      {/* Launch button */}
      {!showDashboard && (
        <button
          style={{
            padding: "24px 48px",
            fontSize: "28px",
            fontWeight: 600,
            color: COLORS.text,
            backgroundColor: COLORS.accent,
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            transform: `scale(${0.9 + buttonScale * 0.1})`,
            boxShadow: `0 0 ${40 + buttonScale * 20}px rgba(249, 115, 22, 0.6)`,
            transition: frame > clickFrame ? "transform 0.1s" : undefined,
            ...(frame > clickFrame && { transform: "scale(0.95)" }),
          }}
        >
          ✦ Launch My Assistant
        </button>
      )}
      
      {/* Success dashboard */}
      {showDashboard && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {statusItems.map((item, i) => {
            const itemFrame = frame - (clickFrame + 15 + i * 8);
            const itemSpring = spring({ frame: itemFrame, fps, config: { damping: 12 } });
            
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 24px",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  borderRadius: "8px",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  opacity: itemSpring,
                  transform: `translateY(${(1 - itemSpring) * 20}px)`,
                }}
              >
                <span style={{ color: COLORS.success, fontSize: "20px" }}>{item.icon}</span>
                <span style={{ color: COLORS.text, fontSize: "18px", fontWeight: 500 }}>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
      
      {/* Text overlay */}
      {frame > clickFrame + 40 && (
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            fontSize: "32px",
            fontWeight: 600,
            color: COLORS.text,
            opacity: interpolate(frame - (clickFrame + 40), [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          One click. Zero config. Done.
        </div>
      )}
    </div>
  );
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
