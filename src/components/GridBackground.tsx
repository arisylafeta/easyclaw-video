import React from "react";

interface GridBackgroundProps {
  color?: string;
  size?: string;
  className?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  color = "rgba(249, 115, 22, 0.1)",
  size = "50px",
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(90deg, ${color} 1px, transparent 1px)
        `,
        backgroundSize: `${size} ${size}`,
        pointerEvents: "none",
      }}
    />
  );
};
