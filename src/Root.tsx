import { Composition, Sequence } from "remotion";
import { Scene0CLIChaos } from "./scenes/Scene0CLIChaos";
import { Scene1Complaints } from "./scenes/Scene1Complaints";
import { Scene3Features } from "./scenes/Scene3Features";
import { Scene4Channels } from "./scenes/Scene4Channels";
import { Scene6CTA } from "./scenes/Scene6CTA";

// 30 seconds at 30fps = 900 frames
const FPS = 30;

// Scene timing (in frames)
// Scene 0: CLI Chaos + Problem text (0:00 - 0:05)
const SCENE_0_START = 0;
const SCENE_0_DURATION = 5 * FPS;   // 0:00 - 0:05 (150 frames)

// Scene 1: Screenshots cascade + button morph + click (0:05 - 0:15)
// Merged Scene1 and Scene2 - now handles the full transition
const SCENE_1_START = 150;
const SCENE_1_DURATION = 10 * FPS;   // 0:05 - 0:15 (300 frames)

// Scene 3: Features (0:15 - 0:21)
const SCENE_3_START = 450;
const SCENE_3_DURATION = 6 * FPS;   // 0:15 - 0:21 (180 frames)

// Scene 4: Channels (0:21 - 0:27)
const SCENE_4_START = 630;
const SCENE_4_DURATION = 6 * FPS;   // 0:21 - 0:27 (180 frames)

// Scene 6: CTA (0:27 - 0:32)
const SCENE_6_START = 810;
const SCENE_6_DURATION = 5 * FPS;   // 0:27 - 0:32 (150 frames)

const TOTAL_FRAMES = SCENE_6_START + SCENE_6_DURATION;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="EasyClawDemo"
        component={EasyClawDemo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};

// Main video component
const EasyClawDemo: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#0a0a0a" }}>
      {/* Scene 0: CLI Chaos + Problem text (0:00 - 0:05) */}
      <Sequence from={SCENE_0_START} durationInFrames={SCENE_0_DURATION}>
        <Scene0CLIChaos />
      </Sequence>

      {/* Scene 1: Screenshots cascade + button morph + click (0:05 - 0:15) */}
      <Sequence from={SCENE_1_START} durationInFrames={SCENE_1_DURATION}>
        <Scene1Complaints />
      </Sequence>

      {/* Scene 3: Features (0:15 - 0:21) - with glowing border */}
      <Sequence from={SCENE_3_START} durationInFrames={SCENE_3_DURATION}>
        <Scene3Features />
      </Sequence>

      {/* Scene 4: Channels (0:21 - 0:27) - with glowing border */}
      <Sequence from={SCENE_4_START} durationInFrames={SCENE_4_DURATION}>
        <Scene4Channels />
      </Sequence>

      {/* Scene 6: CTA (0:27 - 0:32) - with glowing border */}
      <Sequence from={SCENE_6_START} durationInFrames={SCENE_6_DURATION}>
        <Scene6CTA />
      </Sequence>
    </div>
  );
};

export default RemotionRoot;
