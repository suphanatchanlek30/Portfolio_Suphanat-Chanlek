// components/sections/hero/Hero3DScene.tsx

"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";
import * as THREE from "three";

/**
 * Metallic torus knot — small enough to never clip container edges during rotation.
 * Light gray/white color scheme.
 */
function MetallicObject() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.6}
      floatingRange={[-0.03, 0.03]}
    >
      <mesh ref={meshRef} scale={0.55}>
        <torusKnotGeometry args={[1, 0.28, 200, 32, 2, 3]} />
        <meshStandardMaterial
          color="#d4d4d4"
          metalness={1}
          roughness={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

/**
 * 3D canvas scene.
 * Camera pulled far back + small object = plenty of room to rotate without hitting edges.
 */
export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 25 }}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.3 }}
      style={{ background: "transparent" }}
    >
      {/* Key light — bright white */}
      <directionalLight position={[4, 5, 5]} intensity={3} color="#ffffff" />

      {/* Fill light — soft light gray */}
      <directionalLight position={[-4, 2, 3]} intensity={1.5} color="#e0e0e0" />

      {/* Rim light — edge highlight */}
      <directionalLight position={[0, 3, -4]} intensity={1.2} color="#ffffff" />

      {/* Bottom fill */}
      <directionalLight position={[0, -5, 2]} intensity={0.6} color="#b0b0b0" />

      {/* Point lights for specular spots */}
      <pointLight position={[3, 2, 4]} intensity={2} color="#ffffff" distance={15} />
      <pointLight position={[-3, -1, 3]} intensity={1.2} color="#e0e0e0" distance={12} />

      {/* Ambient */}
      <ambientLight intensity={0.5} color="#ffffff" />

      <MetallicObject />
    </Canvas>
  );
}
