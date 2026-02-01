import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig, Easing, staticFile, Img } from "remotion";
import { GlowingBorder, BUTTON_BORDER_CONFIG } from "../components/GlowingBorder";
import { GridBackground } from "../components/GridBackground";
import { loadFont } from "@remotion/fonts";

// Load ClashDisplay font
loadFont({
  family: "ClashDisplay",
  url: staticFile("fonts/ClashDisplay-Semibold.otf"),
  weight: "600",
});

const COLORS = {
  bg: "#0a0a0a",
  textWhite: "#ffffff",
  accentOrange: "#f97316",
  grid: "rgba(249, 115, 22, 0.1)",
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
  { x: -100, y: 810, rotation: -2, scale: 0.88, delay: 6, screenshotIndex: 9 },
  { x: 1000, y: 880, rotation: 2, scale: 0.85, delay: 14, screenshotIndex: 8 },
];

export const Scene1Complaints: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // PHASE 1: Screenshots drop in (0-3 seconds = 0-90 frames)
  // PHASE 2: Morph to button (3-4 seconds = 90-120 frames)
  // PHASE 3: Button with text (4-7 seconds = 120-210 frames)
  // PHASE 4: Click and explode (7-8 seconds = 210-240 frames)

  // Morph progress: 0 = full screen, 1 = button size
  const morphProgress = interpolate(frame, [90, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Button dimensions morph from full screen to 2x button size (560x160)
  const buttonWidth = interpolate(morphProgress, [0, 1], [1920, BUTTON_BORDER_CONFIG.width]);
  const buttonHeight = interpolate(morphProgress, [0, 1], [1080, BUTTON_BORDER_CONFIG.height]);
  const borderRadius = interpolate(morphProgress, [0, 1], [0, BUTTON_BORDER_CONFIG.borderRadius]);

  // Border glow
  const glowOpacity = interpolate(morphProgress, [0, 1], [0.1, 0.6]);
  const glowSpread = interpolate(morphProgress, [0, 1], [10, 60]);

  // Screenshots scale with the container
  const screenshotScale = interpolate(morphProgress, [0, 1], [1, 0.15]);
  const screenshotOpacity = interpolate(morphProgress, [0.5, 1], [1, 0]);

  // Text entrance animation (slides up from below with fade)
  const textEntranceProgress = interpolate(frame, [0, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textSlideUp = interpolate(textEntranceProgress, [0, 1], [200, 0], {
    easing: Easing.out(Easing.cubic),
  });
  const textEntranceOpacity = textEntranceProgress;

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

  // Grid background appears when morph starts (frame >= 90)
  const showGridBackground = frame >= 90;
  // Container with glowing border appears after morph completes (frame >= 120)
  const showContainer = frame >= 120;

  // Text fade-in animation from bottom (120-150 frames = 1 second)
  const textAnimationProgress = interpolate(frame, [120, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textSlideUp = interpolate(textAnimationProgress, [0, 1], [100, 0], {
    easing: Easing.out(Easing.cubic),
  });
  const textOpacity = textAnimationProgress;

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
      {/* Grid background with blobs - appears when morph starts */}
      {showGridBackground && (
        <GridBackground color={COLORS.grid} size="100px" showBlobs />
      )}

      {/* "We introduce You" text - in top 40% of screen, 3x bigger */}
      {showContainer && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "20%",
            transform: `translate(-50%, calc(-50% + ${textSlideUp}px))`,
            zIndex: 6,
            opacity: textOpacity,
          }}
        >
          <div
            style={{
              fontSize: 140,
              fontWeight: 600,
              color: COLORS.textWhite,
              fontFamily: "Inter, system-ui, sans-serif",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            We introduce You
          </div>
        </div>
      )}

      {/* Glowing border with EasyClaw - dead center */}
      {showContainer && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, calc(-50% + ${textSlideUp}px))`,
            zIndex: 5,
            opacity: textOpacity,
          }}
        >
          <GlowingBorder
            width={BUTTON_BORDER_CONFIG.width}
            height={BUTTON_BORDER_CONFIG.height}
            borderRadius={BUTTON_BORDER_CONFIG.borderRadius}
            glowOpacity={BUTTON_BORDER_CONFIG.glowOpacity}
            glowSpread={BUTTON_BORDER_CONFIG.glowSpread * glowPulse}
            pulse={false}
          >
            {/* Dark background inside the border */}
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#0a0a0a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* "EasyClaw" text - inside the border */}
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 600,
                  color: COLORS.accentOrange,
                  fontFamily: "ClashDisplay, Inter, system-ui, sans-serif",
                }}
              >
                EasyClaw
              </span>
            </div>
          </GlowingBorder>
        </div>
      )}

      {/* Screenshots layer - only visible before/during morph */}
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
          zIndex: showGridBackground ? 1 : 10,
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

      {/* Button border layer - morphs during transition */}
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
          zIndex: showGridBackground ? 1 : 5,
        }}
      />

      {/* "You are not alone" text - centered in upper 40% inside the box */}
      <div
        style={{
          position: "absolute",
          width: buttonWidth,
          height: buttonHeight,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "10%",
          opacity: screenshotOpacity,
        }}
      >
        <span
          style={{
            fontSize: 120 * screenshotScale,
            fontWeight: 800,
            color: COLORS.textWhite,
            textAlign: "center",
            whiteSpace: "nowrap",
            transform: `translateY(${textSlideUp}px) scale(${screenshotScale})`,
            transformOrigin: "center top",
            opacity: textEntranceOpacity,
          }}
        >
          You are not alone
        </span>
        {/* Orange underline */}
        <div
          style={{
            width: 200,
            height: 3,
            backgroundColor: COLORS.accentOrange,
            marginTop: 16 * screenshotScale,
            transform: `translateY(${textSlideUp}px) scale(${screenshotScale})`,
            transformOrigin: "center top",
            opacity: textEntranceOpacity,
          }}
        />
      </div>

    </div>
  );
};
