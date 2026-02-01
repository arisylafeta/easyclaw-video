import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  cardBg: "#1a1a1a",
  textPrimary: "#ffffff",
  accentOrange: "#f97316",
};

const FEATURES = [
  { icon: "📅", text: "Manage calendar" },
  { icon: "✈️", text: "Book flights" },
  { icon: "✉️", text: "Answer emails" },
  { icon: "🏠", text: "Control home" },
  { icon: "🔍", text: "Research" },
  { icon: "💻", text: "Write code" },
];

export const Scene3Features: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Main card entrance (0-0.5s = 0-15 frames)
  const mainCardProgress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
    durationInFrames: 15,
  });
  
  const mainCardScale = interpolate(mainCardProgress, [0, 1], [3, 1]);
  
  // Main card shrink and move to grid (2-3s = 60-90 frames)
  const shrinkProgress = interpolate(frame, [60, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const mainCardX = interpolate(shrinkProgress, [0, 1], [0, -500]);
  const mainCardY = interpolate(shrinkProgress, [0, 1], [0, -250]);
  const mainCardFinalScale = interpolate(shrinkProgress, [0, 1], [1, 0.6]);
  
  // Grid cards fade in with stagger (3-4s = 90-120 frames)
  const gridStartFrame = 90;
  
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
        perspective: "1000px",
      }}
    >
      {/* Main Feature Card */}
      <div
        style={{
          width: 500,
          height: 300,
          backgroundColor: COLORS.cardBg,
          borderRadius: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transform: `
            scale(${mainCardScale * mainCardFinalScale}) 
            translateX(${mainCardX}px) 
            translateY(${mainCardY}px)
            rotateX(10deg) 
            rotateY(-10deg)
          `,
          boxShadow: `0 0 60px rgba(249, 115, 22, 0.4)`,
          position: "absolute",
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>📧</div>
        <div style={{ fontSize: 48, fontWeight: 700 }}>
          <span style={{ color: COLORS.accentOrange }}>Clear</span>
          <span style={{ color: COLORS.textPrimary }}> your inbox</span>
        </div>
      </div>
      
      {/* Grid Cards */}
      {frame >= gridStartFrame - 10 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 40,
            position: "absolute",
          }}
        >
          {FEATURES.map((feature, i) => {
            const cardDelay = i * 3;
            const cardProgress = spring({
              frame: frame - gridStartFrame - cardDelay,
              fps,
              config: { damping: 15, stiffness: 100 },
              durationInFrames: 20,
            });
            
            const cardOpacity = interpolate(
              frame,
              [gridStartFrame + cardDelay, gridStartFrame + cardDelay + 10],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            
            const cardScale = interpolate(cardProgress, [0, 1], [0.8, 1]);
            const floatY = Math.sin((frame + i * 20) * 0.05) * 10;
            
            return (
              <div
                key={i}
                style={{
                  width: 280,
                  height: 180,
                  backgroundColor: COLORS.cardBg,
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: `
                    scale(${cardScale}) 
                    translateY(${floatY}px)
                    rotateX(5deg) 
                    rotateY(-5deg)
                  `,
                  opacity: cardOpacity,
                  boxShadow: `0 0 40px rgba(249, 115, 22, 0.2)`,
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>{feature.icon}</div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: COLORS.textPrimary,
                  }}
                >
                  {feature.text}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
