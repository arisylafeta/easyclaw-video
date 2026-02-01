import React, { useMemo } from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
  success: "#22c55e",
};

// SHOT 7: SECURITY (1:08 - 1:18)
export const Shot7Security: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  
  const securityLines = [
    { text: "Your data stays yours", delay: 0 },
    { text: "Bank-grade encryption", delay: 30 },
    { text: "Private by design", delay: 60 },
  ];
  
  // Particle positions for shield formation
  const particles = useMemo(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 150;
      p.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius * 1.2,
        size: 4 + Math.random() * 4,
        delay: i * 2,
      });
    }
    return p;
  }, []);
  
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
      {/* Particle shield */}
      <div
        style={{
          position: "relative",
          width: 400,
          height: 400,
          marginBottom: "40px",
        }}
      >
        {particles.map((p, i) => {
          const particleSpring = spring({ frame: frame - p.delay, fps, config: { damping: 15 } });
          const x = interpolate(particleSpring, [0, 1], [Math.random() * 400 - 200, p.x + 200]);
          const y = interpolate(particleSpring, [0, 1], [Math.random() * 400 - 200, p.y + 200]);
          
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: i % 3 === 0 ? COLORS.accent : "rgba(255,255,255,0.5)",
                opacity: particleSpring,
              }}
            />
          );
        })}
        
        {/* Lock icon */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 80,
            height: 80,
            opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="2">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      </div>
      
      {/* Security text lines */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
        {securityLines.map((line, i) => {
          const lineSpring = spring({ frame: frame - 40 - line.delay, fps, config: { damping: 12 } });
          
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                opacity: lineSpring,
                transform: `translateX(${(1 - lineSpring) * -30}px)`,
              }}
            >
              <span style={{ color: COLORS.success, fontSize: "24px" }}>✓</span>
              <span style={{ color: COLORS.text, fontSize: "28px", fontWeight: 600 }}>{line.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
