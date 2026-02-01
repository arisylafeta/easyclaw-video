import React from "react";

interface GridBackgroundProps {
  color?: string;
  size?: string;
  className?: string;
  showBlobs?: boolean;
  blobColors?: {
    green?: string;
    red?: string;
  };
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  color = "rgba(249, 115, 22, 0.1)",
  size = "50px",
  className,
  showBlobs = false,
  blobColors = {
    green: "rgba(34, 197, 94, 0.2)",
    red: "rgba(239, 68, 68, 0.2)",
  },
}) => {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${size} ${size}`,
        }}
      />

      {/* Faint greenish-blue blob */}
      {showBlobs && (
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            left: "-200px",
            top: "50%",
            transform: "translateY(-50%)",
            background: `radial-gradient(circle, ${blobColors.green} 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Faint orangeish-red blob */}
      {showBlobs && (
        <div
          style={{
            position: "absolute",
            width: "900px",
            height: "900px",
            right: "-300px",
            top: "30%",
            background: `radial-gradient(circle, ${blobColors.red} 0%, transparent 70%)`,
          }}
        />
      )}
    </div>
  );
};
