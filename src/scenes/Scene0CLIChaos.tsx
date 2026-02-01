import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { GridBackground } from "../components/GridBackground";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
  error: "#ef4444",
  success: "#22c55e",
  grid: "rgba(249, 115, 22, 0.03)",
};

// CLI chaos lines that will appear rapidly
const CLI_LINES = [
  { text: "$ npm install -g openclaw", type: "command", delay: 0 },
  { text: "ERR! permission denied", type: "error", delay: 8 },
  { text: "$ sudo npm install -g openclaw", type: "command", delay: 15 },
  { text: "ERR! dependency conflict", type: "error", delay: 22 },
  { text: "$ docker-compose up -d", type: "command", delay: 30 },
  { text: "ERR! container failed to start", type: "error", delay: 38 },
  { text: "$ ./setup.sh --env=production", type: "command", delay: 45 },
  { text: "ERR! API key not found", type: "error", delay: 52 },
  { text: "$ export OPENAI_API_KEY=...", type: "command", delay: 60 },
  { text: "ERR! webhook configuration missing", type: "error", delay: 68 },
  { text: "$ docker logs openclaw", type: "command", delay: 75 },
  { text: "ERR! connection refused: port 8080", type: "error", delay: 82 },
  { text: "$ systemctl restart nginx", type: "command", delay: 90 },
  { text: "ERR! SSL certificate expired", type: "error", delay: 98 },
];

// SCENE 0: CLI CHAOS + PROBLEM TEXT
export const Scene0CLIChaos: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Text animation timing
  const textStartFrame = 30;
  const textProgress = interpolate(frame, [textStartFrame, textStartFrame + 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Exit animation for transition to screenshots
  const exitStartFrame = 120; // 4 seconds
  const exitProgress = interpolate(frame, [exitStartFrame, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exitScale = interpolate(exitProgress, [0, 1], [1, 0.9], {
    easing: Easing.in(Easing.cubic),
  });
  const exitOpacity = interpolate(exitProgress, [0, 1], [1, 0]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.bg,
        display: "flex",
        fontFamily: "JetBrains Mono, monospace",
        overflow: "hidden",
        transform: `scale(${exitScale})`,
        opacity: exitOpacity,
      }}
    >
      {/* Left side: CLI Chaos */}
      <div
        style={{
          width: "50%",
          height: "100%",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Terminal window */}
        <div
          style={{
            backgroundColor: "#0d0d0d",
            borderRadius: "12px",
            border: "1px solid #333",
            padding: "24px",
            boxShadow: "0 0 60px rgba(239, 68, 68, 0.15)",
            overflow: "hidden",
          }}
        >
          {/* Terminal header */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ef4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#22c55e" }} />
          </div>

          {/* Scrolling CLI lines */}
          <div style={{ fontSize: "14px", lineHeight: 1.8 }}>
            {CLI_LINES.map((line, i) => {
              const lineFrame = frame - line.delay;
              const opacity = interpolate(lineFrame, [0, 8], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp"
              });
              const translateY = interpolate(lineFrame, [0, 8], [10, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp"
              });

              const isError = line.type === "error";
              const color = isError ? COLORS.error : COLORS.success;

              // Glitch effect for errors
              const glitchOffset = isError && frame % 4 < 2 ? 2 : 0;

              return (
                <div
                  key={i}
                  style={{
                    opacity,
                    color,
                    transform: `translateY(${translateY}px) translateX(${glitchOffset}px)`,
                    fontWeight: isError ? 600 : 400,
                  }}
                >
                  {line.text}
                </div>
              );
            })}
          </div>

          {/* Blinking cursor */}
          <div
            style={{
              marginTop: "8px",
              width: "10px",
              height: "18px",
              backgroundColor: COLORS.success,
              opacity: Math.floor(frame / 15) % 2 === 0 ? 1 : 0,
            }}
          />
        </div>

        {/* Chaos overlay effect */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 30% 50%, transparent 0%, ${COLORS.bg} 70%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Right side: Problem text */}
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Main headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: COLORS.text,
            lineHeight: 1.2,
            marginBottom: "24px",
            opacity: textProgress,
            transform: `translateY(${(1 - textProgress) * 30}px)`,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Tired of handling all this infrastructure?
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: COLORS.textSecondary,
            opacity: interpolate(frame, [textStartFrame + 15, textStartFrame + 45], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `translateY(${(1 - interpolate(frame, [textStartFrame + 15, textStartFrame + 45], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })) * 20}px)`,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
        </div>

        {/* Accent line */}
        <div
          style={{
            width: "120px",
            height: "4px",
            backgroundColor: COLORS.accent,
            marginTop: "40px",
            opacity: interpolate(frame, [textStartFrame + 30, textStartFrame + 60], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `scaleX(${interpolate(frame, [textStartFrame + 30, textStartFrame + 60], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })})`,
            transformOrigin: "left",
          }}
        />
      </div>

      <GridBackground color={COLORS.grid} />
    </div>
  );
};
