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

// Screenshot positions - 9 screenshots spread in lower 60% of container
const SCREENSHOT_CONFIGS = [
  { x: -100, y: 450, rotation: -3, scale: 0.9, delay: 0, screenshotIndex: 0 },
  { x: 400, y: 480, rotation: 4, scale: 0.88, delay: 8, screenshotIndex: 1 },
  { x: 900, y: 450, rotation: -2, scale: 0.85, delay: 16, screenshotIndex: 2 },
  { x: 1400, y: 500, rotation: 3, scale: 0.87, delay: 24, screenshotIndex: 3 },
  { x: 100, y: 650, rotation: 2, scale: 0.86, delay: 4, screenshotIndex: 4 },
  { x: 600, y: 680, rotation: -4, scale: 0.9, delay: 12, screenshotIndex: 5 },
  { x: 1100, y: 650, rotation: 1, scale: 0.84, delay: 20, screenshotIndex: 6 },
  { x: 300, y: 850, rotation: -3, scale: 0.88, delay: 6, screenshotIndex: 7 },
  { x: 1000, y: 880, rotation: 2, scale: 0.85, delay: 14, screenshotIndex: 8 },
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


    </div>
  );
};
