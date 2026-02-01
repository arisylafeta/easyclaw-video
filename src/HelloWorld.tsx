import { useCurrentFrame, useVideoConfig } from "remotion";

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: 80,
        fontFamily: "sans-serif",
        fontWeight: "bold",
      }}
    >
      EasyClaw.ai
    </div>
  );
};
