import { Composition, Sequence } from "remotion";
import { Scene0CLIChaos } from "./scenes/Scene0CLIChaos";
import { Scene1Complaints } from "./scenes/Scene1Complaints";
import { Scene2Solution } from "./scenes/Scene2Solution";
import { Scene3Features } from "./scenes/Scene3Features";
import { Scene4Channels } from "./scenes/Scene4Channels";
import { Scene5Security } from "./scenes/Scene5Security";
import { Scene6CTA } from "./scenes/Scene6CTA";

// 30 seconds at 30fps = 900 frames
const FPS = 30;

// Scene timing (in frames)
// Scene 0: CLI Chaos + Problem text (0:00 - 0:05)
const SCENE_0_START = 0;
const SCENE_0_DURATION = 5 * FPS;   // 0:00 - 0:05 (150 frames)

// Scene 1: Screenshots cascade (0:05 - 0:09)
const SCENE_1_START = 150;
const SCENE_1_DURATION = 4 * FPS;   // 0:05 - 0:09 (120 frames)

// Scene 2: Solution button (0:09 - 0:13)
const SCENE_2_START = 270;
const SCENE_2_DURATION = 4 * FPS;   // 0:09 - 0:13 (120 frames)

// Scene 3: Features (0:13 - 0:19)
const SCENE_3_START = 390;
const SCENE_3_DURATION = 6 * FPS;   // 0:13 - 0:19 (180 frames)

// Scene 5: Channels (0:25 - 0:30)
const SCENE_5_START = 750;
const SCENE_5_DURATION = 5 * FPS;   // 0:25 - 0:30 (150 frames)

// Scene 6: CTA (0:30 - 0:35)
const SCENE_6_START = 900;
const SCENE_6_DURATION = 5 * FPS;   // 0:30 - 0:35 (150 frames)

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

      {/* Scene 1: Screenshots cascade (0:05 - 0:09) */}
      <Sequence from={SCENE_1_START} durationInFrames={SCENE_1_DURATION}>
        <Scene1Complaints />
      </Sequence>

      {/* Scene 2: Solution button (0:09 - 0:13) */}
      <Sequence from={SCENE_2_START} durationInFrames={SCENE_2_DURATION}>
        <Scene2Solution />
      </Sequence>

      {/* Scene 3: Features (0:13 - 0:19) */}
      <Sequence from={SCENE_3_START} durationInFrames={SCENE_3_DURATION}>
        <Scene3Features />
      </Sequence>

      {/* Scene 4: Channels (0:19 - 0:25) */}
      <Sequence from={SCENE_5_START} durationInFrames={SCENE_5_DURATION}>
        <Scene4Channels />
      </Sequence>

      {/* Scene 6: CTA (0:30 - 0:35) */}
      <Sequence from={SCENE_6_START} durationInFrames={SCENE_6_DURATION}>
        <Scene6CTA />
      </Sequence>
    </div>
  );
};

export default RemotionRoot;
