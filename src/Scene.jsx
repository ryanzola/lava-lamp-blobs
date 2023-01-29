import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  useTexture,
  useCubeTexture,
} from "@react-three/drei";

import Instances from "./Instances";

const Scene = () => {
  const bumpMap = useTexture("/bump.jpg");
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/cube/" }
  );

  const [material, setMaterial] = useState();
  const [color, setColor] = useState("#0101FF");

  useFrame(({ mouse }) => {
    // normalize mouse between 0 and 1
    const normMouseX = mouse.x * 0.5 + 0.5;
    const normMouseY = mouse.y * 0.5 + 0.5;
    // set hsl color to mouse position
    setColor(`hsl(${normMouseX * 360}, 100%, ${normMouseY * 100}%)`);
  });

  return (
    <>
      <MeshDistortMaterial
        ref={setMaterial}
        envMap={envMap}
        bumpMap={bumpMap}
        color={color}
        roughness={0.1}
        metalness={0.1}
        bumpScale={0.002}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1}
        distort={0.5}
      />

      {material && <Instances material={material} />}
    </>
  );
};

export default Scene;
