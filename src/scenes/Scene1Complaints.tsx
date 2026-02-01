import React from "react";
import { interpolate, useCurrentFrame, staticFile, Img } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
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

// Pre-calculated positions to FULLY cover screen (including bottom 20%)
// Extended to y: 1080 to ensure full coverage
// Random delays for "zest" - images drop at random times (fixed order, no shuffle)
// Delays spread across 0-30 frames for more dramatic timing
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
  // Additional positions to cover bottom area
  { x: 650, y: 850, rotation: 1, scale: 0.85, delay: 14, screenshotIndex: 0 },
  { x: 1100, y: 870, rotation: -3, scale: 0.88, delay: 26, screenshotIndex: 1 },
  { x: 50, y: 920, rotation: 2, scale: 0.87, delay: 5, screenshotIndex: 2 },
  { x: 500, y: 940, rotation: -1, scale: 0.83, delay: 19, screenshotIndex: 3 },
  { x: 950, y: 910, rotation: 3, scale: 0.85, delay: 25, screenshotIndex: 4 },
  { x: 1400, y: 930, rotation: -2, scale: 0.81, delay: 17, screenshotIndex: 5 },
];

export const Scene1Complaints: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Transition starts at frame 90 (3 seconds), ends at 120 (4 seconds)
  const transitionProgress = interpolate(frame, [90, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const containerScale = interpolate(transitionProgress, [0, 1], [1, 0.3]);
  const containerOpacity = interpolate(transitionProgress, [0, 0.8], [1, 0]);
  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: `scale(${containerScale})`,
          opacity: containerOpacity,
          transformOrigin: "center center",
        }}
      >
        {SCREENSHOT_CONFIGS.map((config, i) => {
          // Use fixed screenshot index to prevent flickering
          const screenshot = SCREENSHOTS[config.screenshotIndex];
          const startFrame = config.delay;
          const endFrame = config.delay + 12;
          
          // Simple scale + fade in with "drop" feel
          const progress = interpolate(frame, [startFrame, endFrame], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          
          // Start from above and scale in
          const yOffset = interpolate(progress, [0, 1], [-100, 0]);
          const animScale = interpolate(progress, [0, 1], [0.3, 1]);
          const opacity = progress;
          
          // Apply both animation scale and config scale
          const finalScale = animScale * config.scale;
          
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: config.x,
                top: config.y + yOffset,
                width: screenshot.width,
                height: screenshot.height,
                transform: `rotate(${config.rotation}deg) scale(${finalScale})`,
                opacity,
                boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#1a1a1a",
                transformOrigin: "top left",
                zIndex: i,
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
  );
};
