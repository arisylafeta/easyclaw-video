import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing, staticFile, Img } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  textWhite: "#ffffff",
  accentOrange: "#f97316",
};

// Screenshot filenames with their original dimensions
const SCREENSHOTS = [
  { file: "image.png", width: 1020, height: 218 },
  { file: "image (1).png", width: 1036, height: 312 },
  { file: "image (2).png", width: 1034, height: 206 },
  { file: "image (3).png", width: 1032, height: 250 },
  { file: "image (4).png", width: 1020, height: 392 },
  { file: "image (5).png", width: 1020, height: 392 },
  { file: "image (6).png", width: 1078, height: 208 },
  { file: "image (7).png", width: 1078, height: 208 },
  { file: "image (8).png", width: 1078, height: 208 },
  { file: "image (9).png", width: 1056, height: 352 },
  { file: "image (10).png", width: 1038, height: 378 },
  { file: "image (11).png", width: 1058, height: 344 },
  { file: "image (12).png", width: 1062, height: 182 },
];

// Screenshot positions to fill screen
const SCREENSHOT_CONFIGS = [
  { x: -150, y: -80, rotation: -4, scale: 0.9, delay: 0, screenshotIndex: 0 },
  { x: 300, y: -60, rotation: 3, scale: 0.85, delay: 12, screenshotIndex: 1 },
  { x: 750, y: -90, rotation: -2, scale: 0.88, delay: 6, screenshotIndex: 2 },
  { x: 1200, y: -70, rotation: 4, scale: 0.82, delay: 18, screenshotIndex: 3 },
  { x: -100, y: 150, rotation: 2, scale: 0.87, delay: 9, screenshotIndex: 4 },
  { x: 350, y: 170, rotation: -3, scale: 0.83, delay: 24, screenshotIndex: 5 },
  { x: 800, y: 140, rotation: 1, scale: 0.85, delay: 3, screenshotIndex: 6 },
  { x: 1250, y: 160, rotation: -2, scale: 0.81, delay: 15, screenshotIndex: 7 },
  { x: -50, y: 380, rotation: -1, scale: 0.88, delay: 21, screenshotIndex: 8 },
  { x: 400, y: 400, rotation: 3, scale: 0.84, delay: 7, screenshotIndex: 9 },
  { x: 850, y: 370, rotation: -3, scale: 0.86, delay: 27, screenshotIndex: 10 },
  { x: 1300, y: 390, rotation: 2, scale: 0.82, delay: 11, screenshotIndex: 11 },
  { x: 200, y: 620, rotation: -2, scale: 0.9, delay: 30, screenshotIndex: 12 },
  { x: 650, y: 850, rotation: 1, scale: 0.85, delay: 14, screenshotIndex: 0 },
  { x: 1100, y: 870, rotation: -3, scale: 0.88, delay: 26, screenshotIndex: 1 },
  { x: 50, y: 920, rotation: 2, scale: 0.87, delay: 5, screenshotIndex: 2 },
  { x: 500, y: 940, rotation: -1, scale: 0.83, delay: 19, screenshotIndex: 3 },
  { x: 950, y: 910, rotation: 3, scale: 0.85, delay: 25, screenshotIndex: 4 },
  { x: 1400, y: 930, rotation: -2, scale: 0.81, delay: 17, screenshotIndex: 5 },
];

export const Scene1Complaints: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // PHASE 1: Screenshots drop in (0-3 seconds = 0-90 frames)
  // PHASE 2: Morph to button (3-4 seconds = 90-120 frames)
  // PHASE 3: Button with text (4-8 seconds = 120-240 frames)
  
  // Morph progress: 0 = full screen, 1 = button size
  const morphProgress = interpolate(frame, [90, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // Button dimensions morph from full screen to button size
  const buttonWidth = interpolate(morphProgress, [0, 1], [1920, 280]);
  const buttonHeight = interpolate(morphProgress, [0, 1], [1080, 80]);
  const borderRadius = interpolate(morphProgress, [0, 1], [0, 50]);
  
  // Border glow
  const glowOpacity = interpolate(morphProgress, [0, 1], [0.1, 0.6]);
  const glowSpread = interpolate(morphProgress, [0, 1], [10, 60]);
  
  // Screenshots scale with the container
  const screenshotScale = interpolate(morphProgress, [0, 1], [1, 0.15]);
  const screenshotOpacity = interpolate(morphProgress, [0.5, 1], [1, 0]);
  
  // Text appears after morph (4s = 120 frames)
  const textProgress = interpolate(frame, [120, 135], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // OpenClaw text types (4-5s = 120-150 frames)
  const buttonTextProgress = Math.max(0, frame - 120);
  const fullButtonText = "OpenClaw";
  const charsToShow = Math.floor(buttonTextProgress / 2);
  const displayButtonText = fullButtonText.slice(0, Math.min(charsToShow, fullButtonText.length));
  
  // Cursor and click (6.5-7s = 195-210 frames)
  const cursorProgress = interpolate(frame, [195, 210], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // Click flash
  const flashOpacity = interpolate(frame, [210, 216], [0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  // Explosion to next scene (7-8s = 210-240 frames)
  const explosionProgress = interpolate(frame, [210, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const explosionScale = interpolate(explosionProgress, [0, 1], [1, 3], {
    easing: Easing.out(Easing.exp),
  });
  const explosionOpacity = interpolate(explosionProgress, [0, 0.7], [1, 0], {
    extrapolateRight: "clamp",
  });
  
  // Glow pulse
  const glowPulse = 1 + Math.sin(frame * 0.1) * 0.1;
  
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
        transform: `scale(${explosionScale})`,
        opacity: explosionOpacity,
        position: "relative",
      }}
    >
      {/* Screenshots layer */}
      <div
        style={{
          position: "absolute",
          width: buttonWidth,
          height: buttonHeight,
          overflow: "hidden",
          borderRadius: borderRadius,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          clipPath: `inset(0px round ${borderRadius}px)`,
        }}
      >
        {SCREENSHOT_CONFIGS.map((config, i) => {
          const screenshot = SCREENSHOTS[config.screenshotIndex];
          const startFrame = config.delay;
          const endFrame = config.delay + 12;
          
          const dropProgress = interpolate(frame, [startFrame, endFrame], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          
          const animScale = interpolate(dropProgress, [0, 1], [0.5, 1]);
          const opacity = dropProgress;
          const finalScale = animScale * config.scale * screenshotScale;
          
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: config.x,
                top: config.y,
                width: screenshot.width,
                height: screenshot.height,
                transform: `rotate(${config.rotation}deg) scale(${finalScale})`,
                opacity: opacity * screenshotOpacity,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Img
                src={staticFile(`screenshots/${screenshot.file}`)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* Button border layer */}
      <div
        style={{
          position: "absolute",
          width: buttonWidth,
          height: buttonHeight,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border: `${3}px solid ${COLORS.accentOrange}`,
          borderRadius: borderRadius,
          boxShadow: `
            0 0 ${glowSpread * glowPulse}px rgba(249, 115, 22, ${glowOpacity}),
            0 0 ${glowSpread * 2 * glowPulse}px rgba(249, 115, 22, ${glowOpacity * 0.5})
          `,
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
      
      {/* Text and button content layer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* "Setup" text */}
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: COLORS.textWhite,
            opacity: textProgress,
            transform: `translateX(${(1 - textProgress) * -50}px)`,
            textShadow: `0 0 ${30 * glowPulse}px rgba(249, 115, 22, 0.5)`,
          }}
        >
          Setup
        </span>
        
        {/* Button content area */}
        <div
          style={{
            width: buttonWidth,
            height: buttonHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* OpenClaw text */}
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: COLORS.accentOrange,
              letterSpacing: "0.02em",
              textShadow: `0 0 ${20 * glowPulse}px rgba(249, 115, 22, 0.8)`,
              zIndex: 20,
            }}
          >
            {displayButtonText}
          </span>
          
          {/* Typing cursor */}
          {frame < 140 && (
            <span
              style={{
                display: "inline-block",
                width: 3,
                height: "1em",
                backgroundColor: COLORS.accentOrange,
                marginLeft: 4,
              }}
            />
          )}
          
          {/* Click flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "white",
              opacity: flashOpacity,
              pointerEvents: "none",
              zIndex: 30,
              borderRadius: borderRadius,
            }}
          />
        </div>
        
        {/* "in one click" text */}
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: COLORS.accentOrange,
            opacity: textProgress,
            transform: `translateX(${(1 - textProgress) * 50}px)`,
            textShadow: `
              0 0 ${30 * glowPulse}px rgba(249, 115, 22, 0.8),
              0 0 ${60 * glowPulse}px rgba(249, 115, 22, 0.4)
            `,
          }}
        >
          in one click
        </span>
      </div>
      
      {/* Cursor */}
      {frame >= 195 && frame < 216 && (
        <div
          style={{
            position: "absolute",
            width: 24,
            height: 24,
            backgroundColor: "white",
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translateX(${interpolate(cursorProgress, [0, 1], [200, 0])}px)`,
            boxShadow: "0 2px 12px rgba(255,255,255,0.5)",
            pointerEvents: "none",
            zIndex: 100,
          }}
        />
      )}
    </div>
  );
};
