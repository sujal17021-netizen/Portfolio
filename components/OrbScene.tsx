"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const orb = useRef<Mesh>(null);
  const wire = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (orb.current) {
      orb.current.rotation.y += delta * 0.12;
      orb.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
    }
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.08;
      wire.current.rotation.z += delta * 0.04;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.35}>
      <mesh ref={orb} scale={1.28}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#aaff32"
          emissive="#4e8d10"
          emissiveIntensity={0.55}
          roughness={0.23}
          metalness={0.68}
          distort={0.24}
          speed={1.6}
        />
      </mesh>
      <mesh ref={wire} scale={1.48}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#d9ffad" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh scale={1.7} rotation={[0.5, 0.2, 0.2]}>
        <torusGeometry args={[1.25, 0.006, 8, 160]} />
        <meshBasicMaterial color="#b7ff3c" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[540px]" aria-label="Animated 3D neon green AI orb">
      <div className="orb-fallback absolute inset-0 rounded-full opacity-60 blur-3xl" />
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 4.8], fov: 42 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.75} />
        <pointLight position={[4, 3, 4]} intensity={25} color="#c5ff72" />
        <pointLight position={[-4, -2, 1]} intensity={8} color="#4f8b20" />
        <Suspense fallback={null}>
          <Orb />
          <Sparkles count={95} scale={4.4} size={2.1} speed={0.25} color="#caff8a" opacity={0.7} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.45} />
      </Canvas>
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neon/20 bg-black/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[.22em] text-neon/80 backdrop-blur">
        Neural core // interactive
      </div>
    </div>
  );
}
