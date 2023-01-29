import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Icosahedron, Float } from "@react-three/drei";

const MainSphere = ({ material }) => {
  const main = useRef();

  useFrame(({ clock, mouse }) => {
    main.current.rotation.z = clock.getElapsedTime();
    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      mouse.x * Math.PI,
      0.1
    );

    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      mouse.y * Math.PI,
      0.1
    );
  });

  return (
    <Float floatingRange={[-0.5, 0.5]}>
      <Icosahedron
        args={[1, 16]}
        ref={main}
        material={material}
        position={[0, 0, 0]}
      />
    </Float>
  );
};

export default MainSphere;
