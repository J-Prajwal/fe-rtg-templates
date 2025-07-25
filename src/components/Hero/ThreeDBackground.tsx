import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Particle {
  position: [number, number, number];
  velocity: [number, number, number];
  size: number;
}

const FloatingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;

      temp.push({
        position: [x, y, z],
        velocity: [
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
        ],
        size: Math.random() * 0.1 + 0.05,
      });
    }
    return temp;
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(particles.length * 3);
    particles.forEach((particle, i) => {
      pos[i * 3] = particle.position[0];
      pos[i * 3 + 1] = particle.position[1];
      pos[i * 3 + 2] = particle.position[2];
    });
    return pos;
  }, [particles]);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < particles.length; i++) {
        const idx = i * 3;

        // Update positions based on velocity
        positions[idx] += particles[i].velocity[0];
        positions[idx + 1] += particles[i].velocity[1];
        positions[idx + 2] += particles[i].velocity[2];

        // Wrap around boundaries
        if (Math.abs(positions[idx]) > 10) positions[idx] *= -0.9;
        if (Math.abs(positions[idx + 1]) > 10) positions[idx + 1] *= -0.9;
        if (Math.abs(positions[idx + 2]) > 10) positions[idx + 2] *= -0.9;
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        transparent
        color="#4f46e5"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const GeometricShapes = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <octahedronGeometry args={[2, 0]} />
      <meshBasicMaterial color="#8b5cf6" wireframe opacity={0.3} transparent />
    </mesh>
  );
};

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingParticles />
        <GeometricShapes />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
