import React from "react";

interface GlowingBorderProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  glowOpacity?: number;
  glowSpread?: number;
  pulse?: boolean;
  children?: React.ReactNode;
}

const COLORS = {
  accentOrange: "#f97316",
};

export const GlowingBorder: React.FC<GlowingBorderProps> = ({
  width = 280,
  height = 80,
  borderRadius = 50,
  glowOpacity = 0.6,
  glowSpread = 60,
  pulse = true,
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius,
        border: `3px solid ${COLORS.accentOrange}`,
        boxShadow: pulse
          ? `
            0 0 ${glowSpread}px rgba(249, 115, 22, ${glowOpacity}),
            0 0 ${glowSpread * 2}px rgba(249, 115, 22, ${glowOpacity * 0.5})
          `
          : `
            0 0 ${glowSpread}px rgba(249, 115, 22, ${glowOpacity}),
            0 0 ${glowSpread * 2}px rgba(249, 115, 22, ${glowOpacity * 0.5})
          `,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

// Button-sized glowing border dimensions (matching the button from Scene1)
export const BUTTON_BORDER_CONFIG = {
  width: 280,
  height: 80,
  borderRadius: 50,
  glowOpacity: 0.6,
  glowSpread: 60,
};
