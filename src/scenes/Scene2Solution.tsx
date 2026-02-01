import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const COLORS = {
  bg: "#0a0a0a",
  accentOrange: "#f97316",
};

// Scene 2: Solution button (transition from Scene 1)
// This scene handles the transition after Scene 1's button click
export const Scene2Solution: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Explosion transition (0-1s = 0-30 frames)
  const explosionProgress = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const scale = interpolate(explosionProgress, [0, 1], [1, 3], {
    easing: Easing.out(Easing.exp),
  });
  
  const opacity = interpolate(explosionProgress, [0, 0.7], [1, 0], {
    extrapolateRight: "clamp",
  });
  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
    >
      {/* Placeholder - Scene 1 handles the actual button */}
    </div>
  );
};
