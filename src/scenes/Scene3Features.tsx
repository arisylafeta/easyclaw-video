import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
  Sequence,
} from "remotion";
import { GridBackground } from "../components/GridBackground";
import {
  Bot,
  Server,
  Smartphone,
  ArrowRight,
  Sparkles,
  Monitor,
  Zap,
  Lock,
  Clock,
} from "lucide-react";

const COLORS = {
  bg: "#0a0a0a",
  cardBg: "#1a1a1a",
  textPrimary: "#ffffff",
  textSecondary: "#a1a1aa",
  accentOrange: "#f97316",
  accentOrangeLight: "#fb923c",
  accentOrangeDark: "#ea580c",
};

// ONBOARDING SCENE - 0 to 270 frames (9 seconds)
const OnboardingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    {
      icon: Bot,
      title: "Create Your Telegram Bot",
      description: "Set up in seconds",
      color: COLORS.accentOrange,
    },
    {
      icon: Server,
      title: "We Provision Your Instance",
      description: "Fully managed infrastructure",
      color: COLORS.accentOrangeLight,
    },
    {
      icon: Smartphone,
      title: "Pair and Go",
      description: "Start using instantly",
      color: COLORS.accentOrangeDark,
    },
  ];

  // Title animation - 50% bigger
  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
    durationInFrames: 20,
  });
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);
  const titleY = interpolate(titleProgress, [0, 1], [45, 0]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GridBackground color="rgba(249, 115, 22, 0.08)" size="90px" />

      {/* Title - 50% bigger */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 90,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: COLORS.textPrimary,
            marginBottom: 24,
          }}
        >
          Simple Onboarding
        </div>
        <div
          style={{
            fontSize: 42,
            color: COLORS.textSecondary,
            fontWeight: 400,
          }}
        >
          Get started in three easy steps
        </div>
      </div>

      {/* Steps Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          zIndex: 10,
        }}
      >
        {steps.map((step, index) => {
          const stepDelay = index * 30 + 45;
          const stepProgress = spring({
            frame: frame - stepDelay,
            fps,
            config: { damping: 12, stiffness: 100 },
            durationInFrames: 25,
          });

          const stepOpacity = interpolate(
            stepProgress,
            [0, 1],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const stepScale = interpolate(stepProgress, [0, 1], [0.5, 1]);
          const stepY = interpolate(stepProgress, [0, 1], [75, 0]);

          const Icon = step.icon;

          return (
            <React.Fragment key={index}>
              {/* Step Card - 50% bigger */}
              <div
                style={{
                  width: 480,
                  height: 420,
                  backgroundColor: COLORS.cardBg,
                  borderRadius: 36,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 48,
                  opacity: stepOpacity,
                  transform: `translateY(${stepY}px) scale(${stepScale})`,
                  boxShadow: `0 0 75px ${step.color}30, 0 6px 30px rgba(0,0,0,0.5)`,
                  border: `3px solid ${step.color}40`,
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 30,
                    backgroundColor: `${step.color}20`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 36,
                  }}
                >
                  <Icon size={60} color={step.color} strokeWidth={1.5} />
                </div>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: COLORS.textPrimary,
                    textAlign: "center",
                    marginBottom: 18,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: 27,
                    color: COLORS.textSecondary,
                    textAlign: "center",
                  }}
                >
                  {step.description}
                </div>
              </div>

              {/* Arrow between steps - 50% bigger */}
              {index < steps.length - 1 && (
                <ArrowBetween
                  frame={frame}
                  fps={fps}
                  delay={stepDelay + 25}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Sparkle decorations - repositioned for larger layout */}
      <SparkleDecoration frame={frame} fps={fps} delay={180} x={80} y={120} />
      <SparkleDecoration frame={frame} fps={fps} delay={195} x={1180} y={180} />
      <SparkleDecoration frame={frame} fps={fps} delay={210} x={120} y={550} />
      <SparkleDecoration frame={frame} fps={fps} delay={225} x={1140} y={520} />
    </div>
  );
};

// Arrow component between steps - 50% bigger
const ArrowBetween: React.FC<{
  frame: number;
  fps: number;
  delay: number;
}> = ({ frame, fps, delay }) => {
  const arrowProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 100 },
    durationInFrames: 15,
  });

  const arrowOpacity = interpolate(
    arrowProgress,
    [0, 1],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const arrowX = interpolate(arrowProgress, [0, 1], [-30, 0]);

  return (
    <div
      style={{
        opacity: arrowOpacity,
        transform: `translateX(${arrowX}px)`,
        color: COLORS.accentOrange,
      }}
    >
      <ArrowRight size={60} strokeWidth={2} />
    </div>
  );
};

// Sparkle decoration component
const SparkleDecoration: React.FC<{
  frame: number;
  fps: number;
  delay: number;
  x: number;
  y: number;
}> = ({ frame, fps, delay, x, y }) => {
  const sparkleProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 80 },
    durationInFrames: 30,
  });

  const sparkleOpacity = interpolate(
    sparkleProgress,
    [0, 0.5, 1],
    [0, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const sparkleScale = interpolate(sparkleProgress, [0, 0.5, 1], [0, 1.2, 0]);
  const sparkleRotate = interpolate(sparkleProgress, [0, 1], [0, 180]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        opacity: sparkleOpacity,
        transform: `scale(${sparkleScale}) rotate(${sparkleRotate}deg)`,
        color: COLORS.accentOrange,
        pointerEvents: "none",
      }}
    >
      <Sparkles size={32} />
    </div>
  );
};

// FEATURES SCENE - 270 to 540 frames (9 seconds)
const FeaturesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const features = [
    {
      icon: Monitor,
      title: "Browser-based Desktop",
      description: "Access from anywhere",
      color: "#f97316",
    },
    {
      icon: Zap,
      title: "Full OpenClaw Power",
      description: "Complete AI capabilities",
      color: "#fb923c",
    },
    {
      icon: Lock,
      title: "Your Keys, Your Data",
      description: "Maximum security & privacy",
      color: "#f97316",
    },
    {
      icon: Clock,
      title: "Always On",
      description: "24/7 availability",
      color: "#ea580c",
    },
  ];

  // Title animation - 50% bigger
  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
    durationInFrames: 20,
  });
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);
  const titleY = interpolate(titleProgress, [0, 1], [45, 0]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GridBackground color="rgba(249, 115, 22, 0.08)" size="90px" />

      {/* Title - 50% bigger */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 120,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: COLORS.textPrimary,
            marginBottom: 24,
          }}
        >
          Powerful Features
        </div>
        <div
          style={{
            fontSize: 42,
            color: COLORS.textSecondary,
            fontWeight: 400,
          }}
        >
          Everything you need to succeed
        </div>
      </div>

      {/* Features Grid - 50% bigger */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 60,
          zIndex: 10,
        }}
      >
        {features.map((feature, index) => {
          const featureDelay = index * 22 + 37;
          const featureProgress = spring({
            frame: frame - featureDelay,
            fps,
            config: { damping: 12, stiffness: 100 },
            durationInFrames: 25,
          });

          const featureOpacity = interpolate(
            featureProgress,
            [0, 1],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const featureScale = interpolate(featureProgress, [0, 1], [0.7, 1]);
          const featureRotate = interpolate(
            featureProgress,
            [0, 1],
            [10, 0]
          );

          // Floating animation
          const floatY = Math.sin((frame + index * 50) * 0.03) * 12;

          const Icon = feature.icon;

          return (
            <div
              key={index}
              style={{
                width: 570,
                height: 330,
                backgroundColor: COLORS.cardBg,
                borderRadius: 36,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 48,
                gap: 36,
                opacity: featureOpacity,
                transform: `translateY(${floatY}px) scale(${featureScale}) rotateX(${featureRotate}deg)`,
                boxShadow: `0 0 60px ${feature.color}25, 0 6px 30px rgba(0,0,0,0.5)`,
                border: `3px solid ${feature.color}35`,
              }}
            >
              <div
                style={{
                  width: 135,
                  height: 135,
                  borderRadius: 36,
                  backgroundColor: `${feature.color}15`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={66} color={feature.color} strokeWidth={1.5} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 39,
                    fontWeight: 700,
                    color: COLORS.textPrimary,
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: 27,
                    color: COLORS.textSecondary,
                  }}
                >
                  {feature.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Glow effect behind features - 50% bigger */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentOrange}15 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </div>
  );
};

// Main Scene Component with fade transitions
export const Scene3Features: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scene1Duration = 270; // 9 seconds
  const scene2Duration = 270; // 9 seconds
  const fadeDuration = 45; // 1.5 second fade

  // Fade out scene 1
  const scene1FadeOut = interpolate(
    frame,
    [scene1Duration - fadeDuration, scene1Duration],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Fade in scene 2
  const scene2FadeIn = interpolate(
    frame,
    [scene1Duration - fadeDuration / 2, scene1Duration + fadeDuration / 2],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scene 1: Onboarding */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: frame < scene1Duration + fadeDuration / 2 ? Math.max(0, scene1FadeOut) : 0,
          pointerEvents: "none",
        }}
      >
        <OnboardingScene />
      </div>

      {/* Scene 2: Features */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: scene2FadeIn,
          pointerEvents: "none",
        }}
      >
        <FeaturesScene />
      </div>
    </div>
  );
};
