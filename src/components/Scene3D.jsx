
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function FloatingShape() {
  const knot = useRef(null);
  const wireframe = useRef(null);

  useFrame((state, delta) => {
    if (knot.current) {
      knot.current.rotation.x += delta * 0.25;
      knot.current.rotation.y += delta * 0.4;
    }

    if (wireframe.current) {
      wireframe.current.rotation.y -= delta * 0.15;
      wireframe.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[3, 3, 3]} intensity={35} color="#a855f7" />
      <pointLight position={[-3, -2, 2]} intensity={20} color="#3b82f6" />

      <mesh ref={knot}>
        <torusKnotGeometry args={[0.85, 0.22, 160, 24]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.75}
          roughness={0.2}
          emissive="#581c87"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh ref={wireframe}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      <mesh position={[1.55, 0.9, 0]}>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshBasicMaterial color="#ec4899" />
      </mesh>

      <mesh position={[-1.5, -0.8, 0]}>
        <sphereGeometry args={[0.07, 24, 24]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="scene-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <FloatingShape />
      </Canvas>
    </div>
  );
}
