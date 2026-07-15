// components/sections/hero/Hero3DScene.tsx

"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import type { Mesh } from "three";

/**
 * Chrome/mirror-like distorted sphere.
 * High metalness + low roughness + Environment map = chrome reflections
 * with white, gray, and black tones (like the reference image).
 */
function ChromeObject() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
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
        <torusKnotGeometry args={[1, 0.3, 256, 64, 2, 3]} />
        <MeshDistortMaterial
          color="#ffffff"
          metalness={1}
          roughness={0}
          distort={0.25}
          speed={1.5}
          envMapIntensity={3}
        />
      </mesh>
    </Float>
  );
}

/**
 * 3D canvas scene.
 * Environment "studio" gives clean white/gray/black reflections (chrome look).
 * Wrapped in Suspense with null fallback to prevent white flash.
 */
export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 25 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        {/* "studio" preset gives neutral white/gray/black reflections — no warm tints */}
        <Environment preset="studio" background={false} />
      </Suspense>

      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

      <ChromeObject />
    </Canvas>
  );
}
