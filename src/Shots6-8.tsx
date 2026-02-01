import React, { useMemo } from "react";
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
        <img
          src="/logo.png"
          alt="EasyClaw"
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
