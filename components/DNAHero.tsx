"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Helix() {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  const spheres = [];

  for (let i = 0; i < 50; i++) {
    const y = (i - 25) * 0.22;
    const angle = i * 0.45;
    const x1 = Math.cos(angle) * 1.2;
    const z1 = Math.sin(angle) * 1.2;
    const x2 = Math.cos(angle + Math.PI) * 1.2;
    const z2 = Math.sin(angle + Math.PI) * 1.2;

    spheres.push(
      <group key={i}>
        <mesh position={[x1, y, z1]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={2} />
        </mesh>

        <mesh position={[x2, y, z2]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#6d7cff" emissive="#6d7cff" emissiveIntensity={2} />
        </mesh>
      </group>
    );
  }

  return <group ref={group}>{spheres}</group>;
}

export default function DNAHero() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={3} />
        <Float speed={2} rotationIntensity={1}>
          <Helix />
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
