import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random';

const Stars = (props: any) => {
  const starsRef = useRef<any>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  useFrame((_, delta) => {
    starsRef.current.rotation.y -= delta / 10;
    starsRef.current.rotation.x -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={starsRef}
        positions={sphere as Float32Array<ArrayBufferLike>}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          size={0.002}
          transparent
          color={'#f272c8'}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto inset-0 z-[-1] absolute">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
