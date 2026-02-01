import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing, staticFile, Img } from "remotion";
import { loadFont } from "@remotion/fonts";

const COLORS = {
  bg: "#0a0a0a",
  textWhite: "#ffffff",
  accentOrange: "#f97316",
  grid: "rgba(249, 115, 22, 0.1)",
};

// Load Clash Display font from local file
const clashDisplayFont = loadFont({
  family: "Clash Display",
  url: staticFile("fonts/ClashDisplay-Semibold.otf"),
  weight: "600",
});

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

// SCENE 1: SCREENSHOTS CASCADE (0:05 - 0:09)
// Screenshots drop on top of the CLI chaos from Scene 0
export const Scene1Complaints: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Screenshots drop in (0-4 seconds = 0-120 frames)
  // Then hold briefly before transition
  
  // Exit transition (4-5s = 120-150 frames)
  const exitProgress = interpolate(frame, [120, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const exitScale = interpolate(exitProgress, [0, 1], [1, 0.3], {
    easing: Easing.in(Easing.cubic),
  });
  const exitOpacity = interpolate(exitProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: COLORS.bg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Clash Display', Inter, system-ui, sans-serif",
          transform: `scale(${exitScale})`,
          opacity: exitOpacity,
          position: "relative",
        }}
      >
      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${COLORS.grid} 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.grid} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Screenshots layer - fills entire screen */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
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
          const finalScale = animScale * config.scale;
          
          // Bounce effect
          const bounceY = interpolate(
            dropProgress,
            [0, 0.6, 0.8, 1],
            [-100, 0, -10, 0],
            { easing: Easing.out(Easing.cubic) }
          );

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: config.x,
                top: config.y + bounceY,
                width: screenshot.width,
                height: screenshot.height,
                transform: `rotate(${config.rotation}deg) scale(${finalScale})`,
                opacity: opacity,
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
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
    </div>
    </>
  );
};
