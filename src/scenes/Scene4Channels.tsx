import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  textPrimary: "#ffffff",
  whatsapp: "#25D366",
  telegram: "#0088CC",
  discord: "#5865F2",
  imessage: "#007AFF",
};

const PLATFORMS = [
  { name: "WhatsApp", color: COLORS.whatsapp },
  { name: "Telegram", color: COLORS.telegram },
  { name: "Discord", color: COLORS.discord },
  { name: "iMessage", color: COLORS.imessage },
];

export const Scene4Channels: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // "Connect with" text fade in (0-0.5s = 0-15 frames)
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  
  // Platform cycling (0.5-5.0s = 15-150 frames)
  // Each platform shows for 1.5 seconds (45 frames) with 0.3s (9 frames) transition
  const cycleDuration = 45;
  const transitionDuration = 9;
  
  const currentPlatformIndex = Math.min(
    Math.floor((frame - 15) / cycleDuration),
    PLATFORMS.length - 1
  );
  
  const platformFrame = (frame - 15) % cycleDuration;
  const isTransitioning = platformFrame > cycleDuration - transitionDuration;
  const transitionProgress = isTransitioning
    ? (platformFrame - (cycleDuration - transitionDuration)) / transitionDuration
    : 0;
  
  const currentPlatform = PLATFORMS[currentPlatformIndex];
  const nextPlatform = PLATFORMS[Math.min(currentPlatformIndex + 1, PLATFORMS.length - 1)];
  
  // Slide animations
  const slideOutX = interpolate(transitionProgress, [0, 1], [0, -150], {
    easing: Easing.in(Easing.quad),
  });
  const slideOutOpacity = interpolate(transitionProgress, [0, 0.5], [1, 0], {
    extrapolateRight: "clamp",
  });
  
  const slideInX = interpolate(transitionProgress, [0, 1], [150, 0], {
    easing: Easing.out(Easing.quad),
  });
  const slideInOpacity = interpolate(transitionProgress, [0.5, 1], [0, 1], {
    extrapolateLeft: "clamp",
  });
  
  // Particle dissolve transition (5.0-6.0s = 150-180 frames)
  const dissolveStart = 150;
  const dissolveProgress = interpolate(frame, [dissolveStart, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneOpacity = interpolate(dissolveProgress, [0, 1], [1, 0]);
  
  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: 960 + (Math.random() - 0.5) * 400,
    y: 540 + (Math.random() - 0.5) * 200,
    vx: (Math.random() - 0.5) * 20,
    vy: (Math.random() - 0.5) * 20,
    size: 4 + Math.random() * 4,
    delay: Math.random() * 20,
  }));
  
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
        opacity: sceneOpacity,
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: COLORS.textPrimary,
          marginBottom: 60,
          opacity: headerOpacity,
        }}
      >
        Connect with
      </div>
      
      {/* Platform Display */}
      <div style={{ position: "relative", height: 200, width: 600 }}>
        {/* Current Platform */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transform: `translateX(${slideOutX}px)`,
            opacity: slideOutOpacity,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              backgroundColor: currentPlatform?.color,
              marginBottom: 20,
              boxShadow: `0 0 60px ${currentPlatform?.color}80`,
            }}
          />
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: currentPlatform?.color,
              filter: `drop-shadow(0 0 30px ${currentPlatform?.color})`,
            }}
          >
            {currentPlatform?.name}
          </div>
        </div>
        
        {/* Next Platform (during transition) */}
        {isTransitioning && nextPlatform && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: `translateX(${slideInX}px)`,
              opacity: slideInOpacity,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                backgroundColor: nextPlatform.color,
                marginBottom: 20,
                boxShadow: `0 0 60px ${nextPlatform.color}80`,
              }}
            />
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: nextPlatform.color,
                filter: `drop-shadow(0 0 30px ${nextPlatform.color})`,
              }}
            >
              {nextPlatform.name}
            </div>
          </div>
        )}
      </div>
      
      {/* Particle Dissolve Effect */}
      {frame >= dissolveStart && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {particles.map((p) => {
            const particleProgress = interpolate(
              frame,
              [dissolveStart + p.delay, dissolveStart + p.delay + 30],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            
            const x = p.x + p.vx * particleProgress * 10;
            const y = p.y + p.vy * particleProgress * 10;
            const opacity = interpolate(particleProgress, [0, 0.5, 1], [0, 1, 0]);
            
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
                  backgroundColor: currentPlatform?.color || COLORS.textPrimary,
                  opacity,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
