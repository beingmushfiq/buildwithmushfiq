import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Icosahedron, TorusKnot, Box, Octahedron } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

interface SkillSphereProps {
  type: string;
  color: string;
  isHovered?: boolean;
}

function Shape({ type, color, isHovered = false }: SkillSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [localHovered, setLocalHovered] = React.useState(false);
  const { theme } = useTheme();

  const activeHover = isHovered || localHovered;

  useFrame((state) => {
    if (!meshRef.current) return;
    const speed = activeHover ? 0.08 : 0.01;
    meshRef.current.rotation.x += speed;
    meshRef.current.rotation.y += speed;
    
    // Smoothly scale on hover
    const targetScale = activeHover ? 1.3 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
  });

  const materialProps = {
    color: color,
    roughness: theme === 'dark' ? 0.1 : 0.3,
    metalness: theme === 'dark' ? 0.9 : 0.2,
    transparent: true,
    opacity: theme === 'dark' ? (activeHover ? 1 : 0.9) : (activeHover ? 0.9 : 0.7),
    emissive: activeHover ? color : new THREE.Color(0x000000),
    emissiveIntensity: activeHover ? 0.5 : 0,
  };

  const renderShape = () => {
    const commonProps = {
      onPointerOver: () => setLocalHovered(true),
      onPointerOut: () => setLocalHovered(false),
    };

    switch (type.toLowerCase()) {
      case 'core development':
        return (
          <Icosahedron args={[1, 3]} {...commonProps}>
            <MeshDistortMaterial {...materialProps} distort={0.3} speed={2} />
          </Icosahedron>
        );
      case 'frontend':
        return (
          <TorusKnot args={[0.8, 0.3, 64, 12]} {...commonProps}>
            <MeshWobbleMaterial {...materialProps} factor={0.4} speed={2} />
          </TorusKnot>
        );
      case 'backend':
        return (
          <Box args={[1.2, 1.2, 1.2]} {...commonProps}>
            <MeshDistortMaterial {...materialProps} distort={0.2} speed={1.5} />
          </Box>
        );
      case 'ai & automation':
        return (
          <Octahedron args={[1, 0]} {...commonProps}>
            <MeshWobbleMaterial {...materialProps} factor={0.6} speed={3} />
          </Octahedron>
        );
      default:
        return (
          <Icosahedron args={[1, 3]} {...commonProps}>
            <MeshDistortMaterial {...materialProps} distort={0.3} speed={2} />
          </Icosahedron>
        );
    }
  };

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      {renderShape()}
    </Float>
  );
}

export default function SkillSphere({ type, color = "#0ea5e9", isHovered = false }: SkillSphereProps) {
  const { theme } = useTheme();
  return (
    <div className="h-32 w-full mb-4">
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ antialias: false, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 3] }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.5 : 1.5} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1 : 2} />
        <Shape type={type} color={color} isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
