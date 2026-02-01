import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  grid: "rgba(249, 115, 22, 0.1)",
  textPrimary: "#ffffff",
  accentOrange: "#f97316",
  successGreen: "#22C55E",
};

const SECURITY_LINES = [
  { text: "Your data stays yours", icon: "✓" },
  { text: "Bank-grade encryption", icon: "✓" },
  { text: "Private by design", icon: "✓" },
];

export const Scene5Security: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Particle formation (0-3s = 0-90 frames)
  const formationProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    durationInFrames: 90,
  });
  
  // Shield pulse (3.5-5s = 105-150 frames)
  const pulseFrame = frame - 105;
  const pulseProgress = Math.sin(pulseFrame * 0.1) * 0.5 + 0.5;
  const glowSize = 40 + pulseProgress * 20;
  
  // Zoom blur transition (5-6s = 150-180 frames)
  const zoomStart = 150;
  const zoomProgress = interpolate(frame, [zoomStart, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const zoomScale = interpolate(zoomProgress, [0, 1], [1, 3], {
    easing: Easing.in(Easing.cubic),
  });
  const zoomOpacity = interpolate(zoomProgress, [0, 0.7], [1, 0]);
  const blurAmount = interpolate(zoomProgress, [0, 1], [0, 20]);
  
  // Generate shield particles
  const particleCount = 60;
  const particles = Array.from({ length: particleCount }, (_, i) => {
    const angle = (i / particleCount) * Math.PI * 2;
    const radius = 200;
    const targetX = 960 + Math.cos(angle) * radius;
    const targetY = 540 + Math.sin(angle) * radius * 1.2;
    
    return {
      id: i,
      startX: 960 + (Math.random() - 0.5) * 800,
      startY: 540 + (Math.random() - 0.5) * 600,
      targetX,
      targetY,
      size: 4 + Math.random() * 2,
      delay: Math.random() * 30,
    };
  });
  
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
        position: "relative",
        overflow: "hidden",
        transform: `scale(${zoomScale})`,
        opacity: zoomOpacity,
        filter: `blur(${blurAmount}px)`,
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${COLORS.grid} 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.grid} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Shield Particles */}
      <div style={{ position: "absolute", inset: 0 }}>
        {particles.map((p, i) => {
          const particleProgress = interpolate(
            frame,
            [p.delay, p.delay + 60],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          
          const easedProgress = spring({
            frame: frame - p.delay,
            fps,
            config: { damping: 12, stiffness: 80 },
            durationInFrames: 60,
          });
          
          const x = interpolate(easedProgress, [0, 1], [p.startX, p.targetX]);
          const y = interpolate(easedProgress, [0, 1], [p.startY, p.targetY]);
          const opacity = interpolate(particleProgress, [0, 0.2, 1], [0, 1, 1]);
          
          return (
            <div
              key={p.id}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: i % 2 === 0 ? COLORS.accentOrange : COLORS.textPrimary,
                opacity,
                boxShadow: frame > 105 ? `0 0 ${glowSize / 4}px ${COLORS.accentOrange}` : "none",
              }}
            />
          );
        })}
      </div>
      
      {/* Shield Glow Ring */}
      {frame >= 90 && (
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 480,
            borderRadius: "50%",
            border: `3px solid ${COLORS.accentOrange}`,
            boxShadow: `
              0 0 ${glowSize}px ${COLORS.accentOrange}80,
              inset 0 0 ${glowSize / 2}px ${COLORS.accentOrange}40
            `,
            opacity: interpolate(frame, [90, 105], [0, 0.6]),
          }}
        />
      )}
      
      {/* Security Text Lines */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        {SECURITY_LINES.map((line, i) => {
          const lineStartFrame = 60 + i * 15;
          const lineProgress = interpolate(frame, [lineStartFrame, lineStartFrame + 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          
          const lineX = interpolate(lineProgress, [-50, 0], [-50, 0]);
          const lineOpacity = lineProgress;
          
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                transform: `translateX(${lineX}px)`,
                opacity: lineOpacity,
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  color: COLORS.successGreen,
                  fontWeight: 700,
                }}
              >
                {line.icon}
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 600,
                  color: COLORS.textPrimary,
                }}
              >
                {line.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
