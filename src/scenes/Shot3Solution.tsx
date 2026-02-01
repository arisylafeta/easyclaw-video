import React from "react";
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
