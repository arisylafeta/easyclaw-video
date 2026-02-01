import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing, Img, staticFile } from "remotion";
import { GridBackground } from "../components/GridBackground";

const COLORS = {
  bg: "#0a0a0a",
  grid: "rgba(249, 115, 22, 0.1)",
  textPrimary: "#ffffff",
  whatsapp: "#25D366",
  telegram: "#0088CC",
  discord: "#5865F2",
  imessage: "#007AFF",
};

const PLATFORMS = [
  { name: "WhatsApp", color: COLORS.textPrimary, logo: "/logos/whatsapp.png", logoSize: 100 },
  { name: "Telegram", color: COLORS.textPrimary, logo: "/logos/telegram.png", logoSize: 100 },
  { name: "Discord", color: COLORS.textPrimary, logo: "/logos/discord.png", logoSize: 100 },
  { name: "iMessage", color: COLORS.textPrimary, logo: "/logos/imessage.png", logoSize: 100 },
];

export const Scene4Channels: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Platform cycling (0.5-5.0s = 15-150 frames)
  // Each platform shows for 1.5 seconds (45 frames) with 0.3s (9 frames) transition
  const cycleDuration = 45;
  const transitionDuration = 9;
  
  const currentPlatformIndex = Math.max(0, Math.min(
    Math.floor((frame - 15) / cycleDuration),
    PLATFORMS.length - 1
  ));
  
  const platformFrame = (frame - 15) % cycleDuration;
  const isTransitioning = platformFrame > cycleDuration - transitionDuration;
  const transitionProgress = isTransitioning
    ? (platformFrame - (cycleDuration - transitionDuration)) / transitionDuration
    : 0;
  
  const currentPlatform = PLATFORMS[currentPlatformIndex];
  const nextPlatform = PLATFORMS[Math.min(currentPlatformIndex + 1, PLATFORMS.length - 1)];
  
  // Vertical fade animations - old fades up, new fades in from bottom
  const fadeOutY = interpolate(transitionProgress, [0, 1], [0, -80], {
    easing: Easing.in(Easing.cubic),
  });
  const fadeOutOpacity = interpolate(transitionProgress, [0, 0.6], [1, 0], {
    extrapolateRight: "clamp",
  });
  
  const fadeInY = interpolate(transitionProgress, [0, 1], [80, 0], {
    easing: Easing.out(Easing.cubic),
  });
  const fadeInOpacity = interpolate(transitionProgress, [0.4, 1], [0, 1], {
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GridBackground color={COLORS.grid} size="100px" />

      {/* Faint greenish-blue blob */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          left: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Faint orangeish-red blob */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          right: "-300px",
          top: "30%",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Platform Display - Fixed "Connect with" + changing logo/text */}
      <div style={{ 
        position: "relative", 
        height: 120, 
        width: 1920,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
      }}>
        {/* Fixed "Connect with" text */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: COLORS.textPrimary,
            whiteSpace: "nowrap",
          }}
        >
          Connect with
        </div>
        
        {/* Changing content container */}
        <div style={{ 
          position: "relative", 
          width: 500, 
          height: 120,
          display: "flex",
          alignItems: "center",
        }}>
          {/* Current Platform - fades up */}
          <div
            style={{
              position: "absolute",
              left: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 24,
              transform: `translateY(${fadeOutY}px)`,
              opacity: fadeOutOpacity,
              whiteSpace: "nowrap",
            }}
          >
            <Img
              src={staticFile(currentPlatform?.logo || "")}
              alt={currentPlatform?.name}
              style={{
                width: currentPlatform?.logoSize || 100,
                height: currentPlatform?.logoSize || 100,
                objectFit: "contain",
              }}
            />
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: currentPlatform?.color,
              }}
            >
              {currentPlatform?.name}
            </div>
          </div>
          
          {/* Next Platform - fades in from bottom */}
          {isTransitioning && nextPlatform && (
            <div
              style={{
                position: "absolute",
                left: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 24,
                transform: `translateY(${fadeInY}px)`,
                opacity: fadeInOpacity,
                whiteSpace: "nowrap",
              }}
            >
              <Img
                src={staticFile(nextPlatform.logo)}
                alt={nextPlatform.name}
                style={{
                  width: nextPlatform.logoSize || 100,
                  height: nextPlatform.logoSize || 100,
                  objectFit: "contain",
                }}
              />
              <div
                style={{
                  fontSize: 96,
                  fontWeight: 700,
                  color: nextPlatform.color,
                }}
              >
                {nextPlatform.name}
              </div>
            </div>
          )}
        </div>
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
