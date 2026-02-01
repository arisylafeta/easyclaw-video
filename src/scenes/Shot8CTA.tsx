import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig, Img, staticFile } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
};

// SHOT 8: CTA - JOIN THE WAITLIST (1:18 - 1:30)
export const Shot8CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const logoPulse = 1 + Math.sin(frame * 0.08) * 0.05;
  const showText = frame > 30;
  const showButton = frame > 80;
  
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
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Logo */}
      <div
        style={{
          marginBottom: "40px",
          transform: `scale(${logoPulse})`,
          filter: `drop-shadow(0 0 ${30 + Math.sin(frame * 0.08) * 10}px rgba(249, 115, 22, 0.5))`,
        }}
      >
        <Img
          src={staticFile("logo.png")}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </div>
      
      {/* Main CTA text */}
      {showText && (
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: COLORS.text,
            textAlign: "center",
            opacity: interpolate(frame - 30, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          Your assistant is waiting.
        </div>
      )}
      
      {/* URL */}
      {showText && (
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: COLORS.accent,
            marginTop: "12px",
            marginBottom: "32px",
            opacity: interpolate(frame - 50, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          EasyClaw.ai
        </div>
      )}
      
      {/* CTA Button */}
      {showButton && (
        <div
          style={{
            opacity: interpolate(frame - 80, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
            transform: `scale(${interpolate(frame - 80, [0, 15], [0.9, 1], { extrapolateRight: "clamp" })})`,
          }}
        >
          <button
            style={{
              padding: "24px 56px",
              fontSize: "28px",
              fontWeight: 600,
              color: COLORS.text,
              backgroundColor: COLORS.accent,
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              animation: frame > 100 ? "pulse 2s infinite" : undefined,
              boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)",
            }}
          >
            Join the Waitlist →
          </button>
        </div>
      )}
      
      {/* Final text */}
      {frame > 200 && (
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            fontSize: "18px",
            color: COLORS.textSecondary,
            opacity: interpolate(frame - 200, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          Limited early access
        </div>
      )}
    </div>
  );
};
