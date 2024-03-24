import { useFrame, extend, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObjects from "./CustomObjects";

extend({ OrbitControls });

export default function Experience() {
  const cubeRef = useRef(null);
  const groupRef = useRef(null);
  // const [camera,setCamera]=
  // OrbitC;
  const three = useThree();
  const { camera, gl } = three;
  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    groupRef.current.rotation.y += delta;
    // console.log(state);
  });
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 8]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <group ref={groupRef}>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.3}
        >
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position-x={-2} scale={1}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
      <CustomObjects />
    </>
  );
}
