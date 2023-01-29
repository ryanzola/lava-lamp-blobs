import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import Scene from "./Scene";

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      gl={{
        powerPreference: "high-performance",
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false,
      }}
    >
      <color attach="background" args={["#013"]} />
      <fog attach="fog" color="#161616" near={8} far={30} />

      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <EffectComposer multisampling={0} disableNormalPass={true}>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={4}
          height={480}
        />

        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />

        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
