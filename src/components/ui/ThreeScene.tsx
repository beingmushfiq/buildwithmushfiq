import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, AdaptiveDpr, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color={theme === 'dark' ? "#0ea5e9" : "#38bdf8"}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={theme === 'dark' ? 0.2 : 0.5}
          metalness={theme === 'dark' ? 0.8 : 0.2}
          transparent
          opacity={theme === 'dark' ? 1 : 0.6}
        />
      </Sphere>
    </Float>
  );
}

function Particles({ count = 1000 }) {
  const { theme } = useTheme();
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        color={theme === 'dark' ? "#6366f1" : "#818cf8"} 
        transparent 
        opacity={theme === 'dark' ? 0.4 : 0.2} 
        sizeAttenuation 
      />
    </points>
  );
}

export default function ThreeScene() {
  const { theme } = useTheme();
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: true
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.5 : 1.2} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1 : 2} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={theme === 'dark' ? 1 : 2} />
        <AnimatedSphere />
        <Particles count={window.innerWidth < 768 ? 500 : 1000} />
        <AdaptiveDpr pixelated />
        <Preload all />
      </Canvas>
    </div>
  );
}
