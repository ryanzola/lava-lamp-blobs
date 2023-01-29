import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";

import MainSphere from "./MainSphere";

const Instances = ({ material }) => {
  const [sphereRefs] = useState(() => []);

  const initialPositions = [
    [-4, 20, -5],
    [-10, 12, -2],
    [-11, -12, -8],
    [-16, -6, -10],
    [12 - 2, -3],
    [13, 4, -5],
    [14, -2, -8],
    [8, 10, -6],
    [-1, -8, -4],
  ];

  // small sphere movement
  useFrame(() => {
    // animate each sphere in the array
    sphereRefs.forEach((el) => {
      el.position.y += 0.01;
      // if el position is greater than 19, reset to -19
      if (el.position.y > 19) el.position.y -= 30 + Math.random() * 0.5 + 0.5;

      el.rotation.x += 0.005;
      el.rotation.y += 0.005;
      el.rotation.z += 0.005;
    });
  });

  return (
    <>
      <MainSphere material={material} />

      {initialPositions.map((pos, i) => (
        <Icosahedron
          args={[1, 16]}
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          ref={(ref) => (sphereRefs[i] = ref)}
        />
      ))}
    </>
  );
};

export default Instances;
