import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Environment, Grid, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing JSX intrinsic elements in TypeScript
// Augmenting both 'react' module (for React 18+ types) and global JSX
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      instancedMesh: any;
      octahedronGeometry: any;
      meshStandardMaterial: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      color: any;
      fog: any;
      ambientLight: any;
      pointLight: any;
      [elemName: string]: any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      instancedMesh: any;
      octahedronGeometry: any;
      meshStandardMaterial: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      color: any;
      fog: any;
      ambientLight: any;
      pointLight: any;
      [elemName: string]: any;
    }
  }
}

const CodeSymbol = ({ text, position, color, speed, opacity }: { text: string, position: [number, number, number], color: string, speed: number, opacity: number }) => {
  return (
    <Float 
      speed={speed} 
      rotationIntensity={0.5} 
      floatIntensity={0.5} 
      floatingRange={[-0.2, 0.2]}
    >
      <Text
        fontSize={Math.random() * 0.4 + 0.3}
        color={color}
        position={position}
        anchorX="center"
        anchorY="middle"
        fillOpacity={opacity}
        characters="abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{};:<>,./?"
      >
        {text}
      </Text>
    </Float>
  );
};

const CodeCloud = () => {
  const symbols = ['{ }', '< >', '</>', '0', '1', '&&', '||', 'const', 'let', 'fn', '=>', ';', '[]', '()', 'return', 'import', 'export', 'npm', 'sudo', 'git', 'try', 'catch'];
  const colors = ['#818cf8', '#c084fc', '#2dd4bf', '#38bdf8', '#f472b6', '#ffffff'];
  
  const items = useMemo(() => {
    return new Array(50).fill(0).map((_, i) => ({
      text: symbols[Math.floor(Math.random() * symbols.length)],
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() + 0.2,
      opacity: (Math.random() * 0.3 + 0.2) // Reduced opacity for better text readability
    }));
  }, []);

  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
        // Continuous slow rotation
        groupRef.current.rotation.y += 0.002;
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((item, i) => (
        <CodeSymbol key={i} {...item} />
      ))}
    </group>
  );
};

const DataBlocks = () => {
  const count = 40;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const tempObject = useMemo(() => new THREE.Object3D(), []);
  
  const data = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
        pos: new THREE.Vector3(
            (Math.random() - 0.5) * 30, 
            (Math.random() - 0.5) * 30, 
            (Math.random() - 0.5) * 20 - 5
        ),
        scale: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.5 + 0.2,
        offset: Math.random() * Math.PI
    }));
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
        const time = state.clock.getElapsedTime();
        data.forEach((d, i) => {
            const { pos, scale, speed, offset } = d;
            // Float effect with pulse
            tempObject.position.set(
                pos.x, 
                pos.y + Math.sin(time * speed + offset) * 2, 
                pos.z
            );
            tempObject.rotation.x = time * speed;
            tempObject.rotation.y = time * speed * 0.5;
            
            // Pulsing scale
            const pulse = 1 + Math.sin(time * 3 + offset) * 0.2;
            tempObject.scale.setScalar(scale * pulse);
            
            tempObject.updateMatrix();
            meshRef.current!.setMatrixAt(i, tempObject.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.5]} />
      <meshStandardMaterial 
        color="#4f46e5" 
        wireframe 
        transparent 
        opacity={0.3} 
        toneMapped={false}
        emissive="#4f46e5"
        emissiveIntensity={0.5}
      />
    </instancedMesh>
  );
};

const MovingGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      // Infinite scroll effect
      gridRef.current.position.z = (state.clock.elapsedTime * 1.5) % 3;
    }
  });

  return (
    <group ref={gridRef} rotation={[0, 0, 0]} position={[0, -6, 0]}>
       <Grid
         renderOrder={-1}
         position={[0, 0, 0]}
         infiniteGrid
         cellSize={0.8}
         sectionSize={4}
         fadeDistance={30}
         sectionColor="#6366f1"
         cellColor="#38bdf8"
         sectionThickness={1.5}
         cellThickness={1}
       />
    </group>
  );
}

const DigitalRain = () => {
   const count = 1000; // More particles
   const positions = useMemo(() => {
       const pos = new Float32Array(count * 3);
       const speeds = new Float32Array(count);
       for(let i=0; i<count; i++) {
           pos[i*3] = (Math.random() - 0.5) * 50; // x
           pos[i*3+1] = (Math.random() - 0.5) * 50; // y
           pos[i*3+2] = (Math.random() - 0.5) * 30 - 10; // z
           speeds[i] = Math.random() * 0.2 + 0.05;
       }
       return { pos, speeds };
   }, []);

   const pointsRef = useRef<THREE.Points>(null);
   const geometryRef = useRef<THREE.BufferGeometry>(null);

   useFrame(() => {
       if (geometryRef.current) {
           const posAttribute = geometryRef.current.attributes.position;
           for(let i=0; i<count; i++) {
               let y = posAttribute.getY(i);
               y -= positions.speeds[i];
               if (y < -25) {
                   y = 25;
               }
               posAttribute.setY(i, y);
           }
           posAttribute.needsUpdate = true;
       }
   });

   return (
       <points ref={pointsRef}>
           <bufferGeometry ref={geometryRef}>
               <bufferAttribute 
                   attach="attributes-position" 
                   count={count} 
                   array={positions.pos} 
                   itemSize={3} 
               />
           </bufferGeometry>
           <pointsMaterial 
               size={0.1} // Bigger particles
               color="#38bdf8" 
               transparent 
               opacity={0.6} 
               sizeAttenuation={true}
           />
       </points>
   )
}

const CameraRig = () => {
    useFrame((state) => {
        // Gentle Parallax Camera Movement
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 1, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 1, 0.05);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

export const Scene = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        {/* Background Color */}
        <color attach="background" args={['#030712']} />
        
        {/* Relaxed Fog to ensure visibility */}
        <fog attach="fog" args={['#030712', 15, 60]} />
        
        {/* Brighter Dynamic Lighting */}
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#818cf8" />
        <pointLight position={[-10, -5, -10]} intensity={2} color="#c084fc" />
        <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
        
        {/* Components */}
        <CameraRig />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <MovingGrid />
        <CodeCloud />
        <DataBlocks />
        <DigitalRain />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};