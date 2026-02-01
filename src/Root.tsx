import { Composition, Sequence } from "remotion";
import { Scene1Complaints } from "./scenes/Scene1Complaints";
import { Scene3Features } from "./scenes/Scene3Features";
import { Scene4Channels } from "./scenes/Scene4Channels";
import { Scene5Security } from "./scenes/Scene5Security";
import { Scene6CTA } from "./scenes/Scene6CTA";

// 30 seconds at 30fps = 900 frames
const FPS = 30;

// Scene timing (in frames)
// Scene 1 now includes the morph to button (0-8 seconds)
const SCENE_1_START = 0;
const SCENE_1_DURATION = 8 * FPS;   // 0:00 - 0:08 (240 frames)

const SCENE_3_START = 240;
const SCENE_3_DURATION = 6 * FPS;   // 0:08 - 0:14 (180 frames)

const SCENE_4_START = 420;
const SCENE_4_DURATION = 6 * FPS;   // 0:14 - 0:20 (180 frames)

const SCENE_5_START = 600;
const SCENE_5_DURATION = 6 * FPS;   // 0:20 - 0:26 (180 frames)

const SCENE_6_START = 780;
const SCENE_6_DURATION = 4 * FPS;   // 0:26 - 0:30 (120 frames)

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
      {/* Scene 1: Complaints morphing to button (0:00 - 0:08) */}
      <Sequence from={SCENE_1_START} durationInFrames={SCENE_1_DURATION}>
        <Scene1Complaints />
      </Sequence>
      
      {/* Scene 3: Feature Grid (0:08 - 0:14) */}
      <Sequence from={SCENE_3_START} durationInFrames={SCENE_3_DURATION}>
        <Scene3Features />
      </Sequence>
      
      {/* Scene 4: Channels (0:14 - 0:20) */}
      <Sequence from={SCENE_4_START} durationInFrames={SCENE_4_DURATION}>
        <Scene4Channels />
      </Sequence>
      
      {/* Scene 5: Security (0:20 - 0:26) */}
      <Sequence from={SCENE_5_START} durationInFrames={SCENE_5_DURATION}>
        <Scene5Security />
      </Sequence>
      
      {/* Scene 6: CTA (0:26 - 0:30) */}
      <Sequence from={SCENE_6_START} durationInFrames={SCENE_6_DURATION}>
        <Scene6CTA />
      </Sequence>
    </div>
  );
};

export default RemotionRoot;
