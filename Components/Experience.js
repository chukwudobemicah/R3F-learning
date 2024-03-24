import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef(null);
  const groupRef = useRef(null);
  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    groupRef.current.rotation.y += delta;
    console.log(delta);
  });
  return (
    <>
      <group ref={groupRef}>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.3}
        >
          <boxGeometry />
          <meshBasicMaterial color="red" wireframe />
        </mesh>
        <mesh position-x={-2} scale={1}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" wireframe />
        </mesh>
      </group>
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
}
