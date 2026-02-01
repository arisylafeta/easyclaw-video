import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#f97316",
  whatsapp: "#25d366",
  telegram: "#0088cc",
  discord: "#5865f2",
  imessage: "#007aff",
};

// SHOT 6: CHANNELS (0:58 - 1:08)
export const Shot6Channels: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const channels = [
    { name: "WhatsApp", color: COLORS.whatsapp, message: "I've cleared your inbox", subtext: "You have 3 priority emails", delay: 0 },
    { name: "Telegram", color: COLORS.telegram, message: "Flight check-in complete", subtext: "Boarding pass ready", delay: 15 },
    { name: "Discord", color: COLORS.discord, message: "Daily briefing ready", subtext: "• 2 meetings today • Deadline approaching", delay: 30 },
    { name: "iMessage", color: COLORS.imessage, message: "Document ready", subtext: "I've written the draft", delay: 45 },
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
      {/* Phone grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
          maxWidth: "1000px",
        }}
      >
        {channels.map((channel, i) => {
          const startFrame = channel.delay;
          const phoneSpring = spring({ frame: frame - startFrame, fps, config: { damping: 12 } });
          const messageSpring = spring({ frame: frame - startFrame - 30, fps, config: { damping: 10 } });
          
          return (
            <div
              key={i}
              style={{
                width: "280px",
                height: "420px",
                backgroundColor: "#111",
                borderRadius: "24px",
                border: "2px solid #222",
                padding: "16px",
                opacity: phoneSpring,
                transform: `translateY(${(1 - phoneSpring) * 30}px) rotate(${(i % 2 === 0 ? -1 : 1) * (1 - phoneSpring) * 5}deg)`,
                boxShadow: `0 0 40px ${channel.color}20`,
              }}
            >
              {/* Phone header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #222",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: channel.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {channel.name[0]}
                </div>
                <span style={{ color: COLORS.text, fontWeight: 600 }}>{channel.name}</span>
              </div>
              
              {/* Chat message */}
              {frame > startFrame + 20 && (
                <div
                  style={{
                    opacity: messageSpring,
                    transform: `translateY(${(1 - messageSpring) * 10}px)`,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: channel.color + "20",
                      border: `1px solid ${channel.color}40`,
                      borderRadius: "12px",
                      padding: "12px",
                      marginBottom: "4px",
                    }}
                  >
                    <div style={{ color: COLORS.text, fontWeight: 500 }}>{channel.message}</div>
                  </div>
                  <div style={{ color: COLORS.textSecondary, fontSize: "12px", paddingLeft: "4px" }}>{channel.subtext}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          fontSize: "40px",
          fontWeight: 600,
          color: COLORS.text,
          opacity: interpolate(frame, [100, 120], [0, 1], { extrapolateRight: "clamp" }),
          textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          backgroundColor: "rgba(10, 10, 10, 0.8)",
          padding: "12px 24px",
          borderRadius: "8px",
        }}
      >
        Use your favorite apps
      </div>
    </div>
  );
};
