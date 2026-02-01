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
// Screenshot 2 (index 2) drops first and stays, then others drop faster
const SCREENSHOT_CONFIGS = [
  { x: -100, y: 450, rotation: -3, scale: 0.9, delay: 45, screenshotIndex: 0, duration: 8 },
  { x: 400, y: 480, rotation: 4, scale: 0.88, delay: 0, screenshotIndex: 1, duration: 12 },
  { x: 900, y: 450, rotation: -2, scale: 0.85, delay: 30, screenshotIndex: 2, duration: 8 },
  { x: 1400, y: 500, rotation: 3, scale: 0.87, delay: 38, screenshotIndex: 3, duration: 8 },
  { x: 100, y: 650, rotation: 2, scale: 0.86, delay: 46, screenshotIndex: 4, duration: 8 },
  { x: 600, y: 680, rotation: -4, scale: 0.9, delay: 52, screenshotIndex: 5, duration: 8 },
  { x: 1100, y: 650, rotation: 1, scale: 0.84, delay: 58, screenshotIndex: 6, duration: 8 },
  { x: -100, y: 810, rotation: -2, scale: 0.88, delay: 64, screenshotIndex: 9, duration: 8 },
  { x: 1000, y: 880, rotation: 2, scale: 0.85, delay: 70, screenshotIndex: 8, duration: 8 },
];

export const Scene1Complaints: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // PHASE 1: Screenshots drop in (0-3 seconds = 0-90 frames)
  // PHASE 2: Morph to button (3-4 seconds = 90-120 frames)
  // PHASE 3: Button with text (4-7 seconds = 120-210 frames) - EXTENDED
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
  const textSlideUp1 = interpolate(textEntranceProgress, [0, 1], [200, 0], {
    easing: Easing.out(Easing.cubic),
  });
  const textEntranceOpacity = textEntranceProgress;

  // Cursor animation (6.5-7s = 195-210 frames)
  // Cursor fades in from right, moves to center, and clicks
  const cursorStartFrame = 195;
  const cursorEndFrame = 210;
  const cursorProgress = interpolate(frame, [cursorStartFrame, cursorEndFrame], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor fades in
  const cursorOpacity = interpolate(frame, [cursorStartFrame, cursorStartFrame + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor moves from right to center
  const cursorX = interpolate(cursorProgress, [0, 1], [2200, 960], {
    easing: Easing.out(Easing.cubic),
  });
  const cursorY = interpolate(cursorProgress, [0, 1], [600, 540], {
    easing: Easing.out(Easing.cubic),
  });

  // Click animation at the end (frame 208-210)
  const clickProgress = interpolate(frame, [208, 210], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorScale = 1 - interpolate(clickProgress, [0, 1], [0, 0.2]);
  const clickRingScale = interpolate(clickProgress, [0, 1], [0.5, 2]);
  const clickRingOpacity = interpolate(clickProgress, [0, 0.5, 1], [0, 1, 0]);

  // Explosion to next scene (7-8s = 210-240 frames)
  const explosionProgress = interpolate(frame, [210, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const explosionScale = interpolate(explosionProgress, [0, 1], [1, 5], {
    easing: Easing.out(Easing.exp),
  });
  const explosionOpacity = interpolate(explosionProgress, [0, 0.5], [1, 0], {
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
  const textSlideUp2 = interpolate(textAnimationProgress, [0, 1], [100, 0], {
    easing: Easing.out(Easing.cubic),
  });
  const textOpacity = textAnimationProgress;

  // First scene fade out (150-175 frames): "We introduce You" and "EasyClaw" - EXTENDED
  const firstSceneFadeOut = interpolate(frame, [150, 175], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Second scene fade in (175-195 frames): "The easiest setup for" and "OpenClaw"
  const secondSceneFadeIn = interpolate(frame, [175, 195], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const secondSceneSlideUp = interpolate(secondSceneFadeIn, [0, 1], [50, 0], {
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.bg,
        position: "relative",
      }}
    >
      {/* Grid background with blobs - appears when morph starts and persists after explosion */}
      {showGridBackground && (
        <GridBackground color={COLORS.grid} size="100px" showBlobs />
      )}

      {/* Main content container that explodes */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          transform: `scale(${explosionScale})`,
          opacity: explosionOpacity,
          position: "relative",
        }}
      >

      {/* First scene: "We introduce You" text - fades out after appearing */}
      {showContainer && firstSceneFadeOut > 0 && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: `translate(-50%, calc(-50% + ${textSlideUp2}px))`,
            zIndex: 6,
            opacity: textOpacity * firstSceneFadeOut,
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

      {/* Second scene: "The easiest setup for" text - fades in */}
      {showContainer && secondSceneFadeIn > 0 && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: `translate(-50%, calc(-50% + ${secondSceneSlideUp}px))`,
            zIndex: 6,
            opacity: secondSceneFadeIn,
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
            The easiest setup for
          </div>
        </div>
      )}

      {/* First scene: Glowing border with EasyClaw - fades out */}
      {showContainer && firstSceneFadeOut > 0 && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, calc(-50% + ${textSlideUp2}px))`,
            zIndex: 5,
            opacity: textOpacity * firstSceneFadeOut,
          }}
        >
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
        </div>
      )}

      {/* Second scene: Glowing border with OpenClaw - fades in */}
      {showContainer && secondSceneFadeIn > 0 && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, calc(-50% + ${secondSceneSlideUp}px))`,
            zIndex: 5,
            opacity: secondSceneFadeIn,
          }}
        >
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
            {/* "OpenClaw" text - inside the border */}
            <span
              style={{
                fontSize: 72,
                fontWeight: 600,
                color: COLORS.accentOrange,
                fontFamily: "ClashDisplay, Inter, system-ui, sans-serif",
              }}
            >
              <span>Open</span>
              <span>Claw</span>
            </span>
          </div>
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
          const endFrame = config.delay + (config.duration || 12);

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
            transform: `translateY(${textSlideUp1}px) scale(${screenshotScale})`,
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
            transform: `translateY(${textSlideUp1}px) scale(${screenshotScale})`,
            transformOrigin: "center top",
            opacity: textEntranceOpacity,
          }}
        />
      </div>

      {/* Cursor animation - fades in from right and clicks center */}
      {frame >= cursorStartFrame && (
        <div
          style={{
            position: "absolute",
            left: cursorX,
            top: cursorY,
            transform: `translate(-50%, -50%) scale(${cursorScale})`,
            zIndex: 100,
            opacity: cursorOpacity,
            pointerEvents: "none",
          }}
        >
          {/* Click ring effect */}
          {frame >= 208 && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 60,
                height: 60,
                borderRadius: "50%",
                border: `3px solid ${COLORS.accentOrange}`,
                opacity: clickRingOpacity,
                transform: `translate(-50%, -50%) scale(${clickRingScale})`,
              }}
            />
          )}
          {/* Cursor SVG */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
            }}
          >
            <path
              d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.44 0 .66-.53.35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        </div>
      )}

      </div>
    </div>
  );
};
