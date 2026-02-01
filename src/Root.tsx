import { Composition, Sequence } from "remotion";
import { Shot1Hook } from "./Shots1-2";
import { Shot2Problem } from "./Shots1-2";
import { Shot3Solution } from "./Shots3-5";
import { Shot4Capabilities } from "./Shots3-5";
import { Shot5Wall } from "./Shots3-5";
import { Shot6Channels } from "./Shots6-8";
import { Shot7Security } from "./Shots6-8";
import { Shot8CTA } from "./Shots6-8";

// 90 seconds at 30fps = 2700 frames
const FPS = 30;

// Shot timing (in frames)
const SHOT_1_START = 0;
const SHOT_1_DURATION = 8 * FPS;   // 0:00 - 0:08

const SHOT_2_START = SHOT_1_START + SHOT_1_DURATION;
const SHOT_2_DURATION = 10 * FPS;  // 0:08 - 0:18

const SHOT_3_START = SHOT_2_START + SHOT_2_DURATION;
const SHOT_3_DURATION = 10 * FPS;  // 0:18 - 0:28

const SHOT_4_START = SHOT_3_START + SHOT_3_DURATION;
const SHOT_4_DURATION = 20 * FPS;  // 0:28 - 0:48

const SHOT_5_START = SHOT_4_START + SHOT_4_DURATION;
const SHOT_5_DURATION = 10 * FPS;  // 0:48 - 0:58

const SHOT_6_START = SHOT_5_START + SHOT_5_DURATION;
const SHOT_6_DURATION = 10 * FPS;  // 0:58 - 1:08

const SHOT_7_START = SHOT_6_START + SHOT_6_DURATION;
const SHOT_7_DURATION = 10 * FPS;  // 1:08 - 1:18

const SHOT_8_START = SHOT_7_START + SHOT_7_DURATION;
const SHOT_8_DURATION = 12 * FPS;  // 1:18 - 1:30

const TOTAL_FRAMES = SHOT_8_START + SHOT_8_DURATION;

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
      {/* Shot 1: Hook (0:00 - 0:08) */}
      <Sequence from={SHOT_1_START} durationInFrames={SHOT_1_DURATION}>
        <Shot1Hook />
      </Sequence>
      
      {/* Shot 2: Problem (0:08 - 0:18) */}
      <Sequence from={SHOT_2_START} durationInFrames={SHOT_2_DURATION}>
        <Shot2Problem />
      </Sequence>
      
      {/* Shot 3: Solution (0:18 - 0:28) */}
      <Sequence from={SHOT_3_START} durationInFrames={SHOT_3_DURATION}>
        <Shot3Solution />
      </Sequence>
      
      {/* Shot 4: Capabilities (0:28 - 0:48) */}
      <Sequence from={SHOT_4_START} durationInFrames={SHOT_4_DURATION}>
        <Shot4Capabilities />
      </Sequence>
      
      {/* Shot 5: Wall (0:48 - 0:58) */}
      <Sequence from={SHOT_5_START} durationInFrames={SHOT_5_DURATION}>
        <Shot5Wall />
      </Sequence>
      
      {/* Shot 6: Channels (0:58 - 1:08) */}
      <Sequence from={SHOT_6_START} durationInFrames={SHOT_6_DURATION}>
        <Shot6Channels />
      </Sequence>
      
      {/* Shot 7: Security (1:08 - 1:18) */}
      <Sequence from={SHOT_7_START} durationInFrames={SHOT_7_DURATION}>
        <Shot7Security />
      </Sequence>
      
      {/* Shot 8: CTA (1:18 - 1:30) */}
      <Sequence from={SHOT_8_START} durationInFrames={SHOT_8_DURATION}>
        <Shot8CTA />
      </Sequence>
    </div>
  );
};

export default RemotionRoot;
