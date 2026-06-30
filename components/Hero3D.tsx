"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Helix() {
  const group = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 120; i += 1) {
      const t = i / 20;
      const x = Math.cos(t) * 1.4;
      const y = (i / 60 - 1) * 2.3;
      const z = Math.sin(t) * 1.4;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.4;
      group.current.rotation.x = Math.sin(delta * 0.8) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.6}>
        <Line points={points} color="#7dd3fc" transparent opacity={0.9} lineWidth={1.6} />
        <Line points={points.map((p) => new THREE.Vector3(-p.x, p.y, -p.z))} color="#60a5fa" transparent opacity={0.6} lineWidth={1.2} />
        <mesh>
          <torusKnotGeometry args={[1.2, 0.16, 200, 24]} />
          <meshPhysicalMaterial color="#93c5fd" transparent opacity={0.18} roughness={0.2} clearcoat={1} clearcoatRoughness={0.1} />
        </mesh>
        <mesh scale={1.15}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshBasicMaterial color="#f8fafc" />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-[380px] w-full">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 7]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[4, 4, 6]} intensity={1.3} color="#7dd3fc" />
        <pointLight position={[-4, -2, 4]} intensity={0.8} color="#60a5fa" />
        <Sparkles count={60} size={3} scale={[6, 6, 6]} speed={0.4} color="#7dd3fc" />
        <Helix />
      </Canvas>
    </div>
  );
}
