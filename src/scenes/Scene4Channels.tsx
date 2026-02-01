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
  
  // Platform cycling - faster transitions
  // Each platform shows for 0.8 seconds (24 frames) with 0.2s (6 frames) transition
  // Scene ends after iMessage (4 platforms total = 96 frames + 15 delay = 111 frames)
  const cycleDuration = 24;
  const transitionDuration = 6;
  
  const currentPlatformIndex = Math.max(0, Math.min(
    Math.floor((frame - 15) / cycleDuration),
    PLATFORMS.length - 1
  ));
  
  // Fade out at the end (frames 96-111 = 0.5s fade out)
  const fadeOutProgress = interpolate(frame, [96, 111], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // Stop platform cycling after iMessage (index 3)
  const isLastPlatform = currentPlatformIndex >= PLATFORMS.length - 1;
  
  const platformFrame = (frame - 15) % cycleDuration;
  // Stop transitions on the last platform
  const isTransitioning = !isLastPlatform && platformFrame > cycleDuration - transitionDuration;
  const transitionProgress = isTransitioning
    ? (platformFrame - (cycleDuration - transitionDuration)) / transitionDuration
    : 0;
  
  const currentPlatform = PLATFORMS[currentPlatformIndex];
  const nextPlatform = isLastPlatform ? null : PLATFORMS[currentPlatformIndex + 1];
  
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
        opacity: fadeOutProgress,
      }}
    >
      <GridBackground color={COLORS.grid} size="100px" showBlobs />
      
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
      

    </div>
  );
};
