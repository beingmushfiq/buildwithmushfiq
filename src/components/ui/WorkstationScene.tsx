import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function Laptop() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.1, 1.4]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Screen */}
      <group position={[0, 0.05, -0.65]} rotation={[-Math.PI / 2.5, 0, 0]}>
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[2, 1.4, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Screen Content Glow */}
        <mesh position={[0, 0.7, 0.03]}>
          <planeGeometry args={[1.9, 1.3]} />
          <meshBasicMaterial color="#0ea5e9" transparent opacity={0.1} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingBot() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 + 1.5;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <MeshDistortMaterial color="#0ea5e9" speed={2} distort={0.4} radius={1} />
        </mesh>
        {/* Eye */}
        <mesh position={[0, 0, 0.35]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh position={[0, 0, 0.4]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="black" />
        </mesh>
      </Float>
    </group>
  );
}

export default function WorkstationScene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
        
        <PresentationControls
          global
          snap
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 6, Math.PI / 6]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <group position={[0, -0.5, 0]}>
            <Laptop />
            <FloatingBot />
          </group>
        </PresentationControls>

        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
